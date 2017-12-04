
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component';

describe('App Component', () => {
    let appComponent: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;
    });

   it('valid to be true',()=>{
       expect(true).toBeTruthy();
   })
});