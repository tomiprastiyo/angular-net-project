import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVeterinarianComponent } from './crud-veterinarian.component';

describe('CrudVeterinarianComponent', () => {
  let component: CrudVeterinarianComponent;
  let fixture: ComponentFixture<CrudVeterinarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudVeterinarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudVeterinarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
