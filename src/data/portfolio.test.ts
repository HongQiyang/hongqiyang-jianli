import { describe, expect, it } from 'vitest'
import { contact, profile, projects, resume } from './portfolio'

function flattenPublicText(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(flattenPublicText).join(' ')
  }

  if (value && typeof value === 'object') {
    return Object.values(value).map(flattenPublicText).join(' ')
  }

  return String(value ?? '')
}

describe('portfolio content', () => {
  it('publishes four project entries with stable detail routes', () => {
    expect(projects).toHaveLength(4)
    expect(projects.map((project) => project.href)).toEqual([
      '/projects/mudskipper',
      '/projects/tuna',
      '/projects/haisi',
      '/projects/dolphin'
    ])
  })

  it('keeps public contact limited to email', () => {
    expect(contact.email).toBe('hongqiyang@stu.xmu.edu.cn')
    expect(flattenPublicText({ contact, projects })).not.toContain('18805068341')
  })

  it('attaches certificate proofs to representative homepage honors', () => {
    expect(profile.honorProofs).toHaveLength(10)
    expect(profile.honorProofs.map((proof) => proof.src)).toEqual([
      'assets/honors/national-scholarship.png',
      'assets/honors/xmu-commendation.png',
      'assets/honors/top-ten-league-member.jpg',
      'assets/honors/excellent-student-2024.png',
      'assets/honors/merit-student-2025.png',
      'assets/honors/robot-award-mudskipper-first.png',
      'assets/honors/robot-award-tuna-third.jpg',
      'assets/honors/fujian-intelligent-equipment-first.png',
      'assets/honors/top-student-forum-second.jpg',
      'assets/honors/patent-substantive-exam.png'
    ])
  })

  it('marks the tuna robot as an in-progress project', () => {
    const tuna = projects.find((project) => project.slug === 'tuna')

    expect(tuna?.status).toBe('In Progress')
    expect(tuna?.keywords).toContain('校级大创')
    expect(tuna?.summary).toBe(
      '本项目面向水下被动声学监测应用，已完成仿真实验与初步验证，当前正处于由仿真验证向水池实验过渡的阶段，后续将开展水池实验以进一步验证系统性能。'
    )
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('依托校级大创项目开发金枪鱼仿生平台')
    expect(tuna?.sections.find((section) => section.eyebrow === 'Progress')?.title).toBe(
      '实验仿真与样机验证阶段'
    )
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain(
      '现阶段聚焦水池实验前的系统联调'
    )
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain(
      '三水听器探测阵列'
    )
    expect(tuna?.flow).toContain('实验仿真验证')
    expect(tuna?.flow).toContain('滤波电路板绘制')
    expect(tuna?.flow).toContain('初代样机制作')
  })

  it('uses public video and structure comparison image as mudskipper detail evidence', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')

    expect(mudskipper?.evidence.map((item) => item.src)).toEqual([
      'assets/projects/mudskipper/demo.mp4',
      'assets/projects/mudskipper/prototype-structure-overview.png',
      'assets/projects/mudskipper/system-architecture.png',
      'assets/projects/mudskipper/acoustic-communication-link.png',
      'assets/projects/mudskipper/modulation-demodulation-flow.png',
      'assets/projects/mudskipper/labview-transmitter-panel.png',
      'assets/projects/mudskipper/labview-receiver-panel.png',
      'assets/projects/mudskipper/sea-trial-signal-analysis.png',
      'assets/projects/mudskipper/motion-control-interface.png',
      'assets/projects/mudskipper/pool-validation-two-views.png'
    ])
    const captions = mudskipper?.evidence.map((item) => item.caption).join(' ')
    expect(captions).toContain('实物样机与结构标注')
    expect(captions).toContain('系统架构')
    expect(captions).toContain('水声链路')
    expect(captions).toContain('调制解调流程')
    expect(captions).toContain('LabVIEW 发射端')
    expect(captions).toContain('LabVIEW 接收端')
    expect(captions).toContain('海试信号')
    expect(captions).toContain('运动控制')
    expect(captions).toContain('水池验证')
  })

  it('uses the selected technical diagrams as project hero images', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')
    const tuna = projects.find((project) => project.slug === 'tuna')
    const haisi = projects.find((project) => project.slug === 'haisi')

    expect(mudskipper?.heroImage).toBe('assets/projects/mudskipper/structure-comparison.png')
    expect(tuna?.heroImage).toBe('assets/projects/tuna/simulation-validation-hero.png')
    expect(haisi?.heroImage).toBe('assets/projects/haisi/voyage-hero.jpg')
    expect(projects.find((project) => project.slug === 'dolphin')?.heroImage).toBe(
      'assets/projects/dolphin/dolphin-back-ventral-prototype.jpg'
    )
  })

  it('uses the selected voyage proof images as haisi evidence', () => {
    const haisi = projects.find((project) => project.slug === 'haisi')

    expect(haisi?.summary).toBe(
      '依托真实海上航次，系统开展水声通信验证、环境噪声测量与频谱分析，完整沉淀海试工程实践经验。'
    )
    expect(haisi?.sections).toEqual([
      {
        eyebrow: 'FIELD WORK',
        title: '真实航次实验',
        body: '参与嘉庚号航次水声通信测试与环境噪声观测，完成海上实验数据采集与现场记录。'
      },
      {
        eyebrow: 'METHODS',
        title: '信号处理方法',
        body: '引入 OFDM 多载波调制与 DSSS 直接序列扩频技术，围绕水声图像通信开展频谱分析、功率谱估计和噪声特征提取。'
      },
      {
        eyebrow: 'EVIDENCE',
        title: '实验支撑材料',
        body: '通过波形、频谱、航次照片与实验记录，呈现项目从现场采集到数据分析的完整链路。'
      }
    ])
    expect(haisi?.evidence.map((item) => item.src)).toEqual([
      'assets/projects/haisi/participation-proof.png',
      'assets/projects/haisi/receiver-array.png',
      'assets/projects/haisi/transmitter.png',
      'assets/projects/haisi/image-transmission-comparison.png',
      'assets/projects/haisi/ofdm-principle.png',
      'assets/projects/haisi/dsss-principle.png'
    ])
    expect(haisi?.evidence.map((item) => item.caption).join(' ')).toContain('OFDM 技术')
    expect(haisi?.evidence.map((item) => item.caption).join(' ')).toContain('DSSS 技术')
  })

  it('attaches media and official reports to the haisi voyage materials', () => {
    const haisi = projects.find((project) => project.slug === 'haisi')

    expect(haisi?.reports).toHaveLength(26)
    expect(haisi?.reports?.map((report) => report.category)).toEqual(
      expect.arrayContaining([
        '国家级权威媒体报道',
        '省级媒体报道',
        '市级媒体报道',
        '厦门大学官方报道',
        '学院报道'
      ])
    )
    expect(haisi?.reports?.map((report) => report.source)).toEqual(
      expect.arrayContaining(['新华网', '人民网', '中国新闻网', '新福建', '厦门日报', '湛蓝风华'])
    )
    expect(haisi?.reports?.[0].href).toBe(
      'http://www.fj.xinhuanet.com/20250724/dbe58acd441e4dceaddfa0c11641498c/c.html'
    )
    expect(haisi?.reports?.map((report) => report.href)).toContain(
      'https://mp.weixin.qq.com/s/LZ_dRoAhw6Mnq0RhOrPCKw'
    )
    expect(resume.mediaReports.map((report) => report.source)).toEqual(
      haisi?.reports?.map((report) => report.source)
    )
  })

  it('uses the enhanced hardware photos as tuna evidence', () => {
    const tuna = projects.find((project) => project.slug === 'tuna')

    expect(tuna?.evidence.map((item) => item.src)).toEqual([
      'assets/projects/tuna/filter-pcb-enhanced.png',
      'assets/projects/tuna/prototype-v1-enhanced.png',
      'assets/projects/tuna/rhc-7.png'
    ])
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('定制滤波电路')
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('初代样机')
    expect(tuna?.evidence.map((item) => item.caption).join(' ')).toContain('RHC-7')
  })

  it('attaches patent and award proofs to the mudskipper project', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')

    expect(mudskipper?.evidence).toHaveLength(10)
    expect(mudskipper?.proofs?.map((item) => item.src)).toEqual([
      'assets/projects/mudskipper/patent-substantive-exam.png',
      'assets/projects/mudskipper/robot-competition-award.png'
    ])
  })

  it('moves the provincial dolphin innovation project into project entries', () => {
    const dolphin = projects.find((project) => project.slug === 'dolphin')

    expect(resume.researchProjects).toHaveLength(0)
    expect(dolphin?.title).toBe('一种基于背腹式运动模式的仿生机械海豚设计')
    expect(dolphin?.summary).toContain('电控与运动控制模块')
    expect(dolphin?.sections.map((section) => section.body).join(' ')).toContain('Raspberry Pi')
    expect(dolphin?.sections.map((section) => section.body).join(' ')).toContain('RSH-10')
    expect(dolphin?.contribution.join(' ')).toContain('CONTROL |')
    expect(dolphin?.contribution.join(' ')).toContain('ACOUSTICS |')
    expect(dolphin?.contribution.join(' ')).toContain('MOTION |')
    expect(dolphin?.contribution.join(' ')).toContain('PWM 控制算法')
    expect(dolphin?.contribution.join(' ')).not.toContain('担任电控与运动控制模块负责人')
    expect(dolphin?.evidence.map((item) => item.src)).toEqual([
      'assets/projects/dolphin/dolphin-back-ventral-prototype.jpg',
      'assets/projects/dolphin/raspberry-power-sensehat.jpg',
      'assets/projects/dolphin/rsh10.png'
    ])
    expect(dolphin?.evidence.map((item) => item.caption).join(' ')).toContain('Sense HAT')
  })

  it('attaches local evidence files to social practice detail pages', () => {
    const practices = resume.practices
    const winter = practices.find((practice) => practice.slug === 'winter-return-talk')
    const kageng = practices.find((practice) => practice.slug === 'kageng-open-day')
    const science = practices.find((practice) => practice.slug === 'ocean-science-practice')

    expect(winter?.attachments?.map((file) => file.href)).toEqual([
      'assets/practice/files/winter-return-talk/winter-return-1.jpg',
      'assets/practice/files/winter-return-talk/winter-return-2.jpg',
      'assets/practice/files/winter-return-talk/winter-return-3.jpg'
    ])
    expect(kageng?.attachments).toHaveLength(7)
    expect(kageng?.attachments?.map((file) => file.href)).toEqual(
      expect.arrayContaining([
        'assets/practice/files/kageng-open-day/kageng-volunteer-certificate.png'
      ])
    )
    expect(kageng?.attachments?.map((file) => file.href).join(' ')).not.toContain(
      'summer-2024-statistics'
    )
    expect(science?.attachments).toHaveLength(5)
    expect(science?.attachments?.map((file) => file.href)).toContain(
      'assets/practice/files/ocean-science-practice/summer-2025-proof.pdf'
    )
  })
})
