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

  totalNbLikes: number = 0;
  comment: string = "Ceci est un commentaire.";

  @Input() titreArticle: string; 
  @Input() prixArticle: number; 
  @Input() description: string;  
  @Input() urlImg: string;  
  @Input() textAltImg: string;  
  @Input() dispo: boolean; 
  jaime: boolean = true; 
  
  @Output() info = new EventEmitter<string>();


  constructor() {}

  ngOnInit(): void {
  }

  // nomenclature on (this pour préciser que variable est dans la classe)
  onLike() {
    //this.totalNbLikes++;
    //this.info.emit(this.titreArticle); 
    if (this.jaime === true) {
      this.totalNbLikes++;
      this.jaime = false; 
    } else {
      this.totalNbLikes--;
      this.jaime = true; 
    }
    this.info.emit(this.titreArticle); 
  }

  getColor() {
    if (this.dispo === true) {
      return "green"; 
    } else {
      return "red"; 
    }
  }
}
