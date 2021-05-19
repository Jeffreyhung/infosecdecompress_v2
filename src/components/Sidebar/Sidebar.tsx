import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import * as styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import Search from "../SearchContainer";

type Props = {
  isIndex?: boolean,
};

const Sidebar: React.FC<Props> = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Search />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;