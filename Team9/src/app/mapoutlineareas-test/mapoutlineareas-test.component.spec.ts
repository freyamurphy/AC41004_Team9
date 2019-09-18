import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoutlineareasTESTComponent } from './mapoutlineareas-test.component';

describe('MapoutlineareasTESTComponent', () => {
  let component: MapoutlineareasTESTComponent;
  let fixture: ComponentFixture<MapoutlineareasTESTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapoutlineareasTESTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoutlineareasTESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
