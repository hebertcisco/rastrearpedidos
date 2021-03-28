const validCode = (code: string) => {
    let valid = false;

    if (code) {
      valid = true;
    } else {
      alert("Favor insira um código válido!");
      return false;
    }
    if (code.length !== 13) {
      alert("O código de rastreio deve conter 13 caracteres.");
      return false;
    }
    return valid;
  };
  export default validCode