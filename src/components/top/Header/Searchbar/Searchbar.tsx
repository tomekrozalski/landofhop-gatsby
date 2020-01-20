import React, { useState } from 'react';

import { Button, Input, Wrapper } from '.';

const Searchbar = () => {
	const [input, setInput] = useState('');

	return (
		<Wrapper>
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
