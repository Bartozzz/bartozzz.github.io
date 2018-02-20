---
layout     : article
author     : Bartosz Łaniewski
title      : Identyfikacja użytkownika na podstawie API przeglądarki
date       : 2018-02-18 00:00:00 +0100
lang       : pl
categories : security
keywords   :
  - Security
  - Privacy
  - Fingerprint
---

Odwiedzając stronę internetową, użytkownicy udzielają dostęp do potencjalnie unikalnych uninformacji. Te zaś pozwalają na precyzyjną identyfikację ich maszyn oraz inwigilacji, bez konieczności rejestracji. Ta metoda jest powszechnie zwana [Browser Fingerprint](https://en.wikipedia.org/wiki/Device_fingerprint) - najczęściej spotykany, ale trudny do wykrycia sposób rozpoznawania internautów na podstawie danych udostępnianych przez pzeglądarkę.

## Czym jest Browser Fingerprint?

Termin ten odnosi się do metody rozpoznawania osób na podstawie "odcisku" przeglądarki oraz danych których ta udostępnia na poziomie swojego API. Do takich danych należą m.in. informacje dot. systemu operacyjnego oraz przeglądarki, zainstalowanych wtyczek i samej maszyny użytkownika. Przykładowo, każda przeglądarka zawiera [ustandaryzowany obiekt `navigator`](https://html.spec.whatwg.org/multipage/system-state.html#system-state-and-capabilities):

{% highlight json %}
{
  appCodeName: "Mozilla",
  appName:"Netscape",
  appVersion: "Mozilla/5.0 (Macintosh; Intel Mac … like Gecko) Chrome/64.0.3051.46 Safari/537.36",
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac … like Gecko) Chrome/64.0.3051.46 Safari/537.36",
  vendor: "Google Inc.",
  vendorSub: "",
  product: "Gecko",
  productSub: "20030107",
  platform: "MacIntel",
  deviceMemory: 8,
  hardwareConcurrency: 4,
  language: "pl"
  languages: ["pl", "en-US", "en", "fr-FR", "fr"],
  plugins: PluginArray {},
  cookieEnabled: true
}
{% endhighlight %}

Na podstawie takich informacji staje się możliwe wygenerowanie hasha który posłuży do rozpoznawania niezalogowanego użytkownika na stronie szpiegującego. Jak wynika z [badań doktora Peter Eckersley](https://panopticlick.eff.org/static/browser-uniqueness.pdf), na 400.000 odwiedzin, ponad 80% użytkoników miało unikalne odciski.

### Jakie dane są wykorzystywane do rozpoznawania użtykownika?

Do generowania hashu mogą posłużyć:

1. **Adres IP oraz ISP**:
3. Ciasteczka
2. Przeglądarka
4. Strefa czasowa
5. Preferowane języki użytkownika
6. Wtyczki przeglądarki oraz ich wersje
7. Czcionki oraz reszta danych systemowych
