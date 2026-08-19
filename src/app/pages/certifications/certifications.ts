import { Component } from '@angular/core';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  certifications: Certification[] = [
    {
      title: 'The Complete Guide - Angular 2025 Edition',
      issuer: 'Udemy',
      year: '2025',
      description:
        'Advanced Angular concepts, components, services, routing, forms, RxJS and modern Angular development.',
      icon: '⚡',
    },
    {
      title: 'Analytics for Beginners',
      issuer: 'Google Analytics Academy',
      year: '2023',
      description: 'Fundamentals of analytics, data measurement and understanding user behavior.',
      icon: '📊',
    },
    {
      title: 'Business Analytics with Excel',
      issuer: 'Skill Up',
      year: '2023',
      description: 'Business analytics concepts and data analysis using Microsoft Excel.',
      icon: '📈',
    },
  ];
}
