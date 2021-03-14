import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Typical from 'react-typical';
import { DEFAULT_SEO } from '@utils/default-seo.config';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@components/ui/Container';
import { Row } from '@components/ui/Row';

import s from '@styles/Home.module.sass';

const Home: React.FC = () => (
  <BaseLayout className={s.main}>
    <Container>
      <Row className={s.row}>
        <div className={s.heading}>
          <h1 className={s.header}>
            <strong>Next.js</strong>
            Production Setup
          </h1>
          <p className={s.description}>
            with
            {' '}
            <Typical
              steps={[
                'TypeScript',
                2000,
                'Linter',
                2000,
                'Husky',
                2000,
                'SASS',
                2300,
                'React SVG',
                2000,
                'Internationalization',
                2000,
                'Best SEO practices',
                2000,
                'some base components',
                2000,
                'and...',
                2300,
                'deploy on Vercel and CI.',
                5000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </p>
        </div>
      </Row>
    </Container>
    <img src="/images/NewYorkBackground.svg" alt={DEFAULT_SEO.TITLE} className={s.background} />
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
});

export default Home;
