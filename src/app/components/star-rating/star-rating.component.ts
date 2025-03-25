import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  //recevoir le rating initiale du composant parent
  private _rating: number;

  /**
   * @description set method for rating prop, it sets the range of the prop
   * @param {number} value  ,it should be between 0 and 5
   */

  @Input() set rating(value: number) {
    if (value >= 0 && value <= 5) {
      this._rating = value;
    } else {
      throw new Error('Rating should be between 0 and 5');
    }
  }
  get rating() {
    return this._rating;
  }

  @Output() sendNewRating = new EventEmitter<number>();

  /**
   * @description emit the new rating set by the user to the parent component
   * @param {number} number , use the item number to get the rating
   */
  updateRating(rating: number) {
    this.rating = rating;
    this.sendNewRating.emit(this.rating);
    console.log(rating);
  }
}
