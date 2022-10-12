import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoComponent } from './custo.component';

describe('CustoComponent', () => {
  let component: CustoComponent;
  let fixture: ComponentFixture<CustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
