import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBookComponent } from './last-book.component';

describe('LastBookComponent', () => {
  let component: LastBookComponent;
  let fixture: ComponentFixture<LastBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
