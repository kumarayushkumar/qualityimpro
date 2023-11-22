import { Timestamp } from "firebase/firestore"

export interface IForm {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: number
  created_time: Timestamp
}