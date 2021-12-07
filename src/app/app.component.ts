import { Menu } from './shared/models/Menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ecommerce';

  showFiller = false;

  menus: Menu[] = [
    {
      name: 'Cadastrar produto',
      url: 'product/register',
    },
    {
      name: 'Pesquisar produto',
      url: 'product/search',
    },
  ];
}
