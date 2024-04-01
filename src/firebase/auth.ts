import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './main';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	await signInWithPopup(auth, provider)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential!.accessToken;
			console.log(token);
			const user = result.user;
			console.log(user);
		})
		.catch(error => {
			console.log(error);
		});
};

export const signOutGoogle = async () => {
	auth
		.signOut()
		.then(() => {
			// Sign-out successful.
		})
		.catch(error => {
			// An error happened.
			console.log(error);
		});
};
