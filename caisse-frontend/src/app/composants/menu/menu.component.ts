import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord gerant',
    icon: 'fas fa-chart-bar',
    url: 'statistiques',
   
  },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fas fa-boxes',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fa-sharp fa-solid fa-boxes-stacked',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Caissiers',
      icon: 'fa-solid fa-user',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Caissiers',
          icon: 'fas fa-users',
          url: 'caissiers'
        },
        {
          id: '32',
          titre: 'Commandes caissiers',
          icon: 'fas fa-shopping-basket',
          url: 'commandescaissiers'
        }
      ]
    },
    
    {
      id: '4',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Entrprise',
          icon: 'fa-sharp fa-solid fa-building',
          url: 'entreprise'
        },
        {
          id: '42',
          titre: 'Categories',
          icon: 'fa-sharp fa-solid fa-list',
          url: 'categories'
        },
        {
          id: '43',
          titre: 'Clients',
          icon: 'fas fa-users-cog',
          url: 'listClient'
        }
      ]
    }
  ];





  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

}
