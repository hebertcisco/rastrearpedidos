<p align="center">
 <img width="100px" src="https://rastrearpedidos.com.br/images/favicon.png" align="center" alt=":package: RastrearPedidos" />
 <h2 align="center">:package: RastrearPedidos</h2>
 <p align="center">Serviço de rastreamento de objetos integrado aos serviços dos Correios</p>
</p>

<p align="center">Gostou o projeto? Por favor considere <a href="https://github.com/hebertcisco/rastrearpedidos/blob/develop/.github/patreon.md">ser um apoiador</a> e receba brindes exclusivos!

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
curl --location --request GET 'https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=LB498113226SE'
```

> HTTP

```http
GET /api/rastreio/v1?codigo=LB498113226SE HTTP/1.1
Host: rastrearpedidos.now.sh
```

> URL: [https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=LB498113226SE](https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=LB498113226SE)

### Endpoint:

`rastreio?codigo=[codigo]`

## Realizando uma consulta via Endpoint do site

> URL: [https://rastrearpedidos.com.br/rastreio/LB498113226SE](https://rastrearpedidos.com.br/rastreio/LB498113226SE)

### Endpoint:

`api/rastreio/v1/[codigo]`
