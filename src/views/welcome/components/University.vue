<script setup lang="ts">
import { ref, markRaw, reactive } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "UniversityList"
});
const visible = ref(false);
const router = useRouter();
const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  },
  ranking: {
    type: [Number, String],
    default: 0
  }
});
const dialogInfo = reactive<any>({
  list: [],
  des: [],
});
const info = props.info;

const handleRanking = currentRanking => {
  const ranking = Number(props.ranking);
  if (currentRanking <= ranking) {
    return `靠前${ranking - currentRanking}名`;
  }
  return `靠后${currentRanking - ranking}名`;
};
const handleToDetail = id => {
  router.push({
    path: "/university/detail",
    query: {
      id
    }
  });
};
const handleDialog = () => {
  dialogInfo.title = '学校名称';
  dialogInfo.header = '护理学';
  dialogInfo.des = ['招生代码 1031', '招生人数 180', '选科要求 物且化'];
  dialogInfo.list = info.list;
  visible.value = true;
}
</script>

<template>
  <el-card shadow="hover">
    <el-badge :value="info.matchingRate" type="primary">
      <el-button
        type=""
        link
        style="font-size: 18px"
        @click="handleToDetail(info.code)"
        >{{ info.name }}</el-button
      >
    </el-badge>
    <div class="mt-12">
      <el-space>
        <el-tag v-for="tag in info.tag" :key="tag" type="primary">{{
          tag
        }}</el-tag>
      </el-space>
      <div style="float: right;">
        <el-button type="primary" v-if="info.code === 'k46602'" @click="handleDialog">可填报</el-button>
        <el-button type="danger" v-else @click="handleDialog">已填报</el-button>
      </div>
    </div>
    <div class="mt-12">
      <el-space>
        <div class="nowrap">
          <span style="color: rgba(0, 0, 0, 0.6)">2024招生计划 </span>
          <span style="color: rgba(0, 0, 0, 1)">{{ info.plannedNumber }}</span>
        </div>
        <div class="nowrap">
          <span style="color: rgba(0, 0, 0, 0.6)">院校代码 </span>
          <span style="color: rgba(0, 0, 0, 1)">{{ info.code }}</span>
        </div>
        <div class="nowrap">
          <span style="color: rgba(0, 0, 0, 0.6)">2024年选科 </span>
          <span style="color: rgba(0, 0, 0, 1)">{{ info.subject }}</span>
        </div>
      </el-space>
    </div>
    <el-table :data="info.list" :show-header="false" class="mt-12">
      <el-table-column prop="time" width="180">
        <template #default="scope">
          <span style="color: rgba(0, 0, 0, 0.33)" />
          <span style="color: rgba(0, 0, 0, 1)">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="recruitNumber" width="180">
        <template #default="scope">
          <span style="color: rgba(0, 0, 0, 0.33)">招生人数</span>
          <span style="color: rgba(0, 0, 0, 1)">{{
            scope.row.recruitNumber
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="lowScore" width="180">
        <template #default="scope">
          <span style="color: rgba(0, 0, 0, 0.33)">最低分</span>
          <span style="color: rgba(0, 0, 0, 1)">{{ scope.row.lowScore }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="lowRanking">
        <template #default="scope">
          <span style="color: rgba(0, 0, 0, 0.33)">最低位次</span>
          <span style="color: rgba(0, 0, 0, 1)">{{
            scope.row.lowRanking
          }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <span style="color: rgba(0, 0, 0, 0.33)">比我的位次</span>
          <span style="color: rgba(0, 0, 0, 1)">{{
            handleRanking(scope.row.lowRanking)
          }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
   <el-dialog v-model="visible" :title="dialogInfo.title" width="800">
     <el-space spacer="|">
      <div v-for="des in dialogInfo.des" style="white-space: nowrap;">{{des}}</div>
      <el-button type="primary" @click="handleToDetail(info.code)">院校详情</el-button>
     </el-space>
      <el-card style="margin-top: 20px;" shadow="always">
        <div style="font-weight: bold;margin-bottom: 10px;font-size: 24px;">{{dialogInfo.header}}</div>
        <p style="margin-bottom: 10px;">(不招色盲、色弱、单色识别能力异常,办学地点:良乡校区))</p>
        <el-space class="mt-12">
          <div style="white-space: nowrap;">2024招生计划 180</div>
          <div style="white-space: nowrap;">专业代码 30</div>
          <div style="white-space: nowrap;">学费/学制 5000/四年</div>
        </el-space>
        <el-table :data="dialogInfo.list" :show-header="false" class="mt-12">
          <el-table-column prop="time" width="90">
            <template #default="scope">
              <span style="color: rgba(0, 0, 0, 0.33)" />
              <span style="color: rgba(0, 0, 0, 1)">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="recruitNumber" width="100">
            <template #default="scope">
              <span style="color: rgba(0, 0, 0, 0.33)">招生人数</span>
              <span style="color: rgba(0, 0, 0, 1)">{{
                scope.row.recruitNumber
              }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="lowScore" width="160">
            <template #default="scope">
              <span style="color: rgba(0, 0, 0, 0.33)">最低分</span>
              <span style="color: rgba(0, 0, 0, 1)">{{ scope.row.lowScore }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="lowRanking" width="160">
            <template #default="scope">
              <span style="color: rgba(0, 0, 0, 0.33)">最低位次</span>
              <span style="color: rgba(0, 0, 0, 1)">{{
                scope.row.lowRanking
              }}</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template #default="scope">
              <span style="color: rgba(0, 0, 0, 0.33)">比我的位次</span>
              <span style="color: rgba(0, 0, 0, 1)">{{
                handleRanking(scope.row.lowRanking)
              }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
  </el-dialog>
</template>

<style lang="scss" scoped>
.nowrap {
  white-space: nowrap;
}
.mt-12 {
  margin-top: 12px;
}
</style>
