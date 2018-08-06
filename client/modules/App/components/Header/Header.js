import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';

// Import Style
import styles from './Header.css';
import bg from '../../header-bk.png';
import logo from '../../logo.png';

export function Header(props, context) {
  return (
    <div style={{background: `#000 url(${bg})`}} className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/"><img src={logo}/></Link>
        </h1>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
