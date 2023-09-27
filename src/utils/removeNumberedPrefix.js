export const removeNumberedPrefix = (data) => {
	const prefix = new RegExp('^[0-9]{2}-', 'g');
	return data.replace(prefix, '');
};
