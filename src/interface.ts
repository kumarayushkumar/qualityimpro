export enum Category {
  Hotel = 'Hotel',
  Hospitality = 'Hospitality',
  Restaurant = 'Restaurant',
  Residential = 'Residential',
  Society = 'Society',
  Other = 'Other'
}

export interface IForm {
  firstname: string
  lastname: string
  email: string
  company: string
  phone: number
  category: Category
  created_time: string
}
