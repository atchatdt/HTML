

var todoList =['Eat','Sleep'];

var  htmlList = document.getElementById('todo');

var content= todoList.map(function(item){
	return '<li>' + item + '</li>';
});


htmlList.innerHTML = content.join('');

console.log(content);


