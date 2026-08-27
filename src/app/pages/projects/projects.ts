import { Component, signal } from '@angular/core';

interface Project {
  image: any;
  title: string;
  company: string;
  role: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = signal<Project[]>([
    {
      image: 'images/1core.jpg',
      title: '1Core & 1Core Navy',
      company: 'BUSOFTTech',
      role: 'Associate Software Engineer',
      overview:
        'Enterprise Child care Management Platform developed for managing child enrollment billing, user management, workflow automation and dynamic modules.',

      responsibilities: [
        'Developed reusable Angular standalone components.',
        'Built responsive UI using Angular Material and SCSS.',
        'Integrated REST APIs using HttpClient and RxJS.',
        'Implemented Reactive Forms with custom validation.',
        'Optimized application performance using lazy loading.',
        'Fixed production bugs and implemented new features.',
        'Worked in Agile Scrum methodology.',
        'Collaborated with Backend and QA teams.',
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Angular Material',
        'SCSS',
        'REST API',
        'Git',
        'Jira',
      ],
    },

    {
      image: 'images/4dcrm.png',
      title: '4DCRM',
      company: 'Beyond Universe Software Technologies',
      role: 'Software Developer',
      overview:
        'Customer Relationship Management application developed to manage customer data, sales activities and business operations.',

      responsibilities: [
        'Developed responsive Angular UI screens.',
        'Created reusable components.',
        'Integrated REST APIs.',
        'Implemented Search, Filter and Pagination.',
        'Worked with Reactive Forms.',
        'Resolved production issues.',
        'Enhanced application performance.',
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'HTML5',
        'CSS3',
        'RxJS',
        'REST API',
        'Git',
        'Accessibility',
      ],
    },
  ]);
}
