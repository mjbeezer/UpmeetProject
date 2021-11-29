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
/*  currentDateEvent: Date = new Date();*/

  @Input() favorite: Favorites = {} as Favorites;
  @Output() removeFromFav = new EventEmitter<number>();

  ngOnInit(): void {
    this.event_Service.DisplayAllEvents().subscribe((response: any) => {
      console.log(response);
      this.allEvents = response;
/*      this.currentDateEvent.setDate(this.currentDateEvent.getDate()+7);*/
    });
  }

  DeleteFav(id:number): void {
    this.favorite_Service.RemoveFavorites(this.favorite.id).subscribe((response: any) => {
      console.log(response);
    });
    this.removeFromFav.emit(this.favorite.id);
  }

 

  //@Input() event: Event = {} as Event
  




}
