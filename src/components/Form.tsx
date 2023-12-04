import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DevTool } from '@hookform/devtools'
import { Timestamp } from 'firebase/firestore'

import { Category, IForm } from '../interface'
import { saveData } from '../firebase/firestore'
import Button from './Button'
import Input from './Input'

const categoryValues = Object.values(Category) as [string, ...string[]]

const schema = z.object({
  firstname: z
    .string()
    .min(3, { message: 'First name must be at least 3 characters.' })
    .max(20, { message: 'First name must be less than 20 characters.' })
    .regex(/^[a-zA-Z]+$/, "First name can't contain numbers."),
  lastname: z
    .string()
    .min(3, { message: 'Last name must be at least 3 characters.' })
    .max(20, { message: 'Last name must be less than 20 characters.' })
    .regex(/^[a-zA-Z]+$/, "Last name can't contain numbers."),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  company: z.string().min(2, { message: 'Please enter a valid company.' }),
  phone: z
    .number({ invalid_type_error: 'Please enter a valid phone number' })
    .min(1000000000, { message: 'Please enter a valid phone number' })
    .max(9999999999, { message: 'Please enter a valid phone number' }),
  category: z.enum(categoryValues, {
    errorMap: () => ({ message: 'Please select a category.' })
  })
})

const onSubmit = (data: IForm) => {
  data.created_time = Timestamp.now()
  saveData(data)
    .then(() => {
      console.log('success')
    })
    .catch(error => {
      console.log(error)
    })
}

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IForm>({ resolver: zodResolver(schema) })

  return (
    <>
      <form id="book-demo" className="p-m" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-l form__input d-f ai-center jc-space-between">
          <label className="fs-l" htmlFor="firstname">
            First Name
          </label>
          <Input
            {...register('firstname')}
            type="text"
            id="firstname"
            required
            autoComplete="given-name"
          />
        </div>
        {errors.firstname && (
          <p className="mt-s ta-r fs-m txt-red">{errors.firstname.message}</p>
        )}
        <div className="mt-l form__input d-f ai-center jc-space-between">
          <label className="fs-l" htmlFor="lastname">
            Last Name
          </label>
          <Input
            {...register('lastname')}
            type="text"
            id="lastname"
            required
            autoComplete="family-name"
          />
        </div>
        {errors.lastname && (
          <p className="mt-s ta-r fs-m txt-red">{errors.lastname.message}</p>
        )}
        <div className="mt-l form__input d-f ai-center jc-space-between">
          <label className="fs-l" htmlFor="email">
            Email
          </label>
          <Input
            {...register('email')}
            type="email"
            id="email"
            required
            autoComplete="email"
          />
        </div>
        {errors.email && (
          <p className="mt-s ta-r fs-m txt-red">{errors.email.message}</p>
        )}
        <div className="mt-l form__input d-f ai-center jc-space-between">
          <label className="fs-l" htmlFor="company">
            Company
          </label>
          <Input
            {...register('company')}
            type="text"
            id="company"
            required
            autoComplete="organisation"
          />
        </div>
        {errors.company && (
          <p className="mt-s ta-r fs-m txt-red">{errors.company.message}</p>
        )}
        <div className="mt-l form__input d-f ai-center jc-space-between">
          <label className="fs-l" htmlFor="phone">
            Phone Number
          </label>
          <Input
            {...register('phone', { valueAsNumber: true })}
            className="no-spinners"
            type="number"
            id="phone"
            title="Please enter a 10-digit phone number"
            pattern="[0-9]{10}"
            required
            autoComplete="tel-national"
          />
        </div>
        {errors.phone && (
          <p className="mt-s ta-r fs-m txt-red">{errors.phone.message}</p>
        )}
        <div className="mt-l form__input d-f ai-center jc-space-between">
          <label className="fs-l" htmlFor="category">
            Category
          </label>
          <select {...register('category')} id="category" required>
            <option value="">Select</option>
            {Object.values(Category).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {errors.category && (
          <p className="mt-s ta-r fs-m txt-red">{errors.category.message}</p>
        )}
        <div className="d-f d-b m-0 jc-center">
          <Button
            style={'secondary'}
            size={'large'}
            type="submit"
            className="mt-xl mx-0 ta-c">
            Submit
          </Button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  )
}
