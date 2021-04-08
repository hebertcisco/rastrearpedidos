import iconv from 'iconv-lite'
import parseAndExtractHTML from '../utils/parseAndExtractHTML'

function parseResponse(response) {
  if (!response.ok) {
    throw new Error('Erro ao rastrear objeto.')
  }
  return response
    .arrayBuffer()
    .then((arrayBuffer) =>
      iconv.decode(Buffer.from(arrayBuffer), 'iso-8859-1').toString()
    )
    .then(parseAndExtractHTML)
}

function parseError(error) {
  throw new Error(error.message)
}

export { parseResponse, parseError }
