import { useState, useEffect } from 'react';
import Image from 'next/image';
import brandLogo from '../public/assets/sunsmart_brand.png';
import { BsListUl } from "react-icons/bs";
import styles from '../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [])

  return <nav className={`d-flex justify-content-between align-items-center`} style={{height: '60px',zIndex: 5000}}>
    <div>
      <Image src={brandLogo} placeholder="blur" width={220} height={60} alt='brand'/>
    </div>

    {/* PC */}
    <ul className='list-unstyled d-none d-md-flex my-0' id='nav'>
      <li>
        <a href='#' className='m-3 link-dark text-decoration-none'>
          主頁
        </a>
      </li>

      <li>
        <a href='#achievement' className='m-3 link-dark text-decoration-none'>
          學生成就
        </a>
      </li>

      <li>
        <a href='#classes' className='m-3 link-dark text-decoration-none'>
          課程
        </a>
      </li>

      <li>
        <a href='#contact' className='m-3 link-dark text-decoration-none'>
          聯絡/地址
        </a>
      </li>
    </ul>

    {/* Tablet & mobile */}
    <div className={`d-md-none`} onClick={() => setMenuOpen(!menuOpen)}>
      <BsListUl size='28' />
    </div>

    <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''} `}>
      <div className={`${styles.overlay}`} onClick={() => setMenuOpen(!menuOpen)}></div>

      <ul className='list-unstyled' id='nav'>
        <li>
          <a href='#' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            主頁
          </a>
        </li>

        <li>
          <a href='#achievement' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            學生成就
          </a>
        </li>

        <li>
          <a href='#classes' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            課程
          </a>
        </li>

        <li>
          <a href='#contact' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            聯絡/地址
          </a>
        </li>
      </ul>
    </div>

    {/* Sticky navbar upon scrolling */}
    <div className={`${styles.dynamicNav} ${scrollPos > 60 ? styles.active : ''} ${menuOpen ? 'd-none' : ''} px-4`}>
      <Image src={brandLogo} placeholder="blur" width={220} height={60} alt='brand logo'/>

      <ul className={`list-unstyled d-none d-md-flex my-0`} id='nav'>
        <li>
          <a href='#' className='m-3 link-dark text-decoration-none'>
            主頁
          </a>
        </li>

        <li>
          <a href='#achievement' className='m-3 link-dark text-decoration-none'>
            學生成就
          </a>
        </li>

        <li>
          <a href='#classes' className='m-3 link-dark text-decoration-none'>
            課程
          </a>
        </li>

        <li>
          <a href='#contact' className='m-3 link-dark text-decoration-none'>
            聯絡/地址
          </a>
        </li>
      </ul>

      <div className={`d-md-none`} onClick={() => setMenuOpen(!menuOpen)}>
        <BsListUl size='28' />
      </div>
    </div>
  </nav>
}

export default Navbar;