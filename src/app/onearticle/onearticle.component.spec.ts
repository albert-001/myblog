import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnearticleComponent } from './onearticle.component';

describe('OnearticleComponent', () => {
  let component: OnearticleComponent;
  let fixture: ComponentFixture<OnearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
