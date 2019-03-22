
var storageKey='todoList';
var data = localStorage.getItem(storageKey);
var htmlList = document.getElementById('todo');
var addBtn= document.getElementById('btn');

addBtn.addEventListener('click',addItem);
htmlList.addEventListener('click',onClickLicked);

var todoList;

if(data){
	todoList = JSON.parse(data);
}
else{
	todoList=[];
}

function onClickLicked(event){
	//console.log(event);
	var button = event.target;
	if(button.tagName === 'BUTTON'){
		var id = parseInt(button.dataset.id);
		todoList.splice(id,1);
		render();
		localStorage.setItem(storageKey,JSON.stringify(todoList));
	}
}

function render(){
	var content= todoList.map(function(item,index){
		return '<li>' + item + ' <button data-id="'+ index+ '">Xoa </button> </li>' ;
	});
	htmlList.innerHTML = content.join('');
}


function addItem(){
	var input =document.getElementById('item');
	var newItem=input.value;
	if(newItem)
	{
		todoList.push(newItem);
		render();
		input.value='';
		localStorage.setItem(storageKey,JSON.stringify(todoList));
	}
}
render();
