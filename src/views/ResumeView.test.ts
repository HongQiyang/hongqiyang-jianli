import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ResumeView from './ResumeView.vue'

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

describe('ResumeView', () => {
  it('shows research voyage, education, skills and English certificates', () => {
    const wrapper = mount(ResumeView, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :data-to="to"><slot /></a>'
          }
        }
      }
    })
    const text = wrapper.text()

    expect(wrapper.find('h1').text()).toBe('在线简历')
    expect(text).toContain('海丝远洋科考经历')
    expect(text).toContain('厦门大学第六届“海丝学堂”人才培养计划')
    expect(text).toContain('嘉庚号')
    expect(text).toContain('厦门大学（翔安校区）')
    expect(text).toContain('福建省厦门第一中学')
    expect(text).toContain('STM32')
    expect(text).toContain('PCB设计')
    expect(text).toContain('Multisim')
    expect(text).toContain('CET4：554')
    expect(text).toContain('CET6：501')
    expect(text).not.toContain('国家级权威媒体报道')
    expect(text).not.toContain('省级媒体报道')
    expect(text).not.toContain('新华网')
    expect(text).not.toContain('人民网')
    expect(text).toContain('拔尖本科生学术论坛')
    expect(text).toContain('汇报二等奖')
    expect(text).not.toContain('社会实践')
    expect(text).not.toContain('2024寒假返校宣讲')
    expect(text).not.toContain('2024暑期社会实践与嘉庚号开放日志愿服务')
    expect(text).not.toContain('2025暑期海洋科普社会实践')
    expect(text).not.toContain('仿生海豚机器人省级大创项目')
    expect(text).not.toContain('电控运动模块')
    expect(wrapper.find('[data-to="/projects/haisi"]').exists()).toBe(true)
    expect(wrapper.find('.voyage-detail-link').text()).toBe('查看航次详情与报道 →')
    expect(wrapper.find('.media-report-section').exists()).toBe(false)
    expect(wrapper.find('.timeline-report-list').exists()).toBe(false)
    expect(wrapper.find('.practice-page').exists()).toBe(false)
  })
})
