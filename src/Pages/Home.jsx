import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from '../assets/Components/Navbar'
import Error from '../assets/Components/Error';
import Selected from './Selected';
import { NameContext, NameProvider } from '../assets/Context/NameContext';

import Cocktails from "../assets/data/Cocktails.json"

const Home = () => {
    const { searchInput, setsearchInput, isFound, setisFound, selectedMocktail, setselectedMocktail } = useContext(NameContext)

    //previous button pr kaam kro , home k andr sb component aur baki list bnana nhi chaiye tha

    const inputChangeHandler = (e) => {
        console.log(e.target.value)
        setsearchInput(e.target.value)
        if (e.target.value == "") {
            setisFound(true)
        }
    }



    const mocktailHandler = (selectedItem) => {
        setselectedMocktail(selectedItem)


    }//niche div se selectedItem ko laya gya hai , as a props

    useEffect(() => {
        console.log("selected mocktail:", selectedMocktail)
    }, [selectedMocktail])


    const searchButtonHandler = () => {
        console.log("input:", searchInput)
        const filteredCocktails = Cocktails.filter((list) => (
            list.name.toLowerCase().startsWith(searchInput.toLowerCase())
            || list.recipe.ingredients.some((ingredient) => ingredient.toLowerCase().startsWith(searchInput.toLowerCase()))
            //starts with se type krte hi dene lgega
        ))

        if (filteredCocktails.length > 0) {
            setisFound(true)
        } else {
            setisFound(false) //ab iske mdd se no items found dikha skte ho
            console.log("MILA:", isFound)
        }



    }
    return (
        <div className='w-full h-screen '>
            <Navbar></Navbar>
            {selectedMocktail && <Selected />}
            <div className='flex flex-col justify-center items-center mt-[8vh] gap-2'>
                <input onChange={inputChangeHandler} className='border-black p-2  border-2 w-[50%]' type="text" name="" id="" placeholder='Enter name or ingredients' />
                <button onClick={searchButtonHandler} className='bg-zinc-600 py-1 px-2     text-white'>search</button>
            </div>
            <div className='list-Container flex justify-center items-center flex-wrap mt-6 gap-8'>
                {Cocktails.filter((list) => (
                    list.name.toLowerCase().startsWith(searchInput.toLowerCase())
                    || list.recipe.ingredients.some((ingredient) => ingredient.toLowerCase().startsWith(searchInput.toLowerCase()))
                    //starts with se type krte hi dene lgega
                )).map((list, index) => (
                    <div onClick={() => mocktailHandler(list)} className='bg-zinc-600 shadow-lg hover:size-[23vw] flex flex-col items-center justify-center w-fit mt-2 mb-4 rounded-lg' key={index} >
                        <h1 className='text-lg text-white'>{list.name}</h1>
                        <img className='w-[20vw] h-[40vh]' src={list.image} alt="" /></div>
                ))}
            </div>
            {!isFound && <Error />}

        </div>
    )
}

export default Home