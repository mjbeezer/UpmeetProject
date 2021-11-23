import { Component } from '@angular/core';
import { EventsService } from '../events.service';
import { Favorites } from '../Favorites';
import { FavoritesService } from '../favorites.service';
import { Event } from '../Event';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
/** Favorites component*/
export class FavoritesComponent {
  /** Favorites ctor */
  constructor(private favorites_Service: FavoritesService, private event_Service: EventsService) {

    }

  resultEvent: Favorites[] = [];

  ngOnInit(): void {
    this.favorites_Service.GetAllFavorites().subscribe((response: any) => {
      console.log(response);
      let MyFavs: Favorites[] = response;
      MyFavs.forEach((F: Favorites) => {
        this.event_Service.getEventById(F.EventId).subscribe((eventResponse: any) => {
          let result: Favorites = eventResponse;
          this.resultEvent.push(result);
        });
      })
    });
  }

  removeFromFav(id: number) {
    let index: number = this.resultEvent.findIndex((E: Favorites) => E.EventId == id);
    this.resultEvent.splice(index, 1);
  }

}
