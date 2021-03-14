import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@components/ui/Container';
import { Row } from '@components/ui/Row';

import s from '@styles/Home.module.sass';

const Home: React.FC = () => (
  <BaseLayout className={s.main}>
    <Container>
      <Row>
        TODO: Home page Content
      </Row>
    </Container>
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
});

export default Home;
