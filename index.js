const textArea = document.querySelector('.text-area');
const mensagem = document.getElementById('copy');

function criptografar() {
  const text = convertCripto(textArea.value);
  mensagem.value = text;
  textArea.value = "";
}

function convertCripto(stringCriptografada) {
  let chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringCriptografada = stringCriptografada.toLowerCase();

  for (let i = 0; i < chaves.length; i++) {
    if (stringCriptografada.includes(chaves[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(
        chaves[i][0],
        chaves[i][1]
      );
    }
  }
  return stringCriptografada;
}

function descriptografar() {
  const text = convertDesencript(textArea.value);
  mensagem.value = text;
  textArea.value = "";
}

function convertDesencript(stringDescriptografada) {
  let chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for (let i = 0; i < chaves.length; i++) {
    if (stringDescriptografada.includes(chaves[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        chaves[i][1],
        chaves[i][0]
      );
    }
  }
  return stringDescriptografada;
}

function copy(){
  navigator.clipboard.writeText(mensagem.value).then(()=>
  {alert('Copiado')})
}