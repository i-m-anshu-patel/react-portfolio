import React from 'react';
import { useFormik } from 'formik';
import emailjs, {send} from '@emailjs/browser';


const Contact = () => {

  const handleSubmit = (e) => {

  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: (values, { resetForm }) => {
      emailjs.send('service_n0q6vev', 'template_o66twc2', values, 's4BjI5S_wXRljsPDF')
      .then((result) => {
          alert("Email Sent Sucessfully")
          resetForm()
      }, (error) => {
          console.log(error.text);
      });
      
    },

    validate: (values) => {
      let errors = {}

      if(!values.name){
        errors.name = 'Required'
      }
      if(values.name.length <=2){
        errors.name = 'Name should me more than 2 characters'
      }

      if(!values.email){
        errors.email = 'Required'
      }
      else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)){
        errors.email = 'Invalid email address'
      }

      if(!values.subject){
        errors.subject = 'Required'
      }

      if(!values.message){
        errors.message = 'Required'
      }

      return errors
    }
  })
  return (
    <div className='container mx-auto w-1/2 mt-2'>
      <section className="bg-gray-200/75 dark:bg-gray-900 ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl  font-bold text-center text-blue-600/75">Contact Me</h2>
          <form action="#" className="space-y-8" onSubmit={formik.handleSubmit}>
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input type="text" id="name" name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Jon Doe" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
              {formik.touched.name && formik.errors.name ? (<div className='text-red-500'>{formik.errors.name}</div>) : null}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="text" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? (<div className='text-red-500'>{formik.errors.email}</div>) : null}         
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name='subject' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how can I help you" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject} />
              {formik.touched.subject && formik.errors.subject ? (<div className='text-red-500'>{formik.errors.subject}</div>) : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}></textarea>
              {formik.touched.message && formik.errors.message ? (<div className='text-red-500'>{formik.errors.message}</div>) : null}
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-white  hover:text-black hover:border-4">Send message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
