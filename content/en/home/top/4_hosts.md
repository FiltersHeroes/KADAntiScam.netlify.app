---
headless: true
params:
    color: ""
---
## Other list variations {#hosts class="border-bottom border-primary mb-3 text-center"}
{{< filterlistsCol translatableData="Hosts" data="HostsNonTranslatable" >}}

{{< div >}}
Some DNSs use our **KAD** lists in hosts and domain format and can be used alternatively (e.g. on mobile devices). These include:
* [nextdns.io](https://nextdns.io/) (directly contains **KADomains** as default, optionally you can enable "blocking newly registered domains");
* [libredns.gr](https://libredns.gr/) (based on [StevenBlack hosts](https://github.com/StevenBlack/hosts));
* [RethinkDNS](https://rethinkdns.com/configure?s=KAD#1:ABAQAA==) (<abbr title="DNS over TLS">DoT</abbr>, <abbr title="DNS over HTTPS">DoH</abbr>, by his app &mdash; contains KAD HOSTS list).
{{</ div >}}
