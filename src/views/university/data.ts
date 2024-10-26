const territory = [
  "全部",
  "北京",
  "天津",
  "河北",
  "山西",
  "内蒙古",
  "辽宁",
  "吉林",
  "黑龙江",
  "上海",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "广西",
  "海南",
  "重庆",
  "四川",
  "贵州",
  "云南",
  "西藏",
  "陕西",
  "甘肃",
  "青海",
  "宁夏",
  "新疆",
  "香港",
  "澳门",
  "台湾"
];

const institutionType = [
  "全部",
  "综合",
  "理工",
  "农林",
  "医药",
  "师范",
  "语言",
  "财经",
  "政法",
  "体育",
  "艺术",
  "民族",
  "军事",
  "其他"
];

const schoolRunningType = [
  "全部",
  "本科",
  "专科（高职）",
  "公办",
  "民办",
  "中外合作办学",
  "内地与港澳台地区合作办学"
];

const institutionCharacteristics = [
  "全部",
  "985",
  "211",
  "双一流",
  "保研资格",
  "教育部直属",
  "中央部委",
  "强基计划",
  "双高计划",
  "国际本科"
];

const university = [
  {
    name: "清华大学",
    matchingRate: "20%",
    tag: [
      "北京",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "1023"
  },
  {
    name: "北京大学",
    matchingRate: "26%",
    tag: [
      "北京",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "1021"
  },
  {
    name: "浙江大学",
    matchingRate: "50%",
    tag: [
      "浙江",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "3310"
  },
  {
    name: "中国人民大学",
    matchingRate: "50%",
    tag: [
      "北京",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "1022"
  },
  {
    name: "上海交通大学",
    matchingRate: "52%",
    tag: [
      "上海",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "3112"
  },
  {
    name: "华中科技大学",
    matchingRate: "81%",
    tag: [
      "湖北",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "4211"
  },
  {
    name: "南开大学",
    matchingRate: "81%",
    tag: [
      "天津",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "1210"
  },
  {
    name: "北京师范大学",
    matchingRate: "82%",
    tag: [
      "北京",
      "师范",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    code: "1032"
  }
];

const universityMap = {
  1023: {
    name: "清华大学",
    tag: [
      "北京",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属"
      //"强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/201910/1554861735_6541_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 1
      }
      /**{
        name: "校友会综合",
        ranking: 2
      },
      {
        name: "QS世界",
        ranking: 20
      },
      {
        name: "US世界",
        ranking: 16
      },
      {
        name: "泰晤士（大陆）",
        ranking: 1
      },
      {
        name: "人气值排名",
        ranking: 5
      }**/
    ],
    baseInfoList: [
      //"人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      //"招生电话：010-62770334,010-62782051",
      //"电子邮箱：zsb@tsinghua.edu.cn"
      "简介：清华大学(Tsinghua University)是中国著名高等学府,坐落于北京西北郊风景秀丽的清华园,是中国高层次人才培养和科学技术研究的重要基地。"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "理科",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "理科",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "理科",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "理科",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "理科",
        acceptanceRate: "56%"
      }
    ]
  },
  1021: {
    name: "北京大学",
    tag: [
      "北京",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/202119/1618813942_9594_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 11
      },
      {
        name: "校友会综合",
        ranking: 20
      },
      {
        name: "QS世界",
        ranking: 26
      },
      {
        name: "US世界",
        ranking: 98
      },
      {
        name: "泰晤士（大陆）",
        ranking: 15
      },
      {
        name: "人气值排名",
        ranking: 58
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  },
  3310: {
    name: "浙江大学",
    tag: [
      "浙江",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/202116/1618558817_8829_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 12
      },
      {
        name: "校友会综合",
        ranking: 21
      },
      {
        name: "QS世界",
        ranking: 201
      },
      {
        name: "US世界",
        ranking: 161
      },
      {
        name: "泰晤士（大陆）",
        ranking: 11
      },
      {
        name: "人气值排名",
        ranking: 51
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  },
  1022: {
    name: "中国人民大学",
    tag: [
      "北京",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/202116/1618554664_2815_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 15
      },
      {
        name: "校友会综合",
        ranking: 22
      },
      {
        name: "QS世界",
        ranking: 201
      },
      {
        name: "US世界",
        ranking: 163
      },
      {
        name: "泰晤士（大陆）",
        ranking: 13
      },
      {
        name: "人气值排名",
        ranking: 52
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  },
  3112: {
    name: "上海交通大学",
    tag: [
      "上海",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/201915/1552654782_3237_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 19
      },
      {
        name: "校友会综合",
        ranking: 22
      },
      {
        name: "QS世界",
        ranking: 206
      },
      {
        name: "US世界",
        ranking: 165
      },
      {
        name: "泰晤士（大陆）",
        ranking: 13
      },
      {
        name: "人气值排名",
        ranking: 52
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  },
  4211: {
    name: "华中科技大学",
    tag: [
      "湖北",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/202119/1618813753_2240_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 15
      },
      {
        name: "校友会综合",
        ranking: 26
      },
      {
        name: "QS世界",
        ranking: 203
      },
      {
        name: "US世界",
        ranking: 162
      },
      {
        name: "泰晤士（大陆）",
        ranking: 16
      },
      {
        name: "人气值排名",
        ranking: 51
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  },
  1210: {
    name: "南开大学",
    tag: [
      "天津",
      "综合",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/202103/1622717406_4537_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 13
      },
      {
        name: "校友会综合",
        ranking: 25
      },
      {
        name: "QS世界",
        ranking: 205
      },
      {
        name: "US世界",
        ranking: 161
      },
      {
        name: "泰晤士（大陆）",
        ranking: 12
      },
      {
        name: "人气值排名",
        ranking: 51
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  },
  1032: {
    name: "北京师范大学",
    tag: [
      "北京",
      "师范",
      "公办",
      "985",
      "211",
      "双一流",
      "教育部直属",
      "强基计划"
    ],
    images: [
      "https://static-data.gaokao.cn/upload/school/202116/1618555573_8050_thumb.jpg"
    ],
    honors: [
      {
        name: "软科综合",
        ranking: 28
      },
      {
        name: "校友会综合",
        ranking: 21
      },
      {
        name: "QS世界",
        ranking: 200
      },
      {
        name: "US世界",
        ranking: 78
      },
      {
        name: "泰晤士（大陆）",
        ranking: 93
      },
      {
        name: "人气值排名",
        ranking: 94
      }
    ],
    baseInfoList: [
      "人气值：25071883",
      "官方网址：http://www.join-tsinghua.edu.cn   https://www.tsinghua.edu.cn",
      "招生电话：010-62770334,010-62782051",
      "电子邮箱：zsb@tsinghua.edu.cn"
    ],
    specialtyList: [
      {
        name: "建筑学",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "五年",
        acceptanceRate: "46%"
      },
      {
        name: "风景园林",
        tag: "",
        level: "本科",
        category: "工学",
        type: "建筑类(本)",
        duration: "四年",
        acceptanceRate: "32%"
      },
      {
        name: "建筑环境与能源应用工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "23%"
      },
      {
        name: "土木工程",
        tag: "国家特色专业",
        level: "本科",
        category: "工学",
        type: "土木类(本)",
        duration: "四年",
        acceptanceRate: "64%"
      },
      {
        name: "工程管理",
        tag: "国家特色专业",
        level: "本科",
        category: "管理学",
        type: "管理科学与工程类(本)",
        duration: "四年",
        acceptanceRate: "56%"
      }
    ]
  }
};
export {
  territory,
  institutionType,
  schoolRunningType,
  institutionCharacteristics,
  university,
  universityMap
};
