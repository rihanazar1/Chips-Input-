import React, { useEffect, useState } from 'react'

const Chips = () => {

    const [input, setInput] = useState("")
    const [data, setData] = useState([])

        // Load chips from localStorage on mount
    // useEffect(() => {
    //     const storedChips = JSON.parse(localStorage.getItem("chipsData")) || []
    //     setData(storedChips)
    // }, [])

    // // Save chips to localStorage whenever data changes
    // useEffect(() => {
    //     localStorage.setItem("chipsData", JSON.stringify(data))
    // }, [data])

    const handleInput = (event) => {
        // console.log(event.target.value)
        setInput(event.target.value)
    }

    const addChips = (event) => {
        // console.log(event)
        if(event.keyCode === 13){
           if(input !== ""){
             let storeData = [...data, input]
             setData(storeData)
             setInput("")
            }
        }
    }

    const deleteHandler = (index) => {
        setData(data.filter((_, idx) => idx !== index))
    }

    console.log(data)

  return (
    <>
        <div className='container'>
            <div className='input-container'>
                <h1>Chips Input</h1>
                <input 
                value={input}
                type="text" 
                placeholder='Add chips here...' 
                onChange={handleInput} 
                onKeyUp={addChips}/>
            </div>
            <div className='chips-container'>
                {data !== "" ?
                    data.map((curValue, index)=>{
                        return (
                            <div className='chip-box'>
                                <p>{curValue}</p>
                                <p onClick={()=>deleteHandler(index)} className='cross-icon'>×</p>
                            </div>
                        )
                    }) : ""
                }
            </div>
        </div>
    </>
  )
}

export default Chips 