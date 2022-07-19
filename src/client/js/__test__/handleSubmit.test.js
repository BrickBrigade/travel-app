import printList from '../makeLocationList';
import handleSubmit from '../handleSubmit';
jest.mock('../makeLocationList');
jest.spyOn(window, 'alert').mockImplementation(()=>{});
const event = Object.assign(jest.fn(), { preventDefault:()=>{} });
document.body.innerHTML=
`<input class="testInputs" id="country" value="us">
<input class="testInputs" id="city" value="new york">
<input id="state">`;

test('should call printList when provided required input', ()=>{
	handleSubmit(event);
	expect(printList).toHaveBeenCalled();
});
test('should prompt user when not provided required input', ()=>{
	document.querySelectorAll('.testInputs').forEach(element => {element.value='';});
	handleSubmit(event);
	expect(window.alert).toHaveBeenCalledWith(`Please fill "Country" and "City" boxes`);
});
test('should not call printList when not provided required input', ()=>{
	const event = Object.assign(jest.fn(), { preventDefault:()=>{} });
	handleSubmit(event);
	expect(printList).not.toHaveBeenCalled();
});