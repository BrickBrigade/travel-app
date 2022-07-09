const printInfo = require('./makeSelectionInfo');

function handleSelect() {
	
	const listItems = document.getElementsByClassName('searchName');
	let selection = undefined;
	for (let item of listItems) {
		item.addEventListener('click', (e) => {
			selection = e.target;
			console.log(`selection = ${selection.innerHTML}\nIndex: ${selection.dataset.index}\nCoords: ${selection.dataset.coords}`);
			printInfo(selection);
		});
	}
}
module.exports= handleSelect;