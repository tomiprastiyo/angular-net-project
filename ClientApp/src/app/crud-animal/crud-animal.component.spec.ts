import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAnimalComponent } from './crud-animal.component';

describe('CrudAnimalComponent', () => {
  let component: CrudAnimalComponent;
  let fixture: ComponentFixture<CrudAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
