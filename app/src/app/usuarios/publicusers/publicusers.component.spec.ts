import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicusersComponent } from './publicusers.component';

describe('PublicusersComponent', () => {
  let component: PublicusersComponent;
  let fixture: ComponentFixture<PublicusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
