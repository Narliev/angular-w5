import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyoneComponent } from './twentyone.component';

describe('TwentyoneComponent', () => {
  let component: TwentyoneComponent;
  let fixture: ComponentFixture<TwentyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwentyoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwentyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
