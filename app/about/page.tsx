'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import { siteConfig } from '@/data/site';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  const { owner, about, links } = siteConfig;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>{owner.name}</h1>
              <p className={styles.role}>{owner.role}</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                {owner.location}
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href={links.githubProfile}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              {about.intro.map((paragraph) => (
                <p className={styles.paragraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              {about.experiences.map((experience) => (
                <div
                  className={styles.experienceCard}
                  key={`${experience.period}-${experience.role}`}
                >
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{experience.period}</span>
                  </div>
                  <h3 className={styles.expRole}>{experience.role}</h3>
                  {experience.company && (
                    <p className={styles.expCompany}>{experience.company}</p>
                  )}
                  {experience.description && (
                    <p className={styles.expDesc}>{experience.description}</p>
                  )}
                  {experience.bullets && (
                    <ul className={styles.expList}>
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {about.skills.map((skillCategory) => (
                  <div
                    className={styles.skillCategory}
                    key={skillCategory.title}
                  >
                    <h4 className={styles.skillTitle}>{skillCategory.title}</h4>
                    <div className={styles.skillTags}>
                      {skillCategory.items.map((skill) => (
                        <span className={styles.skillTag} key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {about.writingLinks.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Writing</h2>
              </div>
              
              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>{about.writingIntro}</p>
                
                <div className={styles.writingLinks}>
                  {about.writingLinks.map((writingLink) => (
                    <a 
                      key={writingLink.href}
                      href={writingLink.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.writingLink}
                    >
                      <span>{writingLink.label}</span>
                      <VscLinkExternal size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>
                {about.writingLinks.length > 0 ? '05' : '04'}
              </span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                {about.beyondCode}
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
