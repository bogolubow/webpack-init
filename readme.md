# webpack-init

> Przykład configuracji webpack-a umożliwiający utworzenie bundle (paczki) dla projektu wykorzustującego pliki .js z ES6, css czy scss z automatycznym przeładowaniem przeglądarki po zmianach w plikach.

## uwagi

* starałem się bardzo dokładnie opisać każdy krok dzięki commit-om, najlepiej śledzić po kolei każdy commit rozpoczynając od nastarszego

* nie trzeba instalować osobno każdego pakietu z npm można pobrać `package.json` i uruchomić w terminalu `npm install`

* w przypadku zmian w pliku `webpack.config.js` należy zatrzymać działanie webpack-a (ctrl+c) i ponownie uruchomić, aby zmiany w konfiguracji zostały załadowaniem

* `webpack` i `webpack-dev-server` muszą być uruchomione jednocześnie (2 terminale), aby strona się odświeżała automatycznie
