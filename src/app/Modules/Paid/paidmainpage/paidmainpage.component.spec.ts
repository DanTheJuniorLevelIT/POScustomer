import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidmainpageComponent } from './paidmainpage.component';

describe('PaidmainpageComponent', () => {
  let component: PaidmainpageComponent;
  let fixture: ComponentFixture<PaidmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidmainpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaidmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
