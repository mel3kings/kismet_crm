import React from 'react';
import styles from './Menu.css'
import {Link} from 'react-router';

class Menu extends React.Component {
  render() {
    return <div className={styles['sidebar']}>
      <Link className={styles['sidebarlinktest']} to="/">
        <div className={styles['sidebarlink']}>Add Customers</div>
      </Link>
      <Link className={styles['sidebarlinktest']} to="/search">
        <div className={styles['sidebarlink']}>Search Customers</div>
      </Link>
      <Link className={styles['sidebarlinktest']} to="/events">
        <div className={styles['sidebarlink']}>Events</div>
      </Link>
      <Link className={styles['sidebarlinktest']} to="/emails">
        <div className={styles['sidebarlink']}>Emails</div>
      </Link>
    </div>
  }
};

export default Menu;
