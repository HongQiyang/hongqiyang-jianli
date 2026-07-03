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

  it('shows the updated focus modules for algorithm, hardware, software and underwater testing', () => {
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
    expect(wrapper.text()).toContain('核心算法落地')
    expect(wrapper.text()).toContain('将复杂的声学定位与控制理论，转化为高效、低延迟的可执行代码。')
    expect(wrapper.text()).toContain('底层硬件架构')
    expect(wrapper.text()).toContain('从精密前置电路的 PCB 绘制，到多架构主控平台的嵌入式系统开发。')
    expect(wrapper.text()).toContain('上层软件开发')
    expect(wrapper.text()).toContain('搭建直观的交互界面，打通信号处理、视觉识别与数据分析的完整链路。')
    expect(wrapper.text()).toContain('水下平台实测')
    expect(wrapper.text()).toContain('以仿生潜水器为工程载体，全面验证水下感知与控制系统的可靠性。')
  })
})
