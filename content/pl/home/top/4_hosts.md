---
headless: true
params:
    color: ""
---
## Inne odmiany listy {#hosts class="border-bottom border-primary mb-3 text-center"}

{{< filterlistsCol translatableData="Hosts" data="HostsNonTranslatable" >}}

{{< div >}}Niektóre DNS-y używają naszych list **KAD** w formacie hosts oraz domenowym i można je alternatywnie używać (np. na urządzeniach mobilnych). Są to między innymi:
* [nextdns.io](https://nextdns.io/) (zawiera bezpośrednio listę **KADomeny** w domyślnej konfiguracji, opcjonalnie można włączyć „blokowanie nowo zarejestrowanych domen (NRD)”);<!-- * [dnscrypt.pl/ `dnscrypt.pl-armada`](https://dnscrypt.pl/) (zawiera listę **KAD** w wersji `dnscrypt.pl-armada`), -->
* [libredns.gr](https://libredns.gr/) (wersja z aktywnym adblockiem, bazuje na [StevenBlack hosts](https://github.com/StevenBlack/hosts));<!-- * [ahadns.com](https://ahadns.com/) (bazuje na **oisd.nl**),* [adhole.org](https://adhole.org/) (bazuje na **oisd.nl**). -->
* [RethinkDNS](https://rethinkdns.com/configure?s=KAD#1:ABAQAA==) (<abbr title="DNS over TLS">DoT</abbr>, <abbr title="DNS over HTTPS">DoH</abbr>, ich aplikacją &mdash; zawiera listę KAD HOSTS).
{{</ div >}}
