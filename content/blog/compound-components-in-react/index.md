---
title: "How to write better React with Compound Components?"
authors: ["Bartosz Łaniewski"]
keywords: ["React", "Architecture"]
language: en
dateCreated: 2024-04-07 12:00:00 +0100
dateUpdated: 2024-04-22 15:00:00 +0100
datePublished: 2024-04-22 15:00:00 +0100
---

When building React applications, we often create components meant to be used together – think of a `Select` and an `Option` or a `Tab` and a `TabContent`. Those components have a clear relationship — they share the same design language, logic, and state. They are bound together.

Let’s examine the problem with “traditional” component APIs and see how to fix them using Compound Components.

## Naive (traditional) approach

Building shared components is more challenging than creating the application itself. They will be used by all developers in your company across multiple modules you’ve probably never seen. If the component API sucks, you’ll have a hard time refactoring it. How React component APIs are designed matters in the long term. Let’s see a few examples.

### The Extensibility problem

I bet you’ve probably seen a `Select` component with the following API:

```jsx
<Select
  name="field"
  options={[
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
  ]}
  value={value}
  onChange={setValue}
/>
```

It takes a `name` and a list of available `options` and renders a beautiful dropdown. Pretty neat!

Now, imagine you have to implement a language selection and want to show a flag near each language. We can modify the source code of the `Select` component to accept an optional `image` property and render it conditionally:

```jsx {4-5}
<Select
  name="language"
  options={[
    { value: "pl", label: "Polish", image: "pl.png" },
    { value: "fr", label: "French", image: "fr.png" },
  ]}
  value={value}
  onChange={setValue}
/>
```

Times fly, and so do design trends. There’s a new language to be added. Designers provided an SVG flag (as it scales better on retina displays) and want you to show a “New” badge near the value. We can add some new fields:

```jsx {4}
<Select
  name="language"
  options={[
    { value: "it", label: "Italian", icon: <ItalianFlag />, badge: <Badge>New</Badge> },
    { value: "pl", label: "Polish", image: "pl.png" },
    { value: "fr", label: "French", image: "fr.png" },
  ]}
  value={value}
  onChange={setValue}
/>
```

...but you see where this is going, right? Instead of leveraging composition, we have to modify the source code of the `Select` component each time a field needs stylistic customization.

What if, instead of adding more and more properties, we could use the parent-child relationship? Think of:

```jsx
<Select name="language" value={value} onChange={setValue}>
  <Select.Option value="it">
    <ItalianFlag />
    <Select.OptionLabel>Italian <Badge>New</Badge></Select.OptionLabel>
  </Select.Option>

  <Select.Option value="pl">
    <Image src="pl.png" />
    <Select.OptionLabel>Polish</Select.OptionLabel>
  </Select.Option>

  <Select.Option value="fr">
    <Image src="fr.png" />
    <Select.OptionLabel>French</Select.OptionLabel>
  </Select.Option>
</Select>
```

`Select` does not need to know anything about its children; it will render whatever we give it. We can render any component inside the `Select` without modifying the source code!

```jsx
<Select name="language" value={value} onChange={setValue}>
  <Heading>Europe</Heading>
  <Select.Option value="...">...</Select.Option>
  <Select.Option value="...">...</Select.Option>

  <Divider />

  <Heading>Asia</Heading>
  <Select.Option value="...">...</Select.Option>
  <Select.Option value="...">...</Select.Option>
</Select>
```

That approach makes the component more customizable and thus easier to maintain in the long term. In fact, with that API, we can render whatever and whenever we want. The `Select` component delegates this responsibility to you. This is called _Inversion of Control_.

### The State Management problem

Let's go a little bit further. Everybody knows state management is hard, and you should not do it unless you have to. What if instead of handling the component's state each time:

```jsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab isActive={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>Tab 1</Tabs.Tab>
    <Tabs.Tab isActive={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>Tab 2</Tabs.Tab>
  <Tabs.List>

  <Tabs.Content>
    <Tabs.Panel isVisible={activeTabIndex === 0}>Content for Tab 1</Tabs.Panel>
    <Tabs.Panel isVisible={activeTabIndex === 1}>Content for Tab 2</Tabs.Panel>
  </Tabs.Content>
</Tabs>
```

...the components could handle their state independently:

```jsx
<Tabs initialActiveTab={0}>
  <Tabs.List>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>Tab 2</Tabs.Tab>
  <Tabs.List>

  <Tabs.Content>
    <Tabs.Panel>Content for Tab 1</Tabs.Panel>
    <Tabs.Panel>Content for Tab 2</Tabs.Panel>
  </Tabs.Content>
</Tabs>
```

...unless we want to take the wheel:

```jsx
<Tabs activeTab={activeTabIndex} onActiveTabChange={setActiveTabIndex}>
  <Tabs.List>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>Tab 2</Tabs.Tab>
  <Tabs.List>

  <Tabs.Content>
    <Tabs.Panel>Content for Tab 1</Tabs.Panel>
    <Tabs.Panel>Content for Tab 2</Tabs.Panel>
  </Tabs.Content>
</Tabs>
```

That would be awesome, no? With this approach, we could not only render whatever we want, whenever we want, but also not have to worry about state management!

## Compound components to the rescue

“Compound Components” is a React pattern where several components implicitly share a state and leverage the parent-child relationship to communicate via the [Context API](https://react.dev/learn/passing-data-deeply-with-context) in the background.

### How to create a Compound Component?

First, let’s start by creating a context that will handle all of the component’s state:

```jsx
const TabsContext = createContext({});

export function Tabs({ children, initialActiveTab = 0 }) {
  const [activeTab, onActiveTabChange] = useState(initialActiveTab);

  const context = useMemo(
    () => ({
      activeTab,
      onActiveTabChange,
    }),
    [activeTab]
  );

  return (
    <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
  );
}
```

The `Tabs` component defines its state and makes it available to its children via the context. This will allow us to do state management in the background without worrying about prop drilling.

Then, let’s create two components:
- `Tabs.Tab`, which will render a button to switch the current tab:

    ```jsx
    Tabs.Tab = function TabsTab({ children, isActive, onClick }) {
      return <button onClick={onClick}>{children}</button>;
    };
    ```

- `Tabs.Panel`, which will render the content if the tab is selected:

    ```jsx
    Tabs.Panel = function TabsPanel({ children, isVisible }) {
      return isVisible ? children : null;
    };
    ```

To glue all the components together, let’s create `Tabs.List` and `Tabs.Content` components. Those components will read from the context and populate their children with properties.

```tsx
Tabs.List = function TabsList({ children }) {
  const { activeTab, onActiveTabChange } = useContext(TabsContext);

  return React.Children.map(children, (child, index) => (
    React.cloneElement(child, {
      isActive: activeTab === index,
      onClick: () => onActiveTabChange(index),
    })
  ));
};

Tabs.Content = function TabsContent({ children }) {
  const { activeTab } = useContext(TabsContext);

  return React.Children.map(children, (child, index) => (
    React.cloneElement(child, {
      isVisible: activeTab === index,
    })
  ));
};
```

As you can see, both components iterate over their children and clone them to provide additional properties from the context to fulfill the children’s interfaces.

### How to make a Compound Component controlled?

Our `Tabs` component is [uncontrolled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components); it manages its state on its own. We can extend it to become controlled.

Let’s start by writing a helper hook that will help us manage the state in a safe manner for both controlled and uncontrolled components:

```js
function useControlled({ value, initialValue }) {
  const { current: isUncontrolled } = useRef(value === undefined);

  const [localValue, setLocalValue] = useState(initialValue);

  const safeValue = isUncontrolled ? localValue : value;
  const safeSetValue = useCallback((newValue) => {
    if (isUncontrolled) {
      setLocalValue(newValue);
    }
  }, []);

  return [safeValue, safeSetValue];
}
```

Now, we can use this hook as follows to make our `Tabs` a controlled or uncontrolled component at will:

```jsx {6-7, 9-12, 14-17, 19-25}
const TabsContext = createContext({});

export function Tabs({
  children,
  initialActiveTab = 0,
  activeTab,
  onActiveTabChange
}) {
  const [value, onValueChange] = useControlled({
    value: activeTab,
    initialValue: initialActiveTab
  });

  const handleValueChange = useCallback((newValue) => {
    onValueChange(newValue);
    onActiveTabChange?.(newValue);
  }, [onValueChange, onActiveTabChange]);

  const context = useMemo(
    () => ({
      activeTab: value,
      onActiveTabChange: handleValueChange,
    }),
    [value, handleValueChange]
  );

  return (
    <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
  );
}
```

## Conclusion

Compound Components allow you to create composable components with straightforward and simple-to-use API. By leveraging the Context API and the parent-child relationship, we avoided prop drilling and made the state sharing implicit while giving the developer control over what is being rendered.
