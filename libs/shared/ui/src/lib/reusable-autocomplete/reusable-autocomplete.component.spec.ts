import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableAutocompleteComponent } from './reusable-autocomplete.component';

describe('ReusableAutocompleteComponent', () => {
  let component: ReusableAutocompleteComponent;
  let fixture: ComponentFixture<ReusableAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
