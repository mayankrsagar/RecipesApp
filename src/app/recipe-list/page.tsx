"use client";

import React from 'react';

import Link from 'next/link';
import useSWR from 'swr';

import RecipeList from '@/components/recipe-list';

import { fetcher } from '../page';

export interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
}

interface RecipesData {
  recipes: Recipe[];
}


const Recipes = () => {
  const { data, error } = useSWR<RecipesData>('https://dummyjson.com/recipes', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div >
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {data.recipes.map(recipe => (
        <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
          <RecipeList recipe={recipe} />
        </Link>
      ))}
    </div>
    </div>
   
  );
};

export default Recipes;
