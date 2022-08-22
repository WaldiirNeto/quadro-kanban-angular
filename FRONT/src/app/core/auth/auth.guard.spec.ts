import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'

import { AuthGuard } from './auth.guard'
jest.mock(`@angular/router`)
describe('AuthGuard', () => {
  let guard: AuthGuard
  let routerStub: jest.Mocked<Router>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [Router, AuthGuard]
    }).compileComponents()
  })
  beforeEach(() => {
    routerStub = TestBed.inject(Router) as jest.Mocked<Router>
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
