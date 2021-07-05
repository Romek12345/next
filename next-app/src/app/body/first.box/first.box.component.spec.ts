import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First.BoxComponent } from './first.box.component';

describe('First.BoxComponent', () => {
  let component: First.BoxComponent;
  let fixture: ComponentFixture<First.BoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First.BoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(First.BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
