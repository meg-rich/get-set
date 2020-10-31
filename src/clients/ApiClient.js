import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import {
  PROJECT_ID,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
} from './firebaseConfig'

export const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  databaseURL: DATABASE_URL,
})

export function ApiClient() {
  const db = firebaseApp.database()
  const authClient = firebaseApp.auth()

  return {
    authClient,
    db,
  }
}
