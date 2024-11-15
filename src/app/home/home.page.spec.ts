import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ApiService } from '../services/api.service';
import { Observable, of } from 'rxjs';

const apiServiceMock: { obtenerAves: () => Observable<any[]> } = 
{
  obtenerAves: () => of([])
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [ 
        {
          provide: ApiService, 
          useValue: apiServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize aves as an array', () => {
    expect(Array.isArray(component.aves)).toBe(true);
  });

   it('should called suma', () => {
   const spy = spyOn(component, 'sumar');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should sumar', () =>{
    expect(component.sumar(1,2)).toBe(3);
  });

  it('should sumar negativos', () =>{
    expect(() => component.sumar(-1,2)).toThrowError('No se permiten números negativos');
  })

  it('should restar', () =>{
    expect(component.restar(3,2)).toBe(1);
  });

  it('should dividir', () =>{
    expect(component.dividir(2,2)).toBe(1);
  });

  it('should multiplicar', () =>{
    expect(component.multiplicar(2, 3)).toBe(6);
  });

  it('should titulo', () => {
    expect(component.titulo).toEqual('Pruebas unitarias');
  });

  it('should dividir 0', () =>{
    expect(() => component.dividir(2, 0)).toThrowError('No se puede dividir por cero');
  });

  it('should be created', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });
});
