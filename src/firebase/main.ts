// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCmL5asUff7b1LFwkmZCpjzk08dFQk43bI',
	authDomain: 'fiorel.firebaseapp.com',
	projectId: 'fiorel',
	storageBucket: 'fiorel.appspot.com',
	messagingSenderId: '328680108571',
	appId: '1:328680108571:web:6aa07f7afc39cb5f86febe',
	measurementId: 'G-G6544H91VH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
