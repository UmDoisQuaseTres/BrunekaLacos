import Image from 'next/image';
import ArtesanPlaceholder from '../../public/place.jpg'
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Sobre Bruneka Laços</h2>
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div>
            <Image
              src={ArtesanPlaceholder} // Use the imported placeholder image
              alt="Artesã Bruneka Laços"
              className="rounded-lg shadow-md mb-4 md:mb-0"
              width={500} // Adjust width as needed
              height={500} // Adjust height as needed
              placeholder="blur" // Optional: Add blur placeholder for loading effect
            />
          </div>
          <div>
          <p className="text-xl text-gray-700 font-semibold mb-4">Bruna Laços nasceu de uma necessidade e se tornou paixão!</p>
            <p className="text-gray-700 mb-4">Bruneka Laços nasceu da paixão por criar peças únicas e encantadoras. Cada laço é feito à mão com materiais de alta qualidade e um toque especial de carinho.</p>
            <p className="text-gray-700 mb-4">Nosso objetivo é oferecer laços que não apenas complementem o visual, mas também celebrem momentos especiais e transmitam alegria.</p>
            <Link href="#" className="inline-block bg-bruneka-pink hover:bg-bruneka-pink-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Saiba mais sobre nossa história
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}