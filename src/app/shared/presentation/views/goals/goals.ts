import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-goals',
  imports: [
    TranslatePipe
  ],
  templateUrl: './goals.html',
  styleUrl: './goals.css'
})
export class Goals {

}
