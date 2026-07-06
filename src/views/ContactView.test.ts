import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ContactView from './ContactView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

describe('ContactView', () => {
  it('presents contact details as a formal collaboration page', () => {
    const wrapper = mount(ContactView)

    expect(wrapper.text()).toContain('学术交流与合作联系')
    expect(wrapper.text()).toContain('智能海洋装备、水声感知、仿生机器人平台')
    expect(wrapper.text()).toContain('水声感知 / 仿生机器人 / 水下系统')
    expect(wrapper.findAll('.contact-card')).toHaveLength(2)
    expect(wrapper.find('.contact-mail').attributes('href')).toBe(
      'mailto:hongqiyang@stu.xmu.edu.cn'
    )
    expect(wrapper.findAll('a.contact-card')).toHaveLength(1)
    expect(wrapper.findAll('article.contact-card')).toHaveLength(1)
    expect(wrapper.text()).not.toContain('公开页面仅保留邮箱')
  })
})
