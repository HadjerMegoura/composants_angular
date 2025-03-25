import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'exercices';

  recievedRating: number = 0;

  /**
   * @description recieve the new rating from child and update it in the class
   * @param  {number} recievedData , stores the data recieved from the child
   */
  recieveUpdatedRating(recievedData: number) {
    this.recievedRating = recievedData;
  }
}
