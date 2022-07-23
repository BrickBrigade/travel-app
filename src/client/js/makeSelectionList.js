import makeMap from "./makeMap";
export default function printInfo(selection){
	let coords = selection.dataset.coords.split(',');
	let today = new Date();
	let txtDate = Date.parse(document.getElementById('date').value);
		if(isNaN(txtDate)){txtDate = Date.parse(today);}
	let nextWeek = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7));
	let results = document.getElementById('results');
	let params = new URLSearchParams({ locationCoords: `lat=${coords[0]}&lon=${coords[1]}` });
	(function clearResults(){
		let nameList = document.getElementById('nameList');
		let infoList = document.getElementById('infoList');
		let map = document.getElementById('map');
		if(nameList != null){
			results.removeChild(nameList);
		}
		if(infoList != null){
			results.removeChild(infoList);
		}
		if(map != null){
			results.removeChild(map);
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
		// let infoPieces = [`${res.data[0].temp}\u2109`, `${res.data[0].rh}%`];
		// let infoPieceTitles = ['Temperature', 'Humidity'];
		for (let i in listItemTitles){
			let listItem = document.createElement('li');
			switch (listItemTitles[i]) {
				case 'Destination':
				{
					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong><br>${res.city_name}, ${res.state_code}, ${res.country_code}<br>`;
					break;
				}
				case '16-day Weather Forecast':
				{
					let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
					listItem.innerHTML = `<strong>${listItemTitles[i]}:</strong>`;
					let tableDiv = document.createElement('div');
					tableDiv.classList.add('table');
					let weatherTable = document.createElement('table');
					let thead = document.createElement('thead');
					let tbody = document.createElement('tbody');


					let row_day = document.createElement('tr');
					for (let i in res.data){
						let heading = document.createElement('th');
						let day = new Date(res.data[i].valid_date.replace(/-/g, '/'));
						// console.log(day);
						heading.innerHTML = `${weekDays[day.getDay()]}`;
						row_day.appendChild(heading);
					}
					thead.appendChild(row_day);

					let row_temp = document.createElement('tr');
					for (let i in res.data){
						let tempCell = document.createElement('td');
						tempCell.innerHTML = `Average: ${Math.round(res.data[i].temp)}\u2103/${Math.round((res.data[i].temp*9/5)+32)}\u2109`;
						row_temp.appendChild(tempCell);
					}
					tbody.appendChild(row_temp);

					let row_humid = document.createElement('tr');
					for (let i in res.data){
						let humidCell = document.createElement('td');
						humidCell.innerHTML = `Humidity: ${Math.round(res.data[i].rh)}`;
						row_humid.appendChild(humidCell);
					}
					tbody.appendChild(row_humid);

					weatherTable.appendChild(thead);
					weatherTable.appendChild(tbody);
					tableDiv.appendChild(weatherTable);
					listItem.appendChild(tableDiv);
					break;
				}
			}
			infoList.appendChild(listItem);
		}
		fragment.appendChild(infoList);
		results.appendChild(fragment);
	}
	function printImage(){
		const mapDiv =  document.createElement('div');
		mapDiv.className='map';
		mapDiv.id='map';
		results.appendChild(mapDiv);
		makeMap(coords[0], coords[1]);
	}
	if (txtDate < nextWeek){
		fetch('http://localhost:3000/api/weather/current?'+params.toString())
		.then(weatherRes=>weatherRes.json())
		.then((weatherRes) => {
			printCurrentInfo(weatherRes);
			printImage();
		});
	}else{
		fetch('http://localhost:3000/api/weather/future?'+params.toString())
		.then(res=>res.json())
		.then((res) => {
			printFutureInfo(res);
			printImage();
		});
	}
}