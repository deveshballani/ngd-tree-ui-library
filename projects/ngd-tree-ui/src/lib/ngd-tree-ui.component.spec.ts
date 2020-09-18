import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdTreeUiComponent } from './ngd-tree-ui.component';

describe('NgdTreeUiComponent', () => {
  let component: NgdTreeUiComponent;
  let fixture: ComponentFixture<NgdTreeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdTreeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdTreeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
