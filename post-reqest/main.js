var url ='http://localhost:9081/todos';

axios.get(url).then(function(res){
	var item= res.data;
	if(item){
		render(item);
	}
});

var addBtn= document.getElementById('btn');
addBtn.addEventListener('click',addItem);

function addItem(){
	var input =document.getElementById('item');
	var newItem = {
		content: input.value
	};
	console.log('123');
	axios.post(url,newItem);
}

function render(item){
	var  htmlList = document.getElementById('todo');
	var content= item.map(function(item){
		return '<li>' + item.content + '</li>' ;
	});
	htmlList.innerHTML = content.join('');
}
// chuyển trang: window.location.href
// địa chỉ từ link: location.hash