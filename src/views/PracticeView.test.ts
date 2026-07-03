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
    expect(text).toContain('央视网')
    expect(text).toContain('中国新闻网')
    expect(text).toContain('中国教育电视台')
    expect(text).toContain('央广网客户端')
    expect(text).toContain('新华网')
    expect(text).toContain('中国网')
    expect(text).not.toContain('实践材料')
    expect(text).not.toContain('人民网')
    expect(wrapper.findAll('.practice-report-list a')).toHaveLength(8)
    const reportLinks = wrapper.findAll('.practice-report-list a').map((link) => link.attributes('href'))
    expect(reportLinks).toContain(
      'https://content-static.cctvnews.cctv.com/snow-book/video.html?item_id=9866189641359648862&t=1722685415155&toc_style_id=video_default&track_id=E74889B8-C399-44C2-89C9-6581D26490EE_744383168190'
    )
    expect(reportLinks).toContain('https://m.chinanews.com/wap/detail/zw/gj/2024/08-03/10262756.shtml')
    expect(reportLinks).toContain('http://m.cetv.cn/p/517612.htm')
    expect(reportLinks).toContain('https://apicnrapp.cnr.cn/html/share.html?id=29341506')
    expect(reportLinks).toContain('https://news.xmu.edu.cn/info/1024/476581.htm')
    expect(reportLinks).toContain('https://news.xmu.edu.cn/info/1024/479361.htm')
    expect(reportLinks).toContain('http://fj.news.cn/20240906/0532e4af8e374e47a3605d4c8e3a69c4/c.html')
    expect(reportLinks).toContain('http://dicn.china.com.cn/web/zfzx/detail2_2024_08/13/4446277.html')
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
