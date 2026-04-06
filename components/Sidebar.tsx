'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarBottomItems, sidebarTopItems } from '@/data/workspace';
import styles from '@/styles/Sidebar.module.css';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ sidebarIcon: Icon, path, label }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
              title={label}
            >
              <Icon
                size={16}
                color={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ sidebarIcon: Icon, path, label }) => (
          <div className={styles.iconContainer} key={path} title={label}>
            <Link href={path}>
              <Icon
                size={16}
                color={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
