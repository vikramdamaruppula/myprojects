import React from 'react'
import "../App.css"
// import "../Main.css"

const Button = ({content, disabled, onClickFunction,classname }) => {
  return (
    <div>
      <button className={classname} type='button' disabled={disabled ? true : false} onClick={onClickFunction} > {content} </button>
    </div>
  )
}

export default Button
