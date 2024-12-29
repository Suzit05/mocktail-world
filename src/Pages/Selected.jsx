import React, { useContext } from 'react';
import { NameContext } from '../assets/Context/NameContext';

const Selected = () => {
    const { selectedMocktail, setselectedMocktail } = useContext(NameContext);

    return (
        <div className="w-full h-[200vh] py-4 flex flex-col  items-center absolute bg-zinc-400">
            <div className="bg-white  shadow-xl rounded-lg p-6 w-[80%] md:w-[50%] flex flex-col items-center">
                {/* Mocktail Name */}
                <h1 className="text-3xl font-bold text-purple-700 mb-4">
                    {selectedMocktail.name}
                </h1>

                {/* Image */}
                <img
                    className="w-[20vw] h-[60vh] object-cover rounded-lg mb-4 shadow-md"
                    src={selectedMocktail.image}
                    alt={selectedMocktail.name}
                />

                {/* Recipe Section */}
                <div className="w-full mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Recipe:
                    </h2>

                    {/* Ingredients */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-600 mb-1">
                            Ingredients:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {selectedMocktail.recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Steps */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-600 mb-1">
                            Steps:
                        </h3>
                        <ol className="list-decimal list-inside text-gray-700">
                            {selectedMocktail.recipe.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selected;
