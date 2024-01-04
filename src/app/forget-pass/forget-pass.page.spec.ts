import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPassPage } from './forget-pass.page';

describe('ForgetPassPage', () => {
  let component: ForgetPassPage;
  let fixture: ComponentFixture<ForgetPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgetPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
