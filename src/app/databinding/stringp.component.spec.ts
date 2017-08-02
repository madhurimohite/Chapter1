import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringpComponent } from './stringp.component';

describe('StringpComponent', () => {
  let component: StringpComponent;
  let fixture: ComponentFixture<StringpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
