import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictDisplayComponent } from './dict-display.component';

describe('DictDisplayComponent', () => {
  let component: DictDisplayComponent;
  let fixture: ComponentFixture<DictDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DictDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
