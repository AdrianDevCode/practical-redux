const renderDogsApp = () => {
	let { dogs } = store.getState();
	return `
		<div>
			<button onClick="getDogs()">Get Doggo</button>
			<div>
				<img src="${dogs.dogPicture}">
			</div>
		</div>
	`
}