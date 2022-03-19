---
title: Enterprise-scale React & Redux project architecture
authors: ["Bartosz Łaniewski"]
keywords: ["React", "Architecture"]
language: en
dateCreated: 2019-03-01 00:00:00 +0100
dateUpdated: 2019-03-01 00:00:00 +0100
datePublished: 2019-03-01 00:00:00 +0100
---

Maintaining large React projects can be a difficult task. Below are a few practices I’ve adapted over the years working with React projects of all scales. A low of those practices were directly taken or inspired by excellent resources found in the React/Redux community, precisely:

- [React: official documentation](https://reactjs.org);
- [Redux: official documentation](https://redux.js.org/);
- [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux);
- [Re-ducks: Building on the duck legacy](https://github.com/alexnm/re-ducks);
- [React & Redux TypeScript guide](https://github.com/piotrwitek/react-redux-typescript-guide);

**The proposed architecture is not meant to be enforced dogmatically and is a work in progress that might change over time.**

## File structure

Dan Abramov created a [guide](http://react-file-structure.surge.sh/) for organising files and he got a very good point. For months I’ve been following the “good” ways to organise React projects: starting at the separation of concerns with Presentational and Container components, finishing at adapting [ducks](https://github.com/erikras/ducks-modular-redux).

It worked well for small projects, but as they grew to be 30 different, unique screens and over 200 components, it  became more difficult to maintain all of this together. At Milo, we came with a directory structure that is inspired by Django and best-practices from React, taking the separation of concerns to its extreme.

```
src/
├── App.tsx
├── index.ts
├── store.ts
├── types.ts
├── shared/
│    └── ComponentName.tsx
├── modules/
│    └── <moduleName>/
│          ├── components/
│          │     └── ComponentName.tsx
│          ├── actionCreators.ts
│          ├── actionTypes.ts
│          ├── apiCalls.ts
│          ├── operations.ts
│          ├── selectors.ts
│          ├── reducers.ts
│          ├── utils.ts
│          ├── types.ts
│          └── index.ts
└── screens/
      ├── <screenNamespace>/
      │     ├── SubcreenNameA.tsx
      │     └── SubcreenNameB.tsx
      └── Navigation.ts
```

### Shared

This contains the shared code used all across your app. It can include configuration files, primary presentational components (i.e. Buttons, Inputs, Grid, …) helpers to work with the API and pretty much everything that doesn’t fit in other parts of the proposed architecture.

### Screens

Screens are components which are directly mounted on routes ([`react-router`](https://github.com/ReactTraining/react-router), [`react-navigation`](https://github.com/react-navigation/react-navigation)). They render shared and/or modules’ components.

### Modules

Sometimes, we need to share the logic between web (React) and mobile (React Native) apps. The proposed structure makes it very easy to reuse and maintain the code without influencing other app parts.

The main idea of `modules/` is to group together a strongly coupled part of the application and make it as reusable as possible. It contains all the required components (later used in screens) as well as reducers, action creators and other state-related utilities.

- A module must contain the entire logic for handling its concept;
- A module may contain all the required components to present its concept.

#### Components

We don’t always follow the concept of a container and presentational components – the promoted thing with this concept is the separation of concerns which can be achieved in different, more maintainable ways, for example though the Hooks API. Do what is more suitable for your case.

> “I don’t suggest splitting your components like this anymore. If you find it natural in your codebase, this pattern can be handy. But I’ve seen it enforced without any necessity and with almost dogmatic fervor far too many times. The main reason I found it useful was because it let me separate complex stateful logic from other aspects of the component. Hooks let me do the same thing without an arbitrary division.” – [Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

#### Index

The `index.ts` file should expose the public API of a module. Everything that is not exposed in this file should be considered private and never accessed from the outside.

- The default export must be the reducer.
- It must exports `actions`, `operations`, `selectors` and `types`.
- It must expose all the components.

```typescript
import * as actions from "./actionCreators";
import * as operations from "./operations";
import * as selectors from "./selectors";
import * as types from "./types";
import reducer from "./reducers";

// Store/state related stuff:
export default reducer;
export { actions, operations, selectors, types };

// Components:
export { default as ComponentNameA } from "./components/ComponentNameA";
export { default as ComponentNameB } from "./components/ComponentNameB";
```

#### Action Types

Action types are constants used by action creators and reducers. Each action type should be unique, prefixed by the project and module name.

```typescript
export const POSTS_REQUEST = "@@<project_name>/<module_name>/POSTS_REQUEST";
export const POSTS_PROCESS = "@@<project_name>/<module_name>/POSTS_PROCESS";
```

Your action types should be pure string literals. Dynamic string operations (like template strings, string concatenation, etc.) will widen literal type to its supertype string. This will break contextual typing in reducer cases when using TypeScript or Flow.

#### Action Creators

The action creators should follow the [Flow Standard Action](https://github.com/redux-utilities/flux-standard-action) specification when possible. Action shape should be predictable and known by the developers. Action creators should not contain any logic, nor transform the received payload – it makes them harder to test and the code is harder to debug.

```typescript
import { createStandardAction } from "typesafe-actions";
import * as Types from "./actionTypes";
import { Payload } from "./types";

export const requestPosts =
  createStandardAction(Types.POSTS_REQUEST)<void>();

export const processPosts =
  createStandardAction(Types.POSTS_REQUEST)<Payload | Error>();
```

You should not export any default value in `actionCreators.ts`. Using named exports, it is easier to map dispatch to all actions exposed by a module using [`bindActionCreators`](https://redux.js.org/api/bindactioncreators), as follows:

```typescript
import { bindActionCreators } from "redux";
import * as Types from "../../types";
import { actions as moduleActionsA } from "../moduleA";
import { actions as moduleActionsB } from "../moduleB";

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators({ ...moduleActionsA, ...moduleActionsB }, dispatch);
```

#### API Calls

API endpoints should not be hand-coded – it makes the code prone to errors and harder to maintain as API evolves. I encourage you to create a small configuration file with all available endpoints in `config.ts` file, then reuse those endpoints in `apiCalls.ts`.

##### Configuration

```typescript
const URL = "";
const API = "";

export default {
  v1: {
    posts: {
      get(id: number, meta?: Object) {
        return `${URL}${API}v1/posts/${id}${createQueryString(meta)}`;
      },
      list(meta?: Object) {
        return `${URL}${API}v1/posts${createQueryString(meta)}`;
      }
    }
  },

  v2: { /* ... */ }
};
```

##### API Calls

```typescript
export const fetchPost = (id: number, meta: Object) =>
  fetch(urls.v1.posts.get(id, meta))
    .then(response => response.json());

export const fetchPosts = (meta: Object) =>
  fetch(urls.v1.posts.list(meta))
    .then(response => response.json());
```

#### Operations

Operations can be [thunks](https://github.com/reduxjs/redux-thunk) or [sagas](https://redux-saga.js.org/) and everything else that delays the action dispatch. An operation is a function which can contain logic, dispatch multiple actions based on some predicates and manipulate their payload.

```typescript
import * as Types from "../types";
import * as actions from "./actionCreators";
import * as API from "./apiCalls";

export const doFooStuff = (payload: Object) =>
  (dispatch: Dispatch<Types.RootAction>) => {
    dispatch(actions.requestPosts());

    API.fetchPosts(payload.meta)
      .then(data => dispatch(actions.processPosts(normalizePosts(data))))
      .catch(err => dispatch(actions.processPosts(err, true)));
  };
```

#### Selectors

Selectors can compute derived data, allowing Redux to store the minimal possible state. A selector is not recomputed unless one of its arguments changes. It minimized the amount of component re-renders to the minimum. Have a look at the excellent [reselect](https://github.com/reduxjs/reselect) package.

Consider the following example – it renders a list of posts created by the currently logged-in user:

```typescript
class PostsList extends React.PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.posts
            .filter(post => post.author = this.props.userId)
            .map(post => (
              <div>
                <p>{post.title}</p>
                <p>{post.content}</p>
              </div>
            ))
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.data,
  userId: state.auth.user.id
});
```

In the example above, a render is triggered every time the post collection changes, even if the changed post is not created by the user. Using selectors, we can avoid those unnecessary re-renders and update the component only if one of the user’s posts has been created or modified:

```typescript
// selectors.ts
import { createSelector } from "reselect";

const postsSelector = state => state.posts.data;
const userSelector = state => state.auth.user;
const userPostsSelector = createSelector(
  postsSelector,
  userSelector,
  (posts, user) => posts.filter(post => post.author === user.id)
);
```

```typescript
// PostsList.tsx
class PostsList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.userPosts.map(post => (
          <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  userPosts: userPostsSelector(state)
});
```

The other thing about selectors is that it facilitates the work with a part of the application that was developed by somebody else – you don’t need to know the state’ shape to work with it if the exposed selectors are enough and well documented.

#### Reducers

You should export one reducer per module, but a module can be composed of multiple reducers. Don’t be afraid to break your reducer into multiple chunks to reduce complexity and make it easier to test. You can always combine them using [`combineReducers`](https://redux.js.org/api/combinereducers).

```typescript
import { combineReducers } from "redux";
import { Action, PostsState, ErrorsState, LoadingState } from "./types";
import * as Types from "./actionTypes";

export const postsReducer = (state: PostsState = {}, action: Action) => {
  switch (action.type) {
    case Types.POSTS_PROCESS:
      if (!action.error) return {...state, action.payload};

    default:
      return state;
  }
}

export const errorsReducer = (state: ErrorsState = null, action: Action) => {
  switch (action.type) {
    case Types.POSTS_PROCESS:
      if (action.error) return action.payload;

    default:
      return state;
}

export const loadingReducer = (state: LoadingState = false, action: Action) => {
  switch (action.type) {
    case Types.POSTS_REQUEST: return true;
    case Types.POSTS_PROCESS: return false;
    default: return state;
  }
}

export default combineReducers({
    data: postsReducer,
    errors: errorsReducer,
    loading: loadingReducer
});
```

#### Types

If you use Flow or TypeScript, it’s a good idea to keep all the types in one place (`types.ts`). By doing so, we can expose all of them at once to other modules of the app. This is particularly handy when we need to expose the root `Action` and `State` which is used in every selector and container. Here’s an example of `/types.ts`:

```typescript
import { AnyAction } from "redux";
import { StateType } from "typesafe-actions";
import rootReducer from "./reducers";
import { types as FooTypes } from "../../modules/foo";
import { types as BarTypes } from "../../modules/bar";

export type RootState =
  StateType<typeof rootReducer>;

export type RootAction =
  FooTypes.Action | BarTypes.Action | AnyAction;
```

### Utilities for state management

You can think of Redux as a low-level API – it doesn’t force any particular patterns and allow you pretty much to do whatever you want.

- [Ramda](https://ramdajs.com/): a practical functional library for JavaScript programmers.
- [Immer](https://github.com/mweststrate/immer): create the next immutable state by mutating the current one.

### Utilities for creating styles

Creating styles can be a pain, especially in React Native or when you need to create custom styles based on the state. [Styled Components](https://www.styled-components.com/ecosystem) can come handy – they allow you to create styles directly in JavaScript using SCSS syntax.

### Tips and tricks

#### You can use reducers on inner state

Creating reducers to handle the inner component state is a good practice in the case when you have complex state logic – it is easier to test and in most cases, less error-prone. Creating reducers for inner state management is even easier with the new Hooks API.

**Example:** from official React [`useReducer` example](https://reactjs.org/docs/hooks-reference.html#usereducer):

```jsx
export const initialState = { count: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case "increment": return {count: state.count + 1};
    case "decrement": return {count: state.count - 1};
    default: throw new Error();
  }
}

export default function Counter({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </>
  );
}
```

### Do’s and don’ts

#### Never render a list of children without assigning a unique key to each

This can have a huge impact on the performance, even bigger if you rendering a big list of elements. As from React documentation:

> Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.

**Don’t:**

```jsx
class FooComponent extends React.Component {
  render() {
    return this.props.data.map(item => <Item data={item} />);
  }
}

class FooComponent extends React.Component {
  render() {
    return this.props.data.map((item, index) => <Item key={index} data={item} />);
  }
}
```

**Do:**

```jsx
class FooComponent extends React.Component {
  render() {
    return this.props.data.map(item => <Item key={item.id} data={item} />);
  }
}
```

#### Never create functions or objects in props

This can have a huge impact on the performance. If you create new objects or functions in the props, a new reference will be passed down to the child each time its parents re-render, resulting in unnecessary re-renders and probably more unwanted behaviours.

**Don’t:**

```jsx
class FooComponent extends React.Component {
  render() {
    return (
      <FooChild
        onClick={() => this.props.handleClick(...args)}
        data={this.props.filter(item => item.id === 5)}
      />
    );
  }
}
```

**Do:**

```jsx
class FooComponent extends React.Component {
  onClick = (...args) => event => {
    return this.props.handleClick(...args);
  };

  render() {
    return (
      <FooChild
        onClick={this.onClick(...args)}
        data={this.props.filteredData}
      />
    );
  }
}
```

#### Avoid duplicating data between props and state

If some data can be derived or calculated directly from the props, it’s unnecessary to replicate this data in state. Props should be the only source of truth. In fact – if you want to calculate the state based on the received props, you’ll need to create a `componentDidUpdate` method and keep you state and props in sync – this is an anti-pattern.

The only case when assigning props to state is acceptable is to pass initial data to a component which doesn’t need to be in sync with the store, e.g. forms.

**Avoid:**

```typescript
class FooComponent extends React.Component {
  state = {
    foo: this.props.foo,
    bar: this.props.bar,
  }
}
```

#### Avoid overusing HOCs

As Michael Jackson (React-Router co-creator) said:

> “Next time you think you need a HOC (higher-order component) in, you probably don't. I can do anything you're doing with your HOC using a regular component with a [render prop](https://reactjs.org/docs/render-props.html).“ – [Michael Jackson](https://twitter.com/mjackson/status/885910553432018945)

#### Avoid using Components without `shouldComponentUpdate`

A [`React.Component`](https://reactjs.org/docs/react-component.html), when used without `shouldComponentUpdate`, will re-render on every prop and state change.

1. Consider creating a `shouldComponentUpdate() `method to prevent unnecessary re-renders.
2. Consider using the built-in `PureComponent` instead of writing `shouldComponentUpdate` by hand. `PureComponent` performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
