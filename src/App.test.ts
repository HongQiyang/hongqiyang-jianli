import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App background', () => {
  it('renders decorative ocean-tech accents behind the page', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a><slot /></a>'
          },
          RouterView: true
        }
      }
    })

    expect(wrapper.findAll('.signal-thread')).toHaveLength(2)
    expect(wrapper.findAll('.wave-ribbon')).toHaveLength(2)
    expect(wrapper.find('.sonar-arc').exists()).toBe(true)
    expect(wrapper.find('.depth-markers').exists()).toBe(true)
    expect(wrapper.findAll('.acoustic-symbol')).toHaveLength(4)
    expect(wrapper.findAll('.hydrophone-cluster span')).toHaveLength(3)
    expect(wrapper.findAll('.floating-note')).toHaveLength(4)
    expect(wrapper.findAll('.magic-staff')).toHaveLength(2)
    expect(wrapper.findAll('.sound-ripple')).toHaveLength(3)
    expect(wrapper.find('.ethereal-veil').exists()).toBe(true)
    expect(wrapper.find('.robot-harbor').exists()).toBe(true)
    expect(wrapper.findAll('.bio-robot')).toHaveLength(3)
    expect(wrapper.find('.sonar-interface').exists()).toBe(true)
    expect(wrapper.find('.system-topology').exists()).toBe(true)
  })
})

describe('App navigation', () => {
  it('uses five main sections: home, projects, resume, practice and contact', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          },
          RouterView: true
        }
      }
    })

    const links = wrapper.findAll('.site-nav a')
    expect(links.map((link) => link.text())).toEqual(['首页', '项目', '简历', '实践', '联系'])
    expect(links.map((link) => link.attributes('data-to'))).toEqual([
      '/',
      '/projects',
      '/resume',
      '/practice',
      '/contact'
    ])
  })

  it('keeps the global footer as a contact entrance instead of exposing email text', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          },
          RouterView: true
        }
      }
    })

    const footerLink = wrapper.find('.site-footer a')
    expect(footerLink.text()).toBe('联系')
    expect(footerLink.attributes('data-to')).toBe('/contact')
    expect(wrapper.text()).not.toContain('hongqiyang@stu.xmu.edu.cn')
  })
})
