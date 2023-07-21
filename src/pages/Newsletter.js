import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'

import React from 'react'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post(newsletterUrl, data)

    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <div className="form">
      <Form className="col s12" method="POST">
        <h4 className="form-title">Our news letter</h4>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              name="name"
              type="text"
              className="validate"
              required
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="validate"
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              name="email"
              type="email"
              defaultValue="test@test.com"
              required
              className="validate"
            />
            <label htmlFor="email" className="active">
              Email
            </label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Helper text
            </span>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? 'submitting' : 'submit'}
        </button>
      </Form>
    </div>
  )
}
export default Newsletter
