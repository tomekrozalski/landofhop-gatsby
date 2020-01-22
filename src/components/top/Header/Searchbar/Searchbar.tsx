import React, { useState } from 'react';
import { SearchBox } from 'react-instantsearch-dom';

import { Button, Input, Wrapper } from '.';

const Searchbar = () => {
	const [input, setInput] = useState('');

	return (
		<Wrapper>
			<SearchBox />
			<Input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onBlur={() => setInput('')}
			/>
			<Button />
		</Wrapper>
	);
}

export default Searchbar;
