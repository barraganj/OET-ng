import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoreComponent } from './conductore.component';

describe('ConductoreComponent', () => {
  let component: ConductoreComponent;
  let fixture: ComponentFixture<ConductoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
