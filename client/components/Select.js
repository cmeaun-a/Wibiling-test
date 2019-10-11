import React from 'react'
import { Select as BaseSelect, MenuItem } from '@material-ui/core'

const Select = ({ options, ...props }) => (
  <BaseSelect fullWidth {...props}>
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </BaseSelect>
)

export default Select
