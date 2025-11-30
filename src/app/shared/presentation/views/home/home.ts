import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private sanitizer = inject(DomSanitizer);

  videoProductUrl: SafeResourceUrl;
  videoTeamUrl: SafeResourceUrl;

  constructor() {
    this.videoProductUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MflE0rbYbNc');
    this.videoTeamUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8rpiarII-nk');
  }
}
