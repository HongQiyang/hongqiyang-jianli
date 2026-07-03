import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ProjectsView from './ProjectsView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

describe('ProjectsView', () => {
  it('lists all project entrances as the dedicated projects section', () => {
    const wrapper = mount(ProjectsView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('h1').text()).toBe('项目')
    expect(wrapper.findAll('.project-entry')).toHaveLength(4)
    expect(wrapper.text()).toContain('面向仿生水声隐蔽通信的弹涂鱼机器人')
    expect(wrapper.text()).toContain('适用于被动声学监测的金枪鱼仿生探测机器人')
    expect(wrapper.text()).toContain('厦门大学第六届“海丝学堂”航次与水声信道分析')
    expect(wrapper.text()).toContain('仿生海豚机器人省级大创项目')
  })

  it('uses the updated engineering landing statement', () => {
    const wrapper = mount(ProjectsView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          }
        }
      }
    })

    expect(wrapper.find('.page-hero .large-copy').text()).toBe(
      '围绕水声通信、水声探测及水下机器人平台智能制造应用，推进从理论建模、算法推导到系统集成与工程验证的全流程落地。'
    )
  })
})
