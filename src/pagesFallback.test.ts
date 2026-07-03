import { describe, expect, it } from 'vitest'
import fallback from '../public/404.html?raw'
import main from './main.ts?raw'

describe('GitHub Pages SPA fallback', () => {
  it('keeps a 404 fallback that returns deep links to the Vue router', () => {
    expect(fallback).toContain('/hongqiyang-jianli/')
    expect(fallback).toContain('spa-redirect')
    expect(main).toContain('spa-redirect')
  })
})
