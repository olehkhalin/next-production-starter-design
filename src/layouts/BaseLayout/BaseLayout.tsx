import React from 'react';
import cx from 'classnames';

import { Container } from '@components/ui/Container';
import { Row } from '@components/ui/Row';
import { Header } from '@components/common/Header';
import { Socials } from '@components/common/Socials';

import s from './BaseLayout.module.sass';

interface BaseLayoutProps {
  className?: string;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  className,
  children,
}) => (
  <>
    <Header />
    <main className={cx(s.root, className)}>
      {children}
      <Container className={s.container}>
        <Row className={s.row}>
          <Socials className={s.socials} />
        </Row>
      </Container>
    </main>
  </>
);
