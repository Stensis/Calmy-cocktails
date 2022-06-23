const encodedParams = new URLSearchParams();
encodedParams.append("volumeId", "<REQUIRED>");
encodedParams.append("accessToken", "<REQUIRED>");
encodedParams.append("shelfId", "<REQUIRED>");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'f65e2f85c4mshfd238deadc30f07p192954jsnd2b2e354f582',
		'X-RapidAPI-Host': 'GoogleBooksraygorodskijV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://googlebooksraygorodskijv1.p.rapidapi.com/addVolumeToBookshelf', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));