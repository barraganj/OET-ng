import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoreNewComponent } from './conductore-new.component';

describe('ConductoreNewComponent', () => {
  let component: ConductoreNewComponent;
  let fixture: ComponentFixture<ConductoreNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductoreNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductoreNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
