import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableSelectComponent } from './reusable-select.component';

describe('ReusableSelectComponent', () => {
  let component: ReusableSelectComponent;
  let fixture: ComponentFixture<ReusableSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
