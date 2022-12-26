import '../App.css'
import { useState } from "react"
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
const Theme = () => {
     const [toggle, setToggle] = useState(false)
    return (
        <div className='theme'>
           {toggle ? <MdOutlineLightMode onClick={() => { setToggle(!toggle) }}
          className='tog' /> :
          <MdOutlineNightlight onClick={() => { setToggle(!toggle) }}
            className='tog' color='white' />}
        </div>


    )
}

export default Theme