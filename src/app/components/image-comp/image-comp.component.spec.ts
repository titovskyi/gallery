import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ImageCompComponent } from './image-comp.component';
import { IImage } from '../../interfaces/image';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ImageCompComponent', () => {
  let component: ImageCompComponent;
  let fixture: ComponentFixture<ImageCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCheckboxModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ImageCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get image value from parent component', () => {
    fixture.detectChanges();
    expect(component.image.favourite).toEqual(true);
  });
});
