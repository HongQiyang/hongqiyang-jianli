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

    expect(wrapper.find('.project-directory').exists()).toBe(false)
    expect(wrapper.find('[data-to="/projects"]').exists()).toBe(true)
    expect(wrapper.find('[data-to="/resume"]').exists()).toBe(true)
  })

  it('shows personal profile metrics and representative honors on the homepage', () => {
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
    const text = wrapper.text()

    expect(wrapper.find('.profile-overview').exists()).toBe(true)
    expect(text).toContain('厦门大学 · 海洋技术（海洋物理方向）· 本科生')
    expect(text).toContain('GPA 3.80 / 4.00')
    expect(text).toContain('专业排名 4 / 54')
    expect(text).toContain('CET-4 554 / CET-6 501')
    expect(text).toContain('科研方向')
    expect(text).toContain(
      '关注智能海洋装备与水声感知，目前主要围绕水下声源定位、海洋声学观测与仿生机器人平台开展学习、实验与项目实践。'
    )
    expect(text).toContain('代表荣誉')
    expect(text).toContain('国家奖学金')
    expect(text).toContain('厦门大学通报表扬')
    expect(text).toContain('厦门大学校十佳共青团员')
    expect(text).toContain('校优秀三好学生')
    expect(text).toContain('厦门大学融润强海奖学金')
    expect(text).toContain('两项第十八届先进机器人及仿真技术大赛国家级一等奖')
    expect(text).toContain('一项第十八届先进机器人及仿真技术大赛国家级三等奖')
    expect(text).toContain('福建省大学生智能装备大赛省级一等奖')
    expect(text).toContain('厦门大学海洋与地球学院第五届拔尖本科生学术论坛汇报二等奖')
    expect(text).toContain('发明专利申请：一种基于仿生水声通信的仿生弹涂鱼水陆两栖机器人平台')
    expect(wrapper.find('.profile-photo-card').exists()).toBe(true)
    expect(wrapper.find('img[alt="洪旗阳个人证件照"]').attributes('src')).toContain(
      'assets/profile/headshot.png'
    )
    expect(wrapper.findAll('.honor-proof-link')).toHaveLength(11)
    expect(wrapper.find('[aria-label="查看国家奖学金证书"]').exists()).toBe(true)
    expect(wrapper.find('[aria-label="查看第十八届先进机器人及仿真技术大赛 ROV 项目国赛三等奖证书"]').exists()).toBe(
      true
    )
  })

  it('opens representative honor certificates in the image preview', async () => {
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

    expect(wrapper.find('.image-lightbox').exists()).toBe(false)

    await wrapper.find('.honor-proof-link').trigger('click')

    expect(wrapper.find('.image-lightbox').exists()).toBe(true)
    expect(wrapper.find('.image-lightbox img').attributes('alt')).toBe('国家奖学金证书')
    expect(wrapper.find('.image-lightbox figcaption').text()).toBe('国家奖学金：2024年12月获评。')

    await wrapper.find('.image-lightbox-close').trigger('click')

    expect(wrapper.find('.image-lightbox').exists()).toBe(false)
  })

  it('uses a measured undergraduate opening statement and leaves email to the contact page', () => {
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
      '学习水声通信与仿生机器人方向，参与水下探测平台和实验系统的设计、搭建与验证'
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
    expect(wrapper.text()).toContain('算法与信号处理实践')
    expect(wrapper.text()).toContain('将声学定位与控制理论，整理为可运行、可验证的程序实现。')
    expect(wrapper.text()).toContain('硬件与嵌入式实践')
    expect(wrapper.text()).toContain('参与前置电路 PCB 绘制、多架构主控平台调试与嵌入式系统开发。')
    expect(wrapper.text()).toContain('上层软件开发')
    expect(wrapper.text()).toContain('搭建交互界面，串联信号处理、视觉识别与数据分析流程。')
    expect(wrapper.text()).toContain('水下平台实测')
    expect(wrapper.text()).toContain('以仿生潜水器为实验载体，参与水下感知与控制系统的联调和验证。')
  })
})
