const form = document.querySelector('#form-contato')
const botaoEnviar =  document.querySelector('#btn-enviar')
const spanMsgEnviada = document.querySelector('.span-msg-enviada')
let formCorreto = true

botaoEnviar.addEventListener('click', () => {
    const todosOsCampos = document.querySelectorAll('.pega-input-js') 
    formCorreto = true

    for (i = 0; i < todosOsCampos.length; i++) {
        let proximoIrmaoDom = todosOsCampos[i].nextElementSibling

        if (todosOsCampos[i].value == '') {
            proximoIrmaoDom.style.display = 'block'
            todosOsCampos[i].setAttribute('style', 'border-color: red')
            spanMsgEnviada.style.display = 'none'
            proximoIrmaoDom.innerHTML = 'Preencha este campo!'  
            formCorreto = false              
        } 

        if (todosOsCampos[i].value != '') {
            todosOsCampos[i].setAttribute('style', 'border-color: black')
            proximoIrmaoDom.style.display = 'none'

            validarCampos(todosOsCampos[i], proximoIrmaoDom)
        }      
    }

    if (formCorreto) {
        spanMsgEnviada.style.display = 'block'
    } else {
        event.preventDefault()
    }

})

function validarCampos(todosOsCampos, proximoIrmaoDom) {
    if (todosOsCampos.value.length > 50 && todosOsCampos.value != '' && todosOsCampos.id == 'nome'
    || todosOsCampos.value.length > 50 && todosOsCampos.value != '' && todosOsCampos.id == 'assunto'
    || todosOsCampos.value.length > 300 && todosOsCampos.value != '' && todosOsCampos.id == 'mensagem'
    || todosOsCampos.value.length < 15 && todosOsCampos.value != '' && todosOsCampos.id == 'mensagem'
    ) {
        proximoIrmaoDom.innerHTML = 'Este campo só pode ter até 50 caracteres!'
        if (todosOsCampos.id == 'mensagem') {
            proximoIrmaoDom.innerHTML = 'Este campo só pode ter até 300 caracteres!'
            if (todosOsCampos.value.length < 15) {
                proximoIrmaoDom.innerHTML = 'Escreva no mínimo 15 caracteres!'
            } 
        }  
        campoComErroCaracteristicas(todosOsCampos, proximoIrmaoDom)
    } 

    if (todosOsCampos.id == 'email') {
        let stringBaseEmail = /\S+@\S+\.\S+/
        if (stringBaseEmail.test(todosOsCampos.value) == false && todosOsCampos.value != '' && todosOsCampos.id == 'email') {
            proximoIrmaoDom.innerHTML = 'Insira um email válido!'
            campoComErroCaracteristicas(todosOsCampos, proximoIrmaoDom)
        } 
    }
}

function campoComErroCaracteristicas(todosOsCampos, proximoIrmaoDom) {
    proximoIrmaoDom.style.display = 'block'
    todosOsCampos.setAttribute('style', 'border-color: red')
    spanMsgEnviada.style.display = 'none'
    return formCorreto = false
}

