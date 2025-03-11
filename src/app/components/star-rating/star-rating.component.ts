import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';


@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {

  //recevoir le rating initiale du composant parent
  @Input() rating !: number;

  // eventEmitter pour updater le parent par la nouvelle note
  @Output() sendNewRating = new EventEmitter<number>();

  //fonction pour mettre a jour le rating + emit to parent
  updateRating(event : any) {
    //update rating
    this.rating = event.target.id;
    //send data to parent
    this.sendNewRating.emit(this.rating);
    
    
  }

}
