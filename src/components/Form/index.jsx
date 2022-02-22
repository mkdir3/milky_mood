import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, useField} from 'formik'
import {Input, Label, Error, Button} from './styles'

const InputComponent = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  )
}

const FormComponent = ({handleSuccess}) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("On a besoin d'un nom!"),
    email: Yup.string()
      .email('Ton adresse mail doit être valide!')
      .required("On a besoin d'une adresse mail!")
  })
  return (
    <Formik
      initialValues={{name: '', email: ''}}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <InputComponent
            name="name"
            type="text"
            label="Nom"
            autoComplete="off"
          />
          <InputComponent
            name="email"
            type="email"
            label="Adresse mail"
            autoComplete="off"
          />
          <Button type="submit">Je m'abonne</Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormComponent
