"use client";

import React from 'react';

import {
  useParams,
  useRouter,
} from 'next/navigation';
import useSWR from 'swr';

import RecipeDetails from '@/components/recipe-detail';
import { fetcher } from '@/lib/fetcher';

export type DishRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  cuisine: string;
  mealType: string[];
  image: string;
};

const RecipeItem: React.FC = () => {
  const { details } = useParams();
  const router = useRouter();

  const { data, error, isLoading } = useSWR<DishRecipe>(
    `https://dummyjson.com/recipes/${details}`,
    fetcher
  );

  const previousPage = () => {
    router.push("/recipe-list");
  };

  if (error) return <div className="text-red-500">Failed to load recipe.</div>;
  if (isLoading) return <div>Loading recipe...</div>;
  if (!data) return <div>No recipe data found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <RecipeDetails dishRecipe={data} />
      <button
        onClick={previousPage}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default RecipeItem;
