import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqubMainComponent } from './equb-main.component';

describe('EqubMainComponent', () => {
  let component: EqubMainComponent;
  let fixture: ComponentFixture<EqubMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqubMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqubMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
