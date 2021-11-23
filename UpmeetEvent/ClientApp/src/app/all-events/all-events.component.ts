import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { EventsService } from '../events.service';
import { Event } from "../Event";
import { FavoritesComponent } from '../favorites/favorites.component';
import { FavoritesService } from '../favorites.service';
import { Favorites } from '../Favorites';

@Component({
    selector: 'app-all-events',
    templateUrl: './all-events.component.html',
    styleUrls: ['./all-events.component.css']
})
/** AllEvents component*/
export class AllEventsComponent {
  /** AllEvents ctor */
  constructor(private authorize_Service: AuthorizeService, private event_Service: EventsService, private favorite_Service: FavoritesService) {

  }

  allEvents: Event[] = [];

  ngOnInit(): void {
    this.event_Service.DisplayAllEvents().subscribe((response: any) => {
      console.log(response);
      this.allEvents = response;      
    });
  }

  @Input() event: Event = {} as Event
  @Input() favorite: Favorites = {} as Favorites;
  @Output() removeFromFav = new EventEmitter<string>();

  AddFavorite(): void {
    this.favorite_Service.PostFavorites(this.favorite).subscribe((response: any) => {
      console.log(response);
    });

  }
}
