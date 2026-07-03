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
  it('publishes three project entries with stable detail routes', () => {
    expect(projects).toHaveLength(3)
    expect(projects.map((project) => project.href)).toEqual([
      '/projects/mudskipper',
      '/projects/tuna',
      '/projects/haisi'
    ])
  })

  it('keeps public contact limited to email', () => {
    expect(contact.email).toBe('hongqiyang@stu.xmu.edu.cn')
    expect(flattenPublicText({ contact, projects })).not.toContain('18805068341')
  })

  it('marks the tuna robot as an in-progress project', () => {
    const tuna = projects.find((project) => project.slug === 'tuna')

    expect(tuna?.status).toBe('In Progress')
    expect(tuna?.summary).toContain('已完成实验仿真验证')
    expect(tuna?.summary).toContain('水池实验尚未进行')
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

    expect(haisi?.reports?.map((report) => report.source)).toEqual([
      '新华网',
      '人民网',
      '厦门大学海洋与地球学院',
      '厦门大学海洋与地球学院'
    ])
    expect(haisi?.reports?.[0].href).toBe(
      'http://fj.news.cn/20250724/dbe58acd441e4dceaddfa0c11641498c/c.html'
    )
    expect(resume.mediaReports.map((report) => report.source)).toEqual(
      haisi?.reports?.map((report) => report.source)
    )
  })

  it('uses the enhanced hardware photos as tuna evidence', () => {
    const tuna = projects.find((project) => project.slug === 'tuna')

    expect(tuna?.evidence.map((item) => item.src)).toEqual([
      'assets/projects/tuna/filter-pcb-enhanced.png',
      'assets/projects/tuna/prototype-v1-enhanced.png'
    ])
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('滤波电路板')
    expect(tuna?.sections.map((section) => section.body).join(' ')).toContain('初代样机')
  })

  it('attaches patent and award proofs to the mudskipper project', () => {
    const mudskipper = projects.find((project) => project.slug === 'mudskipper')

    expect(mudskipper?.evidence).toHaveLength(1)
    expect(mudskipper?.proofs?.map((item) => item.src)).toEqual([
      'assets/projects/mudskipper/patent-substantive-exam.png',
      'assets/projects/mudskipper/robot-competition-award.png'
    ])
  })
})
