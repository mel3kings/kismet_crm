import React from 'react';
import styles from './Menu.css'
import {Link} from 'react-router';
class Menu extends React.Component{
  render(){
    return   <div className={styles['sidebar']}>
      <ul>
        <li className={styles['sidebarlink']}>
          <Link className={styles['sidebarlinktest']} to="/"> Customers</Link>
        </li>

        <li className={styles['sidebarlink']}>
          <Link className={styles['sidebarlinktest']} to="/emails"> Emails</Link>
        </li>
        <li className={styles['sidebarlink']}>
          <Link className={styles['sidebarlinktest']} to="/events"> Events</Link>
        </li>
      </ul>
    </div>
  }
};

export default Menu;
