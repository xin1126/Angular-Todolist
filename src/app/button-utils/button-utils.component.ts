import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-utils',
  templateUrl: './button-utils.component.html'
})
export class ButtonUtilsComponent {

  @Input() color = 'primary'
}
