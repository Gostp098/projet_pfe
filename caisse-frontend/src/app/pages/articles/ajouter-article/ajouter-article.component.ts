import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { Article } from '../article';
import { Category } from '../../catégories/category';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']  
})
export class AjouterArticleComponent implements OnInit {

  article: Article = {
    idCategory: '',
    photo: '',
    prixUnitaireHt: '',
    prixUnitaireTtc: '',
    tauxTva: '',
    codeArticle: '',
    designation: '',
  };
  
  Category: any[] = []; 
  
  

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private categoryService:CategoryService
    

  ) {}


  ngOnInit(): void {
    console.log('on init...');
    this.categoryService. getCategory().subscribe(
      (result) => {
        this.Category = result; 
      }
      
    );
  
   }




      
  
  cancel(): void {
    this.router.navigate(['/articles']); 
  }
 

  enregistrerArticle() {
    this.articleService.enregistrerArticle(this.article).subscribe(
        response => {
          console.log('Article ajoutée avec succès!', response);
          
        },

        error => {
          console.error('Article existe déja !', error);
        }
    );
    this.router.navigate(['/articles']);
 }   

}
