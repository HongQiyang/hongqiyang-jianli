import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import PracticeView from './PracticeView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

describe('PracticeView', () => {
  it('shows social practice as a standalone project-like chapter', () => {
    const wrapper = mount(PracticeView)
    const text = wrapper.text()

    expect(wrapper.find('h1').text()).toBe('实践')
    expect(wrapper.find('.project-directory').exists()).toBe(true)
    expect(wrapper.find('#practice-title').text()).toBe('实践入口')
    expect(wrapper.findAll('.project-entry.practice-entry')).toHaveLength(3)
    expect(wrapper.findAll('.project-title-link')).toHaveLength(3)
    expect(wrapper.findAll('.project-arrow')).toHaveLength(3)
    expect(wrapper.findAll('.practice-entry img')).toHaveLength(3)
    expect(text).toContain('2024寒假返校宣讲')
    expect(text).toContain('厦门大学2024年寒假社会实践活动“优秀团队”')
    expect(text).toContain('2024暑期社会实践与嘉庚号开放日志愿服务')
    expect(text).toContain('Certificate of Appreciation')
    expect(text).toContain('2025暑期海洋科普社会实践')
    expect(text).toContain('海底火山现象模拟小实验')
    expect(wrapper.find('img[alt="2024寒假返校宣讲现场"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="嘉庚号香港开放日志愿服务证书"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="2025暑期海洋科普实践现场"]').exists()).toBe(true)
  })
})
