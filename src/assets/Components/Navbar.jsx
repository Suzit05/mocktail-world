import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-fit px-2 py-2 text-white bg-[#363636] flex justify-start gap-[6vw] items-center'>
            <img src="https://www.thecocktailproject.com/themes/cocktail/images/new-coktail-project-logo.webp" alt="" />
            <h1 className='text-xl  font-bold' onClick={() => navigate("/")}>HOME</h1>
            <h1 className=' text-xl font-bold' onClick={() => navigate("/Contact")}>CONTACT</h1>
            <h1 className='text-xl font-bold' onClick={() => navigate("/About")}>ABOUT</h1>

        </div>
    )
}

export default Navbar