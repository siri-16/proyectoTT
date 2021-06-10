const formularioR = document.querySelector('#787' )

const url= 'localhost:8088/Tokenizer/Clientes/listar'

fetch(url)
.then(res => res.json())
.then(data=> console.log(data))
.catch(err => console.log(err))