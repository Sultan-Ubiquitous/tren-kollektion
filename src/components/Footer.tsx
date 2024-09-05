import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-nav text-black py-8 px-4">
      <div className="container mx-auto flex justify-between">
        {/* Sari Bliss Section */}
        <div>
          <h2 className="font-bold text-lg">Sari Bliss</h2>
          <p className="text-sm mt-2">
            Discover the beauty of Indian fashion with our exquisite collection of sarees, kurtas, and accessories.
          </p>
        </div>
        
        
        <div>
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="mt-2">
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/sarees">Sarees</Link></li>
            <li><Link href="/kurtas">Kurtas</Link></li>
            <li><Link href="/accessories">Accessories</Link></li>
            <li><Link href="/sale">Sale</Link></li>
          </ul>
        </div>
        
        {/* Follow Us Section */}
        <div>
          <h2 className="font-bold text-lg">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-black hover:text-gray-600" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black hover:text-gray-600" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-black hover:text-gray-600" />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="text-black hover:text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
