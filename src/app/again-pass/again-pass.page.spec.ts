import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgainPassPage } from './again-pass.page';

describe('AgainPassPage', () => {
  let component: AgainPassPage;
  let fixture: ComponentFixture<AgainPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgainPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
