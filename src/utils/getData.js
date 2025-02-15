export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const getData = async (url, options) => {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}