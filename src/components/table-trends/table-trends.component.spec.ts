import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTrendsComponent } from './table-trends.component';

describe('TableTrendsComponent', () => {
  let component: TableTrendsComponent;
  let fixture: ComponentFixture<TableTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
