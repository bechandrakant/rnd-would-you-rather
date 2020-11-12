import React from "react"
import DropdownList from "react-widgets/lib/DropdownList"
import "react-widgets/dist/css/react-widgets.css"

const SelectUsers = props => {
  const { input, data, valueField, textField } = props

  return <DropdownList
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
  />
}

export default SelectUsers