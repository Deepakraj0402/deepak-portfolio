import { Component, signal } from '@angular/core';

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
}
