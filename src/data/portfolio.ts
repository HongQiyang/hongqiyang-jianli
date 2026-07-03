export type ProjectStatus = 'Completed Prototype' | 'In Progress' | 'Field Analysis'

export type EvidenceItem = {
  kind: 'image' | 'video'
  src: string
  alt: string
  caption: string
}

export type ReportLink = {
  category: string
  source: string
  title: string
  date: string
  href: string
  note: string
}

export type Project = {
  slug: 'mudskipper' | 'tuna' | 'haisi' | 'dolphin'
  href: string
  title: string
  status: ProjectStatus
  summary: string
  keywords: string[]
  heroImage?: string
  sections: Array<{
    eyebrow: string
    title: string
    body: string
  }>
  flow: string[]
  contribution: string[]
  evidence: EvidenceItem[]
  proofs?: EvidenceItem[]
  reports?: ReportLink[]
}

type ResumeResearchProject = {
  date: string
  title: string
  role: string
  points: string[]
}

type ResumePractice = {
  date: string
  title: string
  role: string
  result: string
  points: string[]
  image: EvidenceItem
  honors?: string[]
  reports?: ReportLink[]
}

const haisiReportEntries = [
  ['国家级权威媒体报道', '新华网', '“嘉庚”号科考船再启航将首次穿越赤道', '2025年7月24日', 'http://www.fj.xinhuanet.com/20250724/dbe58acd441e4dceaddfa0c11641498c/c.html'],
  ['国家级权威媒体报道', '人民网', '厦门大学“嘉庚”号科考船在雅加达举办公众开放日活动', '2025年8月9日', 'https://world.people.com.cn/n1/2025/0809/c1002-40539246.html'],
  ['国家级权威媒体报道', '新华网', '“嘉庚”号相关国际航次报道', '2025年8月8日', 'https://www.news.cn/world/20250808/7d9f96fb922d44ea869d32f323743fe0/c.html'],
  ['国家级权威媒体报道', '中国新闻网', '“嘉庚”号相关国际航次报道', '2025年8月8日', 'https://www.chinanews.com.cn/gj/2025/08-08/10461819.shtml'],
  ['国家级权威媒体报道', '亚太网', '“嘉庚”号相关亚太区域报道', '2025年8月12日', 'https://www.news.cn/asia/20250812/6a41fa7e65c946debfa32ba17c846ed2/c.html'],
  ['国家级权威媒体报道', '中国新闻网', '“嘉庚”号相关视频报道', '2025年8月8日', 'https://www.chinanews.com.cn/gj/shipin/cns-d/2025/08-08/news1027149.shtml'],
  ['省级媒体报道', '新福建', '第六届“海丝学堂”相关报道', '2025年7月25日', 'https://www.fjdaily.com/app/content/2025-07/25/content_3448223.html'],
  ['省级媒体报道', '闽南网', '第六届“海丝学堂”相关报道', '2025年7月', 'http://www.mnw.cn/xiamen/news/3032131.html'],
  ['省级媒体报道', '浙江日报', '“嘉庚”号相关报道', '2025年8月9日', 'https://zjrb.zjol.com.cn/html/2025-08/09/content_3842846.htm'],
  ['省级媒体报道', '新福建', '“嘉庚”号雅加达公众开放日相关报道', '2025年8月9日', 'https://www.fjdaily.com/app/content/2025-08/09/content_3480620.html'],
  ['市级媒体报道', '厦门广电网', '第六届“海丝学堂”相关报道', '2025年7月24日', 'https://www.xmtv.cn/xmtv/2025-07-24/5225601a85122a96.html'],
  ['市级媒体报道', '厦门市集美区人民政府', '第六届“海丝学堂”相关报道', '2025年7月30日', 'https://www.jimei.gov.cn/ywkd/jmbxw/202507/t20250730_1110434.htm'],
  ['市级媒体报道', '厦视新闻', '第六届“海丝学堂”相关报道', '2025年7月24日', 'https://www.xmtv.cn/xmtv/2025-07-24/1518fa064b6f0deb.html'],
  ['市级媒体报道', '厦门网', '第六届“海丝学堂”相关报道', '2025年7月25日', 'https://news.xmnn.cn/xmxw/202507/t20250725_355881.html'],
  ['市级媒体报道', '厦门日报', '第六届“海丝学堂”相关报道', '2025年7月25日', 'https://epaper.xmrb.com/xmrb/pc/con/202507/25/content_77269.html'],
  ['市级媒体报道', '厦门广电网', '“嘉庚”号雅加达公众开放日相关报道', '2025年8月9日', 'https://www.xmtv.cn/xmtv/2025-08-09/0a4c287a5ba2d9b2.html'],
  ['市级媒体报道', '厦门日报', '“嘉庚”号雅加达公众开放日相关报道', '2025年8月9日', 'https://epaper.xmrb.com/xmrb/pc/con/202508/09/content_78908.html'],
  ['市级媒体报道', '厦门网', '“嘉庚”号雅加达公众开放日相关报道', '2025年8月9日', 'https://news.xmnn.cn/xmxw/202508/t20250809_358504.html'],
  ['厦门大学官方报道', '厦门大学新闻网', '第六届“海丝学堂”相关报道', '2025年', 'https://news.xmu.edu.cn/info/1025/503042.htm'],
  ['厦门大学官方报道', '厦门大学新闻网', '第六届“海丝学堂”相关报道', '2025年', 'https://news.xmu.edu.cn/info/1024/479361.htm'],
  ['厦门大学官方报道', '厦门大学新闻网', '第六届“海丝学堂”相关报道', '2025年', 'https://news.xmu.edu.cn/info/1025/503052.htm'],
  ['厦门大学官方报道', '厦门大学新闻网', '第六届“海丝学堂”相关报道', '2025年', 'https://news.xmu.edu.cn/info/1025/503722.htm'],
  ['厦门大学官方报道', '厦门大学新闻网', '第六届“海丝学堂”相关报道', '2025年', 'https://news.xmu.edu.cn/info/1024/503752.htm'],
  ['厦门大学官方报道', '厦门大学官方微信', '第六届“海丝学堂”相关报道', '2025年', 'https://mp.weixin.qq.com/s/ZvvvtJWwCfiUY3046s1Mpg'],
  ['学院报道', '厦门大学海洋与地球学院', '第六届“海丝学堂”相关报道', '2025年', 'https://coe.xmu.edu.cn/info/1591/214261.htm'],
  ['学院报道', '湛蓝风华', '第六届“海丝学堂”相关报道', '2025年', 'https://mp.weixin.qq.com/s/LZ_dRoAhw6Mnq0RhOrPCKw']
] as const

const haisiReports: ReportLink[] = haisiReportEntries.map(
  ([category, source, title, date, href]) => ({
    category,
    source,
    title,
    date,
    href,
    note: '作为厦门大学第六届“海丝学堂”航次背景、公众开放、国际交流与成果传播的外部佐证。'
  })
)

export const contact = {
  email: 'hongqiyang@stu.xmu.edu.cn'
}

export const profile = {
  title: '洪旗阳 | 海洋声学与仿生机器人',
  subtitle: 'Ocean Acoustics · Biomimetic Robotics · Underwater Systems',
  intro: '突破水声通信技术，自主研制仿生机器人与水下探测系统，致力于深海领域的探索与开发',
  identity: '厦门大学 · 海洋技术（海洋物理方向）· 本科生',
  metrics: ['GPA 3.80 / 4.00', '专业排名 3 / 30', 'CET-4 554 / CET-6 501'],
  researchObjective:
    '聚焦智能海洋装备与水声感知，期望在研究生阶段围绕水下声源定位、海洋声学观测与仿生机器人平台开展系统性研究。',
  honors: [
    '第十八届先进机器人及仿真技术大赛国赛一等奖',
    '发明专利申请进入实质审查阶段',
    '厦门大学海洋与地球学院第五届拔尖本科生学术论坛汇报二等奖',
    '嘉庚号香港开放日志愿服务 Certificate of Appreciation'
  ],
  about:
    '洪旗阳，本科就读于厦门大学海洋技术方向，项目兴趣集中在海洋声学、仿生机器人、水下通信与水下感知系统。曾就读于福建省厦门第一中学。'
}

export const focusModules = [
  {
    icon: '∿',
    title: '核心算法落地',
    detail: '将复杂的声学定位与控制理论，转化为高效、低延迟的可执行代码。'
  },
  {
    icon: '⌁',
    title: '底层硬件架构',
    detail: '从精密前置电路的 PCB 绘制，到多架构主控平台的嵌入式系统开发。'
  },
  {
    icon: '</>',
    title: '上层软件开发',
    detail: '搭建直观的交互界面，打通信号处理、视觉识别与数据分析的完整链路。'
  },
  {
    icon: '◎',
    title: '水下平台实测',
    detail: '以仿生潜水器为工程载体，全面验证水下感知与控制系统的可靠性。'
  }
]

export const resume = {
  summary:
    '以海洋声学、水下通信与仿生机器人为主线，关注从真实航次数据、声学电路与嵌入式系统到机器人平台验证的完整工程链路。',
  expeditions: [
    {
      date: '2025.07 - 2025.08',
      title: '厦门大学第六届“海丝学堂”人才培养计划',
      href: '/projects/haisi',
      role: '嘉庚号第二航段组员',
      points: [
        '参与从厦门启航至印度尼西亚雅加达的远洋科考航次，面向南海及太平洋南部深海垂直水声通信与信道特性开展学习和实验。',
        '参与不同工况下海洋环境噪声数据处理、频谱特征分析和水声图像传输效果整理。',
        '将航次中的真实水声信道理解与后续仿生通信、被动声学监测项目形成衔接。'
      ]
    }
  ],
  conferences: [
    {
      date: '2026.06',
      title: '厦门大学海洋与地球学院第五届拔尖本科生学术论坛',
      result: '汇报二等奖',
      detail: '围绕入学以来的科研项目脉络、阶段成果与后续计划进行交流汇报。'
    }
  ],
  researchProjects: [] as ResumeResearchProject[],
  practices: [
    {
      date: '2024.02 - 2024.04',
      title: '2024寒假返校宣讲',
      role: '厦门第一大学队成员 / 宣讲汇报人',
      result: '厦门大学2024年寒假社会实践活动“优秀团队”',
      points: [
        '面向母校福建省厦门第一中学开展返校宣讲，围绕大学学习、专业选择与校园生活进行经验分享。',
        '参与宣讲材料制作、现场汇报与团队展示，所在队伍获评厦门大学寒假社会实践活动优秀团队。'
      ],
      image: {
        kind: 'image',
        src: 'assets/practice/winter-return-talk.jpg',
        alt: '2024寒假返校宣讲现场',
        caption: '返校宣讲现场：面向厦门一中同学分享大学学习、专业选择与校园经历。'
      }
    },
    {
      date: '2024.07 - 2025.06',
      title: '2024暑期社会实践与嘉庚号开放日志愿服务',
      role: '实践队成员 / 嘉庚号开放日志愿者',
      result: '获评2024年主题暑期社会实践活动“积极分子”，并获得嘉庚号香港开放日志愿服务 Certificate of Appreciation',
      points: [
        '参与“青春为中国式现代化挺膺担当”主题暑期社会实践，完成现场调研、活动组织、材料整理与成果汇总。',
        '在“嘉庚”号科考船停靠香港海运码头开放日活动中参与志愿服务与展览协助，支撑公众科普、海洋文化传播与国际交流场景。',
        '结合嘉庚号公众开放、海洋科普传播与校内社会实践总结材料，整理形成可展示的志愿服务、荣誉证明与媒体报道链条。'
      ],
      honors: [
        '厦门大学2024年主题暑期社会实践活动“积极分子”',
        '嘉庚号香港开放日志愿服务 Certificate of Appreciation',
        '嘉庚号公众开放日展览协助与科普志愿服务经历'
      ],
      reports: haisiReports.filter((report) =>
        ['人民网', '中国新闻网', '厦门日报', '厦门网'].includes(report.source)
      ).slice(0, 4),
      image: {
        kind: 'image',
        src: 'assets/practice/kageng-open-day-certificate.png',
        alt: '嘉庚号香港开放日志愿服务证书',
        caption: '嘉庚号香港开放日志愿服务：参与公众开放日与展览协助，获得 Certificate of Appreciation。'
      }
    },
    {
      date: '2025.07 - 2025.12',
      title: '2025暑期海洋科普社会实践',
      role: '实践队成员 / 科普讲解',
      result: '获评厦门大学2025年主题暑期社会实践活动“积极分子”',
      points: [
        '参与面向中小学的海洋科普活动，围绕“海底火山现象模拟小实验”等内容进行现场讲解与互动演示。',
        '结合海洋学科背景完成实验设计、演示组织和实践成果整理，将专业学习转化为公众科普表达。'
      ],
      image: {
        kind: 'image',
        src: 'assets/practice/ocean-science-demo.png',
        alt: '2025暑期海洋科普实践现场',
        caption: '海洋科普现场：围绕海底火山现象模拟小实验进行讲解与互动演示。'
      }
    }
  ] as ResumePractice[],
  mediaReports: haisiReports,
  education: [
    {
      date: '2023.09 - 至今',
      school: '厦门大学（翔安校区）',
      detail: '海洋技术（海洋物理方向）｜本科'
    },
    {
      date: '2020.09 - 2023.06',
      school: '福建省厦门第一中学',
      detail: '高中阶段'
    }
  ],
  skills: [
    {
      title: '嵌入式与声学硬件',
      items: ['STM32', 'K230', '水听器链路', '10-20 kHz 带通放大', 'RHC-7 采集链路']
    },
    {
      title: '电路与仿真设计',
      items: ['PCB设计', 'Multisim', '模拟电子技术', '信号与系统', '声学基础']
    },
    {
      title: '编程与数据处理',
      items: ['C', 'Python', 'MATLAB', 'LabVIEW', '频谱分析', 'Welch 功率谱估计']
    },
    {
      title: '建模与工程实现',
      items: ['SolidWorks', 'CT建模', '仿生结构设计', '运动控制', 'GitHub Pages 部署']
    }
  ],
  credentials: ['CET4：554', 'CET6：501', 'GPA：3.80/4.00', '均分：89.84/100']
}

export const projects: Project[] = [
  {
    slug: 'mudskipper',
    href: '/projects/mudskipper',
    title: '面向仿生水声隐蔽通信的弹涂鱼机器人',
    status: 'Completed Prototype',
    summary:
      '以弹涂鱼两栖运动为仿生依据，集成重心调姿、尾鳍推进与水声通信链路的移动式实验平台。',
    keywords: ['仿生运动', '重心调姿', '水声通信', '水池与海试验证'],
    heroImage: 'assets/projects/mudskipper/structure-comparison.png',
    sections: [
      {
        eyebrow: 'Background',
        title: '从固定通信节点到可移动仿生载体',
        body:
          '传统固定式或半固定式水声通信节点布放后难以主动改变位置、深度和姿态。弹涂鱼兼具水下尾部推进、胸鳍支撑和两栖环境适应特征，为浅海、滩涂及水陆交界场景中的移动式通信载体提供了仿生启发。'
      },
      {
        eyebrow: 'System',
        title: '运动平台与水声链路一体化',
        body:
          '平台围绕鱼体防水舱、胸鳍辅助结构、尾部推进机构、丝杆配重调姿模块和水声换能器载荷展开。展示层面只呈现系统流程和集成逻辑，不公开专利或算法敏感细节。'
      },
      {
        eyebrow: 'Validation',
        title: '水池运动、浮潜趋势与海试链路验证',
        body:
          '项目材料包含水池测试、重心调姿趋势、LabVIEW 控制界面、通信链路流程和海试现场素材，可用于说明平台从结构设计到实验验证的完整路径。'
      }
    ],
    flow: ['仿生依据分析', '鱼体结构与防水舱设计', '重心调姿与尾鳍推进', '通信载荷集成', '水池与海试验证'],
    contribution: [
      '负责机器人总体结构与运动控制方案设计。',
      '围绕鱼体空间分布、尾部推进和丝杆配重机构组织平台集成。',
      '参与 LabVIEW 控制、通信载荷布置和实验验证材料整理。'
    ],
    evidence: [
      {
        kind: 'video',
        src: 'assets/projects/mudskipper/demo.mp4',
        alt: '弹涂鱼机器人公开视频',
        caption: '项目视频：弹涂鱼机器人相关实验与展示片段。'
      }
    ],
    proofs: [
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/patent-substantive-exam.png',
        alt: '弹涂鱼机器人相关发明专利进入实质审查阶段通知书',
        caption: '发明专利：一种基于仿生水声通信的仿生弹涂鱼水陆两栖机器人平台，已进入实质审查阶段。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/robot-competition-award.png',
        alt: '第十八届先进机器人及仿真技术大赛国赛一等奖证书',
        caption: '竞赛获奖：第十八届先进机器人及仿真技术大赛国赛一等奖。'
      }
    ]
  },
  {
    slug: 'tuna',
    href: '/projects/tuna',
    title: '适用于被动声学监测的金枪鱼仿生探测机器人',
    status: 'In Progress',
    summary:
      '本项目面向水下被动声学监测应用，已完成仿真实验与初步验证，当前正处于由仿真验证向水池实验过渡的阶段，后续将开展水池实验以进一步验证系统性能。',
    keywords: ['校级大创', 'In Progress', '声源定位', 'K230', 'LSTM', '水下视觉'],
    heroImage: 'assets/projects/tuna/simulation-validation-hero.png',
    sections: [
      {
        eyebrow: 'Concept',
        title: '面向水下被动监测的仿生机器鱼平台',
        body:
          '本项目为校级大学生创新创业训练项目，围绕金枪鱼仿生平台展开，目标是融合运动优化、端侧视觉识别、滤波电路板和声学探测定位，形成面向水下被动声学监测的移动式平台。'
      },
      {
        eyebrow: 'Progress',
        title: '实验仿真验证阶段',
        body:
          '现有工作已经完成声源定位思路、仿生鱼体构型和运动/感知链路的实验仿真验证，并完成滤波电路板绘制与金枪鱼初代样机制作。项目当前仍处于水池实验前的验证阶段，后续重点是把仿真结果迁移到实物平台与水池测试中。'
      },
      {
        eyebrow: 'Modules',
        title: '声学、视觉与控制链路',
        body:
          '公开展示重点放在系统架构、K230 主控、三水听器声学链路、滤波电路板、视觉识别和 LSTM 运动优化的协同关系。'
      }
    ],
    flow: ['仿生鱼体设计', '声源定位建模', '滤波电路板绘制', '初代样机制作', '实验仿真验证', '后续水池实验'],
    contribution: [
      '负责项目系统架构与声学模块设计。',
      '组织三水听器、滤波电路板、信号处理链路和端侧识别模块的集成思路。',
      '推进实验仿真验证和初代样机制作，并规划后续水池实验。'
    ],
    evidence: [
      {
        kind: 'image',
        src: 'assets/projects/tuna/filter-pcb-enhanced.png',
        alt: '金枪鱼项目滤波电路板',
        caption: '滤波电路板：面向水声接收链路的多通道滤波与接口板。'
      },
      {
        kind: 'image',
        src: 'assets/projects/tuna/prototype-v1-enhanced.png',
        alt: '金枪鱼仿生探测机器人初代样机',
        caption: '初代样机：金枪鱼仿生鱼体、尾部推进结构与支撑架实物。'
      },
      {
        kind: 'image',
        src: 'assets/projects/tuna/rhc-7.png',
        alt: 'RHC-7 柱形水听器技术参数',
        caption: 'RHC-7 水听器：用于金枪鱼项目声学接收链路的传感器选型与参数参考。'
      }
    ]
  },
  {
    slug: 'haisi',
    href: '/projects/haisi',
    title: '厦门大学第六届“海丝学堂”航次与水声信道分析',
    status: 'Field Analysis',
    summary:
      '基于海上航次实验，围绕水声通信、环境噪声测量与频谱分析整理真实实验经历。',
    keywords: ['航次实验', 'OFDM', 'DSSS', '环境噪声', '频谱分析'],
    heroImage: 'assets/projects/haisi/voyage-hero.jpg',
    sections: [
      {
        eyebrow: 'Field Work',
        title: '真实航次中的水声通信实验',
        body:
          '海丝学堂专业实习围绕水声语音通信、文字与图像传输、海洋环境噪声测量展开，为理解深海垂直信道和海洋声学环境提供了真实数据背景。'
      },
      {
        eyebrow: 'Methods',
        title: 'OFDM、DSSS 与环境噪声分析',
        body:
          '报告材料涉及 OFDM、DSSS、水声图像通信、Welch 功率谱估计和 1/3 倍频程分析，可作为项目页中方法和实验流程的主要依据。'
      },
      {
        eyebrow: 'Evidence',
        title: '波形、频谱与航次现场材料',
        body:
          '项目页将以波形图、频谱图、航次现场图作为证据，让读者看到这是来自真实海上实验和数据处理的经历。'
      }
    ],
    flow: ['航次实验', '水声语音通信', '文字与图像传输', '环境噪声采集', '频谱与信道分析'],
    contribution: [
      '参与不同工况下海洋环境噪声数据处理。',
      '围绕通信效果、信噪比和频谱特征整理分析材料。',
      '将水声信道理解与后续仿生通信项目形成呼应。'
    ],
    evidence: [
      {
        kind: 'image',
        src: 'assets/projects/haisi/participation-proof.png',
        alt: '洪旗阳海丝学堂第二航段参与证明',
        caption: '参与证明：完成第六届厦门大学“海丝学堂”第二航段。'
      },
      {
        kind: 'image',
        src: 'assets/projects/haisi/receiver-array.png',
        alt: '海丝学堂水声实验接收阵列',
        caption: '接收阵列：航次实验中的水声信号接收设备布放。'
      },
      {
        kind: 'image',
        src: 'assets/projects/haisi/transmitter.png',
        alt: '海丝学堂水声实验发送端',
        caption: '发送端：搭载在设备舱上的水声发射设备。'
      },
      {
        kind: 'image',
        src: 'assets/projects/haisi/image-transmission-comparison.png',
        alt: '海丝学堂图像传输效果对比',
        caption: '图像传输：不同信噪比条件下的水声图像接收效果对比。'
      }
    ],
    reports: haisiReports
  },
  {
    slug: 'dolphin',
    href: '/projects/dolphin',
    title: '仿生海豚机器人省级大创项目',
    status: 'In Progress',
    summary:
      '2025 - 2026 省级大学生创新创业训练项目，负责电控与运动控制模块，围绕水下仿生推进、声学感知与嵌入式控制链路开展平台集成。',
    keywords: ['省级大创', 'Raspberry Pi', 'RSH-10', 'PWM 控制', '背腹式推进'],
    heroImage: 'assets/projects/dolphin/rsh10.png',
    sections: [
      {
        eyebrow: 'Control',
        title: '分布式主控与高速水下通信',
        body:
          '以树莓派（Raspberry Pi）作为核心计算大脑，搭建底层 Linux 嵌入式控制系统；针对浅海复杂环境，设计并打通基于高可靠水下网线的有线远控链路，实现上位机与水下平台间控制指令与状态数据的低延迟、高带宽双向传输。'
      },
      {
        eyebrow: 'Acoustics',
        title: '水声感知与信号探测系统集成',
        body:
          '在机器人头部全密闭集成 RSH-10 水声传感器（水听器），作为水下主动感知“声眼”；负责微弱水声信号的捕获与硬件前置调理，打通从声学模拟信号捕获到 Raspberry Pi 数字信号处理的完整探测接收链路。'
      },
      {
        eyebrow: 'Motion',
        title: '仿生背腹式推进与舵机闭环控制',
        body:
          '基于生物动力学原理，主导尾部高扭矩舵机驱动系统的软硬件开发；编写定制化 PWM 控制算法，调制摆动频率与幅值，解决多连杆机构协调问题，实现背腹式上下纵向拍动的仿生推进形态。'
      }
    ],
    flow: ['省级大创立项', 'Raspberry Pi 主控搭建', 'RSH-10 水声传感器集成', 'PWM 舵机控制', '多连杆推进调试', '水下平台联调'],
    contribution: [
      '担任电控与运动控制模块负责人，负责主控平台、远控链路和运动控制逻辑的整体设计。',
      '完成 RSH-10 水听器前端接入思路与声学信号探测链路集成。',
      '编写定制化 PWM 控制算法，围绕尾部高扭矩舵机和多连杆机构推进背腹式仿生运动。'
    ],
    evidence: [
      {
        kind: 'image',
        src: 'assets/projects/dolphin/rsh10.png',
        alt: '仿生海豚机器人 RSH-10 水声传感器材料',
        caption: '水声感知模块：RSH-10 水声传感器作为机器人头部声学探测链路的核心输入。'
      }
    ]
  }
]

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
