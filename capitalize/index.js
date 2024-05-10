export default function capitalize(input) {
	if(typeof input != 'string') {
		throw new Error(`Input recieved in capitalize is not a string.`);
	}
	const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
	return capitalizedInput;
};