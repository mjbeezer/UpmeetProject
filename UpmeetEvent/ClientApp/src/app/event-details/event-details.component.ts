import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../Event';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
/** event-details component*/
export class EventDetailsComponent implements OnInit {
  /** event-details ctor */
  constructor(private route: ActivatedRoute, private event_Service: EventsService, private favorite_Service:FavoritesService) { }

  event: Event = {} as Event;

  displayDate(): string {
    let index: number = this.event.eventDate.indexOf("T");
    let result = "" + this.event.eventDate.substring(0, index);
    let time = this.event.eventDate.substring(index + 1);
    //console.log(time);
    
    return result;
  }

  displayTime(): any {
    let index: number = this.event.eventDate.indexOf("T");
    let time: string = this.event.eventDate.substring(index + 1, index + 6);
    let numberTime: number = parseFloat(time.substring(0, 2));
    if (numberTime > 12) {
      time = numberTime - 12 + time.substring(2) + " PM";
    }
    else {
      time += " AM";
    }
    
    /*console.log(this.event.eventDate);*/
    return time;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));
    this.event_Service.getEventById(id).subscribe((response: Event) => {
      this.event = response;
    })

  }

  AddFavorite(): void {
    this.favorite_Service.PostFavorites(this.event.id).subscribe((response: any) => {
      console.log(response);
    });
  }
}
