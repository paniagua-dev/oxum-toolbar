import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxumToolbarComponent } from './oxum-toolbar.component';

describe('OxumToolbarComponent', () => {
  let component: OxumToolbarComponent;
  let fixture: ComponentFixture<OxumToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxumToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxumToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
