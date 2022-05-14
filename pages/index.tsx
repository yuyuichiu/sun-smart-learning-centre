import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery'
import { FaWhatsapp } from 'react-icons/fa';
import GoogleMapDisplay from '../components/GoogleMapDisplay';

/* Static image import for convenience */
import heroImage from '../public/assets/sunsmart_store.jpeg';
import schoolImg1 from '../public/assets/school1.jpg';
import schoolImg2 from '../public/assets/school2.jpg';
import schoolImg3 from '../public/assets/school3.jpg';
import schoolImg4 from '../public/assets/school4.jpg';
import stockImg1 from '../public/assets/parent-helping-child-asian.jpg';
import stockImg2 from '../public/assets/smiling-students.jpg';
import stockImg3 from '../public/assets/hardworking-student.webp';
import stockImg4 from '../public/assets/smiling-student-asian.jpg';

/* For creating the achievement table */
const achievements : Array<{idx: number, name: string, award: string}> = [
  {idx: 1, name: '小二-周同學', award: '全班第二名'},
  {idx: 2, name: '小六-林同學', award: '中文全級第三名'},
  {idx: 3, name: '小六-鄥同學', award: '全班第三名'},
  {idx: 4, name: '小四-陳同學', award: '全班第三名'},
  {idx: 5, name: '小六-林同學', award: '英文全級第二名'},
  {idx: 6, name: '小四-鄥同學', award: '全班第三名'},
  {idx: 7, name: '小六-張同學', award: '學業進步獎'},
  {idx: 8, name: '小四-陳同學', award: '全班第三名'},
  {idx: 9, name: '小六-林同學', award: '全班第一名'},
  {idx: 10, name: '小六-梁同學', award: '英文全級第一名'},
  {idx: 11, name: '小六-謝同學', award: '飛躍進步獎'},
];

/* Main component */
const Home: NextPage = () => {
  const [aboutAnimation, setAboutAnimation] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(false);
  const [classesAnimation, setClassesAnimation] = useState(false);
  const [othersAnimation, setOthersAnimation] = useState(false);
  const logosEl = useRef<HTMLDivElement>(null);
  const classesEl = useRef<HTMLDivElement>(null);
  const othersEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll at initial load to deal with a bug
    window.scrollBy(0,-1);

    // Criteria for CSS animation to show based on scroll location, animation will only show once.
    window.addEventListener('scroll', () => {
      if(!aboutAnimation && (window.scrollY + window.innerHeight - 150 > 666)){
        setAboutAnimation(true);
      }

      if(!logoAnimation && (
        window.scrollY + window.innerHeight - 200 > (logosEl.current ? logosEl.current.offsetTop : 9999)
      )){
        setLogoAnimation(true);
      }

      if(!classesAnimation && (
        window.scrollY + window.innerHeight - 200 > (classesEl.current ? classesEl.current.offsetTop : 9999)
      )){
        setClassesAnimation(true);
      }

      if(!othersAnimation && (
        window.scrollY + window.innerHeight - 200 > (othersEl.current ? othersEl.current.offsetTop : 9999)
      )){
        setOthersAnimation(true);
      }
    }, { passive: true });
  }, []);

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
          <Image src={heroImage} placeholder="blur" layout='fill' objectFit='cover' objectPosition='top' alt='hero image'/>
        </div>

        <header className=''>
          <h2>日月思教育中心</h2>
          <p className='fw-bold'>十五年歷史、師資優良</p>
          <p className='fw-bold'>學生家長讚讚不絕！</p>
          <br />
          <p>註冊編號: 572632</p>
          <a href='#contact'>
            <button className='btn-custom'>尋找我們</button>
          </a>
        </header>
      </section>

      <main className={`${styles.main}`}>
        <section id='about' className='my-5 container'>
          <h2 className='m-4 text-center fw-bold'>關於我們</h2>
          <div className='row'>
            <p className={`col-md-6 col-12 ${styles.aboutUsTxt} ${aboutAnimation ? styles.active : ''}`}>
              本中心成立十五年，為社區學生提供補習。我們集合最具教學經驗的老師，致力為學生提供一系列多元化又優質的課程，緊貼家長與同學的需求。我們緊貼現今教育模式，提供專為學生而設的全方位學習，全面提升學生們的啟發能力與主動學習精神、培訓應試技巧，讓他們輕鬆面對考試，得到最佳成績。
            </p>
            <p className={`col-md-6 col-12 ${styles.aboutUsTxt} ${aboutAnimation ? styles.active : ''}`}>
              我們為不同程度的中小學生提供一系列的學科課程，包括功課輔導班與各科專科班，以小組形式授課，於學校進度同步教授，派發中心獨家筆記以及教授獨門技巧，所有的練習亦均由導師親自批改，大大減低誤改的機會。我們亦會注重學生的學習進度，以由淺入深的方式教授，使學員易於明白。
            </p>
          </div>
        </section>

        <section id='schools' className='mb-5 container text-center' ref={logosEl}>
          <h2 className='fw-bold'>我們服務過的學生</h2>
          <p className='mb-4'>這些學校的學生也選擇了我們</p>

          <div className={`row ${styles.schoolLogo} ${logoAnimation ? styles.active : ''}`}>
            <div className={`d-flex justify-content-center col-6 col-md-3 my-2`}>
              <Image src={schoolImg1} placeholder='blur' height={110} width={100} title='天水圍天主教小學' alt='天水圍天主教小學'/>
            </div>
            <div className={`d-flex justify-content-center col-6 col-md-3 my-2`}>
              <Image src={schoolImg2} placeholder='blur' height={110} width={100} title='崇德英文學院' alt='崇德英文學院'/>
            </div>
            <div className={`d-flex justify-content-center col-6 col-md-3 my-2`}>
              <Image src={schoolImg3} placeholder='blur' height={110} width={100} title='香港青年協會李兆基書院' alt='香港青年協會李兆基書院'/>
            </div>
            <div className={`d-flex justify-content-center col-6 col-md-3 my-2`}>
              <Image src={schoolImg4} placeholder='blur' height={110} width={100} title='十八鄉鄉事委員會公益社小學' alt='十八鄉鄉事委員會公益社小學'/>
            </div>
          </div>

          <p className='mt-4 mb-5'>以及更多的中小學...</p>
        </section>

        <section id='achievement' className='mb-5 container'>
          <h2 className='text-center fw-bold'>學生成就</h2>
          <p className='text-center'>學生們於我們的教導下茁壯成長！</p>

          <div className='row'>
            <div className={`col-6 d-none d-md-block`}>
              <Gallery />
            </div>

            <div className='col-12 col-md-6'>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>學生</th>
                    <th>獎項</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((item, idx) => {
                    return <tr key={`award-${idx}`}>
                      <td>{item.name}</td>
                      <td>{item.award}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>

            <p className='mt-4 text-center'>獎項不定時更新，歡迎到門市看板查閱！</p>
          </div>
        </section>

        <section id='classes' className='mb-5' ref={classesEl}>
          <h2 className='text-center fw-bold'>課程</h2>
          
          <article className={`${styles.classes} ${classesAnimation ? styles.active : ''}`}>
            <div className='container position-relative'>
              <div className={`${styles.imageBox}`} >
                <div className={`${styles.imageContainer}`}>
                  <Image src={stockImg1} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </div>
              <h3>小學功課輔導班</h3>
              <p>協助學生自力管理校內功課及各項默書與小測，定期為學生提供課文預習及課程練習等各項學業輔導。確保子女功課完善、讓家長放鬆又安心</p>
              <p>分設兩至六日制，$1350/月起</p>
            </div>
          </article>

          <article className={`${styles.classes} ${classesAnimation ? styles.active : ''}`}>
            <div className='container position-relative'>
              <div className={`${styles.imageBox}`} >
                <div className={`${styles.imageContainer}`}>
                  <Image src={stockImg2} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </div>
              <h3>中小學專科班</h3>
              <p>分為中、英、數專科班，適合不同程度的學生報名。我們以小班形式教學，保證同級才同班，跟貼學校進度。讓學生擺脫對不熟悉的科目的恐懼，強化學生於目標科目上的理解與成績</p>
              <p>按堂收費，$650/四堂起</p>
            </div>
          </article>

          <article className={`${styles.classes} ${classesAnimation ? styles.active : ''}`}>
            <div className='container position-relative'>
              <div className={`${styles.imageBox}`} >
                <div className={`${styles.imageContainer}`}>
                  <Image src={stockImg3} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </div>
              <h3>中學輔導及溫習班</h3>
              <p>適合初中學員溫習各科，會獲派發相關練習以作全面複習，專師悉心指點學徒的不足之處及強化其學習能力，讓他們輕鬆適應中學的課程。</p>
              <p>三至五日制，每節1.5小時，$1700/月起</p>
            </div>
          </article>

          <article className={`container-md`}>
            <h3 className='text-center p-4 p-md-0'>還有其他課程...</h3>
            <div className={`${styles.others} ${othersAnimation ? styles.active : ''}`} ref={othersEl}>
              <span>
                <div>英文技巧寫作</div>
              </span>
              <span>
                <div>中文寫作班</div>
              </span>
              <span>
                <div>英文拼音班</div>
              </span>
              <span>
                <div>精讀文言文班</div>
              </span>
              <span>
                <div>低高英全訓練</div>
              </span>
              <span>
                <div>標準普通話</div>
              </span>

              <aside className={`${styles.imageBox}`} >
                <div className={`${styles.imageContainer}`}>
                  <Image src={stockImg4} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </aside>
            </div>
            <p>報名與詳情請聯絡我們或親臨門市查詢</p>

          </article>
        </section>
      </main>

      <footer className={`${styles.footer} container`} id='contact'>
        <h2>聯絡我們</h2>
        <GoogleMapDisplay />

        <p className='fw-bold'>我們現正收生, 歡迎聯絡我們！</p>
        <p>
          地址: 新界元朗天水圍天秀路8號天一商城一樓1026鋪&nbsp;
          <a href='https://www.google.com/maps/place/SUN+SMART+LEARNING+CENTRE/@22.464815,114.0008163,17z/data=!3m1!4b1!4m5!3m4!1s0x3403f08a3edc4e67:0x4d9007d32e8046a5!8m2!3d22.464815!4d114.003005' target='_blank' rel='noreferrer'>
            Google Map
          </a>
        </p>
        <p>電話: 34019701 (辦公時間內接聽)</p>
        <p>Whatsapp: 90118447</p>
        <p>電郵: smart_learningcentre@yahoo.com.hk</p>
        <br/>
        <p>營業時間：星期一至五 3:00pm~6:30pm | 星期六 10:00am~5:30pm | 星期日休息</p>
      </footer>

      <a href='https://api.whatsapp.com/send?phone=85290118447' target='_blank' rel='noreferrer'>
        <aside className={`${styles.wtsapp} d-flex align-items-center justify-content-center`} id='whatsapp' title='在whatsapp聯絡我們'>
          <FaWhatsapp size={40} color='white'/>
        </aside>
      </a>
    </main>
  )
}

export default Home