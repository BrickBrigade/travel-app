function printInfo(selection){
	let coords = selection.dataset.coords.split(',');

	var today = new Date();
	console.log(`today = ${today}`);
	var txtDate = document.getElementById('date');
	if(txtDate.value == ""){
		console.log('no date was entered');
		txtDate = today;
	}
	console.log(`txtDate: ${Date.parse(txtDate.value)}`);
	var nextWeek = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7));
	console.log(`nextWeek: ${nextWeek}`);




	let results = document.getElementById('results');



	let params = new URLSearchParams({ locationCoords: `lat=${coords[0]}&lon=${coords[1]}` });
	console.log('fetching from weather api...');

	// function getWeekForecast(){}
	(function clearResults(){
		let nameList = document.getElementById('nameList');
		let infoList = document.getElementById('infoList');
		if(infoList != null) {
			results.removeChild(infoList);
		}
		if(nameList != null){
			results.removeChild(nameList);
		}
	})();
	function printCurrentInfo(res){
		let fragment = document.createDocumentFragment();
		let infoList = document.createElement('ul');
		infoList.id = 'infoList';
		let listItemTitles = ['Destination', 'Weather'];
		let infoPieces = [`${res.data[0].temp}\u2109`, `${res.data[0].rh}%`];
		let infoPieceTitles = ['Temperature', 'Humidity'];
		for (let i in listItemTitles){
			let listItem = document.createElement('li');
			switch (listItemTitles[i]) {
				case 'Destination':
				{
					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong><br>${res.data[0].city_name}, ${res.data[0].state_code}, ${res.data[0].country_code}<br><br>`;
					break;
				}
				case 'Weather':
				{
					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong><br>`;
					let weatherList = document.createElement('ul');
					for (let i in infoPieces){
						let weatherItem = document.createElement('li');
						weatherItem.innerHTML = `${infoPieceTitles[i]}: ${infoPieces[i]}`;
						weatherList.appendChild(weatherItem);
					}
					listItem.appendChild(weatherList);
					break;
				}
			}
			infoList.appendChild(listItem);
		}
		fragment.appendChild(infoList);
		results.appendChild(fragment);
	}
	function printFutureInfo(res){
		let fragment = document.createDocumentFragment();
		let infoList = document.createElement('ul');
		infoList.id = 'infoList';
		let listItemTitles = ['Destination', '16-day Weather Forecast'];
		let infoPieces = [`${res.data[0].temp}\u2109`, `${res.data[0].rh}%`];
		let infoPieceTitles = ['Temperature', 'Humidity'];
		for (let i in listItemTitles){
			let listItem = document.createElement('li');
			switch (listItemTitles[i]) {
				case 'Destination':
				{
					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong><br>${res.city_name}, ${res.state_code}, ${res.country_code}<br><br>`;
					break;
				}
				case '16-day Weather Forecast':
				{
					let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong>`;
					let weatherTable = document.createElement('table');
					let thead = document.createElement('thead');
					let tbody = document.createElement('tbody');
					weatherTable.appendChild(tbody);

					let row_1 = document.createElement('tr');
					for (let i in res.data){
						let heading = document.createElement('th');
						let day = new Date(res.data[i].valid_date.replace(/-/g, '/'));
						console.log(day);
						heading.innerHTML = `${weekDays[day.getDay()]}`;
						row_1.appendChild(heading);
					}
					thead.appendChild(row_1);
					weatherTable.appendChild(thead);
					listItem.appendChild(weatherTable);
					break;
				}
			}
			infoList.appendChild(listItem);
		}
		fragment.appendChild(infoList);
		results.appendChild(fragment);
	}
	function printCurrentWeather(){
		fetch('http://localhost:3000/api/weather/current?'+params.toString())
		.then(res => res.json())
		.then((res) => {
			printCurrentInfo(res);
		});
	}
	function printFutureWeather(){
		fetch('http://localhost:3000/api/weather/future?'+params.toString())
		.then(res => res.json())
		.then((res) => {
			printFutureInfo(res);
		});
	}

	if (Date.parse(txtDate) < nextWeek){
		printCurrentWeather();
	}else{
		printFutureWeather();
	}
	
	// fetch('http://localhost:3000/api/weather/current?'+params.toString())
	// .then(res => res.json())
	// .then((res) => {
	// 	let fragment = document.createDocumentFragment();
	// 		let infoList = document.createElement('ul');
	// 		infoList.id = 'infoList';

	// 		let listItemTitles = ['Destination', 'Weather'];
	// 		let infoPieces = [`${res.data[0].temp}\u2109`, `${res.data[0].rh}%`];
	// 		let infoPieceTitles = ['Temperature', 'Humidity'];

	// 		for (let i in listItemTitles){
	// 			let listItem = document.createElement('li');
	// 			switch (listItemTitles[i]) {
	// 				case 'Destination':
	// 				{
	// 					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong><br>${res.data[0].city_name}, ${res.data[0].state_code}, ${res.data[0].country_code}<br><br>`;
	// 					break;
	// 				}
	// 				case 'Weather':
	// 				{
	// 					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong><br>`;
	// 					let weatherList = document.createElement('ul');
	// 					for (let i in infoPieces){
	// 						let weatherItem = document.createElement('li');
	// 						weatherItem.innerHTML = `${infoPieceTitles[i]}: ${infoPieces[i]}`;
	// 						weatherList.appendChild(weatherItem);
	// 					}
	// 					listItem.appendChild(weatherList);
	// 					break;
	// 				}
	// 			}
	// 			infoList.appendChild(listItem);
	// 		}
	// 		fragment.appendChild(infoList);
	// 	results.appendChild(fragment);
	// });
}


module.exports = printInfo;