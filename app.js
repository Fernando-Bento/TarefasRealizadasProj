const transferir = document.querySelector("#transferir")
const voltar = document.querySelector("#voltar")
const tarefas = [...document.querySelectorAll(".tarefa")]
const feito = document.querySelector("#feito")
const fazer = document.querySelector("#fazer")

tarefas.map((el)=>{

    el.addEventListener('click', ()=>{

        if(el.classList.contains("marcado") == false){

            el.classList.add("marcado")

        }else{

            el.classList.remove("marcado")

        }

    })
})

transferir.addEventListener('click', ()=>{

    tarefas.map((el)=>{

        if(el.classList.contains("marcado")){

            feito.appendChild(el)

        }
    })
})

voltar.addEventListener('click', ()=>{

    tarefas.map((el)=>{

        if(el.classList.contains("marcado")){

            fazer.appendChild(el)
            
        }
    })
})