import * as Yup from 'yup'

export const schema = Yup.object().shape({
  login: Yup.string()
    .min(4, 'Login length must be 4 at least')
    .required('Login is required')
    .default(''),
  password: Yup.string()
    .min(6, 'Password length must be 6 at least')
    .required('Password is required')
    .default(''),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password is required')
    .default(''),
  email: Yup.string()
    .email('Email is wrong')
    .required('Email is required')
    .default(''),
  age: Yup.number()
    .positive('Age must be positive')
    .min(18, 'Age must be 18+')
    .max(130, 'Age is too big')
    .integer('Wrong age value')
    .required('Age is required')
    .default(18)
    .transform((value, original) =>
      typeof original === 'number'
        ? original
        : original.trim() === ''
        ? 0
        : value,
    ),
})

export const validate = (values, touched) => {
  const casted = schema.cast(values)
  const errors = {
    login: [],
    password: [],
    confirmPassword: [],
    email: [],
    age: [],
  }

  for (const key in errors) {
    if (!touched[key]) continue

    try {
      schema.validateSyncAt(key, casted, {abortEarly: false})
    } catch (validation) {
      errors[key].push(...validation.errors)
    }
  }

  return errors
}
