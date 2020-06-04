import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { ReduxFormInput, ReduxFormSelect } from './form-fields'

const Filter = (props) => {
  const onSubmit = formValues => {
    props.onSubmit(formValues)
  }

  return (
    <form
      className=""
      onSubmit={ props.handleSubmit(onSubmit) }
    >
      <Field
        name="search"
        placeholder="Type a Pokemon name"
        component={ ReduxFormInput }
      />

      <Field
        name="types"
        placeholder="Choose Types"
        isMulti
        options={ props.types }
        component={ ReduxFormSelect }
      />

      <Field
        name="weaknesses"
        placeholder="Choose Weaknesses"
        isMulti
        options={ props.types }
        component={ ReduxFormSelect }
      />
    </form>
  )
}

export default reduxForm({
  form: 'filterForm',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true
})(Filter);