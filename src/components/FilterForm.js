import React from 'react'
import { connect } from 'react-redux'
import { Field, formValueSelector, reduxForm } from 'redux-form'

import { ReduxFormInput, ReduxFormSelect } from './form-fields'

const Filter = (props) => {
  const onSubmit = formValues => {
    props.onSubmit(formValues)
  }

  const handleEmptySearch = searchText => {
    if (!searchText) {
      const { formValues } = props
      formValues.search = ''
      props.onSubmit(formValues)
    }
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
        onChange={ (e) => handleEmptySearch(e.target.value) }
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

const formName = 'filterForm' 
const selector = formValueSelector(formName)

const mapStateToProps = state => {
  return {
    formValues: selector(state, 'search', 'types', 'weaknesses')
  }
}

export default reduxForm({
  form: formName,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true
})(connect(
  mapStateToProps
)(Filter));