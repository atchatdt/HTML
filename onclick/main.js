
var todoList =['Eat','Sleep'];

function render(){


	var  htmlList = document.getElementById('todo');
/*
	var content= todoList.map(function(item){
		return '<li>' + item + '</li>' + '<button onclick = deleteItem();> Xoa </button>';
	});
	htmlList.innerHTML = content.join('');
	*/
	var Content='';
	for(var i=0;i< todoList.length;i++){
		Content += '<li onclick="deleteItem(' + i + ')">' + todoList[i] + '</li>';
	}
	htmlList.innerHTML=Content;
	

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

function deleteItem(index){
	todoList.splice(index,1);
	render();
}
render();


