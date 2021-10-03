import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridVeterinarianComponent } from './grid-veterinarian.component';

describe('GridVeterinarianComponent', () => {
  let component: GridVeterinarianComponent;
  let fixture: ComponentFixture<GridVeterinarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridVeterinarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridVeterinarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
