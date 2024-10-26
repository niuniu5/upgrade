<script setup lang="ts">
import { ref, markRaw, reactive } from "vue";
import { universityMap } from "./data";
import { useRoute } from "vue-router";

defineOptions({
  name: "UniversityDetail"
});

const route = useRoute();
const info = universityMap[(route.query.id as string) || "1023"];
const loading = ref(false);
const activeName = ref("1");

const handleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
handleLoading();
</script>

<template>
  <div>
    <div
      v-loading="loading"
      style="width: calc(100vw - 400px); margin: auto; padding-bottom: 20px"
    >
      <el-card>
        <template #header>
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
        </template>
        <div class="base-info">
          <!--<div class="base-info-left">
            <img :src="info.images[0]" alt="" />
          </div>-->
          <div class="base-info-right">
            <div class="base-info-right-top">
              <el-space>
                <el-card
                  v-for="item in info.honors"
                  :key="item.name"
                  style="width: 126px; text-align: center"
                  shadow="hover"
                >
                  <p style="color: #409eff; font-size: 20px">
                    {{ item.ranking }}
                  </p>
                  <p style="color: #666; font-size: 14px; white-space: nowrap">
                    {{ item.name }}
                  </p>
                </el-card>
              </el-space>
            </div>
            <p
              v-for="item in info.baseInfoList"
              :key="item"
              class="base-info-right-item"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </el-card>
      <el-tabs v-model="activeName" style="margin-top: 20px">
        <el-tab-pane label="分数/计划" name="1">
          <el-card>
            <template #header>
              <span>分数/计划</span>
            </template>
            <el-table :data="info.specialtyList">
              <el-table-column prop="name" label="专业名称">
                <template #default="scope">
                  <p>{{ scope.row.name }}</p>
                  <el-tag v-if="scope.row.tag">{{ scope.row.tag }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="level" label="层次（本科/专科）" />
              <el-table-column prop="duration" label="专业名称" />
              <el-table-column prop="duration" label="最低分/最低位次" />
              <el-table-column prop="duration" label="招生人数" />
              <el-table-column prop="acceptanceRate" label="选课要求" />
            </el-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="开设专业" name="2"
          ><el-card>
            <template #header>
              <span>开设专业</span>
            </template>
            <el-table :data="info.specialtyList">
              <el-table-column prop="name" label="专业名称">
                <template #default="scope">
                  <p>{{ scope.row.name }}</p>
                  <el-tag v-if="scope.row.tag">{{ scope.row.tag }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="level" label="层次" />
              <el-table-column prop="category" label="学科门类" />
              <el-table-column prop="type" label="专业类别" />
              <el-table-column prop="duration" label="文理科" />
              <!-- <el-table-column prop="acceptanceRate" label="录取率" /> -->
            </el-table> </el-card></el-tab-pane>
      </el-tabs>
    </div>
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

.base-info {
  display: flex;

  .base-info-left {
    width: 442px;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 20px;

    > img {
      width: 100%;
    }
  }
  .base-info-right {
    flex: 1;

    .base-info-right-top {
      margin-bottom: 20px;
    }

    .base-info-right-item {
      line-height: 20px;
      color: #666;
      margin-bottom: 15px;
    }
  }
}
</style>
