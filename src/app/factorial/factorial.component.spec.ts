import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialComponent } from './factorial.component';

describe('FactorialComponent', () => {
  let component: FactorialComponent;
  let fixture: ComponentFixture<FactorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute factorial correctly',()=>{
    const result = component.factorial(5);
    expect(result).toBe(120);
  })
});
