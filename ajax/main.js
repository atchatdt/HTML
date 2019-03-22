var url ='http://localhost:9081/todos';
var addBtn= document.getElementById('btn');

axios.get(url).then(function(res){
	var item= res.data;
	if(item){
		render(item);
	}
});

function render(item){
	var  htmlList = document.getElementById('todo');
	var content= item.map(function(item){
		return '<li>' + item.content + '</li>' ;
	});
	htmlList.innerHTML = content.join('');
}
