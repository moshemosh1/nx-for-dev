import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableTitleComponent } from './reusable-title.component';

describe('ReusableTitleComponent', () => {
  let component: ReusableTitleComponent;
  let fixture: ComponentFixture<ReusableTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
