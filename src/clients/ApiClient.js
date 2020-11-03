import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export default function ApiClient() {
  const db = firebase.database()
  const authClient = firebase.auth();

  return {
    authClient,
    db,
    firebase,
  }
}
