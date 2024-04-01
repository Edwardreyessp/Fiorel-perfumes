'use client';
import { Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

export const GoogleButton = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<Button
				variant='contained'
				onClick={() =>
					signOut({
						callbackUrl: '/',
					})
				}
			>
				SignOut
			</Button>
		);
	}

	return (
		<Button variant='contained' onClick={() => signIn()}>
			SignIn With Google
		</Button>
	);
};
