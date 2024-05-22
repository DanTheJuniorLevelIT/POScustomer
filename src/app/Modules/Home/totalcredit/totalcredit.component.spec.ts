import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcreditComponent } from './totalcredit.component';

describe('TotalcreditComponent', () => {
  let component: TotalcreditComponent;
  let fixture: ComponentFixture<TotalcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalcreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
