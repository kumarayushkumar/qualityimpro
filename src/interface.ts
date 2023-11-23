import { Timestamp } from 'firebase/firestore'

export enum Category {
  Hotel = 'Hotel',
  Hospitality = 'Hospitality',
  Restaurant = 'Restaurant',
  Residential = 'Residential',
  Society = 'Society',
  Other = 'Other'
}

export interface IForm {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: number
  category: Category
  created_time: Timestamp
}
