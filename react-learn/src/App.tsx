/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Profile } from './Interfaces/GithubProfile';

//https://api.github.com/users/manoj27110696

function App({ login }: { login: string }) {
	const [data, setData] = useState<Profile>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!login) return;
		setLoading(true);
		fetch(`https://api.github.com/users/${login}`)
			.then((response) => response.json())
			.then(setData)
			.then(() => setLoading(false))
			.catch(setError);
	}, [login]);

	if (loading) return <h1>Loading..</h1>;
	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;

	if (data) {
		return (
			<div>
				<h1>Name:{data.name}</h1>
				<p>Location: {data.location}</p>
				<img alt={data.login} src={data.avatar_url} />
			</div>
		);
	}
	return <div>No data</div>;
}



export default App;
