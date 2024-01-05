import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameXpComponent } from './name-xp.component';

describe('NameXpComponent', () => {
  let component: NameXpComponent;
  let fixture: ComponentFixture<NameXpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameXpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
