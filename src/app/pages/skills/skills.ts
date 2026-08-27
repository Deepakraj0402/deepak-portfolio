import { Component, signal } from '@angular/core';
interface SkillLogo {
  name: string;
  image: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  frontendSkills = signal([
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SCSS',
    'Angular Material',
    'RxJS',
    'Accessibility',
    'PrimeNG',
    'SQL',
    'Nx-monorepo',
  ]);

  tools = signal(['Git', 'GitHub', 'VS Code', 'Postman', 'Jira']);

  skillLogos: SkillLogo[] = [
    {
      name: 'Angular',
      image: 'images/angular_logo.png',
    },
    {
      name: 'HTML5',
      image: 'images/HTML5_logo.png',
    },
    {
      name: 'CSS3',
      image: 'images/CSS-Logo.png',
    },
    {
      name: 'SASS',
      image: 'images/sass.png',
    },
    {
      name: 'JavaScript',
      image: 'images/JavaScript-Logo.png',
    },
    {
      name: 'TypeScript',
      image: 'images/Typescript_logo.png',
    },
    {
      name: 'Bootstrap',
      image: 'images/bootstrap-logo.png',
    },
    {
      name: 'REST API',
      image: 'images/restlogo.png',
    },
    {
      name: 'Git',
      image: 'images/git.png',
    },
    {
      name: 'Agile Scrum',
      image: 'images/agile-scrum-logo.png',
    },
  ];
}
