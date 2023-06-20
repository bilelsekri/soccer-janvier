import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatechesTableComponent } from './mateches-table.component';

describe('MatechesTableComponent', () => {
  let component: MatechesTableComponent;
  let fixture: ComponentFixture<MatechesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatechesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatechesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
