import { siteConfig } from '@/data/site';
import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'GitHub Profile',
    description:
      'A quick path to the repositories, experiments, and ongoing work published on GitHub.',
    logo: '/logos/vscode_icon.svg',
    link: siteConfig.links.githubProfile,
    slug: 'github-profile',
  },
  {
    title: 'All Repositories',
    description:
      'Open the full public repository index and explore everything from embedded work to Edge AI experiments.',
    logo: '/logos/vsc.svg',
    link: siteConfig.links.githubRepositories,
    slug: 'all-repositories',
  },
];
