import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'

describe('#HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Ecommerce')
  })

  it('should render a form', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('form')).toBeTruthy()
  })

  it('should render a form with an ID', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('form')).toHaveProperty('id')
  })

  it('should render a form with a name', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('form')).toHaveProperty('name')
  })

  it('should render an input named test with property ID', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('input')?.id).toBeTruthy()
  })

  // it('should render an input named test', () => {
  //   const compiled = fixture.nativeElement as HTMLElement
  //   expect(compiled.querySelector('input')).toHaveProperty('id')
  // })
})

describe('#TextSum', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should sum two numbers', () => {
    expect(component.soma(1, 2)).toBe(3)
  })

  it('should sum two numbers with error result', () => {
    expect(component.soma(1, 2)).not.toBe(4)
  })
})
