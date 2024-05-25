import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  // template: `        #Un-Comment to change page details for ne in-line Template
  //   <h1>My Header</h1>
  //   <b>HeaderComponent</b>
  // `,
  template: '<app-menu/>',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
