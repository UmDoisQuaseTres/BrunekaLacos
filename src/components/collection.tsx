import Image from 'next/image';

import Link from 'next/link';

export default function CollectionSection() {
  return (
    <section id="colecao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-16">Nossa Coleção de Laços Exclusivos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Produto 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Laço Elegance Floral</h3>
              <p className="text-gray-600 mb-4">Laço delicado com estampa floral e detalhes em pérola.</p>
              <Link href="#" className="inline-block bg-bruneka-pink hover:bg-bruneka-pink-dark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Ver Detalhes
              </Link>
            </div>
          </div>
          {/* Produto 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Laço Clássico Poá</h3>
              <p className="text-gray-600 mb-4">Laço atemporal com estampa de poá e acabamento impecável.</p>
              <Link href="#" className="inline-block bg-bruneka-pink hover:bg-bruneka-pink-dark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Ver Detalhes
              </Link>
            </div>
          </div>
          {/* Produto 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
           
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Laço Moderno Listrado</h3>
              <p className="text-gray-600 mb-4">Laço estiloso com estampa listrada e design contemporâneo.</p>
              <Link href="#" className="inline-block bg-bruneka-pink hover:bg-bruneka-pink-dark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Ver Detalhes
              </Link>
            </div>
          </div>
        </div>
        <Link href="#" className="inline-block bg-bruneka-pink mt-16 hover:bg-bruneka-pink-dark text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
  Ver todos os laços da coleção
</Link>
      </div>
    </section>
  );
}