import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'jkm-supermarkt-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'supermarkt';
}
