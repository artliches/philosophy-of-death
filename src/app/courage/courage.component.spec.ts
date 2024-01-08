import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourageComponent } from './courage.component';

describe('CourageComponent', () => {
  let component: CourageComponent;
  let fixture: ComponentFixture<CourageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
