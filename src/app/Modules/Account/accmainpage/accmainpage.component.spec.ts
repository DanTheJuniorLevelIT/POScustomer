import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccmainpageComponent } from './accmainpage.component';

describe('AccmainpageComponent', () => {
  let component: AccmainpageComponent;
  let fixture: ComponentFixture<AccmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccmainpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
