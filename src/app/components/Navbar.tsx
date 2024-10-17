import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-rose-600 text-black p-4">
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
