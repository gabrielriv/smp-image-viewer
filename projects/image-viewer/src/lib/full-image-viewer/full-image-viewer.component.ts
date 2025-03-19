import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ImageViewerService} from '../image-viewer.service';
import {NgClass, NgIf} from '@angular/common';
import {withEnabledBlockingInitialNavigation} from '@angular/router';

@Component(
  {
    selector: 'smp-full-image-viewer',
    templateUrl: './full-image-viewer.template.html',
    styleUrls: ['./full-image-viewer.scss', './animations.css'],
    imports: [
      NgIf,
      NgClass
    ]
  })

export class FullImageViewerComponent
{
  @Input() src: string = '';

  @ViewChild('fullImage') fullImage! : ElementRef;

  public id : number = 0;

  public openedFirstTime : boolean = false;
  public opened : boolean = false;
  public animation : string = '';

  public loaded : boolean = false;
  public height : boolean = false;
  public width : boolean = false;

  constructor(private service: ImageViewerService)
  {
    this.service.imageId++;
    this.id = this.service.imageId;
  }

  OpenImage(): void
  {
    this.animation = 'fadeInUp';
    this.opened = true;
    this.openedFirstTime = true;
  }

  CloseModal()
  {
    this.animation = "fadeOutUp";

    setTimeout(() =>
    {
      this.opened = false;
    }, 310);
  }

  ImageLoaded()
  {
    this.height = this.fullImage.nativeElement.height;
    this.width = this.fullImage.nativeElement.width;

    setTimeout(() =>
    {
      this.loaded = true;
    }, 0);
  }

  ClickImageContainer(event : any)
  {
    if(!this.fullImage.nativeElement.contains(event.target))
    {
      this.CloseModal();
    }
  }
}
