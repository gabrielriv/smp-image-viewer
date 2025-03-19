import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  HostListener
} from '@angular/core';
import {NgClass, NgIf, NgStyle} from '@angular/common';
import {ImageViewerService} from './image-viewer.service';
import {FullImageViewerComponent} from './full-image-viewer/full-image-viewer.component';

@Component({
  selector: 'smp-image-viewer',
  templateUrl: './image-viewer.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    FullImageViewerComponent
  ],
  styleUrls: ['./image-viewer.component.scss']
})

export class ImageViewerComponent implements OnInit, OnDestroy, OnChanges
{
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void
  {
    if (this.responsive)
    {
      this.SetAligmentClass();
    }
  }

  @ViewChild('imageContainer') imageContainer! : ElementRef;
  @ViewChild('imageElement') imageElement! : ElementRef;
  @ViewChild('noImageElement') noImageElement! : ElementRef;

  @ViewChild('fullImageViewer') fullImageViewer! : FullImageViewerComponent;

  @Input() src: string = ''; // image source
  @Input() alignment : 'scaleToFill' | 'scaleAspectToFit' | 'scaleAspectToFill' = 'scaleToFill';
  @Input() position : 'top' | 'bottom' | 'center' | 'left' | 'right' = 'center';
  @Input() noImageSRC : string;
  @Input() responsive : boolean = false;
  @Input() noImageVisible : boolean = true;
  @Input() alt : string = '';
  @Input() borderRadius : number = 0;
  @Input() fullImage: boolean = true;
  @Input() height:string = '100%';
  @Input() width:string = '100%';

  public alignmentClass : string = '';
  public id : number = 0;

  public heightDiv : number = 0;
  public widthDiv : number = 0;

  public heightImage : number = 0;
  public widthImage : number = 0;
  public imageLoaded : boolean = false;

  private subscription: any = null;
  public noImage : boolean = false;

  constructor(public service : ImageViewerService)
  {
    this.service.imageId++;
    this.id = this.service.imageId;
    this.noImageSRC = this.service.noImageBase64;
  }

  ngOnInit(): void
  {
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes['src'])
    {
      this.noImage = !this.src;
    }
  }

  ngOnDestroy(): void
  {
    if (this.subscription != null)
    {
      this.subscription.unsubscribe();
    }
  }

  ImageLoaded()
  {
    this.heightImage = this.imageElement.nativeElement.height;
    this.widthImage = this.imageElement.nativeElement.width;

    setTimeout(() =>
    {
      this.SetAligmentClass();
      this.imageLoaded = true;
    }, 0);
  }

  NoImageLoaded()
  {
    setTimeout(() =>
    {
      this.heightImage = this.noImageElement.nativeElement.height;
      this.widthImage = this.noImageElement.nativeElement.width;

      setTimeout(() =>
      {
        this.SetAligmentClass();
        this.imageLoaded = true;
      });
    });
  }

  SetAligmentClass()
  {
    switch (this.alignment)
    {
      case 'scaleToFill':
        this.alignmentClass = "imageContainer__image--fill";
        break;

      case 'scaleAspectToFit':
      case 'scaleAspectToFill':

        let element = document.getElementById("imageDiv" + this.id);

        if (!element)
        {
          return;
        }

        let rect = element!.getBoundingClientRect();
        this.heightDiv = rect.height;
        this.widthDiv = rect.width;

        let imageRatio = this.widthImage / this.heightImage;

        if (this.alignment == 'scaleAspectToFit')
        {
          if (this.heightImage > this.widthImage)
          {
            let widthImage = this.heightDiv * imageRatio;

            if (this.widthDiv > widthImage)
            {
              this.alignmentClass = "imageContainer__image--portrait";
            }
            else
            {
              this.alignmentClass = "imageContainer__image--landscape";
            }
          }
          else
          {
            let heightImage = this.widthDiv * (1 / imageRatio);

            if (this.heightDiv > heightImage)
            {
              this.alignmentClass = "imageContainer__image--landscape";
            }
            else
            {
              this.alignmentClass = "imageContainer__image--portrait";
            }
          }
        }
        else
        {
          if (this.heightImage > this.widthImage)
          {
            let widthImage = this.heightDiv * imageRatio;

            if (this.widthDiv > widthImage)
            {
              this.alignmentClass = "imageContainer__image--landscape";
            }
            else
            {
              this.alignmentClass = "imageContainer__image--portrait";
            }
          }
          else
          {
            let heightImage = this.widthDiv * (1 / imageRatio);

            if (this.heightDiv > heightImage)
            {
              this.alignmentClass = "imageContainer__image--portrait";
            }
            else
            {
              this.alignmentClass = "imageContainer__image--landscape";
            }
          }
        }

        break;

      default:
        break;
    }
  }

  LoadError()
  {
    this.noImage = true;
  }

  OpenFullImageViewer(): void
  {
    if (this.fullImage && !this.noImage)
    {
      this.fullImageViewer.OpenImage();
    }
  }
}
