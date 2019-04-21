import * as firebase from 'firebase';
import * as FIREBASE_CONFIG from './config';

const config = {
	apiKey: FIREBASE_CONFIG.API_KEY,
	authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
	databaseURL: FIREBASE_CONFIG.DATABASE_URL,
	projectId: FIREBASE_CONFIG.PROJECT_ID,
	storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
	messagingSenderId: FIREBASE_CONFIG.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseLogs = firebaseDB.ref('logs');

const firebaseLooper = snapshot => {
	const data = [];
	snapshot.forEach(childSnapshot => {
		data.push({
			...childSnapshot.val(),
			id: childSnapshot.key
		});
	});
	return data;
};

export { firebase, firebaseDB, firebaseLogs, firebaseLooper };
