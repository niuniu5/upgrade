import { dayjs, cloneDeep, getRandomIntBetween } from "./utils";
import GroupLine from "@iconify-icons/ri/group-line";
import Question from "@iconify-icons/ri/question-answer-line";
import CheckLine from "@iconify-icons/ri/chat-check-line";
import Smile from "@iconify-icons/ri/star-smile-line";

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

/** 需求人数、提问数量、解决数量、用户满意度 */
const chartData = [
  {
    icon: GroupLine,
    bgColor: "#effaff",
    color: "#41b6ff",
    duration: 2200,
    name: "需求人数",
    value: 36000,
    percent: "+88%",
    data: [2101, 5288, 4239, 4962, 6752, 5208, 7450] // 平滑折线图数据
  },
  {
    icon: Question,
    bgColor: "#fff5f4",
    color: "#e85f33",
    duration: 1600,
    name: "提问数量",
    value: 16580,
    percent: "+70%",
    data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
  },
  {
    icon: CheckLine,
    bgColor: "#eff8f4",
    color: "#26ce83",
    duration: 1500,
    name: "解决数量",
    value: 16499,
    percent: "+99%",
    data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
  },
  {
    icon: Smile,
    bgColor: "#f6f4fe",
    color: "#7846e5",
    duration: 100,
    name: "用户满意度",
    value: 100,
    percent: "+100%",
    data: [100]
  }
];

/** 分析概览 */
const barChartData = [
  {
    requireData: [2101, 5288, 4239, 4962, 6752, 5208, 7450],
    questionData: [2216, 1148, 1255, 1788, 4821, 1973, 4379]
  },
  {
    requireData: [2101, 3280, 4400, 4962, 5752, 6889, 7600],
    questionData: [2116, 3148, 3255, 3788, 4821, 4970, 5390]
  }
];

/** 解决概率 */
const progressData = [
  {
    week: "周一",
    percentage: 85,
    duration: 110,
    color: "#41b6ff"
  },
  {
    week: "周二",
    percentage: 86,
    duration: 105,
    color: "#41b6ff"
  },
  {
    week: "周三",
    percentage: 88,
    duration: 100,
    color: "#41b6ff"
  },
  {
    week: "周四",
    percentage: 89,
    duration: 95,
    color: "#41b6ff"
  },
  {
    week: "周五",
    percentage: 94,
    duration: 90,
    color: "#26ce83"
  },
  {
    week: "周六",
    percentage: 96,
    duration: 85,
    color: "#26ce83"
  },
  {
    week: "周日",
    percentage: 100,
    duration: 80,
    color: "#26ce83"
  }
].reverse();

/** 数据统计 */
const tableData = Array.from({ length: 30 }).map((_, index) => {
  return {
    id: index + 1,
    requiredNumber: getRandomIntBetween(13500, 19999),
    questionNumber: getRandomIntBetween(12600, 16999),
    resolveNumber: getRandomIntBetween(13500, 17999),
    satisfaction: getRandomIntBetween(95, 100),
    date: dayjs().subtract(index, "day").format("YYYY-MM-DD")
  };
});

/** 最新动态 */
const latestNewsData = cloneDeep(tableData)
  .slice(0, 14)
  .map((item, index) => {
    return Object.assign(item, {
      date: `${dayjs().subtract(index, "day").format("YYYY-MM-DD")} ${days[dayjs().subtract(index, "day").day()]
        }`
    });
  });

// 地域
const territory = [
  "不限",
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
  "陕西",
  "甘肃",
  "青海",
  "宁夏",
  "新疆"
];

// 院校类型
const institutionType = [
  "不限",
  "综合",
  "理工",
  "农林",
  "医药",
  "语言",
  "财经",
  "政法",
  "体育",
  "艺术",
  "民族",
  "军事",
  "师范",
  "其他"
];

// 院校层次
const institutionLevel = [
  "不限",
  "公办",
  "民办",
  "中外合作",
  "内地与港澳台地区合作办学",
  "985",
  "211",
  "双一流",
  "教育部直属",
  "中央部委",
  "双高计划",
  "强基计划"
];

// 专业
const specialty = [
  "不限",
  "哲学",
  "经济学",
  "文学",
  "法学",
  "历史学",
  "教育学",
  "理学",
  "工学",
  "农学",
  "医学",
  "管理学",
  "艺术学"
];

// 大学
const university = [
  /**{
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
     plannedNumber: 145,
     code: "1023",
     subject: "物且化",
     list: [
       {
         time: "2023年",
         recruitNumber: 95,
         lowScore: 685,
         lowRanking: 368
       },
       {
         time: "2022年",
         recruitNumber: 83,
         lowScore: 688,
         lowRanking: 390
       },
       {
         time: "2021年",
         recruitNumber: 90,
         lowScore: 681,
         lowRanking: 350
       }
     ]
   }, */
  {
    name: "西安科技大学",
    //matchingRate: "26%",
    // tag: [
    //   "北京",
    //   "综合",
    //   "公办",
    //   "985",
    //   "211",
    //   "双一流",
    //   "教育部直属",
    //   "强基计划"
    // ],
    plannedNumber: 32,
    code: "k46602",
    subject: "物且化",
    list: [
      {
        time: "2023年",
        recruitNumber: 32,
        lowScore: 585,
        lowRanking: 23866
      }
      /**{
        time: "2022年",
        recruitNumber: 56,
        lowScore: 687,
        lowRanking: 416
      },
      {
        time: "2021年",
        recruitNumber: 47,
        lowScore: 678,
        lowRanking: 461
      }**/
    ]
  },
  {
    name: "浙江中医药大学",
    //matchingRate: "50%",
    // tag: [
    //   "浙江",
    //   "综合",
    //   "公办",
    //   "985",
    //   "211",
    //   "双一流",
    //   "教育部直属",
    //   "强基计划"
    // ],
    plannedNumber: 17,
    code: "H00703",
    subject: "物且化",
    list: [
      {
        time: "2023年",
        recruitNumber: 10,
        lowScore: 585,
        lowRanking: 23866
      }
      // {
      //   time: "2022年",
      //   recruitNumber: 6,
      //   lowScore: 678,
      //   lowRanking: 761
      // },
      // {
      //   time: "2021年",
      //   recruitNumber: 16,
      //   lowScore: 670,
      //   lowRanking: 810
      // }
    ]
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
    plannedNumber: 31,
    code: "1022",
    subject: "物且化",
    list: [
      {
        time: "2023年",
        recruitNumber: 19,
        lowScore: 675,
        lowRanking: 791
      },
      {
        time: "2022年",
        recruitNumber: 17,
        lowScore: 675,
        lowRanking: 908
      },
      {
        time: "2021年",
        recruitNumber: 18,
        lowScore: 670,
        lowRanking: 810
      }
    ]
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
    plannedNumber: 25,
    code: "3112",
    subject: "物且化",
    list: [
      {
        time: "2023年",
        recruitNumber: 22,
        lowScore: 669,
        lowRanking: 1127
      },
      {
        time: "2022年",
        recruitNumber: 3,
        lowScore: 681,
        lowRanking: 636
      },
      {
        time: "2021年",
        recruitNumber: 3,
        lowScore: 677,
        lowRanking: 495
      }
    ]
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
    plannedNumber: 5,
    code: "4211",
    subject: "物且化",
    list: [
      {
        time: "2023年",
        recruitNumber: 4,
        lowScore: 659,
        lowRanking: 1901
      },
      {
        time: "2022年",
        recruitNumber: 2,
        lowScore: 656,
        lowRanking: 2202
      },
      {
        time: "2021年",
        recruitNumber: 2,
        lowScore: 649,
        lowRanking: 2309
      }
    ]
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
    plannedNumber: 23,
    code: "1210",
    subject: "物且化",
    list: [
      {
        time: "2023年",
        recruitNumber: 18,
        lowScore: 659,
        lowRanking: 1901
      },
      {
        time: "2022年",
        recruitNumber: 18,
        lowScore: 659,
        lowRanking: 1944
      },
      {
        time: "2021年",
        recruitNumber: 28,
        lowScore: 655,
        lowRanking: 1808
      }
    ]
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
    plannedNumber: 56,
    code: "1032",
    subject: "不限",
    list: [
      {
        time: "2023年",
        recruitNumber: 61,
        lowScore: 656,
        lowRanking: 2180
      },
      {
        time: "2022年",
        recruitNumber: 63,
        lowScore: 659,
        lowRanking: 1944
      },
      {
        time: "2021年",
        recruitNumber: 47,
        lowScore: 656,
        lowRanking: 1729
      }
    ]
  }
];

export {
  chartData,
  barChartData,
  progressData,
  tableData,
  latestNewsData,
  territory,
  institutionType,
  institutionLevel,
  specialty,
  university
};
