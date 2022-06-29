import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoderhouseComponent } from './test-coderhouse.component';

describe('TestCoderhouseComponent', () => {
  let component: TestCoderhouseComponent;
  let fixture: ComponentFixture<TestCoderhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCoderhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoderhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
