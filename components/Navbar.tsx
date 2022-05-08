import { useState } from 'react';
import Image from 'next/image';
import brandLogo from '../public/assets/sunsmart_brand.png';
import { BsListUl } from "react-icons/bs";
import styles from '../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <nav className={`container d-flex justify-content-between align-items-center`} style={{height: '60px',zIndex: 5000}}>
    <div>
      <Image src={brandLogo} placeholder="blur" width={220} height={60}/>
    </div>

    {/* PC */}
    <ul className='d-none d-md-flex my-0' id='nav'>
      <li className='list-unstyled'>
        <a href='#' className='m-3 link-dark text-decoration-none'>
          主頁
        </a>
      </li>

      <li className='list-unstyled'>
        <a href='#' className='m-3 link-dark text-decoration-none'>
          關於我們
        </a>
      </li>

      <li className='list-unstyled'>
        <a href='#' className='m-3 link-dark text-decoration-none'>
          課程
        </a>
      </li>

      <li className='list-unstyled'>
        <a href='#' className='m-3 link-dark text-decoration-none'>
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

      <ul className='' id='nav'>
        <li className='list-unstyled'>
          <a href='#' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            主頁
          </a>
        </li>

        <li className='list-unstyled'>
          <a href='#' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            關於我們
          </a>
        </li>

        <li className='list-unstyled'>
          <a href='#' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            課程
          </a>
        </li>

        <li className='list-unstyled'>
          <a href='#' className='d-inline-block py-3 link-dark text-decoration-none w-100 text-center'>
            聯絡/地址
          </a>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar;