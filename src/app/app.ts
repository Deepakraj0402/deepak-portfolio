import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { Intro } from './pages/intro/intro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Intro],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('deepak-portfolio');
  showIntro = true;

  onIntroFinished(): void {
    this.showIntro = false;
  }
}
