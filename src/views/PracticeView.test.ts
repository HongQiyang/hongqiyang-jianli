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
    expect(text).toContain('从精彩的返校宣讲，到忙碌的科考船开放日，再到深入基层的海洋科普实践')
    expect(text).toContain('专业知识不应只停留在课堂与实验室')
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
    expect(text).toContain('荣誉与报道')
    expect(text).toContain('厦门大学2024年主题暑期社会实践活动“积极分子”')
    expect(text).toContain('嘉庚号香港开放日志愿服务 Certificate of Appreciation')
    expect(text).toContain('厦门大学海洋与地球学院')
    expect(text).toContain('“嘉庚”号海洋科学综合考察船')
    expect(text).toContain('集友陈嘉庚教育基金')
    expect(text).toContain('紫荆号')
    expect(text).toContain('点新闻')
    expect(text).not.toContain('实践材料')
    expect(text).not.toContain('人民网')
    expect(text).not.toContain('央视网')
    expect(text).not.toContain('央广网客户端')
    expect(wrapper.findAll('.practice-report-list a')).toHaveLength(5)
    const reportLinks = wrapper.findAll('.practice-report-list a').map((link) => link.attributes('href'))
    expect(reportLinks).toContain('https://coe.xmu.edu.cn/info/1591/124890.htm')
    expect(reportLinks).toContain('https://ships.xmu.edu.cn/info/1406/3327.htm')
    expect(reportLinks).toContain(
      'https://www.chiyutkkedf.org.hk/cn/%E3%80%8C%E5%98%89%E5%BA%9A%E3%80%8D%E5%8F%B7%E7%A7%91%E8%80%83%E8%88%B9%E8%AE%BF%E6%B8%AF%E6%B4%BB%E5%8A%A8%E5%9C%86%E6%BB%A1%E8%90%BD%E5%B9%95%E4%B8%89%E5%A4%A7%E4%BA%AE%E7%82%B9%E5%BC%95%E5%85%B3/'
    )
    expect(reportLinks).toContain('https://bau.com.hk/article/2024-08/16/content_1274118532838510592.html')
    expect(reportLinks).toContain('https://www.dotdotnews.com/a/202408/16/AP66bf3b1ae4b0d492760b82e2.html')
    expect(text).toContain('2025暑期海洋科普社会实践')
    expect(text).toContain('海底火山现象模拟小实验')
    expect(wrapper.find('img[alt="2024寒假返校宣讲现场"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="嘉庚号香港开放日志愿服务证书"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="2025暑期海洋科普实践现场"]').exists()).toBe(true)
  })

  it('opens practice images in an enlarged preview', async () => {
    const wrapper = mount(PracticeView)

    expect(wrapper.findAll('.practice-image-button')).toHaveLength(3)
    expect(wrapper.find('.image-lightbox').exists()).toBe(false)

    await wrapper.find('.practice-image-button').trigger('click')

    expect(wrapper.find('.image-lightbox').exists()).toBe(true)
    expect(wrapper.find('.image-lightbox img').attributes('alt')).toBe('2024寒假返校宣讲现场')

    await wrapper.find('.image-lightbox-close').trigger('click')

    expect(wrapper.find('.image-lightbox').exists()).toBe(false)
  })
})
