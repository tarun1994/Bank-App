import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfscfinderComponent } from './ifscfinder.component';

describe('IfscfinderComponent', () => {
  let component: IfscfinderComponent;
  let fixture: ComponentFixture<IfscfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfscfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfscfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
