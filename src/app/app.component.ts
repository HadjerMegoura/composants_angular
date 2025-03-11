import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StarRatingComponent} from './components/star-rating/star-rating.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercices';

  //to store the rating + utilisé comme note initiale
  recievedRating : number = 0;

  //fonction pour recevoir les données envoyées par le fils
  recieveUpdatedRating(newRating:number) {
     this.recievedRating = newRating;
  }
}
