const printInfo = require('./makeSelectionList');

export default function handleSelect() {
	
	const nameItem = document.getElementsByClassName('nameItem');
	let selection = undefined;
	for (let item of nameItem) {
		item.addEventListener('click', (e) => {
			selection = e.target;
			// console.log(`selection = ${selection.innerHTML}\nIndex: ${selection.dataset.index}\nCoords: ${selection.dataset.coords}`);
			printInfo(selection);
		});
	}
}