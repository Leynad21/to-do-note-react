import React, { useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const AddButton = ({ getClicked, settoDoEdit }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        getClicked(clicked)
        setClicked(!clicked)
        settoDoEdit(prevValue => {
            return {
                item: "",
                id: "",
                edit: false
            }
        }
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