<p align="center">
 <img width="100px" src="https://rastrearpedidos.com.br/images/favicon.png" align="center" alt=":package: RastrearPedidos" />
 <h2 align="center">:package: RastrearPedidos</h2>
 <p align="center">Serviço de rastreamento de objetos integrado aos serviços dos Correios</p>
</p>

<p align="center">Gostou o projeto? Por favor considere <a href="http://bit.ly/doarprarastrearpedidos">uma doação</a> para ajudar a melhorar!

**Rastreamento de objetos integrado aos serviços dos Correios** ✨

Faça rastreio de objetos do correio usando o módulo `rastrearpedidos`, ele utiliza _WebScraping_ para coletar os dados do endpoint dos correios e retorna isso numa promise javascript

# Features

- **ES6/ESNext** - Usado código _ES6_ e _Babel_ pra transpilar isso pra ES5 ou outras versões mais antigas;
- **Testes** - _Mocha_ with _Istanbul_ coverage
- **Lint** - Pré-configurado _ESlint_ com configuração _Airbnb_
- **CI** - Suporte ao _TravisCI_.
- **Minify** - O código depois do build será minificado para desempenho

# Comandos

- `npm run clean` - Remove o diretório `lib/`
- `npm test` - Executa testes com resultados de linting e coverage.
- `npm test:only` - Executa testes sem linting ou coverage.
- `npm test:watch` - Você pode até executar novamente os testes em hotreload!
- `npm test:prod` - Execute testes com código minificado.
- `npm run test:examples` - Teste exemplos escritos em JS puro para entender melhor o uso do módulo.
- `npm run lint` - Roda o ESlint com airbnb-config
- `npm run cover` - Obtenha um report de coverage do código
- `npm run build` - Babel vai transpilar ES6 => ES5 e minificar o código.
- `npm run prepublish` - Hook para npm. Vai fazer todas as verificações antes de publicar seu módulo.

# Instalação

pra instalar o módulo em seu projeto basta rodar o comando abaixo:

```bash
npm i rastrearpedidos
```

Agora em seu projeto basta importar o módulo dessa forma:

```js
const rastreio = require("rastrearpedidos");
```

Ou pode usar o import:

```js
import rastreio from "rastrearpedidos";
```

# Uso

Pra usar em seu projeto node importe e chame o `rastreio` passando o código de rastreio como parâmetro e lembre-se que ele é uma promisse que precisa ser resolvida.

```js
const rastreio = require("rastrearpedidos");
rastreio("OM728899305BR").then(console.log);
```

Assim irá retornar uma `Array` de objetos mostrando o andamento do pedido com o seguinte formato:

```json
[
  {
    "data": "07/04/2021",
    "dataHora": "07/04/2021 14:00",
    "descricao": "Objeto postado",
    "cidade": "Arraias",
    "uf": "TO"
  }
]
```

# :bug: Issues

Sinta-se à vontade para **mandar um novo issue** com o respectivo título e descrição no repo [rastrearpedidos](https://github.com/hebertcisco/rastrearpedidos/issues). Se você já encontrou uma solução para o seu problema, **eu adoraria revisar sua solicitação de pull**!

# :closed_book: Licença

Feito com amor por [Hebert F. Barros](https://github.com/hebertcisco) 🚀.
Esse projeto está sob [Licença MIT](https://github.com/hebertcisco/rastrearpedidos/main/LICENSE).

Dê uma ⭐️ se esse projeto ajudou você...
