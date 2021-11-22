import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string
 ) {

  }

  newEvent: Event = {} as Event;


  DisplayAllEvents(): any {
    return this.http.get(this.baseUrl + `api/allEvents`);
  }

  PostEvent(newEvent: Event  ): any {
    return this.http.post(this.baseUrl + `api/addEvent?Event=${newEvent}`, {});
  }


}
