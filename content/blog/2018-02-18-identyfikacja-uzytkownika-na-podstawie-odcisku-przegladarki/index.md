---
title: Identyfikacja użytkownika na podstawie odcisku przeglądarki
authors: ["Bartosz Łaniewski"]
keywords: ["Security", "Privacy"]
language: pl
dateCreated: 2018-02-18 00:00:00 +0100
dateUpdated: 2022-04-17 00:00:00 +0100
datePublished: 2018-02-18 00:00:00 +0100
---

Odwiedzając strony internetowe, użytkownicy udzielają dostępu do unikalnych, tudzież prywatnych informacji. Te zaś pozwalają na precyzyjną identyfikację ich maszyn oraz inwigilację, bez konieczności rejestracji. Ten sposób śledzenia często opiera się o tzw. [Browser Fingerprint][1] — najczęściej spotykany i jednocześnie najtrudniejszy do wykrycia sposób rozpoznawania internautów na podstawie danych udostępnianych poprzez oprogramowanie.

## Czym jest „Web Tracking”?

Termin ten odnosi się do procesu generowania trwałego, unikalnego identyfikatora w celu rozpoznawania maszyn na podstawie „odcisku” przeglądarki oraz danych, które ta udostępnia na poziomie swojego <abbr title="od Application Programming Interface – interfejs programowania aplikacji">API</abbr>. Do takich danych należą m.in. informacje dot. systemu operacyjnego, zainstalowanych rozszerzeń oraz komponentów maszyny użytkownika. Najprostsza implementacja takiego narzędzia śledzącego opiera się o ustandaryzowany [obiekt `navigator`][2]:

```json
{
  "appName": "Netscape",
  "appCodeName": "Mozilla",
  "appVersion": "Mozilla/5.0 (Macintosh … Gecko) Chrome/6…3 Safari/5…6",
  "vendor": "Google Inc.",
  "vendorSub": "",
  "product": "Gecko",
  "productSub": "20…00",
  "platform": "MacIntel",
  "deviceMemory": 8,
  "hardwareConcurrency": 4,
  "language": "en",
  "languages": ["en", "pl", "fr"],
  "plugins": {},
  "cookieEnabled": true
}
```

Bazując się na wyżej wymienionych informacjach, bardzo łatwo można wygenerować identyfikator, który posłuży do rozpoznawania niezalogowanego użytkownika na stronie szpiegującego. Jak wynika z badań doktora Peter Eckersley pt. [_„How Unique Is Your Web Browser?”_][3], na 400000 odwiedzin, ponad 80% użytkowników ma unikalne odciski.

> 83.6% of the browsers seen had an instantaneously unique fingerprint, and a further 5.3% had an anonymity set of size 2. Among visiting browsers that had either Adobe Flash or a Java Virtual Machine enabled, 94.2% exhibited instantaneously unique fingerprints and a further 4.8% had fingerprints that were seen exactly twice. – Peter Eckersley

### Jakie dane są wykorzystywane do rozpoznawania użytkownika?

1.  **Adres IP** oraz <abbr title="od Internet service provider – dostawca usług internetowych">ISP</abbr>: należy używać ostrożnie — dynamiczna alokacja adresów IP przez dostawców może być problematyczna. Z tego powodu, adresy IP są częściej używane do blokowania dostępu aniżeli identyfikacji maszyn.
2.  **Ciasteczka**: najczęściej wykorzystywane przez narzędzia do analizy ruchu i dostawców reklam. Wraz z przepisami znowelizowanej ustawy [Prawa Telekomunikacyjnego][5] coraz więcej osób decyduje się jednak na ich blokowanie.
3.  **Przeglądarka**: zgodnie ze specyfikacją [<abbr title="od Request for Comments – zbiór technicznych dokumentów związanych z Internetem">RFC</abbr> 7231 (5.5.3)][6], nagłówek <abbr title="od Hypertext Transfer Protocol">HTTP</abbr> `User-Agent` zawiera informacje pozwalające na rozpoznanie programu, z którego klient wykonał zapytanie.

<Alert>

  Przeglądarka Google Chrome [planuje zredukować](https://developer.chrome.com/docs/privacy-sandbox/user-agent/) informacje wysyłane w nagłówku HTTP `User-Agent` oraz w obiekcie `navigator`. Ma to na celu zredukowanie informacji służących do identyfikacji użytkowników na podstawie odcisku przeglądarki.
</Alert>

[Preferowane języki][7] użytkownika, [rozszerzenia][8], dostępne czcionki, wsparcie przeglądarki oraz reszta danych systemowych są również powszechnie przetwarzane. Pełną listę charakterystyk, wraz z technicznym opisem oraz metodami ich pozyskania można znaleźć w artykule [_„Technical analysis of client identification mechanisms”_][4] autorstwa Artura Janc i Michała Zalewskiego.

### Jak wygląda „Web Tracking” pod maską?

Do rozpoznawania użytkownika używa się algorytmu, który kolekcjonuje i przetwarza udostępnione przez przeglądarkę charakterystyki. Na ich podstawie jest wyliczany unikalny, stabilny identyfikator przypisany dla konkretnego klienta. Charakterystyki mogą być przesyłane na dwa sposoby – _statycznie_, poprzez zapytanie HTTP, oraz _dynamicznie_, poprzez <abbr title="od Asynchronous JavaScript and XML – asynchroniczny JavaScript i XML">AJAX</abbr>.

AJAX daje dostęp do większej ilości danych, ponieważ służy do pobierania charakterystyk bezpośrednio z API przeglądarki. Do takich informacji wliczamy listy [dostępnych czcionek][9], wtyczek, strefę czasową oraz rozdzielczość ekranu. Co więcej, wiele narzędzi posuwa się nawet do [śledzenie kliknięć oraz ruchów kursora][10]:

> We divided the methods into several categories: explicitly assigned client-side identifiers, such as HTTP cookies; inherent client device characteristics that identify a particular machine; and **measurable user behaviors and preferences that may reveal the identity of the person** behind the keyboard (or touchscreen). – Artur Janc and Michal Zalewski

Zmienny adres IP, usuwanie danych przeglądania, aktualizacja oprogramowania, a nawet zmiana rozdzielczości ekranu może mieć znaczny wpływ na odcisk naszej przeglądarki, dlatego ważne jest, aby algorytm był stabilny i przygotowany na takie okoliczności. Przykładowa implementacja takiego algorytmu została opisana w sekcji 5.2. publikacji [„How Unique Is Your Web Browser?”][3] autorstwa Petera Eckersley.

## Jak się bronić przed „Browser Fingerprint”?

Paradoksalnie, stworzenie wtyczki, która zapobiegłaby identyfikacji naszej przeglądarki w sieci, niekoniecznie rozwiązałoby problem. Aby narzędzie było skutecznie, musiałoby z niego korzystać wystarczająco dużo użytkowników. W przeciwnym wypadku identyfikacja nadal będzie możliwa, lecz posłużą ku temu fałszywe dane dostarczone przez oprogramowanie.

Poniższe rozszerzenia powinny jednak poradzić sobie z wieloma metodami śledzenia w sieci. Wszystkie są używane przez setki tysięcy ludzi na całym świecie, a kod źródłowy wtyczek jest całkowicie otwarty:

1.  [`uBlock Origin`][11]: _„An efficient blocker: easy on memory and CPU footprint, and yet can load and enforce thousands more filters than other popular blockers.”_.
2.  [`noscript`][12]: _„Provides extra protection: allows JavaScript, Java, Flash and other plugins to be executed only by trusted web sites of your choice.”_.
3.  [`blender`][13]: _„Blend in the crowd by faking to be the most common Firefox browser version, operating system and other stuff.”_.
4.  [`ClearURLs`][17]: _„Automatically removes tracking elements from URLs to help protect your privacy when browsing through the internet.”_.

Dodaj filtry z [`easylist` i `easyprivacy`][14]: _„The EasyList filter lists are sets of rules originally designed for Adblock that automatically remove unwanted content from the internet, including annoying adverts, bothersome banners and troublesome tracking.”_.

[Zablokuj złośliwe strony w pliku `hosts`][15]: _„Extending and consolidating hosts files from several well-curated sources like adaway.org, mvps.org, malwaredomainlist.com, someonewhocares.org, and potentially others. You can optionally invoke extensions to block additional sites by category.”_.

---

## Źródła

1.  [_„How Unique Is Your Web Browser?”_ – Peter Eckersley][3]
2.  [_„Technical analysis of client identification mechanisms”_ - Artur Janc and Michal Zalewski][4]
3.  [_„No Clicks, No Problem: Using Cursor Movements to Understand and Improve Search”_ – Jeff Huang, Ryen White and Susan Dumais][10]

[1]: https://en.wikipedia.org/wiki/Device_fingerprint "Device fingerprint – Wikipedia"
[2]: https://html.spec.whatwg.org/multipage/system-state.html#system-state-and-capabilities "HTML Standard – The Navigator object"
[3]: https://panopticlick.eff.org/static/browser-uniqueness.pdf "How Unique Is Your Web Browser? – Peter Eckersley"
[4]: https://www.chromium.org/Home/chromium-security/client-identification-mechanisms "Technical analysis of client identification mechanisms – Artur Janc and Michal Zalewski"
[5]: http://www.dziennikustaw.gov.pl/DU/2012/1445 "Ustawa z dnia 16 listopada 2012 r. o zmianie ustawy – Prawo telekomunikacyjne oraz niektórych innych ustaw"
[6]: https://tools.ietf.org/html/rfc7231#section-5.5.3 "RFC 7231 – User-Agent"
[7]: https://www.w3.org/TR/html51/webappapis.html#language-preferences "W3C Recommendation – Language preferences"
[8]: https://html.spec.whatwg.org/multipage/system-state.html#plugins-2 "HTML Standard – Plugins"
[9]: http://www.maratz.com/blog/archives/2006/08/18/detect-visitors-fonts-with-flash/ "Detect visitor’s fonts with Flash – Marko Dugonjić"
[10]: https://www.microsoft.com/en-us/research/publication/no-clicks-no-problem-using-cursor-movements-to-understand-and-improve-search-2/ "No Clicks, No Problem: Using Cursor Movements to Understand and Improve Search – Jeff Huang, Ryen White and Susan Dumais"
[11]: https://github.com/gorhill/uBlock
[12]: https://noscript.net/
[13]: https://addons.mozilla.org/en-US/firefox/addon/blender-1/
[14]: https://easylist.to/
[15]: https://github.com/StevenBlack/hosts
[16]: https://rekseto.github.io/eksperymenty/inne/javascript/2018/06/04/jak-duzo-o-tobie-wiem.html
[17]: https://docs.clearurls.xyz/


