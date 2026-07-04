import { describe, expect, it } from 'vitest'
import { contact, projects, resume } from './portfolio'

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

  it('marks the tuna robot as an in-progress project', () => {
    const tuna = projects.find((project) => project.slug === 'tuna')

    expect(tuna?.status).toBe('In Progress')
    expect(tuna?.keywords).toContain('校级大创')
    expect(tuna?.summary).toBe(
      '本项目面向水下被动声学监测应用，已完成仿真实验与初步验证，当前正处于由仿真验证向水池实验过渡的阶段，后续将开展水池实验以进一步验证系统性能。'
    )
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('校级大学生创新创业训练项目')
    expect(tuna?.sections.find((section) => section.eyebrow === 'Progress')?.title).toBe(
      '实验仿真验证阶段'
    )
    expect(tuna?.flow).toContain('实验仿真验证')
    expect(tuna?.flow).toContain('滤波电路板绘制')
    expect(tuna?.flow).toContain('初代样机制作')
  })

  it('uses only the public video as mudskipper detail evidence', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')

    expect(mudskipper?.evidence).toHaveLength(1)
    expect(mudskipper?.evidence[0]).toMatchObject({
      kind: 'video',
      src: 'assets/projects/mudskipper/demo.mp4'
    })
  })

  it('uses the selected technical diagrams as project hero images', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')
    const tuna = projects.find((project) => project.slug === 'tuna')
    const haisi = projects.find((project) => project.slug === 'haisi')

    expect(mudskipper?.heroImage).toBe('assets/projects/mudskipper/structure-comparison.png')
    expect(tuna?.heroImage).toBe('assets/projects/tuna/simulation-validation-hero.png')
    expect(haisi?.heroImage).toBe('assets/projects/haisi/voyage-hero.jpg')
  })

  it('uses the selected voyage proof images as haisi evidence', () => {
    const haisi = projects.find((project) => project.slug === 'haisi')

    expect(haisi?.evidence.map((item) => item.src)).toEqual([
      'assets/projects/haisi/participation-proof.png',
      'assets/projects/haisi/receiver-array.png',
      'assets/projects/haisi/transmitter.png',
      'assets/projects/haisi/image-transmission-comparison.png'
    ])
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
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('滤波电路板')
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('初代样机')
    expect(tuna?.evidence.map((item) => item.caption).join(' ')).toContain('RHC-7')
  })

  it('attaches patent and award proofs to the mudskipper project', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')

    expect(mudskipper?.evidence).toHaveLength(1)
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
    expect(dolphin?.contribution.join(' ')).toContain('PWM 控制算法')
  })
})
