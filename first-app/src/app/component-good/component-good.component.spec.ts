import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGoodComponent } from './component-good.component';

describe('ComponentGoodComponent', () => {
  let component: ComponentGoodComponent;
  let fixture: ComponentFixture<ComponentGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentGoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
