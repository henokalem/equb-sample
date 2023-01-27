import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqubHeaderComponent } from './equb-header.component';

describe('EqubHeaderComponent', () => {
  let component: EqubHeaderComponent;
  let fixture: ComponentFixture<EqubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqubHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
