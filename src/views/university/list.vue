<script setup lang="ts">
import { ref, markRaw, reactive, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import {
  territory,
  institutionType,
  schoolRunningType,
  institutionCharacteristics,
  university
} from "./data";
import { page } from "@/api/university";

defineOptions({
  name: "UniversityList"
});
const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const total = ref(100);
const universityList = ref(university);
const form = reactive({
  activeName: "1",
  keyword: "",
  territory: "全部",
  institutionType: "全部",
  schoolRunningType: "全部",
  institutionCharacteristics: "全部"
});
const handleToDetail = id => {
  router.push({
    path: "/university/detail",
    query: {
      id
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
const handleReqPage = async () => {
  console.log({ current: currentPage.value, ...form })
  const res = await page({ current: currentPage.value, ...form }) as any;
  // res = {
  //   total: 2,
  //   records: [
  //     {name: '22'}
  //   ]
  // }
  total.value = res.total;
  universityList.value = res.records;
}
onMounted(() => {
  handleReqPage();
})
</script>

<template>
  <div>
    <el-container style="width: calc(100vw - 400px); margin: auto">
      <el-main v-loading="loading" style="padding-left: 0">
        <el-card shadow="never">
          <div class="main-header">
            <el-tabs v-model="form.activeName" style="flex: 1">
              <el-tab-pane name="1">
                <template #label>
                  <span class="custom-tabs-label"> 院校库 </span>
                </template>
              </el-tab-pane>
            </el-tabs>
            <el-form-item label="">
              <el-input
                v-model="form.keyword"
                style="width: 400px; margin-left: 20px"
                placeholder="请输入院校名称"
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
            <el-form-item label="院校所属">
              <el-radio-group v-model="form.territory" @change="handleSearch">
                <el-radio v-for="item in territory" :key="item" :value="item">{{
                  item
                }}</el-radio>
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
            <el-form-item label="办学类型">
              <el-radio-group
                v-model="form.schoolRunningType"
                @change="handleSearch"
              >
                <el-radio
                  v-for="item in schoolRunningType"
                  :key="item"
                  :value="item"
                  >{{ item }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
            <el-form-item label="院校特色">
              <el-radio-group
                v-model="form.institutionCharacteristics"
                @change="handleSearch"
              >
                <el-radio
                  v-for="item in institutionCharacteristics"
                  :key="item"
                  :value="item"
                  >{{ item }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
            <el-space direction="vertical" class="width100">
              <el-card
                v-for="info in universityList"
                :key="info.code"
                shadow="hover"
                @click="handleToDetail(info.code)"
              >
                <div>
                  <el-button type="" link style="font-size: 18px">{{
                    info.name
                  }}</el-button>
                </div>
                <div class="mt-12">
                  <el-space>
                    <el-tag v-for="tag in info.tag" :key="tag" type="primary">{{
                      tag
                    }}</el-tag>
                  </el-space>
                </div>
              </el-card>
            </el-space>
          </div>
        </el-card>
        <el-pagination @change="handleReqPage" style="margin-top: 20px;" background layout="prev, pager, next" v-model:current-page="currentPage" :total="total" />
      </el-main>
    </el-container>
    
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
.mt-12 {
  margin-top: 12px;
}
</style>
