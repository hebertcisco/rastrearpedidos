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

```sh
curl http://rastrearpedidos.now.sh/api/rastreio/v1/LB498113226SE
```

> URL: [http://rastrearpedidos.now.sh/api/rastreio/v1/LB498113226SE](http://rastrearpedidos.now.sh/api/rastreio/v1/LB498113226SE)
### Endpoint:
`api/rastreio/v1/[codigo]`
