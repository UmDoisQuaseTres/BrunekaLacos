import AboutSection from '@/components/about';
import CollectionSection from '@/components/collection';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';


function Home() {
  return (
    <>
    <Header />
      <Hero />
      <AboutSection />
      <CollectionSection />
      <Footer />

      {/* Testimonials Section is optional, include if you have testimonials */}
      {/* <TestimonialsSection /> */}

    </>
  );
}

export default Home;