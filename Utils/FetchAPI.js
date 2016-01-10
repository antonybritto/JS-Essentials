import promisedXHR from 'promisedXHR';

const fetchAPI = (url, config = {}) => {
	if(window.fetch) {
		let headerConfig = {
			'Content-Type': 'application/json'
		};
		let headers = new Headers(Object.assign(headerConfig, config.header));
		let requestConfig = {
			'method': 'GET',
			'mode': 'same-origin',
			'credentials': 'same-origin',
			'cache': 'default'
		};
		let request = new Request(url, Object.assign(requestConfig, config, { 'headers': headers }));
		return fetch(request);
	} else {
		return promisedXHR(url, config.method);
	}
};

export default fetchAPI;