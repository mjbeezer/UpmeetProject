import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { EventsService } from '../events.service';
import { Event } from '../Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
/** AddEvent component*/
export class AddEventComponent {
  /** AddEvent ctor */
  constructor(private authorize_Service: AuthorizeService, private event_Service: EventsService) {

  }

  AddToEvents(form: NgForm): void {
    let newEvent: Event = {

      id: form.form.value.id,
      title: form.form.value.title,
      description: form.form.value.description,
      category: form.form.value.category,
      labels: form.form.value.labels,
      start: form.form.value.start,
      location: form.form.value.location

    }
    
    this.event_Service.PostEvent(newEvent).subscribe((response: any) => {
      console.log(response);
    });




  }



}
