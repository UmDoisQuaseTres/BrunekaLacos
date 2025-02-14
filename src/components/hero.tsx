import type { NextPage } from 'next'; // Import NextPage type for type safety
import Link from "next/link";

// Define the type for your Home component (it has no props in this case)
const Hero: NextPage = () => {
  return (
    <main className="bg-gray-900 text-white font-sans">
<header className="bg-bruneka-light-pink py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Laços Artesanais com Amor para Momentos Especiais
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Descubra a beleza e a exclusividade dos nossos laços feitos à mão, perfeitos para todas as ocasiões.
        </p>
        <Link href="#colecao" className="inline-block bg-bruneka-pink hover:bg-bruneka-pink-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
          Ver Coleção
        </Link>
      </div>
    </header>
     
    </main>
  );
};

export default Hero;