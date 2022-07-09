function printInfo(selection){
	let coords = selection.dataset.coords.split(',');
	let nameresult = document.getElementById('namelist');
	let results = document.getElementById('result');
	(()=>{
		while (nameresult.firstChild) {
			nameresult.removeChild(nameresult.firstChild);
			console.log('removed child');
		}
	})();

	let params = new URLSearchParams({ locationCoords: `lat=${coords[0]}&lon=${coords[1]}` });
	console.log('fetching from weather api...');
	fetch('http://localhost:3000/api/weather?'+params.toString())
	.then(res => res.json())
	.then((res) => {
		console.log(res);
		let infoContainer = document.getElementById('locationInfoContainer');
		if (infoContainer == null) {
			let fragment = document.createDocumentFragment();
	
			let newContainer = document.createElement('div');
			newContainer.id = 'locationInfoContainer';
			fragment.appendChild(newContainer);
			results.appendChild(fragment);
		}	
		while (infoContainer.firstChild){
			infoContainer.removeChild(infoContainer.firstChild);
		}
		let newInfoPiece = document.createElement('h1');
		newInfoPiece.innerHTML = `Destination:<br>${res.data[0].city_name}, ${res.data[0].state_code}, ${res.data[0].country_code}`;
		infoContainer.appendChild(newInfoPiece);		
	});
}

module.exports = printInfo;