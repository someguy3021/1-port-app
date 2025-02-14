const routes = [
  // {
  //   // these are depricate routes, probably 404 should be added here later
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
    component: () => import("layouts/MainLayout.vue"),
    props: {
      linksList: [
        {
          title: "link_aboutme_title",
          caption: "link_aboutme_caption",
          icon: "school",
          link: "/",
        },
        {
          title: "link_myworks_title",
          caption: "link_myworks_caption",
          icon: "code",
          link: "/works",
        },
        // {
        //   title: "link_contacts_title",
        //   caption: "link_contacts_caption",
        //   icon: "record_voice_over",
        //   link: "/contacts",
        // },
      ],
    },
    children: [
      {
        path: "",
        name: "DevRoot",
        component: () => import("pages/dev/DevRootPage.vue"),
      },
      { path: "works", component: () => import("pages/dev/Dev_WorksPage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for who wants a website or a design, but it is just a customer
    path: "/webdes",
    name: "WebDes",
    component: () => import("layouts/MainLayout.vue"),
    props: {
      linksList: [
        {
          title: "link_aboutme_title",
          caption: "link_aboutme_caption",
          icon: "school",
          link: "/",
        },
        {
          title: "link_myworks_title",
          caption: "link_myworks_caption",
          icon: "code",
          link: "/works",
        },
        // {
        //   title: "link_services_title",
        //   caption: "link_services_caption",
        //   icon: "home_repair_service",
        //   link: "/contacts",
        // },
        // {
        //   title: "link_contacts_title",
        //   caption: "link_contacts_caption",
        //   icon: "record_voice_over",
        //   link: "/contacts",
        // },
      ],
    },
    children: [
      {
        path: "",
        name: "WebDesRoot",
        component: () => import("pages/webdes/WebdesRootPage.vue"),
      },
      {
        path: "works",
        component: () => import("pages/webdes/Webdes_WorksPage.vue"),
      },
      {
        path: "services",
        component: () => import("pages/webdes/Webdes_ServicesPage.vue"),
      },
      { path: "contacts", component: () => import("pages/ContactsPage.vue") },
    ],
  },
  {
    // these routes for someone who wants their audio fixed, but it is just a customer
    path: "/freelancer",
    name: "Freelancer",
    component: () => import("layouts/MainLayout.vue"),
    props: {
      linksList: [
        {
          title: "link_aboutme_title",
          caption: "link_aboutme_caption",
          icon: "school",
          link: "/",
        },
        {
          title: "link_myworks_title",
          caption: "link_myworks_caption",
          icon: "code",
          link: "/works",
        },
        {
          title: "link_services_title",
          caption: "link_services_caption",
          icon: "home_repair_service",
          link: "/contacts",
        },
        {
          title: "link_contacts_title",
          caption: "link_contacts_caption",
          icon: "record_voice_over",
          link: "/contacts",
        },
      ],
    },
    children: [
      {
        path: "",
        name: "FreelancerRoot",
        component: () => import("pages/webdes/WebdesRootPage.vue"),
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
