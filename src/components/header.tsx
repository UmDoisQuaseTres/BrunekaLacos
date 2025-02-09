import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.jpg'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10"> {/* Sticky header and shadow */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center"> {/* Container and flex layout */}
        {/* Logo */}
        <div className="flex-shrink-0">
  <Link href="/" aria-label="Bruneka Laços Home">
    <p className="text-xl md:text-3xl font-serif font-bold text-gray-800 tracking-tight">
      Bruneka Laços
    </p>
  </Link>
</div>
        {/* Navigation (Optional for a simple landing page, but included for potential expansion) */}
        <nav className="hidden md:block"> {/* Hide on small screens, show on medium and up */}
          <ul className="flex space-x-8">
            <li>
              <Link href="#sobre" className="text-gray-700 hover:bg-bruneka-pink-dark hover:text-white rounded-full transition-colors duration-300 py-2 px-4">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#colecao" className="text-gray-700 hover:bg-bruneka-pink-dark hover:text-white rounded-full transition-colors duration-300 py-2 px-4">
                Coleção
              </Link>
            </li>
            <li>
              <Link href="#processo" className="text-gray-700 hover:bg-bruneka-pink-dark hover:text-white rounded-full transition-colors duration-300 py-2 px-4">
                Processo Artesanal
              </Link>
            </li>
            <li>
              <Link href="#depoimentos" className="text-gray-700 hover:bg-bruneka-pink-dark hover:text-white rounded-full transition-colors duration-300 py-2 px-4">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link href="#cta" className="text-gray-700 hover:bg-bruneka-pink-dark hover:text-white rounded-full transition-colors duration-300 py-2 px-4">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (Optional - for mobile navigation, if needed)
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-bruneka-pink focus:outline-none focus:ring-2 focus:ring-bruneka-pink">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
            </svg>
          </button>
        </div>
        */}
      </div>
    </header>
  );
}