import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAdminComponent } from './routing-admin.component';

describe('RoutingAdminComponent', () => {
  let component: RoutingAdminComponent;
  let fixture: ComponentFixture<RoutingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
