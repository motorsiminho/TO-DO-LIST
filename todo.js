var lista=document.querySelector("#app ul");
var botao=document.querySelector("#app button");
var texto=document.querySelector("#app input");
var todos;

localStorage.getItem('list_todos') ? todos=JSON.parse(localStorage.getItem('list_todos')) : todos=[];

renderizarToDo();

function renderizarToDo(){
  lista.innerHTML="";
  for(todo of todos){
    var elemento=document.createElement("li");
    elemento.textContent=todo;
    var link=document.createElement("a");
    var textolink=document.createTextNode("Excluir");
    link.appendChild(textolink);
    link.setAttribute("href", "#");
    var posicao=todos.indexOf(todo);
    link.setAttribute("onclick", "removerToDo("+posicao+")");
    elemento.appendChild(link);
    lista.appendChild(elemento);
  }
}

function adicionarToDo(){
  var t=texto.value;
  todos.push(t);
  texto.value="";
  renderizarToDo();
  saveToStorage();
}

function removerToDo(posicao){
  todos.splice(posicao,1);
  renderizarToDo();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
