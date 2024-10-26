<script setup lang="ts">
import { ref, markRaw, reactive } from "vue";
import { Search } from "@element-plus/icons-vue";
import University from "./components/University.vue";
import {
  territory,
  institutionType,
  institutionLevel,
  specialty,
  university
} from "./data";

defineOptions({
  name: "Welcome"
});
const loading = ref(false);
const subjects = reactive([
  {
    value: "物理",
    label: "物理",
    disabled: false
  },
  {
    value: "化学",
    label: "化学",
    disabled: false
  },
  {
    value: "生物",
    label: "生物",
    disabled: false
  },
  {
    value: "政治",
    label: "政治",
    disabled: true
  },
  {
    value: "历史",
    label: "历史",
    disabled: true
  },
  {
    value: "地理",
    label: "地理",
    disabled: true
  }
]);
const form = reactive({
  type: "1",
  subject: "1",
  subjects: ["物理", "化学", "生物"],
  score: "585",
  unifyScore: "230",
  cultureScore: "320",
  ranking: 25224,
  artMajor: "美术与设计类",
  activeName: "1",
  keyword: "",
  territory: "不限",
  institutionType: "不限",
  institutionLevel: "不限",
  specialty: "不限",
  academyActiveName: "1"
});

const handleSubjects = v => {
  if (v.length < 3) {
    subjects.forEach(element => {
      element.disabled = false;
    });
    return;
  }
  subjects.forEach(element => {
    if (!v.includes(element.value)) {
      element.disabled = true;
    }
  });
};
const handleSearch = () => {
  loading.value = true;
  console.log("query", form);
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div>
    <el-form :model="form" label-width="auto">
      <el-container>
        <el-aside width="360px">
          <el-card shadow="never">
            <template #header>
              <div class="aside-header">
                <span>模拟成绩</span>
                <el-radio-group v-model="form.type">
                  <el-radio value="1">普通类</el-radio>
                  <!--<el-radio value="2">艺术类</el-radio>-->
                </el-radio-group>
              </div>
            </template>
            <template v-if="form.type === '2'">
              <div class="md-12">专业类别</div>
              <el-form-item label="">
                <el-select v-model="form.artMajor">
                  <el-option label="美术与设计类" value="美术与设计类" />
                </el-select>
              </el-form-item>
              <el-form-item label="">
                <el-input
                  v-model="form.unifyScore"
                  placeholder="输入统考分/预估分"
                >
                  <template #append>分</template>
                </el-input>
              </el-form-item>
              <div class="choose-subject">
                <div>高考科目</div>
              </div>
              <template v-if="form.subject === '1'">
                <el-form-item label="">
                  <el-select
                    v-model="form.subjects"
                    multiple
                    :multiple-limit="3"
                    placeholder="选择科类"
                  >
                    <el-option
                      v-for="item in subjects"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    />
                  </el-select>
                </el-form-item>
              </template>
              <el-form-item label="">
                <el-input
                  v-model="form.cultureScore"
                  placeholder="输入文化分/预估分"
                >
                  <template #append>分</template>
                </el-input>
              </el-form-item>
            </template>
            <template v-else>
              <div class="choose-subject">
                <div v-if="form.subject === '2'">成绩类型</div>
                <div v-else style="margin-bottom: 20px">选科<span>（6选3）</span></div>
              </div>
              <template v-if="form.subject === '1'">
                <el-checkbox-group
                  v-model="form.subjects"
                  @change="handleSubjects"
                >
                  <el-checkbox
                    v-for="item in subjects"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                    border
                    style="margin-bottom: 15px"
                  />
                </el-checkbox-group>
              </template>
              <div class="md-12">省份</div>
              <select style="margin-bottom: 20px;">
                <option >北京</option>
                <option >上海</option>
                <option >天津</option>
                <option >重庆</option>
                <option >山西 </option>
                <option >辽宁</option>
                <option >河北</option>
                <option >黑龙江</option>
                <option >江苏</option>
                <option >安徽</option>
                <option >江西</option>
                <option >河南</option>
                <option >山东</option>
                <option >湖北</option>
                <option >湖南</option>
                <option >广东</option>
                <option >海南</option>
                <option >四川</option>
              

              </select>

              <div class="md-12">分数</div>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="">
                    <el-input v-model="form.score" placeholder="输入分数">
                      <template #append>分</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="">
                    <el-input
                      v-model="form.ranking"
                      type="number"
                      placeholder="输入位次"
                    >
                      <template #append>位</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <div>
                  <button data-v-2bf2fc29="" style="margin-left: 85px;" aria-disabled="false" type="button" class="el-button el-button--primary el-button--default w-full mt-4"><!--v-if--><span class="">志愿推荐</span></button>
                </div>
              </el-row>

            </template>
          </el-card>
        </el-aside>
        <el-main v-loading="loading">
          <el-card shadow="never">
            <div class="main-header">
              <el-tabs v-model="form.activeName" style="flex: 1">
                <el-tab-pane name="1">
                  <template #label>
                    <span class="custom-tabs-label"> 选院校 </span>
                  </template>
                </el-tab-pane>
                <!--<el-tab-pane name="2">
                  <template #label>
                    <span class="custom-tabs-label"> 选专业 </span>
                  </template>
                </el-tab-pane>-->
              </el-tabs>
              <el-form-item label="">
                <el-input
                  v-model="form.keyword"
                  style="width: 400px; margin-left: 20px"
                  placeholder="请输入搜索内容"
                  clearable
                  @keydown.enter="handleSearch"
                >
                  <template #append>
                    <el-button :icon="Search" @click="handleSearch" />
                  </template>
                </el-input>
              </el-form-item>
            </div>
            <div v-show="form.activeName === '1'" class="none-el-radio__input">
              <!--<el-form-item label="就读地域">
                <el-radio-group v-model="form.territory" @change="handleSearch">
                  <el-radio
                    v-for="item in territory"
                    :key="item"
                    :value="item"
                    >{{ item }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
              <el-form-item label="院校类型">
                <el-radio-group
                  v-model="form.institutionType"
                  @change="handleSearch"
                >
                  <el-radio
                    v-for="item in institutionType"
                    :key="item"
                    :value="item"
                    >{{ item }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
              <el-form-item label="院校层次">
                <el-radio-group
                  v-model="form.institutionLevel"
                  @change="handleSearch"
                >
                  <el-radio
                    v-for="item in institutionLevel"
                    :key="item"
                    :value="item"
                    >{{ item }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>-->
              <el-tabs v-model="form.academyActiveName" type="card">
                <el-tab-pane name="1">
                  <template #label>
                    <span class="custom-tabs-label"> 可冲击 2</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university.slice(0, 2)"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
                <el-tab-pane name="2">
                  <template #label>
                    <span class="custom-tabs-label"> 较稳妥 3</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university.slice(2, 5)"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
                <el-tab-pane name="3">
                  <template #label>
                    <span class="custom-tabs-label"> 可保底 3</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university.slice(5, 8)"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
                <el-tab-pane name="4">
                  <template #label>
                    <span class="custom-tabs-label"> 全部 8</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
              </el-tabs>
            </div>
            <!--<div v-show="form.activeName === '2'">
              <el-form-item label="专业门类">
                <el-radio-group v-model="form.specialty" @change="handleSearch">
                  <el-radio
                    v-for="item in specialty"
                    :key="item"
                    :value="item"
                    >{{ item }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
              <el-tabs v-model="form.academyActiveName" type="card">
                <el-tab-pane name="1">
                  <template #label>
                    <span class="custom-tabs-label"> 可冲击 1</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university.slice(0, 1)"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
                <el-tab-pane name="2">
                  <template #label>
                    <span class="custom-tabs-label"> 较稳妥 4</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university.slice(1, 5)"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
                <el-tab-pane name="3">
                  <template #label>
                    <span class="custom-tabs-label"> 可保底 3</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university.slice(5, 8)"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
                <el-tab-pane name="4">
                  <template #label>
                    <span class="custom-tabs-label"> 全部 8</span>
                  </template>
                  <el-space direction="vertical" class="width100">
                    <University
                      v-for="item in university"
                      :key="item.code"
                      :info="item"
                      :ranking="form.ranking"
                    />
                  </el-space>
                </el-tab-pane>
              </el-tabs>
            </div>-->
          </el-card>
        </el-main>
      </el-container>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  /* --el-card-border-color: none; */

  /* 解决概率进度条宽度 */
  .el-progress--line {
    width: 85%;
  }

  /* 解决概率进度条字体大小 */
  .el-progress-bar__innerText {
    font-size: 15px;
  }

  /* 隐藏 el-scrollbar 滚动条 */
  .el-scrollbar__bar {
    display: none;
  }

  /* el-timeline 每一项上下、左右边距 */
  .el-timeline-item {
    margin: 0 6px;
  }
}
:deep(.el-main) {
  padding-top: 0;
  padding-right: 0;
}

.main-content {
  margin: 20px 20px 0 !important;
}
.aside-header {
  display: flex;
  justify-content: space-between;
}
.choose-subject {
  display: flex;
  justify-content: space-between;

  > div > span {
    font-size: 12px;
    color: #999;
  }
}
.md-12 {
  margin-bottom: 12px;
}
.main-header {
  display: flex;
  justify-content: space-between;
}
.none-el-radio__input {
  :deep(.el-radio__input) {
    display: none;
  }
  :deep(.el-radio) {
    margin-right: 18px;
  }
}
.width100 {
  width: 100%;

  :deep(.el-space__item) {
    width: 100%;
  }
}
</style>
