import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import '../styles/login.scss'

const Login = () => {
  return (
    <Formik
     initialValues={{ email: '', password: '' }}
     validate={values => {
       const errors = {}
       if (!values.email) {
         errors.email = 'Required'
       } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
       ) {
         errors.email = 'Invalid email address'
       }
       return errors;
     }}
     onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
         alert(JSON.stringify(values, null, 2))
         setSubmitting(false)
       }, 400)
     }}
   >
     {({ isSubmitting }) => (
       <Form className="login-form">
         <h1> Log In </h1>
         <Field className="login-field" type="email" name="email" placeholder="Email"/>
         <ErrorMessage className="error-message" name="email" component="div" />
         <Field className="login-field" type="password" name="password" placeholder="Password"/>
         <ErrorMessage className="error-message" name="password" component="div" />
         <button className="submit-button" type="submit" disabled={isSubmitting}>
           Submit
         </button>
       </Form>
     )}
   </Formik>
  )
}

export default Login
