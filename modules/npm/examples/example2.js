/* eslint-disable no-console */
const rastreio = require('rastrearpedidos')
const codigo = 'OM728899305BR'

try {
  //rastreio(codigo).then(console.log)
  rastreio(codigo).then(result => console.log(result))
} catch (err) {
  console.log(err)
}
