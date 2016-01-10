const debounce = (fn, wait, immediate) => {
	let timeout;
	return () => {
		let context = this, args = arguments;
		let later = () => {
			timeout = null;
			fn.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) fn.apply(context, args);
	};
};

export default debounce;