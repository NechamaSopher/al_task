import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

/**
 * Application Bootstrap
 * 
 * Entry point for the Angular application.
 * Bootstraps the root component with the app configuration.
 * Zone.js is required for Angular's change detection.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

