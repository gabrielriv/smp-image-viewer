# smp-image-viewer

`smp-image-viewer` is an NPM component designed to display images responsively with different viewing modes. It allows you to adjust the image within a container without distortion, ensuring an optimal presentation on any device. Additionally, it includes an option to view the image in full screen and a fallback image in case the original one fails to load.

## Demo

You can view a live demo of the component [here](https://fir-smp-image-viewer.web.app/).

## Installation

You can install the package via npm:

```sh
npm install smp-image-viewer
```

Or with Yarn:

```sh
yarn add smp-image-viewer
```

## Usage

### Importing the module

You can import the component directly in any module or component:

```typescript
import { Component } from '@angular/core';
import { ImageViewerComponent } from 'smp-image-viewer';

@Component({
  selector: 'app-root',
  imports: [ImageViewerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  imageSRC = 'https://example.com/image.jpg';
}
```

### Usage in HTML

Once the component is imported, you can use it and its properties in your template file:

```html
<smp-image-viewer 
  [src]="imageSRC" 
  [alignment]="'scaleAspectToFit'" 
  [width]="'300px'" 
  [height]="'300px'" 
  [borderRadius]="16">
</smp-image-viewer>
```

## Props

| Property        | Type    | Description                                                                               | Default Value     |
| ----------------| ------- | ----------------------------------------------------------------------------------------- | ----------------- |
| `src`           | string  | URL of the image to display (any valid source).                                           |                   |
| `alt`           | string  | Alt text for the image.                                                                   |                   |
| `alignment`     | string  | Display mode (`scaleToFill`, `scaleAspectToFit`, `scaleAspectToFill`).                    | `'scaleToFill'`   |
| `position`      | string  | Position of the image within the container (`top`, `bottom`, `center`, `left`, `right`).  | `'center'`        |
| `noImageSRC`    | string  | URL of the image to display when `src` is unavailable.                                     | Suggested image   |
| `responsive`    | boolean | Enables responsive image adjustment.                                                     | `false`           |
| `noImageVisible`| boolean | Controls whether the fallback image is shown when `src` is unavailable.                   | `true`            |
| `borderRadius`  | number  | Border radius of the image container.                                                    | `0`               |
| `fullImage`     | boolean | Enables full-screen image view.                                                          | `true`            |
| `width`         | string  | Width of the container.                                                                   | `'100%'`          |
| `height`        | string  | Height of the container.                                                                  | `'100%'`          |

## Display Modes

- **scaleToFill**: Scales the image to completely fill the container, without maintaining the aspect ratio.
- **scaleAspectToFit**: Scales the image to fit completely within the container without distortion.
- **scaleAspectToFill**: Scales the image to cover the container completely, maintaining the aspect ratio but cropping if necessary.

## Contributions

Contributions are welcome! If you’d like to improve this package, please open an issue or submit a pull request on the repository.

## License

This project is licensed under the MIT License.

--- 

Let me know if you need further adjustments!
