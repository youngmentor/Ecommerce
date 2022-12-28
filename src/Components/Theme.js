import '../App.css'
import { useState } from "react"
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
const Theme = ({ theme, toggler }) => {

    return (
        <div className='theme'>
            {theme ? <MdOutlineLightMode onClick={() => { toggler() }}
                className='tog' /> :
                <MdOutlineNightlight onClick={() => { toggler() }}
                className='tog' color='black' />}
        </div>
    )
}

export default Theme