import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseLogComponent } from './purchase-log.component';

describe('PurchaseLogComponent', () => {
  let component: PurchaseLogComponent;
  let fixture: ComponentFixture<PurchaseLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
