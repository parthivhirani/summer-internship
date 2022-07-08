import './FormStyles.css'
import React from 'react'
import emailjs from 'emailjs-com'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {

  const initialValues = {name:'', email:'', subject:'', message:''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };
  const handleSubmit = (e) => {
	  e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    sendEmail(e);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      toast.success("Message sent")
      //sendEmail(e);
    }
  }, [formErrors, formValues, isSubmit])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name) {
      errors.name = "Enter your name";
    }
    if(!values.email) {
      errors.email = "Enter your email";
    } else if (!regex.test(values.email)) {
		  errors.email = "Please enter valid email";
	  }
    if(!values.subject) {
      errors.subject = "Enter the subject";
    }
    if(!values.message) {
      errors.message = "Enter your message";
    }
    return errors;
  }
  
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_a8uqnw5', 'template_kw5eggv', e.target, 'lnIn0j4zvGocZ3Mej'
    ).then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type='text' name='name'
          value={formValues.name}
          onChange={handleChange}/>
          <span className='eerr'>{formErrors.name}</span>
          <label>Email</label>
          <input type='email' name='email'
          value={formValues.email}
          onChange={handleChange}/>
          <span className='eerr'>{formErrors.email}</span>
          <label>Subject</label>
          <input type='text' name='subject' 
          value={formValues.subject}
          onChange={handleChange}/>
          <span className='eerr'>{formErrors.subject}</span>
          <label>Message</label>
          <textarea rows='6' placeholder='Type your message here' 
          name='message' 
          value={formValues.message}
          onChange={handleChange}/>
          <span className='eerr'>{formErrors.message}</span>
          <button className='btn'>Submit</button>
        </form>
        <ToastContainer autoClose={3000}></ToastContainer>
    </div>
  )
}

export default Form