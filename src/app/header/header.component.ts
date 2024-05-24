import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <h1>My Header</h1>
    <b>HeaderComponent</b>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
