import printInfo from "./makeSelectionList";
export default function handleSelect() {
	const nameItem = document.getElementsByClassName('nameItem');
	for (let item of nameItem) {
		item.addEventListener('click', (e) => {
			printInfo(e.target);
		});
	}
}