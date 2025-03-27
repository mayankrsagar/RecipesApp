import React from 'react';

import Image from 'next/image';

import { Recipe } from '@/app/recipe-list/page';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface RecipeListProps {
  recipe: Recipe;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipe }) => {
  return (
    <Card className='max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg'>
      <CardHeader>
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
          <Image 
            src={recipe.image} 
            alt={recipe.name} 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <CardTitle className="mt-2 text-xl font-bold">{recipe.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between items-center w-full px-4">
          <span className="text-sm font-medium">Rating: {recipe.rating}</span>
          <span className="text-sm font-medium">{recipe.cuisine}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeList;
