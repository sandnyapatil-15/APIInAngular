import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertemployeeComponent } from './insertemployee.component';

describe('InsertemployeeComponent', () => {
  let component: InsertemployeeComponent;
  let fixture: ComponentFixture<InsertemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
