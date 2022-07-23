import handleSelect from "./handleSelect";

export default function printList() {
	let country = document.getElementById("country").value;
	let name = document.getElementById('city').value;
	let state = document.getElementById('state').value;

	let params = new URLSearchParams({ paramstring: `name=${name}&country=${country}&adminCode1=${state}` });

	fetch('http://localhost:3000/api/geo?'+params.toString())
	.then(res => res.json())
	.then((res) => {
		let results = document.getElementById('results');
		let nameList = document.getElementById('nameList');
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
		let fragment = document.createDocumentFragment();
			nameList = document.createElement('ul');
			nameList.id = 'nameList';
			for (let i in res.geonames){
				let item = document.createElement('li');
				item.innerHTML = `${res.geonames[i].name}, ${res.geonames[i].adminCode1}, ${res.geonames[i].countryCode}`;
				item.className = 'nameItem';
				item.dataset.index = i;
				item.dataset.coords = [res.geonames[i].lat, res.geonames[i].lng];
				nameList.appendChild(item);
			}
			results.appendChild(nameList);
		document.appendChild(fragment);

		handleSelect();
	});
}
