import s from './Card.module.scss';
import React, { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={s.card}>{children}</div>;
};

export default Card;
