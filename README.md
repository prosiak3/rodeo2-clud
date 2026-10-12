# rodeo2-clud — klikalna makieta Okazje B2B

Makieta platformy okazji hurtowych (producent → sklep). Wersja demonstracyjna: fikcyjne dane, symulowane powiadomienia i płatności.

Aktualna wersja: **v5.5** (`PARTIA-v5.5.html`) — v5.4 + czytelność na telefonie: większy tekst (min. 16 px), zwykły krój zamiast wąskiego i wersalików, kafelki z ikonami, ceny przy wariantach ilości, przycisk „Aa” (wielkość tekstu).

Build: `npm run build` (`scripts/build.mjs`) kopiuje `PARTIA-v5.5.html` do `public/index.html`.

Publikacja: GitHub (`main`) → Cloudflare Workers Builds (Worker `rodeo2-clud`, zasoby statyczne z `public/`).

Adres publiczny: https://rodeo2-clud.pcdr.workers.dev
