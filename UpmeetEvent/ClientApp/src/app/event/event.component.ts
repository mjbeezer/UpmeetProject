import { Component, Input} from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { EventsService } from '../events.service';
//import { Event } from '../Event';


@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
/** Event component*/
export class EventComponent {
  /** Event ctor */
  constructor(private authorize_Service: AuthorizeService, private event_Service: EventsService) {

  }

 
  
}
