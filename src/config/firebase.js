
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBOi0Gr3NYMq1WJo0feQcQ5LFQuWapXcro",
  authDomain: "tiktok---jornada-fd599.firebaseapp.com",
  projectId: "tiktok---jornada-fd599",
  storageBucket: "tiktok---jornada-fd599.appspot.com",
  messagingSenderId: "42218912487",
  appId: "1:42218912487:web:ad01729b9c812701cc0042"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;