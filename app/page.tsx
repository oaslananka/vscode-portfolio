'use client';

import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa6';
import { LuCircuitBoard } from 'react-icons/lu';
import { VscArrowRight, VscGithub, VscMail } from 'react-icons/vsc';

import { siteConfig } from '@/data/site';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <LuCircuitBoard size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>{siteConfig.home.greeting}</p>
            
            <h1 className={styles.name}>{siteConfig.owner.name}</h1>
            
            <p className={styles.role}>{siteConfig.home.role}</p>
            <p className={styles.specialties}>{siteConfig.home.specialties}</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>
              {siteConfig.home.description}
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
            
            <Link href="/about" className={styles.secondaryAction}>
              <span>Learn More</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a 
              href={siteConfig.links.githubProfile}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>

            <a
              href="https://www.linkedin.com/in/oaslananka"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaLinkedinIn size={14} />
              <span>LinkedIn</span>
            </a>

            <span className={styles.linkSeparator}>/</span>
            
            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
