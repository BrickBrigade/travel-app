import printList from "./makeLocationList";
export default function handleSubmit(e) {
	let formCity = document.getElementById('city').value;
	let formState = document.getElementById('state').value;
	let formCountry = document.getElementById('country').value;
	console.log(`handleSubmit() ran with parameter: ${formCity}, ${formState}`);
	
	if (formCity != "" && formCountry != ""){
		e.preventDefault();
		printList();
	}
	else{
		e.preventDefault();
		alert('Please fill "Country" and "City" boxes');
	}
}