import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringEntityComponent } from './string-entity.component';

describe('StringEntityComponent', () => {
  let component: StringEntityComponent;
  let fixture: ComponentFixture<StringEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
