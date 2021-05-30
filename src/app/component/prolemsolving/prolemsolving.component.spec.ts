import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlemsolvingComponent } from './prolemsolving.component';

describe('ProlemsolvingComponent', () => {
  let component: ProlemsolvingComponent;
  let fixture: ComponentFixture<ProlemsolvingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProlemsolvingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlemsolvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
