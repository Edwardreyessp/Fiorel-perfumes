'use client';
import { auth } from '@/firebase';
import { AuthContext } from '@/providers';
import { Button } from '@mui/material';
import { useContext } from 'react';

export const GoogleButton = () => {
	const { loginGoogle, signOutGoogle } = useContext(AuthContext);

	if (auth.currentUser !== null) {
		return (
			<Button variant='contained' onClick={signOutGoogle}>
				SignOut
			</Button>
		);
	}

	return (
		<Button variant='contained' onClick={loginGoogle}>
			SignIn With Google
		</Button>
	);
};
