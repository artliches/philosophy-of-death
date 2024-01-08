import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingComponent } from './understanding.component';

describe('UnderstandingComponent', () => {
  let component: UnderstandingComponent;
  let fixture: ComponentFixture<UnderstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
