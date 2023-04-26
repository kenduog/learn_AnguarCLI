import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatogoryComponent } from './single-catogory.component';

describe('SingleCatogoryComponent', () => {
  let component: SingleCatogoryComponent;
  let fixture: ComponentFixture<SingleCatogoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCatogoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCatogoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
