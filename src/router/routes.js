const routes = [
  {
    // это роуты деприкейтед, наверно потом сюда бы накидать 404
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AboutMePage.vue") },
      { path: "works", component: () => import("pages/MyWorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for who wants to hire me as a prog and knows coding
    path: "/dev",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AboutMePage.vue") },
      { path: "works", component: () => import("pages/MyWorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for who wants a website or a design, but it is just a customer
    path: "/webdes",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AboutMePage.vue") },
      { path: "works", component: () => import("pages/MyWorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for someone who wants their audio fixed, but it is just a customer
    path: "/audio",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AboutMePage.vue") },
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
