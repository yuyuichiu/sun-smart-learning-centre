import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';

import heroImage from '../public/assets/sunsmart_store.jpeg';
import awardBoardImg from '../public/assets/studentAwards/awardBoard.jpg'
import schoolImg1 from '../public/assets/school1.jpg';
import schoolImg2 from '../public/assets/school2.jpg';
import schoolImg3 from '../public/assets/school3.jpg';
import schoolImg4 from '../public/assets/school4.jpg';
import stockImg1 from '../public/assets/parent-helping-child-asian.jpg';
import stockImg2 from '../public/assets/smiling-students.jpg';
import stockImg3 from '../public/assets/hardworking-student.webp';
import stockImg4 from '../public/assets/smiling-student-asian.jpg';


const achievements = [
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

]

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
          <Image src={heroImage} placeholder="blur" layout='fill' objectFit='cover' objectPosition='top' alt='hero image'/>
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

      <main className={`${styles.main}`}>
        <section id='about' className='my-5 container'>
          <h2 className='m-4 text-center fw-bold'>關於我們</h2>
          <div className='row'>
            <p className='col-md-6 col-12'>本中心成立十五年，為社區學生提供補習。我們集合最具教學經驗的老師，致力為學生提供一系列多元化又優質的課程，緊貼家長與同學的需求。我們緊貼現今教育模式，提供專為學生而設的全方位學習，全面提升學生的啟發能力與主動學習精神、培訓學生們的應試技巧，讓他們輕鬆面對考試，得到最佳的成績。</p>
            <p className='col-md-6 col-12'>我們為不同程度的中小學生提供一系列的學科課程，包括功課輔導班與各科專科班，以小組形式授課，於學校進度同步教授，派發中心獨家筆記以及教授獨門技巧，所有的練習亦均由導師親自批改，大大減低誤改的機會。我們亦會注重學生的學習進度，以由淺入深的方式教授，使學員易於明白。</p>
          </div>
        </section>

        <section id='schools' className='mb-5 container text-center'>
          <h2 className='fw-bold'>我們服務過的學生</h2>
          <p className='mb-4'>這些學校的學生也選擇了我們</p>

          <div className='row'>
            <div className='d-flex justify-content-center col-6 col-md-3 my-2'>
              <Image src={schoolImg1} placeholder='blur' height={110} width={100} title='天水圍天主教小學' alt='天水圍天主教小學'/>
            </div>
            <div className='d-flex justify-content-center col-6 col-md-3 my-2'>
              <Image src={schoolImg2} placeholder='blur' height={110} width={100} title='崇德英文學院' alt='崇德英文學院'/>
            </div>
            <div className='d-flex justify-content-center col-6 col-md-3 my-2'>
              <Image src={schoolImg3} placeholder='blur' height={110} width={100} title='香港青年協會李兆基書院' alt='香港青年協會李兆基書院'/>
            </div>
            <div className='d-flex justify-content-center col-6 col-md-3 my-2'>
              <Image src={schoolImg4} placeholder='blur' height={110} width={100} title='十八鄉鄉事委員會公益社小學' alt='十八鄉鄉事委員會公益社小學'/>
            </div>
          </div>

          <p className='mt-4'>以及更多的中小學...</p>
        </section>

        <section id='achievement' className='mb-5 container'>
          <h2 className='text-center fw-bold'>學生成就</h2>
          <p className='text-center'>學生們於我們的教導下茁壯成長！</p>

          <div className='row'>
            {/* Transform this into gallery, or at least update with a clearer picture */}
            <div className='col-6 d-none d-md-block' style={{position: 'relative', height: '700px'}}>
              <Image src={awardBoardImg} placeholder='blur' layout='fill' objectFit='cover' objectPosition='top' title='學生成績' alt='學生成績' />
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

        <section id='classes' className='mb-5'>
          <h2 className='text-center fw-bold'>課程</h2>
          
          <article className={`${styles.classes}`}>
            <div className='container position-relative'>
              <div className='position-absolute' style={{top: '20%', right: '0'}}>
                <div className={`${styles.imageBox}`} >
                  <Image src={stockImg1} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </div>
              <h3>小學功課輔導班</h3>
              <p>協助學生自力管理校內功課及各項默書與小測，定期為學生提供課文預習及課程練習等各項學業輔導。確保子女功課完善、讓家長放鬆又安心</p>
              <p>分設兩至六日制，$1350/月起</p>
            </div>
          </article>

          <article className={`${styles.classes}`}>
            <div className='container position-relative d-flex flex-column justify-content-end align-items-end'>
              <div className='position-absolute' style={{top: '20%', left: '0'}}>
                <div className={`${styles.imageBox}`} >
                  <Image src={stockImg2} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </div>
              <h3>中小學專科班</h3>
              <p>分為中、英、數專科班，適合不同程度的學生報名。我們以小班形式教學，保證同級才同班，跟貼學校進度。讓學生擺脫對不熟悉的科目的恐懼，強化學生於目標科目上的理解與成績</p>
              <p>按堂收費，$650/四堂起</p>
            </div>
          </article>

          <article className={`${styles.classes}`}>
            <div className='container position-relative'>
              <div className='position-absolute' style={{top: '20%', right: '0'}}>
                <div className={`${styles.imageBox}`} >
                  <Image src={stockImg3} placeholder="blur" layout='fill' objectFit='cover' alt='decoration'/>
                </div>
              </div>
              <h3>中學輔導及溫習班</h3>
              <p>適合初中學員溫習各科，會獲派發相關練習以作全面複習，專師悉心指點學徒的不足之處及強化其學習能力，讓他們輕鬆適應中學的課程。</p>
              <p>三至五日制，每節1.5小時，$1700/月起</p>
            </div>
          </article>

          <article className={`container`}>
            <h3 className='text-center'>還有其他課程...</h3>
            <span>A</span>
            <span>B</span>
          </article>
        </section>
      </main>

      <footer className={styles.footer} id='contact'>
        <h2>聯絡我們</h2>
          {/* Map + address + phone + opening hours */}
      </footer>
    </main>
  )
}

export default Home
