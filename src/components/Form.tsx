import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DevTool } from '@hookform/devtools'
import { Timestamp } from 'firebase/firestore'

import { Category, IForm } from '../interface'
import { saveData } from '../firebase/firestore'

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
    <div>
      <form id="book-demo" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            {...register('firstname')}
            type="text"
            id="firstName"
            required
            autoComplete="given-name"
          />
          {errors.firstname && <p className="">{errors.firstname.message}</p>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            {...register('lastname')}
            type="text"
            id="lastName"
            required
            autoComplete="family-name"
          />
          {errors.lastname && <p className="">{errors.lastname.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            type="email"
            id="email"
            required
            autoComplete="email"
          />
          {errors.email && <p className="">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            {...register('company')}
            type="text"
            id="company"
            required
            autoComplete="organisation"
          />
          {errors.company && <p className="">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            {...register('phone', { valueAsNumber: true })}
            className="no-spinners"
            type="number"
            id="phone"
            title="Please enter a 10-digit phone number"
            pattern="[0-9]{10}"
            required
            autoComplete="tel-national"
          />
          {errors.phone && <p className="">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select {...register('category')} id="category" required>
            <option value="">Select</option>
            {Object.values(Category).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="">{errors.category.message}</p>}
        </div>
        <button
          className="hide-arrow txt-white bg-black bdr-0 px-m py-s fs-xs fw-b"
          type="submit">
          Submit
        </button>
        <button className="" type="submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
