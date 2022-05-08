import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';

import heroImage from '../public/assets/sunsmart_store.jpeg'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>日月思教育中心 Sun Smart Learning Centre</title>
        <meta name="description" content="十五年歷史、師資優良、學生家長讚讚不絕！" />
        <link rel="icon" href="/assets/sunsmart_logo_mini.png" />
      </Head>

      <Navbar />

      <section className={`${styles.hero}`}>
        <div className={`${styles.heroImage}`}>
          <Image src={heroImage} placeholder="blur" layout='fill' objectFit='cover'/>
        </div>

        <header className=''>
          <h2>日月思教育中心</h2>
          <p className='fw-bold'>十五年歷史、師資優良</p>
          <p className='fw-bold'>學生家長讚讚不絕！</p>
          <br />
          <p>註冊編號: 572632</p>
          <button className='btn-custom'>尋找我們</button>
        </header>

      </section>

      <section className={`container`}>
        <h2 className={``}>關於我們</h2>
        <p>本中心成立十五年，是一間以教育、培訓模式進行教導學生之教育中心。我們集合最具教學經驗的老師，致力為學生提供一系列多元化又優質的課程，緊貼家長與同學的需求。我們緊貼現今教育模式，提供專為學生而設的全方位學習，全面提升學生的啟發能力與主動學習精神、培訓學生們的應試技巧，讓他們輕鬆面對考試，得到最佳的成績。</p>
        <p>我們為不同程度的中小學生提供一系列的學科課程，包括功課輔導班與各科專科班，以小組形式授課，於學校進度同步教授，派發中心獨家筆記以及教授獨門技巧，所有的練習亦均由導師親自批改，大大減低誤改的機會。我們亦會注重學生的學習進度，以由淺入深的方式教授，使學員易於明白。</p>

        <h2>學生成就</h2>
        {/* achievement board, fake feedbacks */}

        
        <h2>課程</h2>
        {/* photo + name of class */}
        {/* separate pages for full details? */}

      </section>

      <footer className={styles.footer}>
        <h2>聯絡我們</h2>
          {/* Map + address + phone + opening hours */}
      </footer>
    </main>
  )
}

export default Home
