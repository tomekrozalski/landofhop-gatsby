import React from 'react';
import styled from 'styled-components';

import { ErrorMessage } from '.';

const Name = styled.td`
	margin-right: 2rem;
	font-weight: var(--font-weight-medium);
`;

type Props = {
	errors: File[]
}

const Errors: React.FC<Props> = ({ errors }) => (
	<table>
		<tbody>
			{errors.map(({ name, size, type }) => (
				<tr key={name}>
					<Name>{name}</Name>
					<td><ErrorMessage size={size} type={type} /></td>
				</tr>
			))}
		</tbody>
	</table>
);

export default Errors;
