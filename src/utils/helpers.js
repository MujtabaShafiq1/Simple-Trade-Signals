export const getError = (e) => {
	return e.response?.data?.message || 'Server Error, try again later';
};

export const validationErrors = (error) => {
	const validationErrors = {};
	error.inner.forEach((e) => {
		validationErrors[e.path] = e?.message;
	});
	return validationErrors;
};