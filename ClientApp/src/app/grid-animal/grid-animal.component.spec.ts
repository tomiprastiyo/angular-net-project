import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAnimalComponent } from './grid-animal.component';

describe('GridAnimalComponent', () => {
  let component: GridAnimalComponent;
  let fixture: ComponentFixture<GridAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
