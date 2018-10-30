import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldingDetailComponent } from './scaffolding-detail.component';

describe('ScaffoldingDetailComponent', () => {
  let component: ScaffoldingDetailComponent;
  let fixture: ComponentFixture<ScaffoldingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaffoldingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
