import React from 'react';
import cx from 'classnames';

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
      <Socials className={s.socials} />
    </main>
  </>
);
