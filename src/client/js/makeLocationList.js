const handleSelect = require("./handleSelect");

function printList() {
	console.log("printList() called");
	let country = document.getElementById("country").value;
	let name = document.getElementById('city').value;
	let state = document.getElementById('state').value;



	// let adminCode1 = document.getElementById('state').value;

	let params = new URLSearchParams({ paramstring: `name=${name}&country=${country}&adminCode1=${state}` });

	fetch('http://localhost:3000/api/geo?'+params.toString())
	.then(res => res.json())
	.then((res) => {
		let nameList = document.getElementById('nameList');
		let infoContainer = document.getElementById('infoList');
		let results = document.getElementById('results');

		if(infoContainer != null) {
			results.removeChild(infoContainer);
		}
		if(nameList != null){
			results.removeChild(nameList);
		}

		let fragment = document.createDocumentFragment();

			nameList = document.createElement('ul');
			nameList.id = 'nameList';
			results.appendChild(nameList);

			for (let i in res.geonames){
				console.log(res.geonames[i].name);
				console.log(res.geonames[i].adminCode1);
				console.log(res.geonames[i].countryCode);
				let item = document.createElement('li');
				item.innerHTML = `${res.geonames[i].name}, ${res.geonames[i].adminCode1}, ${res.geonames[i].countryCode}`;
				item.className = 'nameItem';
				item.dataset.index = i;
				item.dataset.coords = [res.geonames[i].lat, res.geonames[i].lng];
				nameList.appendChild(item);
			}


		document.appendChild(fragment);
		// let nameresult = document.getElementById('namelist');
		// if (nameresult.firstChild!=null)
		// 	while (nameresult.firstChild) {
		// 		nameresult.removeChild(nameresult.firstChild);
		// 		console.log('removed child');
		// 	}
		// let infoDiv = document.getElementById('locationInfoContainer');
		// if (infoDiv != null) {
		// 	while (infoDiv.firstChild){
		// 		infoDiv.removeChild(infoDiv.firstChild);
		// 	}
		// }
		// for (let i = 0; i < res.geonames.length; i++) {
		// 	let li = document.createElement('li');
		// 	nameresult.appendChild(li);
		// 	li.innerHTML= res.geonames[i].name+', '+res.geonames[i].adminName1;
		// 	li.className = 'searchName';
		// 	li.dataset.index = i;
		// 	li.dataset.coords = [res.geonames[i].lat, res.geonames[i].lng];
		// }
		handleSelect(res);
	});
}
module.exports = printList;
