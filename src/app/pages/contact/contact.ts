import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  copiedItem = signal<string | null>(null);

  async copyToClipboard(value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);

      if (value.includes('@')) {
        this.copiedItem.set('email');
      } else if (value.includes('+91')) {
        this.copiedItem.set('phone');
      } else {
        this.copiedItem.set('location');
      }

      setTimeout(() => {
        this.copiedItem.set(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }
}
