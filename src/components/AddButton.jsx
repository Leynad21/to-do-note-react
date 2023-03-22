import React, { useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const AddButton = ({ getClicked }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        getClicked(clicked)
        return (
            setClicked(!clicked)
        )
    }



    return (
        <div className={''}>
            <BsFillPlusSquareFill className='plus-icon'
                onClick={handleClick} />
        </div>
    )
}

export default AddButton