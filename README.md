# RastrearPedidos

Rastreamento de objetos integrado aos serviços dos Correios

## Lib

### Realizando uma consulta via arquivo de teste

> Acesse o exemplo em `tests/Correios/index.test.js`

```js
const rastreio = require("rastrearpedidos");
rastreio("LB498113226SE").then(console.log);
```

## Realizando uma consulta via Endpoint da API

> Curl

```sh
curl --location --request GET 'https://rastrearpedidos.com.br/api/rastreio/v1/LB498113226SE'
```

> HTTP

```http
GET /api/rastreio/v1/LB498113226SE HTTP/1.1
Host: rastrearpedidos.now.sh
```

> URL: [https://rastrearpedidos.com.br/api/rastreio/v1/LB498113226SE](https://rastrearpedidos.com.br/api/rastreio/v1/LB498113226SE)

### Endpoint:

`api/rastreio/v1/[codigo]`


## Realizando uma consulta via Endpoint do site

> URL: [https://rastrearpedidos.com.br/rastreio?codigo=LB498113226SE](https://rastrearpedidos.com.br/rastreio?codigo=LB498113226SE)

### Endpoint:

`rastreio?codigo=[codigo]`

