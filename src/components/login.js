import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validation from './Validation'

const initValues = {
  name: '',
  email: '',
  password: '',
}

const initErrors = {
  name: '',
  email: '',
  password: '',
}

const LoginFnc = () => {
  const NavVap = useNavigate()
  const [values, setValues] = useState(initValues)

  const [errors, setErrors] = useState(initErrors)

  const [action, setAction] = useState('Login')

  // function handleChange(e) {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }

  function handleSubmit() {
    if (action === 'Register') {
      // alert('alert')
      if (errors) {
        setErrors(validation(values))
      } else {
        console.log(values)
      }
    } else {
      let { name, ...loginErrors } = errors
      if (loginErrors) {
        setErrors(validation(values))
      } else {
        let loginDetails = { email: values.email, password: values.password }
        console.log(loginDetails)
      }
    }
    NavVap(`/home`)
  }

  console.log('errors', errors)

  // useEffect(() => {
  //   if (
  //     Object.keys(errors).length === 0 &&
  //     (values.email !== '') & (values.name !== '') & (values.password !== '')
  //   ) {
  //     alert('Form Submitted')
  //   }
  // }, [errors, values])
  console.log('Values:', values)

  let goToRegisterFnc = () => {
    setAction('Register')
    setValues(initValues)
    setErrors(initErrors)
  }

  let goToLoginFnc = () => {
    setAction('Login')
    setValues(initValues)
    setErrors(initErrors)
  }
  return (
    <section className='loginBg'>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <i class='fas fa-times IconClose'></i>
        {/* <h1>Login</h1> */}
        <h1>{action}</h1>

        <div className='wrapper'>
          {action === 'Register' && (
            <div className='inputbox'>
              <input
                className='input-field'
                type='text'
                placeholder='Enter Name'
                value={values.name}
                // name='name'
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <i class='fas fa-user IconCls'></i>
              <label for='name'>Name</label>
            </div>
          )}
          {action === 'Register' && errors?.name && (
            <p style={{ color: 'red', fontSize: '13px', margin: '-30px auto' }}>
              {errors?.name}
            </p>
          )}
          <div className='inputbox'>
            <input
              className='input-field'
              type='text'
              placeholder='Enter email'
              value={values.email}
              // name='email'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <i class='fas fa-envelope IconCls'></i>
            <label for='email'>Email</label>
          </div>
          {errors?.email && (
            <p style={{ color: 'red', fontSize: '13px', margin: '-30px auto' }}>
              {errors?.email}
            </p>
          )}
          <div className='inputbox'>
            <input
              className='input-field'
              type='text'
              placeholder='Enter password'
              value={values.password}
              // name='password'
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <i class='fas fa-lock IconCls'></i>
            <label for='password'>Password</label>
          </div>
          {errors?.password && (
            <p
              style={{
                color: 'red',
                fontSize: '13px',
                margin: '-30px auto',
              }}
            >
              {errors?.password}
            </p>
          )}
          {action === 'Register' ? (
            <div></div>
          ) : (
            <div className='forget'>
              <input type='checkbox' />
              Remember me
              <a href='javascript'>Forgot Password</a>
            </div>
          )}
          <div className='submit-container'>
            <button
              type='button'
              onClick={handleSubmit}
              className={'fullBtn submit' + (action === 'Login' ? ' gray' : '')}
            >
              {/* Login */}
              {action}
            </button>
          </div>
          <div className='register'>
            {action === 'Login' ? (
              <p>
                Don't have an account{' '}
                <span onClick={goToRegisterFnc}>Register</span>
              </p>
            ) : (
              <p>
                Already have an account{' '}
                <span onClick={goToLoginFnc}>Login</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </section>
  )
}

export default LoginFnc
