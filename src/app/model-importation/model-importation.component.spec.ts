import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelImportationComponent } from './model-importation.component';

describe('ModelImportationComponent', () => {
  let component: ModelImportationComponent;
  let fixture: ComponentFixture<ModelImportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelImportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
