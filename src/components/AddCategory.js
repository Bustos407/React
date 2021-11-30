import React, { useState } from 'react'
import PropTypes from 'prop-types'





export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length>2) {
            setCategories( categories => [inputValue,...categories])
            setinputValue('')
        }
     
// console.log('submit hecho');
          
    }
    return (
     

            <form onSubmit = {handelSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
       
    )
}
AddCategory.protoTypes ={
    setCategories: PropTypes.func.isRequired
}