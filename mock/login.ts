// 根据角色动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      // if (body.username === "admin") {
      return {
        success: true,
        data: {
          // avatar: "https://avatars.githubusercontent.com/u/44761321",
          username: body.username,
          nickname: "小铭",
          gender: "男",
          name: "李铭",
          phone: "15601111111",
          birthday: "2005-05-19",
          interest: "热爱篮球,书法",
          pluses: "",
          school: "保定一中",
          provinceId: "河北省",
          cityId: "保定市",
          areaId: "莲池区",
          academic_type: "理科",
          score: 559,
          // 一个用户可能有多个角色
          roles: ["admin"],
          // 按钮级别权限
          permissions: ["*:*:*"],
          accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
          expires: "2030/10/30 00:00:00"
        }
      };
      // }
      /**else {
        return {
          success: true,
          data: {
            avatar: "https://avatars.githubusercontent.com/u/52823142",
            username: "common",
            nickname: "小林",
            roles: ["common"],
            permissions: ["permission:btn:add", "permission:btn:edit"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      }**/
    }
  }
]);
