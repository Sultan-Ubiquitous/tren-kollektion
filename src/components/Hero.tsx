'use client';
import Button from "./ButtonProp";


const Hero = () => {
  return (
    <div className="text-black py-20 px-10 flex-row">
      <h1 className="text-6xl font-bold mb-4">Embrace the Essence of Indian Elegance</h1>
      <p className="text-lg mb-8">
        Discover our latest collection of exquisite sarees, kurtas, and accessories that celebrate the rich cultural heritage of India.
      </p>
      <Button onClick={()=>{}} text='Shop Now'>
      </Button>
    </div>
  );
};

export default Hero;