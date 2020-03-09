type Props = {
	formData?: boolean
	method?: 'GET' | 'POST'
	path: string
	token?: string
	body?: any
}

const serverCall = ({
	formData = false,
	method = 'GET',
	path,
	token,
	...rest
}: Props) => (
		fetch(`${process.env.API_SERVER}/${path}`, {
			method,
			headers: {
				Authorization: token ? `Bearer ${token}` : '',
				...(!formData && { 'Content-Type': 'application/json' }),
			},
			...rest,
		})
			.then(response => response.json())
	);

export default serverCall;
