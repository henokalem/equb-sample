import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqubFooterComponent } from './equb-footer.component';

describe('EqubFooterComponent', () => {
  let component: EqubFooterComponent;
  let fixture: ComponentFixture<EqubFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqubFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqubFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
