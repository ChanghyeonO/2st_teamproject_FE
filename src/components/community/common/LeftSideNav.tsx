import { Link } from 'react-router-dom';
import MyProfile from './sideNav/MyProfile';
import styles from './LeftSideNav.module.scss';

import SideNavQuestion from 'assets/icons/SideNavQuestion.svg';
import SideNavBoast from 'assets/icons/SideNavBoast.svg';

function LeftSideNav() {
  const navLinks = [
    { to: '/community', label: '질문해요', image: `${SideNavQuestion}` },
    { to: '/community/boast', label: '자랑해요', image: `${SideNavBoast}` },
  ];

  return (
    <div>
      <aside className={styles.container}>
        <MyProfile />
        <nav>
          <ul>
            {navLinks.map(({ to, label, image }) => (
              <li key={label}>
                <Link to={to} className={styles.link + (window.location.pathname === to ? ' ' + styles.active : '')}>
                  <div>
                    <div className={styles.icon}>
                      <img src={image} alt='' />
                    </div>
                    <span>{label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default LeftSideNav;
