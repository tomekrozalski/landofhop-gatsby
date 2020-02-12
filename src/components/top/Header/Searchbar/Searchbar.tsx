import React, { useCallback, useEffect, useContext, useState } from 'react';
import debounce from 'lodash/debounce';

import { NavigationContext, SearchContext } from 'utils/contexts';
import { serverCall } from 'utils/helpers';
import { Button, Input, Wrapper } from '.';

const Searchbar = () => {
	const { setSearchbarActive } = useContext(NavigationContext);
	const { setSearchResults } = useContext(SearchContext);
	const [input, setInput] = useState('');
	const [searchFor, setSearchFor] = useState('');

	const changeSearchFor = debounce(setSearchFor, 1000);
	const handleChange = useCallback(changeSearchFor, []);

	const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;

		if (value) {
			setSearchbarActive(true);
		}

		handleChange(value);
		setInput(value);
	}

	const onSearchExit = () => {
		setSearchbarActive(false);
		setInput('');
		setSearchResults([]);
		setSearchFor('');
	}

	useEffect(() => {
		if (searchFor) {
			serverCall({
				method: 'POST',
				path: 'beverage/search',
				body: JSON.stringify({ phrase: searchFor, language: "pl" })
			})
				.then(setSearchResults);
		} else {
			setSearchResults([]);
		}
	}, [searchFor])

	useEffect(() => {
		return () => changeSearchFor.cancel();
	}, []);

	return (
		<Wrapper>
			<Input
				value={input}
				onChange={onSearchChange}
				onBlur={onSearchExit}
			/>
			<Button />
		</Wrapper>
	);
}

export default Searchbar;
