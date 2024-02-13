import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// le decorateur @Component 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// exporte le code vers le reste de l'application
export class AppComponent {
  title = 'labonneaffaire';

  prix1:number = 200;
  prix2:number = 400;
  prix3:number = 20;
  message: string = ""; 

  onAffiche(arg: string) {
    return this.message  = "Merci d'avoir voté pour l'article: "+ arg; 
  }
  
  liste = [
    {
      titreArticle:"Vélo" ,
      prixArticle:200,
      description:"Super vélo tout terrain",
      urlImg:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8diVDMyVBOWxvfGVufDB8fDB8fHww",
      textAltImg:"vélo",
      dispo:false
    }, 
    {
      titreArticle:"TV" ,
      prixArticle:400,
      description:"Très bonne qualité d'écran",
      urlImg:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8fDA%3D",
      textAltImg:"télévision",
      dispo:true
    }, 
    {
      titreArticle:"Jouet" ,
      prixArticle:30,
      description:"Jouet pour 3-5 ans",
      urlImg:"https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91ZXR8ZW58MHx8MHx8fDA%3D",
      textAltImg:"jouet",
      dispo:true
    }
  ]
}
