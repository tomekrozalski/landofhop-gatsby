import React, { useState } from 'react';

import { Button, Input, Wrapper } from '.';

const Searchbar = () => {
	const [input, setInput] = useState('');

	const onSearchChange = async (e: any) => {
		if (e.target) {
			const rawResults = await fetch('http://localhost:4000/beverage/search', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ phrase: e.target.value, language: "pl" })
			});

			const results = await rawResults.json();
			console.log('results', results);

			setInput(e.target.value);
		}
	}

	return (
		<Wrapper>
			<Input
				value={input}
				onChange={onSearchChange}
				onBlur={() => setInput('')}
			/>
			<Button />
		</Wrapper>
	);
}

export default Searchbar;
