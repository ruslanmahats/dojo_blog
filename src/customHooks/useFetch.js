import { useEffect, useState } from "react";

export const useFetch = (url) => {

	const BASE_URL = 'https://jsonplaceholder.typicode.com/';

	const requestURL = BASE_URL + url;

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(requestURL)
			.then(response => {
				if (!response.ok) {
					throw Error('Error: Some error occured while fetching data.');
				}
				return response.json();
			})
			.then(data => {
				setIsLoading(false);
				setData(data);
				setError(null);
			})
			.catch(error => {
				setIsLoading(false);
				setData(null);
				setError(error.message);
			})
	}, [requestURL]);

	return { fetchApi: { data, setData, isLoading, error } }
}