import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  //textAltImg: string = "Titre alternative de l'image"; 
  //urlImg: string = "https://via.placeholder.com/400x250"; 
  totalNbLikes: number = 0;
  comment: string = "Ceci est un commentaire.";
  //dispo: boolean = false; 

  @Input() titreArticle: string; 
  @Input() prixArticle: number; 
  @Input() description: string;  
  @Input() urlImg: string;  
  @Input() textAltImg: string;  
  @Input() dispo: boolean; 
  
  @Output() info = new EventEmitter<string>();


  constructor() {}

  ngOnInit(): void {
  }

  // nomenclature on (this pour préciser que variable est dans la classe)
  onLike() {
    this.totalNbLikes++;
    this.info.emit(this.titreArticle); 

  }
}
