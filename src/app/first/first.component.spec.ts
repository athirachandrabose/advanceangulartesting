import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a title 'I love pizza!'`, async(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('I love pizza!');
  }));
});
