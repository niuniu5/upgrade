<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { formUpload } from "@/api/mock";
import { message } from "@/utils/message";
import { type UserInfo, getMine } from "@/api/user";
import type { FormInstance, FormRules } from "element-plus";
import ReCropperPreview from "@/components/ReCropperPreview";
import { createFormData, deviceDetection } from "@pureadmin/utils";
import uploadLine from "@iconify-icons/ri/upload-line";
import { getAllDistrict } from "@/api/getAllDistrict";

// defineOptions({
//   name: "Profile"
// });

const imgSrc = ref("");
const cropperBlob = ref();
const cropRef = ref();
const uploadRef = ref();
const isShow = ref(false);
const userInfoFormRef = ref<FormInstance>();

const provinceCity = ref([
]);
const userInfos = reactive({
  // avatar: "",
  // nickname: "",
  // email: "",
  // phone: "",
  // description: ""

  username: "",
  nickname: "",
  gender: "",
  name: "",
  phone: "",
  birthday: "",
  interest: "",
  pluses: "",
  school: "",
  provinceId: "",
  provinceCity: [],
  cityId: "",
  areaId: "",
  academic_type: "",
  score: ""
});
const handleGetAllDistrict = async () => {
  const res = await getAllDistrict() as any;
  provinceCity.value = res?.map(({ id, name, children }) => ({
    value: id,
    label: name,
    children: children?.map(({ id, name }) => ({ value: id, label: name })),
  }));
}
const rules = reactive<FormRules<UserInfo>>({
  nickname: [{ required: true, message: "昵称必填", trigger: "blur" }]
});

function queryEmail(queryString, callback) {
  const emailList = [
    { value: "@qq.com" },
    { value: "@126.com" },
    { value: "@163.com" }
  ];
  let results = [];
  let queryList = [];
  emailList.map(item =>
    queryList.push({ value: queryString.split("@")[0] + item.value })
  );
  results = queryString
    ? queryList.filter(
        item =>
          item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      )
    : queryList;
  callback(results);
}

const onChange = uploadFile => {
  const reader = new FileReader();
  reader.onload = e => {
    imgSrc.value = e.target.result as string;
    isShow.value = true;
  };
  reader.readAsDataURL(uploadFile.raw);
};

const handleClose = () => {
  cropRef.value.hidePopover();
  uploadRef.value.clearFiles();
  isShow.value = false;
};

const onCropper = ({ blob }) => (cropperBlob.value = blob);

// 更新信息
const onSubmit = async (formEl: FormInstance) => {
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(userInfos);
      message("更新信息成功", { type: "success" });
    } else {
      console.log("error submit!", fields);
    }
  });
};

getMine().then(res => {
  Object.assign(userInfos, res.data);
});
onMounted(() => {
  handleGetAllDistrict();
})
</script>

<template>
  <div
    :class="[
      'min-w-[180px]',
      deviceDetection() ? 'max-w-[100%]' : 'max-w-[70%]'
    ]"
  >
    <h3 class="my-8">个人信息</h3>
    <el-form
      ref="userInfoFormRef"
      label-position="top"
      :rules="rules"
      :model="userInfos"
    >
     
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="userInfos.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userInfos.username" placeholder="请输入昵称" />
      </el-form-item>

      <el-form-item label="姓名" prop="name">
        <el-input v-model="userInfos.name" placeholder="请输入昵称" />
      </el-form-item>
      
      <el-form-item label="生日" prop="birthday">
        <el-input v-model="userInfos.birthday" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="兴趣" prop="interest">
        <el-input v-model="userInfos.interest" placeholder="请输入昵称" />
      </el-form-item>
       <el-form-item label="中学" prop="school">
        <el-input v-model="userInfos.school" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="省市" prop="provinceCity">
        <!-- <el-input v-model="userInfos.provinceId" placeholder="请输入昵称" /> -->
        <el-cascader
         v-model="userInfos.provinceCity"
          placeholder="请选择省市"
          :options="provinceCity"
          filterable
        />
      </el-form-item>
      <!-- <el-form-item label="市" prop="cityId">
        <el-input v-model="userInfos.cityId" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="区" prop="areaId">
        <el-input v-model="userInfos.areaId" placeholder="请输入昵称" />
      </el-form-item> -->
      <el-form-item label="加分项" prop="pluses">
        <el-input v-model="userInfos.pluses" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input
          v-model="userInfos.phone"
          placeholder="请输入联系电话"
          clearable
        />
      </el-form-item>
      <el-button type="primary" @click="onSubmit(userInfoFormRef)">
        更新信息
      </el-button>
    </el-form>
  </div>
</template>
