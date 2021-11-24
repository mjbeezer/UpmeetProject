import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { EventsService } from '../events.service';
import { Event } from '../Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
/** AddEvent component*/
export class AddEventComponent {
  /** AddEvent ctor */
  constructor(private authorize_Service: AuthorizeService, private event_Service: EventsService, private router: Router) {

  }

  AddToEvents(form: NgForm): void {
    //console.log(form.form.value.eventDate);
    //console.log(form.form.value.eventTime);
    let eventDateTime: string = form.form.value.eventDate + "T" + form.form.value.eventTime + ":00";
    let newEvent: Event = {

      id: form.form.value.id,
      title: form.form.value.title,
      description: form.form.value.description,
      category: form.form.value.category,
      labels: form.form.value.labels,
      eventDate: eventDateTime,
      location: form.form.value.location

    }
    console.log(newEvent.title);
    
    this.event_Service.PostEvent(newEvent.title, newEvent.description, newEvent.category, newEvent.labels, newEvent.eventDate, newEvent.location).subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(['/allEvents']);
  }
}
