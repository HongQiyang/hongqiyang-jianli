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
    expect(wrapper.text()).toContain('系统架构：展示陆地操作端')
    expect(wrapper.text()).toContain('调制解调流程：以仿生信号为载波')
    expect(wrapper.text()).toContain('LabVIEW 发射端：展示发送周期')
    expect(wrapper.text()).toContain('LabVIEW 接收端：展示接收波形')
    expect(wrapper.text()).toContain('海试信号：展示真实水声信号')
    expect(wrapper.text()).toContain('运动控制：展示串口参数')
    expect(wrapper.text()).toContain('水池验证：双视角记录机器人吊放与水下姿态')
    expect(
      wrapper.find('img[alt="弹涂鱼机器人实物与结构标注对照"]').exists()
    ).toBe(true)
    expect(wrapper.find('img[alt="弹涂鱼机器人系统架构与分层模块"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="仿生水声隐蔽通信调制解调流程"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="LabVIEW 仿生机器鱼通信系统发射端前面板"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="LabVIEW 仿生机器鱼通信系统接收端前面板"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="弹涂鱼机器人海试信号时域与频域分析"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="弹涂鱼机器人运动控制 LabVIEW 界面"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="弹涂鱼机器人水池验证双视角"]').exists()).toBe(true)
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

  it('shows the refined tuna project card copy', async () => {
    const router = createRouter({
      history: createWebHistory('/hongqiyang-jianli/'),
      routes: [{ path: '/projects/:slug', component: ProjectView }]
    })

    router.push('/projects/tuna')
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

    expect(wrapper.find('h1').text()).toBe('适用于被动声学监测的金枪鱼仿生探测机器人')
    expect(wrapper.text()).toContain('依托校级大创项目开发金枪鱼仿生平台')
    expect(wrapper.text()).toContain('实验仿真与样机验证阶段')
    expect(wrapper.text()).toContain('现阶段聚焦水池实验前的系统联调')
    expect(wrapper.text()).toContain('三水听器探测阵列')
    expect(wrapper.text()).toContain('LSTM 运动优化算法的协同控制关系')
    expect(wrapper.text()).not.toContain('校级大学生创新创业训练项目')
    expect(wrapper.text()).not.toContain('公开展示重点放在系统架构')
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
    expect(wrapper.text()).toContain('低延迟、高带宽的数据与指令传输')
    expect(wrapper.text()).toContain('完成微弱水声信号捕获、前置调理与 Raspberry Pi 数字处理链路贯通')
    expect(wrapper.text()).toContain('复现背腹式仿生推进形态')
    expect(wrapper.text()).toContain('CONTROL | 以 Raspberry Pi 与 Linux 控制系统为核心')
    expect(wrapper.text()).toContain('ACOUSTICS | 集成 RSH-10 水声传感器')
    expect(wrapper.text()).toContain('MOTION | 基于高扭矩舵机与多连杆结构')
    expect(wrapper.text()).not.toContain('担任电控与运动控制模块负责人')
    expect(wrapper.text()).not.toContain('作为核心计算大脑')
    expect(wrapper.text()).not.toContain('打造水下主动感知“声眼”')
    expect(wrapper.text()).toContain('一种基于背腹式运动模式的仿生机械海豚设计')
    expect(
      wrapper.find('img[alt="一种基于背腹式运动模式的仿生机械海豚设计样机"]').exists()
    ).toBe(true)
  })
})
