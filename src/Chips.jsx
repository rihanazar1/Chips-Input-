import React, { useState } from 'react'

const Chips = () => {

    const [input, setInput] = useState("")

    const handleInput = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const addChips = (event) => {
        console.log(event)
    }

  return (
    <>
        <div className='container'>
            <div className='input-container'>
                <h1>Chips Input</h1>
                <input 
                type="text" 
                placeholder='Add chips here...' 
                onChange={handleInput} 
                onKeyUp={addChips}/>
            </div>
            <div className='chips-container'>

            </div>
        </div>
    </>
  )
}

export default Chips 