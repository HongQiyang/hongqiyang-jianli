import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import PracticeView from './PracticeView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

const routerLinkStub = {
  props: ['to'],
  template: '<a class="router-link-stub" :data-to="to"><slot /></a>'
}

describe('PracticeView', () => {
  it('shows a concise practice entrance with links to detail pages', () => {
    const wrapper = mount(PracticeView, {
      global: {
        stubs: {
          RouterLink: routerLinkStub
        }
      }
    })
    const text = wrapper.text()

    expect(wrapper.find('h1').text()).toBe('实践')
    expect(text).toContain('从精彩的返校宣讲，到忙碌的科考船开放日')
    expect(wrapper.find('#practice-title').text()).toBe('实践入口')
    expect(wrapper.findAll('.project-entry.practice-entry')).toHaveLength(3)
    expect(wrapper.findAll('.project-title-link')).toHaveLength(3)
    expect(wrapper.findAll('.project-arrow')).toHaveLength(3)
    expect(wrapper.findAll('.practice-entry img')).toHaveLength(0)
    expect(wrapper.find('.practice-report-list').exists()).toBe(false)
    expect(wrapper.find('.practice-image-button').exists()).toBe(false)

    expect(text).toContain('2024寒假返校宣讲')
    expect(text).toContain('面向母校厦门一中开展返校宣讲')
    expect(text).toContain('2024暑期社会实践与嘉庚号开放日志愿服务')
    expect(text).toContain('支撑公众科普、展览协助与国际交流场景')
    expect(text).toContain('2025暑期海洋科普社会实践')
    expect(text).toContain('将专业学习转化为面向公众的科学传播')
    expect(text).not.toContain('参与宣讲材料制作')
    expect(text).not.toContain('厦门大学海洋与地球学院')

    const titleLinks = wrapper.findAll('.project-title-link').map((link) => link.attributes('data-to'))
    const arrowLinks = wrapper.findAll('.project-arrow').map((link) => link.attributes('data-to'))

    expect(titleLinks).toEqual([
      '/practice/winter-return-talk',
      '/practice/kageng-open-day',
      '/practice/ocean-science-practice'
    ])
    expect(arrowLinks).toEqual(titleLinks)
  })
})
