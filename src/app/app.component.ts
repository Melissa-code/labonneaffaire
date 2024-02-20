import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

// le decorateur @Component 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, FormsModule, CommonModule, DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// exporte le code vers le reste de l'application
export class AppComponent implements OnInit {

  message: string = ""; 
  liste;

  // récupère tout le contenu de DataService
  constructor(private dataService:DataService){}

  ngOnInit() {
    this.liste = this.dataService.listeArticles
  }

  onAffiche(arg: string) {
    return this.message  = "Merci d'avoir voté pour l'article: "+ arg; 
  }
}
