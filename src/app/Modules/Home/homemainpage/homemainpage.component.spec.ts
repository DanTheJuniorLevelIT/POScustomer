import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemainpageComponent } from './homemainpage.component';

describe('HomemainpageComponent', () => {
  let component: HomemainpageComponent;
  let fixture: ComponentFixture<HomemainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomemainpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomemainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
