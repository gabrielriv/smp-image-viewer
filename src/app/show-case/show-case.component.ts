import { Component } from '@angular/core';
import {ImageViewerComponent} from '../../../projects/image-viewer/src/lib/image-viewer.component';

@Component({
  selector: 'app-show-case',
  imports: [ImageViewerComponent],
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.scss'
})
export class ShowCaseComponent
{
  title = 'bibliotecaSMP';

  public imageSRC = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D';
}
