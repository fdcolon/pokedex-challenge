import React from 'react'
import Select, { components } from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ValueContainer = ({ children, getValue, ...props }) => {
  let maxToShow = 2;
  var length = getValue().length;
  let displayChips = React.Children.toArray(children).slice(0, maxToShow);
  let shouldBadgeShow = length > maxToShow;
  let displayLength = length - maxToShow;

  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && displayChips}
      <div className="root">
        {shouldBadgeShow &&
          `+ ${displayLength}`}
      </div>
    </components.ValueContainer>
  );
};

export const ReduxFormInput = ({ input, placeholder, type='text', autoComplete='off' }) => {
  return (
    <div className="field">
      <input
        className="input"
        type={ type }
        placeholder={ placeholder }
        autoComplete={ autoComplete }
        { ...input }
      />
      <button
        className="input-button"
      >
        <FontAwesomeIcon
          icon={ faSearch }
          size="lg"
        />
      </button>
    </div>
  )
}

export const ReduxFormSelect = ({ input, meta, label, placeholder, options, isMulti, isSearchable }) => {
  if (options.length && typeof options[0] !== 'object') {
    const optionsFormated = options.map(option => {
      return {
        label: option,
        value: option
      }
    })

    options = optionsFormated
  }

  const customStyles = {
    valueContainer: (provided, state) => ({
      ...provided,
      padding: 0
    })
  }

  const handleOptionSelected = value => {
    input.onChange(value)
    input.value = value
  }

  return (
    <div className="field">
      <Select
        hideSelectedOptions={ false }
        className="select"
        styles={ customStyles }
        placeholder={ placeholder }
        { ...input }
        options={ options }
        isMulti={ isMulti }
        isSearchable={ isSearchable }
        onChange={ (value) => handleOptionSelected(value) }
        onBlur={ () => input.onBlur(input.value) }
        components={{ ValueContainer }}
      />
    </div>
  )
}