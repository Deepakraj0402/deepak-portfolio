import { Component, signal } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  copiedItem = signal<string | null>(null);
  sending = signal(false);

  successMessage = signal('');

  errorMessage = signal('');

  async sendEmail(event: Event): Promise<void> {
    // Prevent page refresh
    event.preventDefault();

    // Get the submitted form
    const form = event.target as HTMLFormElement;

    // Prevent multiple clicks/submissions
    if (this.sending()) {
      return;
    }

    // Set loading state
    this.sending.set(true);

    // Clear previous messages
    this.successMessage.set('');
    this.errorMessage.set('');

    try {
      await emailjs.sendForm('service_fsqiigo', 'template_db3o03q', form, {
        publicKey: 'tsVflGyt7Q-1MdaNr',
      });

      // Email sent successfully
      this.successMessage.set('Message sent successfully! Thank you for contacting me.');

      // Clear the form ONLY after successful email
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);

      this.errorMessage.set('Failed to send message. Please try again.');
    } finally {
      // Enable button again
      this.sending.set(false);
    }
  }
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
