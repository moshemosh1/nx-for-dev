import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableRadioButtonsComponent } from './reusable-radio-buttons.component';

describe('ReusableRadioButtonsComponent', () => {
  let component: ReusableRadioButtonsComponent;
  let fixture: ComponentFixture<ReusableRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
