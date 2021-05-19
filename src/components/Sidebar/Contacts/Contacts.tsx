import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import * as styles from './Contacts.module.scss';

type Props = {
  contacts: {[key: string]: string}[],
};

const Contacts = ({ contacts }: Props) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name) => (!contacts[name] ? null : (
        <li className={styles['contacts__listItem']} key={name}>
          <a
            className={styles['contacts__listItemLink']}
            href={getContactHref(name, contacts[name])}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name={name} icon={getIcon(name)} />
          </a>
        </li>
      )))}
    </ul>
  </div>
);

export default Contacts;