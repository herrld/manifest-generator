import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberArrayEditorComponent } from './number-array-editor.component';

describe('NumberArrayEditorComponent', () => {
  let component: NumberArrayEditorComponent;
  let fixture: ComponentFixture<NumberArrayEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberArrayEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberArrayEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
