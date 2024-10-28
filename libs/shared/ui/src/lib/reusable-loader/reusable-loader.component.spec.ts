import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableLoaderComponent } from './reusable-loader.component';

describe('ReusableLoaderComponent', () => {
  let component: ReusableLoaderComponent;
  let fixture: ComponentFixture<ReusableLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
