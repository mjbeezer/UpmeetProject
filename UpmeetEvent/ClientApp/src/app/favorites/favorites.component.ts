import { Component, Output, EventEmitter, Input } from '@angular/core';
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

  resultEvent: Event[] = [];
  @Output() removeFav = new EventEmitter<number>();
  @Input() favorite: Favorites = {} as Favorites;

  ngOnInit(): void {
    this.favorites_Service.GetAllFavorites().subscribe((response: any) => {
      console.log(response);
      let MyFavs: Favorites[] = response;
      MyFavs.forEach((F: Favorites) => {
        this.event_Service.getEventById(F.eventId).subscribe((eventResponse: any) => {
          let result: Event = eventResponse;
          this.resultEvent.push(result);
        });
      })
    });
  }

  removeFromFav(id: number) {
    let arrayIndex: number = this.resultEvent.findIndex((E: Event) => E.id == id);
    this.resultEvent.splice(arrayIndex, 1);
    console.log(id);
    console.log(arrayIndex)

    this.favorites_Service.RemoveFavorites(id).subscribe((response: any) => {
      console.log(response)
      });
    //this.removeFav.emit(this.favorite.id);
  }

}
