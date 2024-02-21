import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponentsComponent } from './father-components.component';

describe('FatherComponentsComponent', () => {
  let component: FatherComponentsComponent;
  let fixture: ComponentFixture<FatherComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FatherComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
