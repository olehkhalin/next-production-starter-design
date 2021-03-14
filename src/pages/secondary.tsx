import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { BaseLayout } from '@layouts/BaseLayout';
import { Row } from '@components/ui/Row';
import { Container } from '@components/ui/Container';

import s from '@styles/Home.module.sass';

const Secondary: React.FC = () => {
  const { t } = useTranslation(['common', 'secondary']);

  return (
    <BaseLayout>
      <NextSeo
        title={t('secondary:Secondary page - routing example')}
        openGraph={{
          title: t('secondary:Secondary page - routing example'),
        }}
      />
      <Container>
        <Row className={s.row}>
          TODO: Secondary page Content
        </Row>
      </Container>
    </BaseLayout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'secondary']),
  },
});

export default Secondary;
