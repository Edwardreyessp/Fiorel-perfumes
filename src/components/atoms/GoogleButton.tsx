'use client';
import { signInWithGoogle, signOutGoogle } from '@/firebase/auth';
import { auth } from '@/firebase/main';
import { Button } from '@mui/material';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const GoogleButton = () => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				setCurrentUser(user);
			} else {
				console.log('No user is signed in.');
				setCurrentUser(null);
			}
		});
	}, []);

	if (currentUser !== null) {
		return (
			<Button variant='contained' onClick={() => signOutGoogle()}>
				SignOut
			</Button>
		);
	}

	return (
		<Button variant='contained' onClick={() => signInWithGoogle()}>
			SignIn With Google
		</Button>
	);
};
