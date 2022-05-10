import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMeSection from '../components/AboutMeSection';
import QualificationSection from '../components/QualificationSection';
import Footer from '../components/Footer';
import SkillSection from '../components/SkillSection';
import {
  iconImageSrc,
  introduction,
  myName,
  snsAccounts,
} from '../data/AboutMe';
import { badgeImages, qualifications } from '../data/Qualifications';
import { skills } from '../data/Skills';
import { QittaItems, QiitaOgp } from '../types/Qiita';
import { getOgpMetadata } from '../utils/getOgpMetadata';

type NextPageProps = {
  qiitaLatestArticle: QiitaOgp & { url: string};
}

const Home: NextPage<NextPageProps> = ( props ) => {

  const { qiitaLatestArticle } = props;

  return (
    <>
      <Head>
        <title>Hiroki Kondo portfolio</title>
      </Head>

      <div className="container mx-auto lg:max-w-5xl mb-11">
        <section id='aboutMe' className='scroll-mt-16 md:mt-11'>
          <AboutMeSection
            introduction={introduction}
            name={myName}
            iconImageSrc={iconImageSrc}
            snsAccounts={snsAccounts}
          />
        </section>

        <section id="skills" className="scroll-mt-16 mt-11">
          <SkillSection skills={skills} />
        </section>

        <section id="qualifications" className="scroll-mt-16 mt-11">
          <QualificationSection
            badgeImages={badgeImages}
            qualifications={qualifications}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  // NOTE: QIITAのAPIは認証なしだとIP単位で制限があるみたいなので、クライアント側でfetchしたほうが良いかも
  const endpoint = process.env.QITTA_API_ENDPOINT as string;
  const userId = process.env.QITTA_USER_ID as string;

  const res = await fetch(`${endpoint}//items?page=1&per_page=1&query=user:${userId}`);
  const data = await res.json() as QittaItems;

  const latestArticleUrl = data[0].url

  const ogp = await getOgpMetadata(latestArticleUrl);

  const props: NextPageProps = {
    qiitaLatestArticle: {
      url: latestArticleUrl,
      ...ogp
    }
  }

  return { props };
}

export default Home;
