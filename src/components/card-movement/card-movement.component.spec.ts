import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovementComponent } from './card-movement.component';

describe('CardMovementComponent', () => {
  let component: CardMovementComponent;
  let fixture: ComponentFixture<CardMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMovementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
