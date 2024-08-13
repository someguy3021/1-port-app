const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AboutMePage.vue") },
      { path: "/works", component: () => import("pages/MyWorksPage.vue") },
      { path: "/services", component: () => import("pages/ServicesPage.vue") },
      { path: "/contacts", component: () => import("pages/ContactsPage.vue") },
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
