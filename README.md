# rodeo2-clud — klikalna makieta Okazje B2B

Makieta platformy okazji hurtowych (producent → sklep). Wersja demonstracyjna: fikcyjne dane, symulowane powiadomienia i płatności.

Aktualna wersja: **v6.1** (`PARTIA-v6.1.html`) — dzisiejsza promocja z minimum dostawy 5000 zł netto; wariant A (promocja wystarcza do minimum) i B (promocja + gotowy zestaw lub „Polecane przez dystrybutora”), przełączane w zwiniętym panelu DEMO. Dane handlowe przykładowe.

Build: `npm run build` (`scripts/build.mjs`) kopiuje `PARTIA-v6.1.html` do `public/index.html`.

Publikacja: GitHub (`main`) → Cloudflare Workers Builds (Worker `rodeo2-clud`, zasoby statyczne z `public/`).

Adres publiczny: https://rodeo2-clud.pcdr.workers.dev
