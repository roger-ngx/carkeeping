import Head from 'next/head';

import Header from 'components/blocks/Header';
import Intro from 'components/blocks/Intro';
import Footer from 'components/blocks/footer';
import Specifications from 'components/blocks/Specifications';
import CompanyInfo from 'components/blocks/CompanyInfo';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>단기알바, 쑨 - 좋은알바만 모았다</title>
        <link rel="icon" href="/soon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <meta name='description' content='단기알바 필요할 때 찾지말고 부르세요. 배정부터 출근까지 책임지는 SOON' />
        <meta name='keywords' content='알바,아르바이트,단기알바,당일알바,외식,요식,일용직,구인구직,주방,서빙,알바천국,알바몬,급구,알바콜,일당백,당빠,알바체크,벼룩시장,사람인,잡코리아,워크넷,알밤,캐시노트,원티드,부업' />
        <meta name='author' content='쑨 soon' />
      </Head>

      <div style={{width: '100%'}}>
        <div style={{position: 'absolute', left: 0, top: 0, width: '100%', zIndex: 1, padding: '0 20%'}}>
          <Header />
        </div>
        <Intro /> 
      </div>
 
      <Specifications />

      <CompanyInfo />

      <footer>
        <Footer />
      </footer>

      <style jsx>{`

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Noto Sans KR, Roboto;
        }

        p {
          word-spacing: 0.05em;
        }

        * {
          box-sizing: border-box;
        }

        .slick-prev:before, .slick-next:before {
          display: none;
        }

        .slick-slide div {
          outline: none;
          // height: 100%;
        }

        .slick-track {
          display: flex !important;
        }
        
        .slick-slide {
          height: auto;
        }

        .MuiPaper-elevation1{
          box-shadow: 0 0 6px 0 rgba(211, 211, 211, 0.5);
        }
      `}</style>
    </div>
  )
}
