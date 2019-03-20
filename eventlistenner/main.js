var todoList =['Eat','Sleep'];

var addBtn= document.getElementById('btn');
//addBtn.onclick=addItem;
addBtn.addEventListener('click',addItem);
addBtn.addEventListener('click',function(){
	console.log('anonymous');
});
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
	}
}
render();
