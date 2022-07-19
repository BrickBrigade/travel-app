import printList from '../makeLocationList';
import handleSubmit from '../handleSubmit';
jest.mock('../makeLocationList');
let formCity = 'new york';
let formState = 'ny';
let formCountry = 'us';
test('should call printList 1 time', ()=>{
	document.body.innerHTML=`
	<form onsubmit="return handleSubmit(event)">
		<input id="country" type="text" placeholder="Country: (required)">
		<input id="city" type="text" placeholder="City: (required)">
		<input id="state"type="text" placeholder="State:">

		<input id="date" type="date">
		<input type="submit" value="Submit">			
	</form>
	`;
	handleSubmit(event);
	expect(printList).toHaveBeenCalled();
});