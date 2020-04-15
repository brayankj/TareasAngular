import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanotasComponent } from './listanotas.component';

describe('ListanotasComponent', () => {
  let component: ListanotasComponent;
  let fixture: ComponentFixture<ListanotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
