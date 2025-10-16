import {Component, inject, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FooterContent} from './shared/presentation/components/footer-content/footer-content';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-center');
  private translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
