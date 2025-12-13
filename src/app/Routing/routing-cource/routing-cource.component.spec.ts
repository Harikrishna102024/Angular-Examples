import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCourceComponent } from './routing-cource.component';

describe('RoutingCourceComponent', () => {
  let component: RoutingCourceComponent;
  let fixture: ComponentFixture<RoutingCourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingCourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
