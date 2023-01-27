import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqubComponent } from './equb.component';

describe('EqubComponent', () => {
  let component: EqubComponent;
  let fixture: ComponentFixture<EqubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
