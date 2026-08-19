import { Component, signal } from '@angular/core';

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experiences = signal<Experience[]>([
    {
      company: 'BUSOFTTech',
      role: 'Associate Software Engineer',
      duration: 'Jul 2023 - March 2026',
      location: 'Chennai, India',
      responsibilities: [
        'Developed enterprise web applications using Angular.',
        'Built reusable UI components.',
        'Integrated REST APIs.',
        'Worked with RxJS and Angular Signals.',
        'Collaborated using Agile methodology.',
        'Optimized application performance.',
      ],
    },
    {
      company: 'BUSOFTTech',
      role: 'Trainee Software Engineer',
      duration: 'Feb 2023 - June 2023',
      location: 'Chennai, India',
      responsibilities: ['Trained by experienced mentors in web based technologies'],
    },
  ]);
}
