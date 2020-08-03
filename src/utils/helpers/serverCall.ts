type Props = {
  formData?: boolean;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  token?: string;
  body?: string | FormData;
};

const serverCall = ({
  formData = false,
  method = 'GET',
  path,
  token,
  ...rest
}: Props) =>
  fetch(`${process.env.API_SERVER}/${path}`, {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      ...(!formData && { 'Content-Type': 'application/json' }),
    },
    ...rest,
  }).then(response => response.json());

export default serverCall;
