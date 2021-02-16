"use strict";

const rastreio = require("./lib/Correios/service/correios");

module.exports = async (codigo) => {
  if (codigo.length !== 13) {
    return {
      error: "validation_error",
      message: "O código de rastreio deve conter 13 caracteres.",
    };
  }
  const result = await rastreio(codigo);
  if (result.length < 1)
    return {
      error: "service_error",
      message: "O serviço não retornou eventos para este código de rastreio.",
    };
  return result;
};
