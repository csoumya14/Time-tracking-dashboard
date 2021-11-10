import React from 'react'
import {Input,Label} from './RadioSelectInput.css'

export const RadioSelectInput = ({
  type,
  name,
  id,
  value,  
}: {
  type: string;
  name:string;
  id:string;
  value:string,
  
}) => {
  const handleToggleChange = (value: string) => {
    console.log(value)
  };

  return(
    <div>
      <Input type={type} name={name} id={id} value={value}  onChange={event => handleToggleChange(event.target.value)}/>
      <Label htmlFor={id} >{value}</Label></div>   
  )
}