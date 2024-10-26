export default {
  path: "/university",
  redirect: "/university/list",
  meta: {
    title: "查大学"
  },
  children: [
    {
      path: "/university/list",
      name: "查大学",
      component: () => import("@/views/university/list.vue"),
      meta: {
        title: "查大学"
      }
    },
    {
      path: "/university/detail",
      name: "大学详情",
      component: () => import("@/views/university/detail.vue"),
      meta: {
        showLink: false,
        activePath: "/university/list",
        title: "大学详情"
      }
    }
  ]
} satisfies RouteConfigsTable;
