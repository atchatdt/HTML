
var todoList =['Eat','Sleep'];

function render(){


	var  htmlList = document.getElementById('todo');

	var content= todoList.map(function(item){
		return '<li>' + item + '</li>' + '<button onclick = deleteItem();> Xoa </button>';
	});


	htmlList.innerHTML = content.join('');

}


function addItem(){
	var item =document.getElementById('item');
	var newItem=item.value;
	todoList.push(newItem);
	render();
	item.value='';
}

function deleteItem(){
	console.log('deleteItem');
}
render();


