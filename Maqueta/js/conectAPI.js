const formularioR = document.querySelector('.Container')

const url= 'http://localhost:8088/Tokenizer/Clientes/listar'

fetch(url)
.then(res => res.json())
.then(data=> {
    data.forEach(Cliente=>{
        console.log(Cliente.rfc)
        const p = document.createElement('p')
        p.innerHTML= Cliente.rfc
        formularioR.appendChild(p)
    });
    console.log(data)
})
.catch(err => console.log(err))