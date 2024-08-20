import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReasonComponent } from './card-reason.component';

describe('CardReasonComponent', () => {
  let component: CardReasonComponent;
  let fixture: ComponentFixture<CardReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReasonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
