const routes = [
  // {
  //   // это роуты деприкейтед, наверно потом сюда бы накидать 404
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/AboutMePage.vue") },
  //     { path: "works", component: () => import("pages/MyWorksPage.vue") },
  //     { path: "services", component: () => import("pages/ServicesPage.vue") },
  //     { path: "contacts", component: () => import("pages/ContactsPage.vue") },
  //   ],
  // },
  {
    // these routes for who wants to hire me as a prog and knows coding
    path: "/dev",
    name: "Dev",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      {
        path: "",
        name: "DevRoot",
        component: () => import("pages/dev/DevRootPage.vue"),
      },
      { path: "works", component: () => import("pages/MyWorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for who wants a website or a design, but it is just a customer
    path: "/webdes",
    name: "WebDes",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "WebDesRoot",
        component: () => import("pages/AboutMePage.vue"),
      },
      { path: "works", component: () => import("pages/MyWorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for someone who wants their audio fixed, but it is just a customer
    path: "/freelancer",
    name: "Freelancer",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "FreelancerRoot",
        component: () => import("pages/AboutMePage.vue"),
      },
      { path: "works", component: () => import("pages/MyWorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
