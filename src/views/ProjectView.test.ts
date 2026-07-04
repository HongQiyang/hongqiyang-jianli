import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from './ProjectView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

describe('ProjectView hero', () => {
  it('uses the compact one-line title style for project detail pages', async () => {
    const router = createRouter({
      history: createWebHistory('/hongqiyang-jianli/'),
      routes: [{ path: '/projects/:slug', component: ProjectView }]
    })

    router.push('/projects/mudskipper')
    await router.isReady()

    const wrapper = mount(ProjectView, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a><slot /></a>'
          }
        }
      }
    })

    const title = wrapper.find('h1')
    expect(title.classes()).toContain('project-hero-title')
    expect(title.text()).toBe('面向仿生水声隐蔽通信的弹涂鱼机器人')
    expect(wrapper.findAll('.project-section-card')).toHaveLength(3)
    expect(wrapper.findAll('.section-card-icon')).toHaveLength(3)
    expect(wrapper.findAll('.section-card-icon-wrap')).toHaveLength(3)
    expect(wrapper.text()).toContain('仿生移动通信节点')
    expect(wrapper.text()).toContain('平台与水声链路一体化')
    expect(wrapper.text()).toContain('全流程实验与海试验证')
    expect(wrapper.text()).toContain('突破传统水声通信节点布放后难以主动调整位置与姿态的局限')
    expect(wrapper.text()).toContain('核心专利及算法细节均已脱敏处理')
    expect(wrapper.text()).toContain('弹涂鱼机器人实物与结构标注对照')
    expect(
      wrapper.find('img[alt="弹涂鱼机器人实物与结构标注对照"]').exists()
    ).toBe(true)
    expect(wrapper.text()).not.toContain('从固定通信节点到可移动仿生载体')
  })

  it('shows media and official report links for the haisi voyage project', async () => {
    const router = createRouter({
      history: createWebHistory('/hongqiyang-jianli/'),
      routes: [{ path: '/projects/:slug', component: ProjectView }]
    })

    router.push('/projects/haisi')
    await router.isReady()

    const wrapper = mount(ProjectView, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('h1').text()).toBe('厦门大学第六届“海丝学堂”航次与水声信道分析')
    expect(wrapper.find('.report-section').exists()).toBe(true)
    expect(wrapper.text()).toContain('国家级权威媒体报道')
    expect(wrapper.text()).toContain('省级媒体报道')
    expect(wrapper.text()).toContain('市级媒体报道')
    expect(wrapper.text()).toContain('学院报道')
    expect(wrapper.text()).toContain('新华网')
    expect(wrapper.text()).toContain('人民网')
    expect(wrapper.text()).toContain('湛蓝风华')
    expect(wrapper.findAll('.report-card')).toHaveLength(26)
  })

  it('shows the dolphin innovation project as a project detail page', async () => {
    const router = createRouter({
      history: createWebHistory('/hongqiyang-jianli/'),
      routes: [{ path: '/projects/:slug', component: ProjectView }]
    })

    router.push('/projects/dolphin')
    await router.isReady()

    const wrapper = mount(ProjectView, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('h1').text()).toBe('一种基于背腹式运动模式的仿生机械海豚设计')
    expect(wrapper.text()).toContain('Raspberry Pi')
    expect(wrapper.text()).toContain('RSH-10')
    expect(wrapper.text()).toContain('PWM 控制算法')
    expect(wrapper.text()).toContain('一种基于背腹式运动模式的仿生机械海豚设计')
    expect(
      wrapper.find('img[alt="一种基于背腹式运动模式的仿生机械海豚设计样机"]').exists()
    ).toBe(true)
  })
})
