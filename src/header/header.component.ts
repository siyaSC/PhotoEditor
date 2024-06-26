import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'; 

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [MenuComponent],
//   // template: `        //Un-Comment to change page details for ne in-line Template
//   //   <h1>My Header</h1>
//   //   <b>HeaderComponent</b>
//   // `,
//   template: '<app-menu/>',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [MenuComponent],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css',
// })
// export class HeaderComponent {
//   name = 'Calab';
// }

@Component({
  selector: 'app-header',
  standalone: true,
  // template: '<h1>My Notes</h1>',
  template: '<h1>{{ title }}</h1>', //comment out to use interpolation
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'My Notes'
}
