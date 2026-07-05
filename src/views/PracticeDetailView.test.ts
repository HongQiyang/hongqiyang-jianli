import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import PracticeDetailView from './PracticeDetailView.vue'

let currentSlug = 'kageng-open-day'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: {
      slug: currentSlug
    }
  })
}))

vi.mock('../animations', () => ({
  runPageMotion: vi.fn()
}))

const routerLinkStub = {
  props: ['to'],
  template: '<a class="router-link-stub" :data-to="to"><slot /></a>'
}

function mountDetail(slug = 'kageng-open-day') {
  currentSlug = slug

  return mount(PracticeDetailView, {
    global: {
      stubs: {
        RouterLink: routerLinkStub
      }
    }
  })
}

describe('PracticeDetailView', () => {
  it('shows the selected practice details, reports, and attached files', () => {
    const wrapper = mountDetail('kageng-open-day')
    const text = wrapper.text()

    expect(wrapper.find('h1').text()).toBe('2024暑期社会实践与嘉庚号开放日志愿服务')
    expect(text).toContain('参与暑期社会实践与嘉庚号香港开放日志愿服务')
    expect(text).toContain('参与“青春为中国式现代化挺膺担当”主题暑期社会实践')
    expect(text).toContain('嘉庚号香港开放日志愿服务 Certificate of Appreciation')
    expect(wrapper.findAll('.report-card')).toHaveLength(5)
    expect(wrapper.findAll('.practice-attachment-card')).toHaveLength(7)

    const attachmentLinks = wrapper
      .findAll('.practice-attachment-card')
      .map((link) => link.attributes('href'))

    expect(attachmentLinks).toEqual(
      expect.arrayContaining([
        expect.stringContaining('assets/practice/files/kageng-open-day/kageng-volunteer-certificate.png')
      ])
    )
    expect(text).toContain('2024暑期实践现场材料 4')
  })

  it('keeps other practice files on their own detail pages', () => {
    const wrapper = mountDetail('ocean-science-practice')
    const text = wrapper.text()

    expect(wrapper.find('h1').text()).toBe('2025暑期海洋科普社会实践')
    expect(text).toContain('海底火山现象模拟小实验')
    expect(wrapper.findAll('.practice-attachment-card')).toHaveLength(5)
    expect(
      wrapper
        .findAll('.practice-attachment-card')
        .map((link) => link.attributes('href'))
    ).toEqual(
      expect.arrayContaining([
        expect.stringContaining('assets/practice/files/ocean-science-practice/summer-2025-proof.pdf')
      ])
    )
  })

  it('opens the practice image in an enlarged preview', async () => {
    const wrapper = mountDetail('winter-return-talk')

    expect(wrapper.find('.image-lightbox').exists()).toBe(false)

    await wrapper.find('.practice-hero-image-button').trigger('click')

    expect(wrapper.find('.image-lightbox').exists()).toBe(true)
    expect(wrapper.find('.image-lightbox img').attributes('alt')).toBe('2024寒假返校宣讲现场')

    await wrapper.find('.image-lightbox-close').trigger('click')

    expect(wrapper.find('.image-lightbox').exists()).toBe(false)
  })

  it('shows a fallback when the practice slug is missing', () => {
    const wrapper = mountDetail('missing-practice')

    expect(wrapper.text()).toContain('实践内容未找到')
    expect(wrapper.find('.router-link-stub').attributes('data-to')).toBe('/practice')
  })
})
