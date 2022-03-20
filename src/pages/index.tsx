import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMeSection from '../components/AboutMeSection';
import CertificationSection from '../components/CertificationSection';
import Footer from '../components/Footer';
import SkillSection from '../components/SkillSection';
import {
  iconImageSrc,
  introduction,
  myName,
  snsAccounts,
} from '../data/AboutMe';
import { badgeImages, certifications } from '../data/Certifications';
import { skills } from '../data/Skills';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hiroki Kondo portfolio</title>
      </Head>
      <main className="container mx-auto lg:max-w-5xl mb-11">
        <section className="mt-11">
          <AboutMeSection
            introduction={introduction}
            name={myName}
            iconImageSrc={iconImageSrc}
            snsAccounts={snsAccounts}
          />
        </section>

        <section className="mt-11">
          <SkillSection skills={skills} />
        </section>

        <section className="mt-11">
          <CertificationSection
            badgeImages={badgeImages}
            certifications={certifications}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
