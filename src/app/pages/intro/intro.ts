import { Component, output } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  delay: number;
}
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  introFinished = output<void>();

  particles: Particle[] = [];

  constructor() {
    this.generateParticles();
  }

  private generateParticles(): void {
    this.particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
  }

  startPortfolio(): void {
    this.introFinished.emit();
  }
}
