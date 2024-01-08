import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingArtsComponent } from './fighting-arts.component';

describe('FightingArtsComponent', () => {
  let component: FightingArtsComponent;
  let fixture: ComponentFixture<FightingArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingArtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightingArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
