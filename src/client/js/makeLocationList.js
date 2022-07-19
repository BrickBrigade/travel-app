const handleSelect = require("./handleSelect");

export default function printList() {
	console.log("printList() called");
	let country = document.getElementById("country").value;
	let name = document.getElementById('city').value;
	let state = document.getElementById('state').value;

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
				let item = document.createElement('li');
				item.innerHTML = `${res.geonames[i].name}, ${res.geonames[i].adminCode1}, ${res.geonames[i].countryCode}`;
				item.className = 'nameItem';
				item.dataset.index = i;
				item.dataset.coords = [res.geonames[i].lat, res.geonames[i].lng];
				nameList.appendChild(item);
			}
		document.appendChild(fragment);

		handleSelect(res);
	});
}
module.exports = printList;
