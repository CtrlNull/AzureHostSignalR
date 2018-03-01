import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDataComponent } from './ingredient-data.component';

describe('IngredientDataComponent', () => {
  let component: IngredientDataComponent;
  let fixture: ComponentFixture<IngredientDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
