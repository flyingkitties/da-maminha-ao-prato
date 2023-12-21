import React from 'react';
import logo from '../public/images/Logo.png';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <Image
        src={logo}
        alt="Logo"
        width={200}
        height={200}
        className="fixed -top-16 -left-16"
      />
    </header>
  );
}

export default Header;
