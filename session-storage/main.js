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
var item =document.getElementById('item');
item.value= sessionStorage.getItem('123');
item.addEventListener('change',updateSession);

function updateSession(){
	sessionStorage.setItem('123',item.value);
}
addBtn.addEventListener('click',addItem);
function render(){
	var  htmlList = document.getElementById('todo');
	var content= todoList.map(function(item){
		return '<li>' + item + '</li>' ;
	});
	htmlList.innerHTML = content.join('');
}

function addItem(){
	
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
