import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import HomeView from './HomeView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

describe('HomeView hero', () => {
  it('uses the name as the only main heading and places the theme below it', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('h1').text()).toBe('洪旗阳')
    expect(wrapper.find('.hero-focus').text()).toBe('海洋声学与仿生机器人')
  })

  it('keeps education background off the homepage and links to the deeper sections', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('.hero-education').exists()).toBe(false)
    expect(wrapper.find('.project-directory').exists()).toBe(false)
    expect(wrapper.find('[data-to="/projects"]').exists()).toBe(true)
    expect(wrapper.find('[data-to="/resume"]').exists()).toBe(true)
  })

  it('uses the stronger opening statement and leaves email to the contact page', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('.hero-intro').text()).toBe(
      '突破水声通信技术，自主研制仿生机器人与水下探测系统，致力于深海领域的探索与开发'
    )
    expect(wrapper.find('.email-link').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('hongqiyang@stu.xmu.edu.cn')
  })

  it('shows focus modules for engineering theory, hardware, software and system fusion', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('.focus-section').exists()).toBe(true)
    expect(wrapper.findAll('.focus-module')).toHaveLength(4)
    expect(wrapper.text()).toContain('将抽象理论落地为可验证工程系统')
    expect(wrapper.text()).toContain('硬件平台搭建')
    expect(wrapper.text()).toContain('软件平台开发')
    expect(wrapper.text()).toContain('软硬件融合')
  })
})
