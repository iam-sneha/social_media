const Validation = (values) => {
  let errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  } else if (values.name.length < 5) {
    errors.name = 'Name must be more than 5 char'
  }
  if (!values.email) {
    errors.email = 'Email Required'
  } else if (values.email.length < 13) {
    errors.email = 'Email must be more than 13 char'
  }
  if (!values.password) {
    errors.password = 'Password Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be more than 8 char'
  }
  return errors
}

export default Validation
