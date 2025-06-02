
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAk5pO8hCwrsxXoAyAWHyZBUR8fQcp3sQM",
    authDomain: "test-cea4f.firebaseapp.com",
  databaseURL: 'https://test-cea4f-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "test-cea4f",
  storageBucket: "test-cea4f.firebasestorage.app",
  messagingSenderId: "397101856794",
  appId: "1:397101856794:web:f4332d793ba446866ff9a3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };