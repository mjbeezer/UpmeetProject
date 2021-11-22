/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AllEventsComponent } from './all-events.component';

let component: AllEventsComponent;
let fixture: ComponentFixture<AllEventsComponent>;

describe('AllEvents component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AllEventsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AllEventsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});