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
		let nameresult = document.getElementById('namelist');
		while (nameresult.firstChild) {
			nameresult.removeChild(nameresult.firstChild);
			console.log('removed child');
		}
		let infoDiv = document.getElementById('locationInfoContainer');
		if (infoDiv != null) {
			while (infoDiv.firstChild){
				infoDiv.removeChild(infoDiv.firstChild);
			}
		}
		for (let i = 0; i < res.geonames.length; i++) {
			let li = document.createElement('li');
			nameresult.appendChild(li);
			li.innerHTML= res.geonames[i].name+', '+res.geonames[i].adminName1;
			li.className = 'searchName';
			li.dataset.index = i;
			li.dataset.coords = [res.geonames[i].lat, res.geonames[i].lng];
		}
		handleSelect(res);
	});
}
module.exports = printList;
