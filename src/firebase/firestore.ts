import { collection, addDoc, FirestoreError } from 'firebase/firestore'
import { db } from './config'
import { IForm } from '../interface'

class FirestoreAPIError extends Error {
  constructor(message: string, public code: string) {
    super(message)
    this.name = 'FirestoreAPIError'
  }
}

// Save data to Firestore
const saveData = async (data: IForm): Promise<boolean> => {
  try {
    await addDoc(collection(db, 'details'), data)
    return Promise.resolve(true)
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new FirestoreAPIError(
        `Firestore error: ${error.message}`,
        error.code
      )
    } else {
      return Promise.reject(error)
    }
  }
}

export { saveData, FirestoreAPIError }
