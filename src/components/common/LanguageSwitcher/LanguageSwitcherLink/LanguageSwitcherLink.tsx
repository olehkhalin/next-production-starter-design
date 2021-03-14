import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

import s from './LanguageSwitcherLink.module.sass';

type LanguageSwitcherLinkProps = {
  className?: string
  locale: string
};

export const LanguageSwitcherLink: React.FC<LanguageSwitcherLinkProps> = ({
  className,
  locale,
  children,
}) => {
  const router = useRouter();

  const compoundClassname = cx(
    s.root,
    { [s.active]: router.locale === locale },
    className,
  );

  return (
    <Link href={`${router.pathname}`} locale={locale}>
      <a className={compoundClassname}>
        {children}
      </a>
    </Link>
  );
};
