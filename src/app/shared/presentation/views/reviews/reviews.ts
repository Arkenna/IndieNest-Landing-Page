import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  imports: [
    TranslatePipe
  ],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

}
