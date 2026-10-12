# rodeo2-clud — klikalna makieta Okazje B2B

Makieta platformy okazji hurtowych (producent → sklep). Wersja demonstracyjna: fikcyjne dane, symulowane powiadomienia i płatności.

Aktualna wersja: **v5.4** (`PARTIA-v5.4.html`) — design B2, słoik z monetami jako skarbonka, pełnoekranowa animacja „moneta wpada do słoika” z dźwiękiem po udanej płatności.

Build: `npm run build` (`scripts/build.mjs`) kopiuje `PARTIA-v5.4.html` do `public/index.html`.

Publikacja: GitHub (`main`) → Cloudflare Workers Builds (Worker `rodeo2-clud`, zasoby statyczne z `public/`).

Adres publiczny: https://rodeo2-clud.pcdr.workers.dev
