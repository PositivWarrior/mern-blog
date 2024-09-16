import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'marblogger.firebaseapp.com',
	projectId: 'marblogger',
	storageBucket: 'marblogger.appspot.com',
	messagingSenderId: '168687014792',
	appId: '1:168687014792:web:9045fd3d404f12348da03d',
	measurementId: 'G-S86FHQ61NX',
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
