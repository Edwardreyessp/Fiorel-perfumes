'use client';
import { auth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';

export const AuthContext = createContext({
	isAdmin: false,
	loginGoogle: () => {},
	signOutGoogle: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const provider = new GoogleAuthProvider();
	const router = useRouter();

	auth.onAuthStateChanged(user => {
		if (user) {
			if (user.uid === 'gUB5RtFvqmUVYTMmpggjEyv9DwN2') {
				console.log(user.uid);
				setIsAdmin(true);
			} else {
				setIsAdmin(false);
			}
		} else {
			setIsAdmin(false);
		}
	});

	const loginGoogle = async () => {
		await signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				console.log(user);

				if (user.uid === 'gUB5RtFvqmUVYTMmpggjEyv9DwN2') {
					console.log(user.uid);
					setIsAdmin(true);
					router.push('/admin');
				} else {
					setIsAdmin(false);
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	const signOutGoogle = async () => {
		auth
			.signOut()
			.then(() => {
				setIsAdmin(false);
			})
			.catch(error => {
				// An error happened.
				console.log(error);
			});
	};

	return (
		<AuthContext.Provider value={{ isAdmin, loginGoogle, signOutGoogle }}>
			{children}
		</AuthContext.Provider>
	);
};
