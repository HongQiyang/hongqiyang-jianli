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

type ResumeAttachment = {
  label: string
  href: string
  kind: string
}

type HonorProof = EvidenceItem & {
  label: string
}

type HonorItem = {
  label: string
  proofs?: HonorProof[]
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
  slug: string
  date: string
  title: string
  role: string
  summary: string
  result: string
  points: string[]
  image: EvidenceItem
  honors?: string[]
  reports?: ReportLink[]
  attachments?: ResumeAttachment[]
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

const haisiReportNotes = [
  '报道第六届“海丝学堂”随“嘉庚”号启航的背景与航程安排，突出首次穿越赤道的航次意义。',
  '聚焦“嘉庚”号在雅加达举办公众开放日，呈现科考船面向海外公众开展海洋科普与交流的场景。',
  '从国际传播视角介绍“嘉庚”号航次动态，展示中国高校海洋科考平台走向区域合作现场。',
  '报道“嘉庚”号相关国际活动进展，强调航次在海洋科考、青年培养与对外交流中的连接作用。',
  '关注“嘉庚”号在亚太区域的航次交流，呈现海洋科学合作与海丝学堂人才培养的区域影响。',
  '以视频形式记录“嘉庚”号相关活动现场，补充文字报道之外的航次画面与公众交流细节。',
  '梳理第六届“海丝学堂”启航信息，介绍航次目标、学生培养安排与蓝色未来主题。',
  '面向本地读者报道“海丝学堂”启航，突出厦门海洋科教资源与远洋实践育人特色。',
  '记录“嘉庚”号抵达与开放日活动，呈现跨区域媒体对航次公众交流的关注。',
  '报道雅加达公众开放日现场，展示科考船向当地公众介绍海洋科学与厦大实践成果的过程。',
  '介绍第六届“海丝学堂”从厦门启航的现场情况，突出本地海洋科考与人才培养联动。',
  '从集美区视角报道“嘉庚”号与海丝学堂活动，呈现地方层面对科教航次的关注。',
  '以电视新闻形式呈现启航仪式和航次背景，补充现场影像化信息。',
  '报道第六届“海丝学堂”启航与航次任务，展示厦门海洋科技与青年实践培养的结合。',
  '刊发启航相关新闻版面，记录航次启动、培养计划和城市海洋科教氛围。',
  '报道雅加达公众开放日活动，突出科考船面向海外公众开放与海洋科普互动。',
  '记录雅加达公众开放日的地方媒体报道，呈现航次对外交流和公众参观情况。',
  '报道“嘉庚”号在雅加达的公众开放与交流活动，补充城市媒体视角下的现场信息。',
  '校级报道梳理第六届“海丝学堂”启航安排，说明人才培养计划的整体目标与组织背景。',
  '厦大新闻报道航次相关进展，呈现学校层面对海洋科考与实践育人的整体部署。',
  '校级报道记录航次阶段性活动，展示学生参与、科考实践与国际交流内容。',
  '报道航次活动推进情况，补充“嘉庚”号在海丝学堂培养链条中的实践场景。',
  '校级成果报道呈现航次总结与交流内容，说明学生实践收获和科考成果整理情况。',
  '微信报道以图文方式呈现航次活动亮点，适合补充现场氛围、人物参与和传播细节。',
  '学院报道从海洋学科培养角度介绍航次组织、课程实践与学生远洋科考参与情况。',
  '学院公众号报道航次相关活动，补充学生视角、现场记录与海洋科普传播内容。'
] as const

const haisiReports: ReportLink[] = haisiReportEntries.map(
  ([category, source, title, date, href], index) => ({
    category,
    source,
    title,
    date,
    href,
    note: haisiReportNotes[index]
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
  metrics: ['GPA 3.80 / 4.00', '专业排名 4 / 54', 'CET-4 554 / CET-6 501'],
  researchObjective:
    '聚焦智能海洋装备与水声感知，目前主要围绕水下声源定位、海洋声学观测与仿生机器人平台开展系统性研究与实践。',
  honors: [
    {
      label: '国家奖学金',
      proofs: [
        {
          label: '证书',
          kind: 'image',
          src: 'assets/honors/national-scholarship.png',
          alt: '国家奖学金证书',
          caption: '国家奖学金：2024年12月获评。'
        }
      ]
    },
    {
      label: '厦门大学通报表扬',
      proofs: [
        {
          label: '证明',
          kind: 'image',
          src: 'assets/honors/xmu-commendation.png',
          alt: '厦门大学通报表扬证明',
          caption: '厦门大学通报表扬：2026年4月获得。'
        }
      ]
    },
    {
      label: '厦门大学校十佳共青团员',
      proofs: [
        {
          label: '证书',
          kind: 'image',
          src: 'assets/honors/top-ten-league-member.jpg',
          alt: '厦门大学校十佳共青团员证书',
          caption: '厦门大学校十佳共青团员：2025年度。'
        }
      ]
    },
    {
      label: '校优秀三好学生',
      proofs: [
        {
          label: '优秀三好',
          kind: 'image',
          src: 'assets/honors/excellent-student-2024.png',
          alt: '厦门大学优秀三好学生证书',
          caption: '厦门大学优秀三好学生：2024年9月获评。'
        }
      ]
    },
    {
      label: '三好学生',
      proofs: [
        {
          label: '证明',
          kind: 'image',
          src: 'assets/honors/merit-student-2025.png',
          alt: '厦门大学三好学生证书',
          caption: '厦门大学三好学生：2025年9月获评。'
        }
      ]
    },
    {
      label: '厦门大学融润强海奖学金'
    },
    {
      label: '两项第十八届先进机器人及仿真技术大赛国家级一等奖',
      proofs: [
        {
          label: '一等奖',
          kind: 'image',
          src: 'assets/honors/robot-award-mudskipper-first.png',
          alt: '第十八届先进机器人及仿真技术大赛弹涂鱼项目国赛一等奖证书',
          caption: '第十八届先进机器人及仿真技术大赛：弹涂鱼项目国赛一等奖。'
        }
      ]
    },
    {
      label: '两项第十八届先进机器人及仿真技术大赛国家级三等奖',
      proofs: [
        {
          label: '金枪鱼',
          kind: 'image',
          src: 'assets/honors/robot-award-tuna-third.jpg',
          alt: '第十八届先进机器人及仿真技术大赛金枪鱼项目国赛三等奖证明',
          caption: '第十八届先进机器人及仿真技术大赛：金枪鱼项目国赛三等奖证明。'
        },
        {
          label: 'ROV',
          kind: 'image',
          src: 'assets/honors/robot-award-rov-third.png',
          alt: '第十八届先进机器人及仿真技术大赛 ROV 项目国赛三等奖证书',
          caption: '第十八届先进机器人及仿真技术大赛：ROV 项目国赛三等奖。'
        }
      ]
    },
    {
      label: '福建省大学生智能装备大赛省级一等奖',
      proofs: [
        {
          label: '证书',
          kind: 'image',
          src: 'assets/honors/fujian-intelligent-equipment-first.png',
          alt: '福建省大学生智能装备大赛省级一等奖证书',
          caption: '福建省大学生智能装备大赛：省级一等奖。'
        }
      ]
    },
    {
      label: '厦门大学海洋与地球学院第五届拔尖本科生学术论坛汇报二等奖',
      proofs: [
        {
          label: '证书',
          kind: 'image',
          src: 'assets/honors/top-student-forum-second.jpg',
          alt: '拔尖本科生学术论坛汇报二等奖证书',
          caption: '厦门大学海洋与地球学院拔尖本科生学术论坛：汇报二等奖。'
        }
      ]
    },
    {
      label: '发明专利申请：一种基于仿生水声通信的仿生弹涂鱼水陆两栖机器人平台',
      proofs: [
        {
          label: '通知书',
          kind: 'image',
          src: 'assets/honors/patent-substantive-exam.png',
          alt: '发明专利申请进入实质审查阶段通知书',
          caption: '发明专利申请：仿生弹涂鱼水陆两栖机器人平台，已进入实质审查阶段。'
        }
      ]
    }
  ] satisfies HonorItem[],
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
      slug: 'winter-return-talk',
      date: '2024.02 - 2024.04',
      title: '2024寒假返校宣讲',
      role: '厦门第一大学队成员 / 宣讲汇报人',
      summary: '面向母校厦门一中开展返校宣讲，分享大学学习、专业选择与校园成长经历。',
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
      },
      attachments: [
        {
          label: '优秀实践队证明',
          href: 'assets/practice/files/winter-return-talk/winter-return-1.jpg',
          kind: 'JPG'
        },
        {
          label: '返校宣讲现场照片 2',
          href: 'assets/practice/files/winter-return-talk/winter-return-2.jpg',
          kind: 'JPG'
        },
        {
          label: '返校宣讲现场照片 3',
          href: 'assets/practice/files/winter-return-talk/winter-return-3.jpg',
          kind: 'JPG'
        }
      ]
    },
    {
      slug: 'kageng-open-day',
      date: '2024.07 - 2025.06',
      title: '2024暑期社会实践与嘉庚号开放日志愿服务',
      role: '实践队成员 / 嘉庚号开放日志愿者',
      summary: '参与暑期社会实践与嘉庚号香港开放日志愿服务，支撑公众科普、展览协助与国际交流场景。',
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
      reports: [
        {
          category: '厦门大学官方报道',
          source: '厦门大学海洋与地球学院',
          title: '厦门大学“嘉庚”号科考船首次访港开展公众开放日活动',
          date: '2024年8月22日',
          href: 'https://coe.xmu.edu.cn/info/1591/124890.htm',
          note: '介绍“嘉庚”号首次访港并开展公众开放日活动，记录展览讲解、公众参观与海洋科普交流现场。'
        },
        {
          category: '嘉庚号官方报道',
          source: '“嘉庚”号海洋科学综合考察船',
          title: '闽都-嘉庚海上行——2024年“海丝学堂”暨“纪念陈嘉庚先生诞辰150周年”活动',
          date: '2024年9月1日',
          href: 'https://ships.xmu.edu.cn/info/1406/3327.htm',
          note: '梳理2024年“海丝学堂”与纪念陈嘉庚先生诞辰150周年活动，呈现航次、访港与文化交流主线。'
        },
        {
          category: '主办方报道',
          source: '集友陈嘉庚教育基金',
          title: '「嘉庚」号科考船访港活动圆满落幕 三大亮点引关注',
          date: '2024年8月23日',
          href: 'https://www.chiyutkkedf.org.hk/cn/%E3%80%8C%E5%98%89%E5%BA%9A%E3%80%8D%E5%8F%B7%E7%A7%91%E8%80%83%E8%88%B9%E8%AE%BF%E6%B8%AF%E6%B4%BB%E5%8A%A8%E5%9C%86%E6%BB%A1%E8%90%BD%E5%B9%95%E4%B8%89%E5%A4%A7%E4%BA%AE%E7%82%B9%E5%BC%95%E5%85%B3/',
          note: '总结“嘉庚”号访港活动亮点，涵盖公众开放、专题展览与青年学生交流等内容。'
        },
        {
          category: '媒体报道',
          source: '紫荆号',
          title: '厦门大学海洋科考船「嘉庚」号访港暨「纪念陈嘉庚先生诞辰150周年专题展览」开幕礼',
          date: '2024年8月16日',
          href: 'https://bau.com.hk/article/2024-08/16/content_1274118532838510592.html',
          note: '报道“嘉庚”号访港开幕礼与陈嘉庚主题展览，呈现活动背景、嘉宾参与和展览信息。'
        },
        {
          category: '媒体报道',
          source: '点新闻',
          title: '陈嘉庚诞辰150周年「嘉庚」号访港开幕礼今举办',
          date: '2024年8月16日',
          href: 'https://www.dotdotnews.com/a/202408/16/AP66bf3b1ae4b0d492760b82e2.html',
          note: '聚焦陈嘉庚诞辰150周年主题活动与“嘉庚”号访港开幕，补充香港现场传播视角。'
        }
      ],
      image: {
        kind: 'image',
        src: 'assets/practice/kageng-open-day-certificate.png',
        alt: '嘉庚号香港开放日志愿服务证书',
        caption: '嘉庚号香港开放日志愿服务：参与公众开放日与展览协助，获得 Certificate of Appreciation。'
      },
      attachments: [
        {
          label: '2024暑期社会实践积极分子证明',
          href: 'assets/practice/files/kageng-open-day/summer-2024-active-member.png',
          kind: 'PNG'
        },
        {
          label: '暑期社会实践荣誉证书扫描件',
          href: 'assets/practice/files/kageng-open-day/summer-2024-award-scan.pdf',
          kind: 'PDF'
        },
        {
          label: '嘉庚号香港开放日志愿服务证书',
          href: 'assets/practice/files/kageng-open-day/kageng-volunteer-certificate.png',
          kind: 'PNG'
        },
        {
          label: '2024暑期实践现场材料 1',
          href: 'assets/practice/files/kageng-open-day/summer-2024-field-1.jpg',
          kind: 'JPG'
        },
        {
          label: '2024暑期实践现场材料 2',
          href: 'assets/practice/files/kageng-open-day/summer-2024-field-2.jpg',
          kind: 'JPG'
        },
        {
          label: '2024暑期实践现场材料 3',
          href: 'assets/practice/files/kageng-open-day/summer-2024-field-3.jpg',
          kind: 'JPG'
        },
        {
          label: '2024暑期实践现场材料 4',
          href: 'assets/practice/files/kageng-open-day/summer-2024-field-4.jpg',
          kind: 'JPG'
        }
      ]
    },
    {
      slug: 'ocean-science-practice',
      date: '2025.07 - 2025.12',
      title: '2025暑期海洋科普社会实践',
      role: '实践队成员 / 科普讲解',
      summary: '围绕海洋科普实验开展现场讲解与互动演示，将专业学习转化为面向公众的科学传播。',
      result: '获评厦门大学2025年主题暑期社会实践活动“积极分子”',
      points: [
        '参与面向中小学的海洋科普活动，围绕“海底火山现象模拟小实验”等内容进行现场讲解与互动演示。',
        '结合海洋学科背景完成实验设计、演示组织和实践成果整理，将专业学习转化为公众科普表达。'
      ],
      image: {
        kind: 'image',
        src: 'assets/practice/ocean-science-demo.png',
        alt: '2025暑期海洋科普实践现场',
        caption: '围绕中小学生开展海洋科普教育活动。'
      },
      attachments: [
        {
          label: '2025暑期实践积极分子证明',
          href: 'assets/practice/files/ocean-science-practice/summer-2025-active-member.png',
          kind: 'PNG'
        },
        {
          label: '2025暑期实践证明材料',
          href: 'assets/practice/files/ocean-science-practice/summer-2025-proof.pdf',
          kind: 'PDF'
        },
        {
          label: '海洋科普实践现场照片',
          href: 'assets/practice/files/ocean-science-practice/summer-2025-field-photo.jpg',
          kind: 'JPG'
        },
        {
          label: '嘉梦海扬负责人证明',
          href: 'assets/practice/files/ocean-science-practice/summer-2025-team.png',
          kind: 'PNG'
        },
        {
          label: '活动高光截图',
          href: 'assets/practice/files/ocean-science-practice/summer-2025-experiment.png',
          kind: 'PNG'
        }
      ]
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
        title: '仿生移动通信节点',
        body:
          '突破传统水声通信节点布放后难以主动调整位置与姿态的局限。受弹涂鱼启发，融合尾部推进、胸鳍支撑与两栖适应特征，为浅海及滩涂场景提供创新型移动载体。'
      },
      {
        eyebrow: 'System',
        title: '平台与水声链路一体化',
        body:
          '采用模块化集成设计，涵盖防水舱、推进机构、丝杆调姿模块及水声换能器。展示重点聚焦于硬件系统集成逻辑与控制流程，核心专利及算法细节均已脱敏处理。'
      },
      {
        eyebrow: 'Validation',
        title: '全流程实验与海试验证',
        body:
          '提供从结构设计到实际应用的完整数据支撑。展示材料包含水池运动测试、重心调姿趋势分析、LabVIEW 链路控制界面以及真实的海试现场记录。'
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
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/prototype-structure-overview.png',
        alt: '弹涂鱼机器人实物与结构标注对照',
        caption:
          '弹涂鱼机器人实物与结构标注对照：实物样机与结构标注展示弹涂鱼仿生机器人平台的外形样机、尾鳍推进结构、胸鳍支撑、水声换能器与防水摄像头等关键模块。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/system-architecture.png',
        alt: '弹涂鱼机器人系统架构与分层模块',
        caption:
          '系统架构：展示陆地操作端、机器人内部决策层、传感层、驱动层、供电层与水声换能器之间的整体连接关系。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/acoustic-communication-link.png',
        alt: '弹涂鱼机器人水声通信发送端与接收端流程',
        caption:
          '水声链路：展示信息编码、二进制序列生成、调制、数模转换、水声信道传输与接收端解调解码流程。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/modulation-demodulation-flow.png',
        alt: '仿生水声隐蔽通信调制解调流程',
        caption:
          '调制解调流程：以仿生信号为载波，展示星座映射、同步头、训练序列、码元帧结构及接收端相位差解调链路。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/labview-transmitter-panel.png',
        alt: 'LabVIEW 仿生机器鱼通信系统发射端前面板',
        caption:
          'LabVIEW 发射端：展示发送周期、载波参数、调制阶数、运动指令与发射信号时频图等控制界面。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/labview-receiver-panel.png',
        alt: 'LabVIEW 仿生机器鱼通信系统接收端前面板',
        caption:
          'LabVIEW 接收端：展示接收波形、频谱、误码反馈、运动指令解析与通信状态监测界面。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/sea-trial-signal-analysis.png',
        alt: '弹涂鱼机器人海试信号时域与频域分析',
        caption:
          '海试信号：展示真实水声信号的局部放大时域波形、完整时域序列与频谱分析结果。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/motion-control-interface.png',
        alt: '弹涂鱼机器人运动控制 LabVIEW 界面',
        caption:
          '运动控制：展示串口参数、通信数据缓冲区、运动参数控制区与命令字符串显示区。'
      },
      {
        kind: 'image',
        src: 'assets/projects/mudskipper/pool-validation-two-views.png',
        alt: '弹涂鱼机器人水池验证双视角',
        caption:
          '水池验证：双视角记录机器人吊放与水下姿态，用于说明平台运动验证、水池测试与工程调试过程。'
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
          '依托校级大创项目开发金枪鱼仿生平台。集成运动优化、端侧视觉、滤波电路与声学探测模块，构建水下被动声学监测移动载体。'
      },
      {
        eyebrow: 'Progress',
        title: '实验仿真与样机验证阶段',
        body:
          '已完成声源定位、鱼体构型及感知链路的仿真验证；初代样机与滤波电路板均制作完毕。现阶段聚焦水池实验前的系统联调，推进仿真算法向实物平台的迁移。'
      },
      {
        eyebrow: 'Modules',
        title: '声学、视觉与控制链路',
        body:
          '重点展示系统整体架构，涵盖 K230 主控、三水听器探测阵列、定制滤波电路，以及视觉识别与 LSTM 运动优化算法的协同控制关系。'
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
      '依托真实海上航次，系统开展水声通信验证、环境噪声测量与频谱分析，完整沉淀海试工程实践经验。',
    keywords: ['航次实验', 'OFDM', 'DSSS', '环境噪声', '频谱分析'],
    heroImage: 'assets/projects/haisi/voyage-hero.jpg',
    sections: [
      {
        eyebrow: 'FIELD WORK',
        title: '真实航次实验',
        body:
          '参与嘉庚号航次水声通信测试与环境噪声观测，完成海上实验数据采集与现场记录。'
      },
      {
        eyebrow: 'METHODS',
        title: '信号处理方法',
        body:
          '引入 OFDM 多载波调制与 DSSS 直接序列扩频技术，围绕水声图像通信开展频谱分析、功率谱估计和噪声特征提取。'
      },
      {
        eyebrow: 'EVIDENCE',
        title: '实验支撑材料',
        body:
          '通过波形、频谱、航次照片与实验记录，呈现项目从现场采集到数据分析的完整链路。'
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
      },
      {
        kind: 'image',
        src: 'assets/projects/haisi/ofdm-principle.png',
        alt: 'OFDM 多载波调制技术原理',
        caption:
          'OFDM 技术：通过多载波正交复用提升频谱利用率，为水声图像通信与复杂信道下的抗干扰传输提供方法支撑。'
      },
      {
        kind: 'image',
        src: 'assets/projects/haisi/dsss-principle.png',
        alt: 'DSSS 直接序列扩频技术原理',
        caption:
          'DSSS 技术：通过扩频码将用户数据展宽到更宽频带，提高弱信号传输的抗干扰能力与隐蔽性。'
      }
    ],
    reports: haisiReports
  },
  {
    slug: 'dolphin',
    href: '/projects/dolphin',
    title: '一种基于背腹式运动模式的仿生机械海豚设计',
    status: 'In Progress',
    summary:
      '2025 - 2026 省级大学生创新创业训练项目，负责电控与运动控制模块，围绕水下仿生推进、声学感知与嵌入式控制链路开展平台集成。',
    keywords: ['省级大创', 'Raspberry Pi', 'RSH-10', 'PWM 控制', '背腹式推进'],
    heroImage: 'assets/projects/dolphin/dolphin-back-ventral-prototype.jpg',
    sections: [
      {
        eyebrow: 'Control',
        title: '分布式主控与高速水下通信',
        body:
          '以 Raspberry Pi 构建 Linux 嵌入式控制核心，部署高可靠水下有线远控链路，实现上位机与平台间低延迟、高带宽的数据与指令传输。'
      },
      {
        eyebrow: 'Acoustics',
        title: '水声感知与信号探测系统集成',
        body:
          '在机器人头部集成 RSH-10 水声传感器，完成微弱水声信号捕获、前置调理与 Raspberry Pi 数字处理链路贯通。'
      },
      {
        eyebrow: 'Motion',
        title: '仿生背腹式推进与舵机闭环控制',
        body:
          '围绕尾部高扭矩舵机与多连杆机构，编写定制化 PWM 控制算法，调制摆动频率与幅值，复现背腹式仿生推进形态。'
      }
    ],
    flow: ['省级大创立项', 'Raspberry Pi 主控搭建', 'RSH-10 水声传感器集成', 'PWM 舵机控制', '多连杆推进调试', '水下平台联调'],
    contribution: [
      'CONTROL | 以 Raspberry Pi 与 Linux 控制系统为核心，搭建水下有线远控与数据回传链路。',
      'ACOUSTICS | 集成 RSH-10 水声传感器，完成微弱水声信号捕获、前置调理与数字处理链路。',
      'MOTION | 基于高扭矩舵机与多连杆结构，编写 PWM 控制算法并实现背腹式仿生推进。'
    ],
    evidence: [
      {
        kind: 'image',
        src: 'assets/projects/dolphin/dolphin-back-ventral-prototype.jpg',
        alt: '一种基于背腹式运动模式的仿生机械海豚设计样机',
        caption: '一种基于背腹式运动模式的仿生机械海豚设计：展示多节躯干、尾部执行机构与背腹式推进结构的样机形态。'
      },
      {
        kind: 'image',
        src: 'assets/projects/dolphin/raspberry-power-sensehat.jpg',
        alt: '仿生海豚机器人树莓派供电与 Sense HAT 硬件平台',
        caption:
          '硬件平台：树莓派主控、供电/扩展模块与 Sense HAT 组成基础控制与姿态感知硬件，为后续嵌入式控制和运动验证提供支撑。'
      },
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

export function findPractice(slug: string): ResumePractice | undefined {
  return resume.practices.find((practice) => practice.slug === slug)
}
