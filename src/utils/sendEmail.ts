import { IForm } from '../interface'

const sendEmail = async (data: IForm) => {
  const response = await fetch(
    `https://api.retool.com/v1/workflows/8a84bd95-cc37-4d64-92ba-3677afd7c1d1/startTrigger?workflowApiKey=${
      import.meta.env.VITE_RETOOL_API
    }`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        company: data.company,
        phone: data.phone,
        category: data.category
      })
    }
  )

  const json = await response.json()
  return json
}

export default sendEmail
