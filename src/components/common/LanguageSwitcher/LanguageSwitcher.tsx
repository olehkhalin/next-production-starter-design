import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { LanguageSwitcherLink } from '@components/common/LanguageSwitcher/LanguageSwitcherLink';

import s from './LanguageSwitcher.module.sass';

type LanguageSwitcherProps = {
  className?: string
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
}) => {
  const router = useRouter();

  return (
    <div className={cx(s.root, className)}>
      {router.locales?.map((locale) => (
        <LanguageSwitcherLink className={s.link} locale={locale} key={locale}>
          {locale}
        </LanguageSwitcherLink>
      ))}
    </div>
  );
};
