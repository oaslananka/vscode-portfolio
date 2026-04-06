import Tab from '@/components/Tab';
import { tabItems } from '@/data/workspace';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {tabItems.map((item) => (
        <Tab
          key={item.path}
          icon={item.icon}
          filename={item.filename}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
