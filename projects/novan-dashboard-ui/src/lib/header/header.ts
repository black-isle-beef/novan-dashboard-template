import { Component, input } from '@angular/core';

@Component({
  selector: 'novan-header',
  standalone: true,
  templateUrl: './header.html',
})
export class NovanHeaderComponent {
  readonly title = input('Lorem ipsum dolor sit amet');
}
