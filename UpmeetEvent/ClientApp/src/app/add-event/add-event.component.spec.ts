/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddEventComponent } from './add-event.component';

let component: AddEventComponent;
let fixture: ComponentFixture<AddEventComponent>;

describe('AddEvent component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddEventComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddEventComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});