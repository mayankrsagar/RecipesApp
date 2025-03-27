import Image from 'next/image';

import { DishRecipe } from '@/app/recipe-list/[details]/page';

interface RecipeListProps {
  dishRecipe: DishRecipe;
}

const RecipeDetails: React.FC<RecipeListProps> = ({ dishRecipe }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{dishRecipe.name}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image 
          src={dishRecipe.image} 
          alt={dishRecipe.name} 
          fill 
          className="object-cover rounded-md" 
        />
      </div>
      <p className="text-lg mb-2">
        <strong>Cuisine:</strong> {dishRecipe.cuisine}
      </p>
      <p className="mb-4">{dishRecipe.instructions}</p>
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {dishRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="text-lg">
        <strong>Meal Types:</strong> {dishRecipe.mealType.join(', ')}
      </p>
    </div>
  );
};

export default RecipeDetails;
