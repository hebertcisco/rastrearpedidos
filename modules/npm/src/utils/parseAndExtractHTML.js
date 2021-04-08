import cheerio from 'cheerio'
import extractValues from './extractValues'

function parseAndExtractHTML(bodyString) {
  const $ = cheerio.load(bodyString)
  const colunasArray = $('.listEvent').find('tbody').find('tr').toArray()
  const logs = colunasArray.map((linhas) => {
    const data = $(linhas)
      .find('td')
      .toArray()
      .map((linha) =>
        $(linha)
          .text()
          .replace(/[\t\n\r]/g, '')
          .trim()
      )
      .map((data) => data.split(/\s\s+/g))
    return data
  })
  return extractValues(logs)
}
export default parseAndExtractHTML
