function printInfo(selection){
	let coords = selection.dataset.coords.split(',');

	let results = document.getElementById('results');



	let params = new URLSearchParams({ locationCoords: `lat=${coords[0]}&lon=${coords[1]}` });
	console.log('fetching from weather api...');
	fetch('http://localhost:3000/api/weather?'+params.toString())
	.then(res => res.json())
	.then((res) => {
		let nameList = document.getElementById('nameList');
		let infoList = document.getElementById('infoList');

		if(infoList != null) {
			results.removeChild(infoList);
		}
		if(nameList != null){
			results.removeChild(nameList);
		}

		let fragment = document.createDocumentFragment();
			infoList = document.createElement('ul');
			infoList.id = 'infoList';

			let listItemTitles = ['Destination', 'Weather'];
			let infoPieces = [`${res.data[0].temp}\u2109`, `${res.data[0].rh}%`];
			let infoPieceTitles = ['Temperature', 'Humidity'];

			for (let i in listItemTitles){
				console.log(`running for loop itterance ${i}`);
				let listItem = document.createElement('li');
				console.log(`listItemTitles${i}: ${listItemTitles[i]}`);
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
	});
}


module.exports = printInfo;