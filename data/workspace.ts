import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscFiles,
  VscGithubAlt,
  VscMail,
  VscSettings,
} from 'react-icons/vsc';

export interface WorkspaceItem {
  path: string;
  label: string;
  filename: string;
  icon: string;
  sidebarIcon: IconType;
  section: 'top' | 'bottom';
  showInTabs?: boolean;
  showInExplorer?: boolean;
}

export const workspaceTitle = 'Explorer';
export const workspaceGroupName = 'portfolio';

export const workspaceItems: WorkspaceItem[] = [
  {
    path: '/',
    label: 'Home',
    filename: 'home.tsx',
    icon: '/logos/react_icon.svg',
    sidebarIcon: VscFiles,
    section: 'top',
    showInTabs: true,
    showInExplorer: true,
  },
  {
    path: '/about',
    label: 'About',
    filename: 'about.html',
    icon: '/logos/html_icon.svg',
    sidebarIcon: VscAccount,
    section: 'bottom',
    showInTabs: true,
    showInExplorer: true,
  },
  {
    path: '/contact',
    label: 'Contact',
    filename: 'contact.css',
    icon: '/logos/css_icon.svg',
    sidebarIcon: VscMail,
    section: 'top',
    showInTabs: true,
    showInExplorer: true,
  },
  {
    path: '/projects',
    label: 'Projects',
    filename: 'projects.js',
    icon: '/logos/js_icon.svg',
    sidebarIcon: VscCode,
    section: 'top',
    showInTabs: true,
    showInExplorer: true,
  },
  {
    path: '/articles',
    label: 'Articles',
    filename: 'articles.json',
    icon: '/logos/json_icon.svg',
    sidebarIcon: VscEdit,
    section: 'top',
    showInTabs: true,
    showInExplorer: true,
  },
  {
    path: '/github',
    label: 'GitHub',
    filename: 'github.md',
    icon: '/logos/markdown_icon.svg',
    sidebarIcon: VscGithubAlt,
    section: 'top',
    showInTabs: true,
    showInExplorer: true,
  },
  {
    path: '/settings',
    label: 'Settings',
    filename: 'settings.json',
    icon: '/logos/json_icon.svg',
    sidebarIcon: VscSettings,
    section: 'bottom',
    showInTabs: true,
    showInExplorer: true,
  },
];

const sortWorkspaceItemsByPath = (paths: string[]) =>
  paths
    .map((path) => workspaceItems.find((item) => item.path === path))
    .filter((item): item is WorkspaceItem => Boolean(item));

export const sidebarTopItems = sortWorkspaceItemsByPath([
  '/',
  '/github',
  '/projects',
  '/articles',
  '/contact',
]);

export const sidebarBottomItems = sortWorkspaceItemsByPath([
  '/about',
  '/settings',
]);

export const tabItems = workspaceItems.filter((item) => item.showInTabs);
export const explorerItems = workspaceItems.filter((item) => item.showInExplorer);

export const profileWorkspaceItem = workspaceItems.find(
  (item) => item.path === '/about'
) ?? {
  path: '/about',
  label: 'About',
  filename: 'about.html',
  icon: '/logos/html_icon.svg',
  sidebarIcon: VscAccount,
  section: 'bottom' as const,
  showInTabs: true,
  showInExplorer: true,
};
