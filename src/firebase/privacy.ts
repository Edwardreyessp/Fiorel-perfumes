import { db } from '@/firebase';
import { type DocumentData, doc, getDoc, updateDoc } from 'firebase/firestore';

export const getPrivacy = async (): Promise<DocumentData> => {
	try {
		const docRef = doc(db, 'admin', 'privacy');
		const docSnap = await getDoc(docRef);

		return docSnap.data()!;
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};

export const putPrivacy = async (content: string): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'privacy');
		await updateDoc(docRef, { content, updatedAt: new Date() });

		return new Response('Privacy updated');
	} catch (e) {
		console.error('Error updating privacy policy:', e);
		return Response.error();
	}
};
