import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaissierDashboardComponent } from './caissier-dashboard/caissier-dashboard.component';
import { GerantDashboardComponent } from './gerant-dashboard/gerant-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { AjouterArticleComponent } from './pages/articles/ajouter-article/ajouter-article.component';
import { NouvelleCategorieComponent } from './pages/catégories/nouvelle-categorie/nouvelle-categorie.component';
import { PageCategorieComponent } from './pages/catégories/page-categorie/page-categorie.component';
import { ModifierCategorieComponent } from './pages/catégories/modifier-categorie/modifier-categorie.component';
import { ListClientComponent } from './pages/clients/list-client/list-client.component';
import { PageEntrepriseComponent } from './pages/entreprise/page-entreprise/page-entreprise.component';
import { AjouterEntrepriseComponent } from './pages/entreprise/ajouter-entreprise/ajouter-entreprise.component';
import { AppAuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  { 
    path: 'caissier-dashboard',
     component: CaissierDashboardComponent
     },

  {
     path: '', 
     component: GerantDashboardComponent ,
     canActivate: [AppAuthGuard], 
children:[
  {
  path:'statistiques',
   component:PageStatistiquesComponent
  },
  {
    path:'articles',
     component:PageArticleComponent
    },
    {
      path:'ajouterArticle',
      component:AjouterArticleComponent
    },
    {
      path:'categories',
      component:PageCategorieComponent
    },
    {
      path:'nouvelleCategorie',
      component:NouvelleCategorieComponent
    },
    {
      path:'modifierCategorie/:id',
      component:ModifierCategorieComponent
    },
    {
      path:'listClient',
      component:ListClientComponent
    },
    {
      path:'entreprise',
      component:PageEntrepriseComponent
    },
    {
      path:'ajouterEntreprise',
      component:AjouterEntrepriseComponent
    },

  ]

  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
