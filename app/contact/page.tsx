import { Metadata } from 'next';

import ContactCode from '@/components/ContactCode';

import { siteConfig } from '@/data/site';
import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>{siteConfig.contact.title}</h1>
      <p className={styles.pageSubtitle}>{siteConfig.contact.subtitle}</p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
