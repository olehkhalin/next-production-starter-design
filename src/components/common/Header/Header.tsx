import React, { useMemo } from 'react';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';

import { Container } from '@components/ui/Container';
import { Row } from '@components/ui/Row';
import { HeaderLink } from '@components/common/Header/HeaderLink';
import { LanguageSwitcher } from '@components/common/LanguageSwitcher';

import s from './Header.module.sass';

type HeaderProps = {
  className?: string
};

export const Header: React.FC<HeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation(['common']);

  const content = useMemo(() => ([
    {
      href: '/',
      label: t('common:Home'),
    },
    {
      href: '/secondary',
      label: t('common:Secondary'),
    },
  ]), [t]);

  return (
    <header className={cx(s.root, className)}>
      <Container>
        <Row className={s.row}>
          <div className={s.signature}>O.Khalin</div>
          <nav className={s.nav}>
            {content.map((navLink) => (
              <HeaderLink
                key={navLink.href}
                href={navLink.href}
                className={s.link}
              >
                {navLink.label}
              </HeaderLink>
            ))}
          </nav>
          <LanguageSwitcher className={s.switcher} />
        </Row>
      </Container>
    </header>
  );
};
