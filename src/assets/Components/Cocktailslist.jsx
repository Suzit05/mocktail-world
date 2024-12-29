import React from 'react'
import Cocktails from "../data/Cocktails.json"

const Cocktailslist = () => {
    return (

        <div>{Cocktails.map((list, index) => (
            <div key={index}>
                <h1>{list.name}</h1>
                <p>{list.recipe.ingredients}</p>
                <p>{list.recipe.steps}</p>
            </div>
        ))}</div>
    )
}

export default Cocktailslist