
const agregar = document.querySelector('#inputTarea')
const btnGuardar = document.querySelector('#btnAgregar')
const list = document.querySelector('#ContenedorTarea')
const TareaPendiente = document.querySelector('#Tarea_Pendiente')

btnGuardar.addEventListener("click", (e) => {
e.preventDefault()
const textos = agregar.value;

if (textos !== ''){
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = textos
    li.appendChild(p)
    li.appendChild(Deletebtn())
    list.appendChild(li)
    
    agregar.value= ""
    
    TareaPendiente.style.display = "none"
}

})

function Deletebtn(){
    const deleteBTN = document.createElement('button')
    deleteBTN.textContent = "X"
    deleteBTN.className = "btn-delete"
   deleteBTN.addEventListener('click', (e) => {
    const item = e.target.parentElement 
    list.removeChild(item)

    const items = document.querySelectorAll('li')
    if (items.length === 0){
        TareaPendiente.style.display = "block"
    }

   })
   return deleteBTN
}