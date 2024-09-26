import React, { useState } from 'react'
import './SimpleSelect.scss'

const SimpleSelect = (props) => {
    const { parentClass, options, placeHolderValue } = props
    const [isSelectOpen, setIsSelectOpen] = useState(false)

    const [value, setValue] = useState('')

    const onSelectHandler = (event) => {
        console.log("coming")
        setIsSelectOpen(!isSelectOpen)
        setValue(event.target.value)
    }



    return (
        <div>
            <div className={`select-wrap ${parentClass}`} onClick={onSelectHandler}>
                <div className='select-input-box'>
                    <div>{placeHolderValue}</div>
                    <div><i class="fa-solid fa-angle-down fa-xs"></i></div>
                </div>
                {options.map((category, index) => {
                    return (
                        <>
                            {isSelectOpen && <div key={index}>{category?.name} </div>}
                        </>
                    )
                })}
            </div>
        </div>
    )
}


export default SimpleSelect
