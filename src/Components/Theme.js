import '../App.css'
import { useContext } from "react"
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { ThemeContext } from './API/Context';

const Theme = () => {
    const { state, Toggle } = useContext(ThemeContext)
    return (
        <div className='theme'>
            {state ? <MdOutlineLightMode onClick={() => { Toggle() }}
                className='tog' color='white' /> :
                <MdOutlineNightlight onClick={() => { Toggle() }}
                    className='tog' color='black' />}
        </div>
    )
}

export default Theme
