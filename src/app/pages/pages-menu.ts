import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Projects',
    icon: 'archive-outline',
    link: '/pages/projects',
    children: [
      {
        title: 'All My Project',
        link: '/pages/projects/all-project',
      }
    ]
  },
  {
    title: 'Courses',
    icon: 'video-outline',
    link: '/pages/courses',
    children: [
      {
        title: 'List Courses',
        link: '/courses/courses-list',
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true,
  },
];
