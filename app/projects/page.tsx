import { Metadata } from 'next';
import { VscFolderOpened, VscGithub, VscLinkExternal } from 'react-icons/vsc';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

import styles from '@/styles/ProjectsPage.module.css';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  const totalProjects = projects.length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.iconWrapper}>
              <VscFolderOpened className={styles.icon} size={24} />
            </div>
            <div className={styles.meta}>
              <span className={styles.count}>{totalProjects} Links</span>
            </div>
          </div>
          
          <div className={styles.headerContent}>
            <h1 className={styles.title}>GitHub Access</h1>
            <p className={styles.subtitle}>
              Direct links to my GitHub profile and the full repository list.
              This section stays intentionally simple so the focus remains on
              the code itself.
            </p>
          </div>
        </header>

        <div className={styles.timeline}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
              index={index + 1}
            />
          ))}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerLine} />
          <a 
            href={siteConfig.links.githubRepositories}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <VscGithub size={18} />
            <span>Explore more on GitHub</span>
            <VscLinkExternal size={14} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectsPage;
