import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePointComponent } from './create-point.component';

describe('CreatePointComponent', () => {
  let component: CreatePointComponent;
  let fixture: ComponentFixture<CreatePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
