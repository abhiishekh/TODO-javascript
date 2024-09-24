

let todos = []
 function createDiv(todos){

    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const button = document.createElement("button")
   

    button.innerHTML = 'Delete'
    button.classList.add('delete-button');

    div.setAttribute("class","todo") 
    h3.innerHTML = `${todos.title} <input type="checkbox" />`
    div.appendChild(h3)
    div.appendChild(button)

    button.addEventListener('click',()=>{
        deleteTODO(todos.id)
    })
    return div;
 }
 function render(){
    document.querySelector(".todo-result").innerHTML =''

    for(let i =0; i< todos.length ; i++){
        const div = createDiv(todos[i]);
        const resultdiv = document.querySelector(".todo-result")
        resultdiv.appendChild(div)
    }
 }
 function addtodo(){

    const input = document.querySelector("input")
    const title = input.value
    if(title){

        todos.push({
            id:Date.now(),
            title:title
        })
        input.value = ''
        
        render()
    }
 }

 function deleteTODO(id){
    todos = todos.filter(todo => todo.id !== id);
    render()
 }
