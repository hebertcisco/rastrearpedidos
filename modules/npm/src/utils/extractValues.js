function extractValues(logs) {
  if (!Array.isArray(logs))
    throw new Error('Erro ao extrair eventos do rastreio.')
  const events = []
  logs.forEach((eventLog) => {
    const local = eventLog[0][2].split('/')
    const event = {
      data: eventLog[0][0],
      dataHora: `${eventLog[0][0]} ${eventLog[0][1]}`,
      descricao: eventLog[1][0],
      cidade: local[0].trim(),
      uf: local[1].trim(),
    }
    if (eventLog[1][1]) {
      const destino = eventLog[1][1].split(' ')
      event.destino = {
        cidade: destino[destino.length - 3],
        uf: destino[destino.length - 1],
      }
    }
    events.push(event)
  })
  return events
}
export default extractValues
