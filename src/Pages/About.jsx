import React from 'react'
import Navbar from '../assets/Components/Navbar'

const About = () => {
    return (
        <div className='w-full h-screen '>
            <Navbar></Navbar>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <img className="w-full" src="https://www.thecocktailproject.com/sites/default/files/tcp-intro-2%20copy.jpg" alt="" />
                <div>
                    <h1 className='text-lg'>About: </h1>
                    <p>The Cocktail Project is a destination where every cocktail enthusiast can explore our curated collection of incredible cocktails and learn how to make them. Try a new spirit or put your own unique spin on one of the hundreds of drinks you find. Discover the art of cocktails by learning a new technique “Behind the Bar,” or just let the stunning, colorful drink images inspire your next big occasion or casual evening at home. Search hundreds of recipes for every spirit type, from sweet Tequila to smoky Bourbon. There’s something for everyone, from Margaritas to Martinis, party punches to seasonal favorites, old-fashioned classics to the latest mixologist concoctions.


                        Register for free and save your favorite recipes, or create a shopping list for your next event. While you’re here, share your cocktail picks with your friends & fellow cocktail lovers. Keep coming back to see the latest additions to our growing list of recipes and new bartending tips. We promise you’ll find an amazing cocktail every time you visit.</p>
                </div>
                <div className=' mb-4 px-1 py-[4vh] flex flex-col justify-center items-center w-full border-black  border-t-2 border-b-2'>
                    <h1 className='text-4xl text-slate-500 font-thin'>Featured brands</h1>
                    <div className='flex items-center gap-[8vw]'>
                        <img src="https://www.thecocktailproject.com/sites/default/files/styles/featured_brands_image/public/tcp-brandpage-jimbeam-logo.png.webp?itok=q-M0XvmX" alt="" />
                        <img src="https://www.thecocktailproject.com/sites/default/files/styles/featured_brands_image/public/Hornitos-logo-green.png.webp?itok=83T5O9Oh" alt="" />
                        <img src="https://www.thecocktailproject.com/sites/default/files/styles/featured_brands_image/public/Pinnacle_Vodka_Logo_PMS.png.webp?itok=EM85g0Le" alt="" />
                        <img src="https://www.thecocktailproject.com/sites/default/files/styles/featured_brands_image/public/CCLGO_47_p.jpg.webp?itok=50wtwEGF" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About