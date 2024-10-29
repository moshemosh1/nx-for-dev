import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableCheckboxComponent } from './reusable-checkbox.component';

describe('ReusableCheckboxComponent', () => {
  let component: ReusableCheckboxComponent;
  let fixture: ComponentFixture<ReusableCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
