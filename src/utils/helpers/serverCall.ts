type Props = {
	method?: 'GET' | 'POST'
	path: string
	token?: string
	body?: string
}

const serverCall = ({
	method = 'GET',
	path,
	token,
	...rest
}: Props) => (
		fetch(`${process.env.API_SERVER}/${path}`, {
			method,
			headers: {
				Authorization: token ? `Bearer ${token}` : '',
				'Content-Type': 'application/json',
			},
			...rest,
		})
			.then(response => response.json())
	);

export default serverCall;
