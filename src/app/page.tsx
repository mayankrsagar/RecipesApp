import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center">
        Welcome To Recipe App
      </h1>
      <Link href="/recipe-list">
        <p className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Explore more Delicious Recipes
        </p>
      </Link>
    </div>
  );
}
