import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTradeComponent } from './card-trade.component';

describe('CardTradeComponent', () => {
  let component: CardTradeComponent;
  let fixture: ComponentFixture<CardTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
