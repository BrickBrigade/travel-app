import printList from '../makeLocationList';
import handleSubmit from '../handleSubmit';
jest.mock('../makeLocationList');

test('should call printList when provided required input', ()=>{
	document.body.innerHTML=
	`<form onsubmit="return handleSubmit(event)">
		<input id="country" value="us"><input id="city" value="new york"><input id="state"><input id="date" type="date"><input type="submit" value="Submit"></form>`;
	const event = Object.assign(jest.fn(), { preventDefault:()=>{} });
	handleSubmit(event);
	expect(printList).toHaveBeenCalled();
});