import React from 'react';
import cx from 'classnames';

import Github from '@icons/Github.svg';
import LinkedIn from '@icons/LinkedIn.svg';
import Medium from '@icons/Medium.svg';
import Twitter from '@icons/Twitter.svg';
import Facebook from '@icons/Facebook.svg';

import s from './Socials.module.sass';

const content = [
  {
    label: 'Github',
    icon: <Github />,
    link: 'https://github.com/olehkhalin',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/olegkhalin/',
  },
  {
    label: 'Medium',
    icon: <Medium />,
    link: 'https://medium.com/@olehkhalin',
  },
  {
    label: 'Twitter',
    icon: <Twitter />,
    link: 'https://twitter.com/OlehKhalin',
  },
  {
    label: 'Facebook',
    icon: <Facebook />,
    link: 'https://www.facebook.com/olehkhalin/',
  },
];

type SocialsProps = {
  className?: string
};

export const Socials: React.FC<SocialsProps> = ({ className }) => (
  <div className={cx(s.root, className)}>
    {content.map((link) => (
      <a
        key={link.label}
        className={s.link}
        href={link.link}
        title={link.label}
        aria-label={link.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
      </a>
    ))}
  </div>
);
