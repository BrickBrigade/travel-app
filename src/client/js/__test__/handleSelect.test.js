import handleSelect from '../handleSelect';
import printInfo from '../makeSelectionList';
jest.mock('../makeSelectionList');

document.body.innerHTML=
`
	<li class="nameItem" data-index="0" data-coords="40.71427,-74.00597">
		New York, NY, US
	</li>
	<li class="nameItem" data-index="1" data-coords="40.66677,-73.88236">
		East New York, NY, US
	</li><li class="nameItem" data-index="2" data-coords="42.65258,-73.75623">
		Albany, NY, US
	</li>
`;

test('should call printInfo with selected item', ()=>{
	handleSelect();
	document.getElementsByClassName('nameItem')[0].click();
	expect(printInfo).toHaveBeenCalledWith(document.getElementsByClassName('nameItem')[0]);
});


