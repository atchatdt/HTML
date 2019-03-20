//.children
//.textContent
//appendChild
//remove

var todoList= document.getElementById('todo-list');
console.log(todoList);
var newToDo= document.createElement('li');
// gán id cho thẻ khi mới thêm vào
newToDo.setAttribute('id','1')
newToDo.textContent='123';
todoList.appendChild(newToDo);
console.log(todoList);
newToDo = document.getElementById('1');
todoList.removeChild(newToDo);
console.log(todoList);
