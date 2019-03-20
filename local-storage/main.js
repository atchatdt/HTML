var storageKey='todoList';
var data = localStorage.getItem(storageKey);
var todoList;
if(data){
	todoList = JSON.parse(data);
}
else{
	todoList=[];
}

var addBtn= document.getElementById('btn');
//addBtn.onclick=addItem;
addBtn.addEventListener('click',addItem);
function render(){
	var  htmlList = document.getElementById('todo');
	var content= todoList.map(function(item){
		return '<li>' + item + '</li>' ;
	});
	htmlList.innerHTML = content.join('');
}

function addItem(){
	var item =document.getElementById('item');
	var newItem=item.value;
	if(newItem)
	{
		todoList.push(newItem);
		render();
		item.value='';
		localStorage.setItem(storageKey,JSON.stringify(todoList));
	}
}
render();
