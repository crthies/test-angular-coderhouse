import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoderhouseVersionDosComponent } from './test-coderhouse-version-dos.component';

describe('TestCoderhouseVersionDosComponent', () => {
  let component: TestCoderhouseVersionDosComponent;
  let fixture: ComponentFixture<TestCoderhouseVersionDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCoderhouseVersionDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoderhouseVersionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
