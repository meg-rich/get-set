import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

export enum FirebaseAuthErrorCodes {
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  INVALID_EMAIL = 'auth/invalid-email',
  USER_DISABLED = 'auth/user-disabled',
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
  ACTION_CODE_EXPIRED = 'auth/expired-action-code',
  ACTION_CODE_INVALID = 'auth/invalid-action-code',
  WEAK_PASSWORD = 'auth/weak-password',
  TOO_MANY_REQUESTS = 'auth/too-many-requests',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export interface ApiClientAttributes {
  authClient: firebase.auth.Auth,
  db: firebase.database.Database,
}

export default function ApiClient(): ApiClientAttributes {
  const db = firebase.database()
  const authClient = firebase.auth();

  return {
    authClient,
    db,
  }
}
