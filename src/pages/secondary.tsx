import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
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
    <BaseLayout className={s.main}>
      <NextSeo
        title={t('secondary:Secondary page - routing example')}
        openGraph={{
          title: t('secondary:Secondary page - routing example'),
        }}
      />
      <Container>
        <Row className={s.secondaryRow}>
          <h1 className={cx(s.header, s.secondaryHeader)}>
            {t('secondary:Welcome to Secondary page')}
          </h1>

          <p className={s.secondaryDescription}>
            {t('secondary:To edit this page open file')}
            {' '}
            <code className={s.code}>pages/secondary.tsx</code>
          </p>

          <div className={s.button}>
            <Link
              href="/"
            >
              {t('common:Back')}
            </Link>
          </div>
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
