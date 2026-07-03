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
  slug: 'mudskipper' | 'tuna' | 'haisi'
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

const haisiReports: ReportLink[] = [
  {
    category: '国家级权威媒体报道',
    source: '新华网',
    title: '“嘉庚”号科考船再启航将首次穿越赤道',
    date: '2025年7月24日',
    href: 'http://fj.news.cn/20250724/dbe58acd441e4dceaddfa0c11641498c/c.html',
    note: '突出第六届“海丝学堂”航次启航背景和首次穿越赤道的航次意义。'
  },
  {
    category: '国家级权威媒体报道',
    source: '人民网',
    title: '厦门大学“嘉庚”号科考船在雅加达举办公众开放日活动',
    date: '2025年8月9日',
    href: 'https://world.people.com.cn/n1/2025/0809/c1002-40539246.html',
    note: '用于体现航次中的科普教育、国际交流和公众开放日活动。'
  },
  {
    category: '厦门大学官方报道',
    source: '厦门大学海洋与地球学院',
    title: '承嘉庚初心连海丝情谊拓蓝色未来',
    date: '2025年7月24日',
    href: 'https://coe.xmu.edu.cn/info/3462/224251.htm',
    note: '官方口径的活动综述，涵盖航次背景、目标与启航仪式。'
  },
  {
    category: '厦门大学官方报道',
    source: '厦门大学海洋与地球学院',
    title: '2025年度“海丝学堂”航次成果汇报大会圆满落幕',
    date: '2026年4月2日',
    href: 'https://coe.xmu.edu.cn/info/2691/227581.htm',
    note: '作为航次成果汇报和后续科研整理的官方佐证。'
  }
]

export const contact = {
  email: 'hongqiyang@stu.xmu.edu.cn'
}

export const profile = {
  title: '洪旗阳 | 海洋声学与仿生机器人',
  subtitle: 'Ocean Acoustics · Biomimetic Robotics · Underwater Systems',
  intro: '突破水声通信技术，自主研制仿生机器人与水下探测系统，致力于深海领域的探索与开发',
  about:
    '洪旗阳，本科就读于厦门大学海洋技术方向，项目兴趣集中在海洋声学、仿生机器人、水下通信与水下感知系统。曾就读于福建省厦门第一中学。'
}

export const focusModules = [
  {
    icon: '∿',
    title: '理论工程化',
    detail: '将抽象理论落地为可验证工程系统'
  },
  {
    icon: '⌁',
    title: '硬件平台搭建',
    detail: '水听器链路、滤波电路、嵌入式采集与机器人载体'
  },
  {
    icon: '</>',
    title: '软件平台开发',
    detail: '控制界面、信号处理、视觉识别与数据分析流程'
  },
  {
    icon: '◎',
    title: '软硬件融合',
    detail: '从声学模块到运动平台的系统集成与实验验证'
  }
]

export const resume = {
  summary:
    '以海洋声学、水下通信与仿生机器人为主线，关注从真实航次数据、声学电路与嵌入式系统到机器人平台验证的完整工程链路。',
  expeditions: [
    {
      date: '2025.07 - 2025.08',
      title: '厦门大学“海丝学堂”人才培养计划',
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
  researchProjects: [
    {
      date: '2025 - 2026',
      title: '仿生海豚机器人省级大创项目',
      role: '电控运动模块负责人',
      points: [
        '围绕仿生海豚运动平台开展电控运动模块设计，支撑推进机构、运动控制与实验验证。',
        '结合 Fluent/UDF 运动仿真材料，参与推进运动参数与机器人平台控制逻辑的协同整理。'
      ]
    }
  ],
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
      '面向水下被动声学监测的进行中项目，已完成实验仿真验证，当前处于仿真到水池实验的衔接阶段，水池实验尚未进行。',
    keywords: ['In Progress', '声源定位', 'K230', 'LSTM', '水下视觉'],
    heroImage: 'assets/projects/tuna/simulation-validation-hero.png',
    sections: [
      {
        eyebrow: 'Concept',
        title: '面向水下被动监测的仿生机器鱼平台',
        body:
          '项目围绕金枪鱼仿生平台展开，目标是融合运动优化、端侧视觉识别、滤波电路板和声学探测定位，形成面向水下被动声学监测的移动式平台。'
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
      }
    ]
  },
  {
    slug: 'haisi',
    href: '/projects/haisi',
    title: '海丝学堂航次与水声信道分析',
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
  }
]

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
