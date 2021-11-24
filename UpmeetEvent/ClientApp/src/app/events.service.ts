import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from "./Event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string
 ) {

  }

  newEvent: Event = {} as Event;


  DisplayAllEvents(): any {
    return this.http.get(this.baseUrl + `api/Events/allEvents`);
  }

  PostEvent(_title:string, _description: string, _category: string, _labels: string, _eventDate: string, _location: string ): any {
    return this.http.post(this.baseUrl + `api/Events/addEvent?title=${_title}&description=${_description}&category=${_category}&labels=${_labels}&eventDate=${_eventDate}&location=${_location}`, {} );
  }

  getEventById(id: number): any {
    return this.http.get(this.baseUrl + `api/Events/allEvents/${id}`);
  }

  //getCatImagesById(cat_Id: string): any {
  //  return this.http.get(this.apiUrl + `/images/${cat_Id}?api_key=${this.apiKey}`);


}
