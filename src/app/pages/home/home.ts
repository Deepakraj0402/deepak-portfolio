import { Component } from '@angular/core';
import { About } from '../about/about';
import { SkillsComponent } from '../skills/skills';
import { Experience, ExperienceComponent } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Certifications } from '../certifications/certifications';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, SkillsComponent, ExperienceComponent, Projects, Contact, Certifications],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
