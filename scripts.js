const button = document.querySelector('.buttonAddTask')
const input = document.querySelector('.inputTask')
const listaCompleta = document.querySelector('.listTask')


let minhaListaDeItens = []


function adicionarNovaTarefa() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })

    input.value =''

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi +`             
        <li class="task ${item.concluida && "done"}">
           <img src="./img/checked.png " alt="check-na-tarefa" onclick="tarefaconcluidas(${posicao})">
           <p>${item.tarefa}</p>
           <img src="./img/trash.png" alt="tarefa-Para-O-Lixo" oncLick="deletarTarefa(${posicao})">
        </li>
        
        `

    })

    listaCompleta.innerHTML = novaLi 

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function tarefaconcluidas(posicao){

   minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida


   mostrarTarefas()
   
}

function deletarTarefa(posicao){
    minhaListaDeItens.splice(posicao,1)

    mostrarTarefas()

}

function recarregarTarefas(){

    const tarefasDoLocalStorage = localStorage.getItem('lista')


    if (tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    } 

    mostrarTarefas()

}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)