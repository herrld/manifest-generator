import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringArrayEditorComponent } from './string-array-editor.component';

describe('StringArrayEditorComponent', () => {
  let component: StringArrayEditorComponent;
  let fixture: ComponentFixture<StringArrayEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringArrayEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringArrayEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
