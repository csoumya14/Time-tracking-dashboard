import React from 'react'
import {Button} from './ButtonTab.css'
import useFocus from '../../helpers/UseFocus'

interface ButtonDataType {
  id:string;
  textValue:string,
  ariaControls:string;
}

interface ButtonProps {
  dataItem: ButtonDataType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  focus: boolean;
  selectedTab:string;
} 



export const ButtonTab = (props: ButtonProps) => {
  console.log(props.focus)
  const myRef = useFocus(props.focus);
  return(
    <Button role="tab"
      key={props.dataItem.id}
      ref={myRef}
      aria-selected={props.selectedTab === props.dataItem.textValue} 
      aria-controls={props.dataItem.ariaControls}
      value={props.dataItem.textValue}
      id={props.dataItem.textValue}
      tabIndex={props.selectedTab === props.dataItem.textValue ? undefined : -1}
      onClick={event => props.handleClick(event)}>
      {props.dataItem.textValue}
    </Button>
  )
}

/*

*/