---
headless: true
params:
    color: ""
---
## Inne odmiany listy {#hosts class="border-bottom border-info mb-3 text-center"}

{{< row class="mb-4" >}}
{{< column >}}
### KADhosts
Filtry do oprogramowania obsługującego składnię hosts, np. [Pi-hole](https://pi-hole.net/).
{{< button color="info" href="https://raw.githubusercontent.com/FiltersHeroes/KADhosts/master/KADhosts.txt" icon="fas eye" order="first" outline="true">}}Podgląd{{< /button >}}
{{< /column >}}

{{< column >}}
### KADhole
Uzupelnienie KADhosts do [Pi-hole](https://pi-hole.net/).

W celu prawidłowego działania, nie ściągaj go samodzielnie, tylko pobierz [Instalator Regex Hosts do Pi-hole](https://raw.githubusercontent.com/FiltersHeroes/ScriptsPlayground/master/scripts/RLI_for_Pi-hole.py), a następnie uruchom go z wpisanym adresem do listy jako jego parametrem, czyli `sciezka_do_instalatora/RLI_for_Pi-hole.py https://raw.githubusercontent.com/FiltersHeroes/KADhosts/master/KADhole.txt`. Aktualizacje również należy przeprowadzać podobnie. Oczywiście można dodać ten skrypt do crona, by były automatycznie pobierane i instalowane co jakiś czas.
{{< button color="info" href="https://raw.githubusercontent.com/FiltersHeroes/KADhosts/master/KADhole.txt" icon="fas eye" order="first" outline="true">}}Podgląd{{< /button >}}
{{< /column >}}

{{< column >}}
### KADomeny
Filtry do [FortiGate](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/9463/threat-feeds).
{{< button color="info" href="https://raw.githubusercontent.com/FiltersHeroes/KADhosts/master/KADomains.txt" icon="fas eye" order="first" outline="true">}}Podgląd{{< /button >}}
{{< /column >}}

{{< column >}}
### KAD - Dnsmasq Edition (Beta)
Filtry do [Dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html).
{{< button color="info" href="https://raw.githubusercontent.com/FiltersHeroes/KADhosts/master/KADdnsmasq.txt" icon="fas eye" order="first" outline="true">}}Podgląd{{< /button >}}
{{< /column >}}

{{< /row >}}

{{< div >}}Niektóre DNS-y używają naszych list **KAD** w formacie hosts oraz domenowym i można je alternatywnie używać (np. na urządzeniach mobilnych). Są to między innymi:
* [nextdns.io](https://nextdns.io/) (zawiera bezpośrednio listę **KADomeny** w domyślnej konfiguracji, opcjonalnie można włączyć „blokowanie nowo zarejestrowanych domen (NRD)”);<!-- * [dnscrypt.pl/ `dnscrypt.pl-armada`](https://dnscrypt.pl/) (zawiera listę **KAD** w wersji `dnscrypt.pl-armada`), -->
* [libredns.gr](https://libredns.gr/) (wersja z aktywnym adblockiem, bazuje na [StevenBlack hosts](https://github.com/StevenBlack/hosts)).<!-- * [ahadns.com](https://ahadns.com/) (bazuje na **oisd.nl**),* [adhole.org](https://adhole.org/) (bazuje na **oisd.nl**). -->
{{</ div >}}
