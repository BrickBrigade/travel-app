function handleSubmit(e) {
	let formText = document.getElementById('location').value;
	console.log(`handleSubmit ran with parameter: ${formText}`);
	e.preventDefault();
}

export { handleSubmit };