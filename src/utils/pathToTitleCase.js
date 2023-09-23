// https://stackoverflow.com/questions/64489395/converting-snake-case-string-to-title-case
export const pathToTitleCase = (s) => {
	return s
		.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
		.replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()); // First char after each -/_
};
