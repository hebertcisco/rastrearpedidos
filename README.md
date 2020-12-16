# RastrearPedidos

Rastreamento de objetos integrado aos serviços dos Correios

## Lib

### Realizando uma consulta via arquivo de teste

> Acesse o exemplo em `tests/Correios/index.test.js`

```js
const rastreio = require("../../src/lib/Correios");
rastreio("LB498113226SE").then(console.log);
```

## Realizando uma consulta via Endpoint

> Curl

```sh
curl --location --request GET 'http://rastrearpedidos.now.sh/api/rastreio/v1/LB498113226SE'
```

> HTTP

```http
GET /api/rastreio/v1/LB498113226SE HTTP/1.1
Host: rastrearpedidos.now.sh
```

> URL: [http://rastrearpedidos.now.sh/api/rastreio/v1/LB498113226SE](http://rastrearpedidos.now.sh/api/rastreio/v1/LB498113226SE)

### Endpoint:

`api/rastreio/v1/[codigo]`
