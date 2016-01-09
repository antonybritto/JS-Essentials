import promisedXHR from 'promisedXHR';

const fetchAPI = (url) => {
	if(window.fetch) {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		let request = new Request(url, {
			headers: headers,
			method: 'GET'
		});
		return fetch(request);
	} else {
		return promisedXHR(url);
	}
};

export default fetchAPI;