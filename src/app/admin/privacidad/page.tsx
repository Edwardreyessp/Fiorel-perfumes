import { Stack, Typography } from '@mui/material';
import { PrivacyText } from './PrivacyText';
import { Suspense } from 'react';

const PrivacityPage = () => {
	return (
		<Stack spacing={2} p={4}>
			<Typography variant='h1'>Aviso de privacidad</Typography>

			<Suspense fallback={<div>Loading...</div>}>
				<PrivacyText />
			</Suspense>
		</Stack>
	);
};

export default PrivacityPage;
