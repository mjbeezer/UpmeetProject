import { Component, Input, EventEmitter } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { EventsService } from '../events.service';
import { Event } from "../Event";

@Component({
    selector: 'app-all-events',
    templateUrl: './all-events.component.html',
    styleUrls: ['./all-events.component.css']
})
/** AllEvents component*/
export class AllEventsComponent {
  /** AllEvents ctor */
  constructor(private authorize_Service: AuthorizeService, private event_Service: EventsService) {

  }

  allEvents: Event[] = [];

  ngOnInit(): void {
    this.event_Service.DisplayAllEvents().subscribe((response: any) => {
      console.log(response);
      this.allEvents = response;      
    });
  }

  @Input() event: Event = {} as Event

  AddFavorite(): void {
    this.event_Service.PostEvent(this.event).subscribe((response: any) => {
      console.log(response);
    });

  }
}
