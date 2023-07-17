import React from 'react'

const Button = ({name, age}) => {
    // const name = props.name
  return (
    <div>
      <button className='rounded-lg m-4 px-3 p-2 bg-gray-100'>{name} {age}</button>
    </div>
  )
}

export default Button
