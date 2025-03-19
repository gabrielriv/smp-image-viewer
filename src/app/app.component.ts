import { Component } from '@angular/core';
import {ShowCaseComponent} from './show-case/show-case.component';

@Component({
  selector: 'app-root',
  imports: [ShowCaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bibliotecaSMP';
}
