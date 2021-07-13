<p align="center">
 <img width="100px" src="https://rastrearpedidos.com.br/images/favicon.png" align="center" alt=":package: RastrearPedidos" />
 <h2 align="center">:package: RastrearPedidos</h2>
 <p align="center">Serviço de rastreamento de objetos integrado aos serviços dos Correios</p>
</p>

<p align="center">Gostou o projeto? Por favor considere <a href="https://github.com/hebertcisco/hebertcisco/blob/main/.github/patreon.md">ser um apoiador</a> e receba brindes exclusivos!
 </p>

## Lib

### Realizando uma consulta via arquivo de teste

> Acesse o exemplo em `tests/Correios/index.test.js`

```js
const rastreio = require("rastrearpedidos");
rastreio("OM728899305BR").then(console.log);
```

## Realizando uma consulta via Endpoint da API

> Curl

```sh
curl --location --request GET 'https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=OM728899305BR'
```

> HTTP

```http
GET /api/rastreio/v1?codigo=OM728899305BR HTTP/1.1
Host: rastrearpedidos.now.sh
```

> URL: [https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=OM728899305BR](https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=OM728899305BR)

### Endpoint:

`rastreio?codigo=[codigo]`

## Realizando uma consulta via Endpoint do site

> URL: [https://rastrearpedidos.com.br/rastreio/OM728899305BR](https://rastrearpedidos.com.br/rastreio/OM728899305BR)

### Endpoint:

`api/rastreio/v1/[codigo]`
