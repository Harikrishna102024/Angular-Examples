import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { FormsModule } from '@angular/forms';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('entered data working fine', () => {
    component.num1 = 20;
    component.num2 = 50;
    component.displayResult()
    expect(component.result).toBe(70);
  });

  fit('should clear all values', () => {
    component.result = 50;
    component.num1 = 10;
    component.num2 = 20;

    component.remove();

    expect(component.result).toBe('');
    expect(component.num1).toBe('');
    expect(component.num2).toBe('');
  });

});
