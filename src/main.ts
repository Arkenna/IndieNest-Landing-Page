import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { FooterContent } from '../src/app/shared/presentation/components/footer-content/footer-content'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
