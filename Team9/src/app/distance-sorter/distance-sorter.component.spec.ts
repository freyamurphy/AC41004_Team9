import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceSorterComponent } from './distance-sorter.component';

describe('DistanceSorterComponent', () => {
  let component: DistanceSorterComponent;
  let fixture: ComponentFixture<DistanceSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
