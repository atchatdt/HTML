var students =[
		{name: 'A',age:23},
		{name: 'B',age:24},
		{name: 'C',age:25},
		{name: 'D',age:26},
		{name: 'E',age:23},
		{name: 'F',age:24},
		{name: 'G',age:25},
		{name: 'H',age:26},
	];

	var ageFilter= document.getElementById('agefilter');
	ageFilter.addEventListener('change',onAgeFilterCHange);

	function onAgeFilterCHange(){

		var age= parseInt(ageFilter.value);
		console.log(age);
		var filterStudent = students.filter(function(value){
				return value.age === age;
		});
		console.log(filterStudent);
		render(filterStudent);
	}
	function render(student){
		var tableHtml = document.getElementById('students');
		var content = student.map(function(item){
							return '<tr><td>' + item.name + '</td><td>' +item.age + '</td></tr>';			
							});
		tableHtml.innerHTML=content.join('');
	}
	render(students);

	//https://www.w3schools.com/jsref/event_onchange.asp