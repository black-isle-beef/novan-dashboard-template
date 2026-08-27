import { Component, input } from '@angular/core';

@Component({
  selector: 'novan-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class NovanFooterComponent {
  readonly text = input('Lorem ipsum dolor sit amet.');
}
