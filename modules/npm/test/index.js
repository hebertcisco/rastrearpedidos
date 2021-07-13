import { assert } from 'chai'
import rastreio from '../src'

const codigo = 'OM728899305BR'
describe('Promise test.', () => {
  it(`teste para verificar o status do pedido ${codigo}`, async () => {
    await rastreio(codigo)
      .then(result => assert(result.length === 11, result))
  })

  it(`Teste para verificar erro no pedido ${codigo}e`, async () => {
    await rastreio(`${codigo}e`)
      .then(result => assert(result.length === undefined, 'O serviço não retornou eventos para este código de rastreio.'))
  })
})
