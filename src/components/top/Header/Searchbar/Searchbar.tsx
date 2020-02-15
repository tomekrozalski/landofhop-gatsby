import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import debounce from 'lodash/debounce';
import { useIntl } from 'gatsby-plugin-intl';

import { NavigationContext, SearchContext } from 'utils/contexts';
import { serverCall } from 'utils/helpers';
import { Button, Input, Wrapper } from '.';

const Searchbar = () => {
	const { locale } = useIntl();
	const inputRef = useRef<HTMLInputElement>(null!);
	const { setLoginbar, setNavbar, setSearchbarActive } = useContext(NavigationContext);
	const { setLoading, setNothingFound, setSearchResults } = useContext(SearchContext);
	const [isActive, setActive] = useState(false);
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

	useEffect(() => {
		if (searchFor) {
			setNothingFound(false);
			setLoading(true);

			serverCall({
				method: 'POST',
				path: 'beverage/search',
				body: JSON.stringify({ phrase: searchFor, language: locale })
			})
				.then(values => {
					if (!values.length) {
						setNothingFound(true);
					}

					setSearchResults(values);
					setLoading(false);
				});
		} else {
			setSearchResults([]);
		}
	}, [searchFor]);

	useEffect(() => {
		if (isActive) {
			setLoginbar(false);
			setNavbar(false);
			inputRef.current.focus();
		} else {
			setSearchbarActive(false);
			setInput('');
			setSearchResults([]);
			setSearchFor('');
			setNothingFound(false);
		}
	}, [isActive]);

	useEffect(() => {
		return () => changeSearchFor.cancel();
	}, []);

	return (
		<Wrapper isActive={isActive}>
			<Input
				isActive={isActive}
				value={input}
				onChange={onSearchChange}
				ref={inputRef}
			/>
			<Button isActive={isActive} setActive={setActive} />
		</Wrapper>
	);
}

export default Searchbar;
