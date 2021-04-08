import FormData from 'form-data'
import fetch from 'node-fetch'
import { parseResponse, parseError } from './correios'

async function rastreioPromise(codigo) {
  const form = new FormData()
  form.append('objetos', codigo)
  try {
    return fetch(
      'https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm',
      {
        method: 'POST',
        body: form,
      }
    )
      .then(parseResponse)
      .catch(parseError)
  } catch (error) {
    return error
  }
}

export default rastreioPromise
