import Vue from "vue";
import Router from "vue-router";

import Page404 from "./views/Page404.vue";
import PageNoAccess from "./views/PageNoAccess.vue";
import Login from "./views/Login.vue";

import ForgotPassword from "./views/ForgotPassword.vue";
import NewPassword from "./views/NewPassword.vue";

import Main from "./views/Main.vue";
import Dashboard from "./views/Dashboard.vue";

import ProducerDashboard from "./views/ProducerDashboard.vue";
import ProducerMovies from "./views/ProducerMovies.vue";
import ProducerRevenue from "./views/ProducerRevenue.vue";

import EditorDashboard from "./views/EditorDashboard.vue";
import EditorMovies from "./views/EditorMovies.vue";

import ModeratorDashboard from "./views/ModeratorDashboard.vue";

import Movies from "./views/Movies.vue";
import Artists from "./views/Artists.vue";
import Genres from "./views/Genres.vue";
import Languages from "./views/Languages.vue";
import Producers from "./views/Producers.vue";

import UserAccounts from "./views/UserAccounts.vue";
import UsersViewsAnalytics from "./views/UsersViewsAnalytics.vue";
import MoviesWiseAnalytics from "./views/MoviesWiseAnalytics.vue";

import MoviesAnalytics from "./views/MoviesAnalytics.vue";

import Revenue from "./views/Revenue.vue";
import Orders from "./views/Order.vue";

import Users from "./views/Users.vue";
import Notifications from "./views/Notifications.vue";
import TabSettings from "./views/TabSettings.vue";
import Configs from "./views/Configs.vue";

import MovieDetails from "./views/MovieDetails.vue";
import Profile from "./views/Profile.vue";

import UserAccountDetails from "./views/UserAccountDetails.vue";
import MovieDetailedAnalytics from "./views/MovieDetailedAnalytics.vue";

import Analytics from "./views/Analytics.vue";
import Demographics from "./views/Demographics.vue";

//Producer
import MoviesWiseAnalyticsProducer from "./views/MoviesWiseAnalyticsProducer.vue";

import DemographicsProducer from "./views/DemographicsProducer.vue";

import ShortFilmUpload from "./views/ShortFilmUpload.vue";

import NewVideoManager from "./views/NewVideoManager.vue";
import Uploads from "./views/Uploads.vue";

import FileUpload from "./views/FileUpload.vue";

import ProducerVideoUploads from "./views/ProducerVideoUploads.vue";

import ProducerUploadVideo from "./views/ProducerUploadVideo.vue";

Vue.use(Router);

//export default new Router({
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Login,
      meta: { title: "Home", requiresAuth: false }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { title: "Login", requiresAuth: false }
    },
    {
      path: "/newpassword/:resetlink",
      name: "newpassword",
      component: NewPassword,
      meta: { title: "NewPassword", requiresAuth: false }
    },
    {
      path: "/NewVideoManager",
      name: "NewVideoManager",
      component: NewVideoManager,
      meta: { title: "NewVideoManager", requiresAuth: false }
    },
    {
      path: "/short-films",
      name: "ShortFilmUpload",
      component: ShortFilmUpload,
      meta: { title: "ShortFilmUpload", requiresAuth: false }
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: ForgotPassword,
      meta: { title: "ForgotPassword", meta: { requiresAuth: false } }
    },
    {
      path: "/FileUpload",
      name: "FileUpload",
      component: FileUpload,
      meta: { title: "FileUpload", meta: { requiresAuth: false } }
    },
    {
      path: "/admin",
      component: Main,
      meta: { title: "Admin", requiresAuth: true, role: "admin" },
      children: [
        {
          path: "dashboard",
          name: "adminDashboard",
          component: Dashboard,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "movies",
          name: "movies",
          component: Movies,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "movies/:id",
          name: "aMovieDetails",
          component: MovieDetails,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "artists",
          name: "artist",
          component: Artists,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "genres",
          name: "genres",
          component: Genres,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "languages",
          name: "languages",
          component: Languages,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "uploads",
          name: "uploads",
          component: Uploads,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "producers",
          name: "producers",
          component: Producers,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "accounts",
          name: "accounts",
          component: UserAccounts,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "accounts/:id",
          name: "accounts-details",
          component: UserAccountDetails,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "accounts-views",
          name: "accounts-views",
          component: UsersViewsAnalytics,
          meta: { requiresAuth: true, role: "admin" }
        },
        //{ path: "movies-analytics", name: "movies-analytics", component: MoviesAnalytics, meta: { requiresAuth: true, role: "admin" } },
        {
          path: "analytics",
          name: "analytics",
          component: Analytics,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "demographics",
          name: "demographics",
          component: Demographics,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "movies-wise-analytics",
          name: "movies-wise-analytics",
          component: MoviesWiseAnalytics,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "MovieDetailedAnalytics/:id",
          name: "MovieDetailedAnalytics",
          component: MovieDetailedAnalytics,
          meta: { requiresAuth: true, role: "admin" }
        },

        {
          path: "revenue",
          name: "revenue",
          component: Revenue,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "orders",
          name: "orders",
          component: Orders,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "users",
          name: "users",
          component: Users,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "notifications",
          name: "notifications",
          component: Notifications,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "tab-settings",
          name: "tabsettings",
          component: TabSettings,
          meta: { requiresAuth: true, role: "admin" }
        },
        {
          path: "configs",
          name: "configs",
          component: Configs,
          meta: { requiresAuth: true, role: "admin" }
        }
      ]
    },
    {
      path: "/producer",
      component: Main,
      meta: { title: "Producer", requiresAuth: true, role: "producer" },
      children: [
        {
          path: "dashboard",
          name: "producerDashboard",
          component: ProducerDashboard,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "movies",
          name: "producerMovies",
          component: ProducerMovies,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "movies/:id/:type",
          name: "pMovieDetails",
          component: MovieDetails,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "profile",
          name: "producerProfile",
          component: Profile,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "accounts-views-producer",
          name: "accounts-views-producer",
          component: DemographicsProducer,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "movies-wise-analytics-producer",
          name: "movies-wise-analytics-producer",
          component: MoviesWiseAnalyticsProducer,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "producer-revenue",
          name: "producer-revenue",
          component: Revenue,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "uploads",
          name: "uploads",
          component: ProducerVideoUploads,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "upload-video",
          name: "upload-video",
          component: ProducerUploadVideo,
          meta: { requiresAuth: true, role: "producer" }
        },
        {
          path: "producer-movie-detailed-analytics/:id",
          name: "producer-movie-detailed-analytics",
          component: MovieDetailedAnalytics,
          meta: { requiresAuth: true, role: "producer" }
        }
      ]
    },
    {
      path: "/editor",
      component: Main,
      meta: { title: "Editor", requiresAuth: true, role: "editor" },
      children: [
        {
          path: "dashboard",
          name: "editorDashboard",
          component: EditorDashboard,
          meta: { requiresAuth: true, role: "editor" }
        },
        {
          path: "movies",
          name: "editorMovies",
          component: EditorMovies,
          meta: { requiresAuth: true, role: "editor" }
        },
        {
          path: "movies/:id/:type",
          name: "MovieDetails",
          component: MovieDetails,
          meta: { requiresAuth: true, role: "editor" }
        },
        {
          path: "profile",
          name: "editorProfile",
          component: Profile,
          meta: { requiresAuth: true, role: "editor" }
        }
      ]
    },
    {
      path: "/moderator",
      component: Main,
      meta: { title: "Moderator", requiresAuth: true, role: "moderator" },
      children: [
        {
          path: "dashboard",
          name: "moderatorDashboard",
          component: ModeratorDashboard,
          meta: { requiresAuth: true, role: "moderator" }
        },
        {
          path: "movies",
          name: "moderatorMovies",
          component: Movies,
          meta: { requiresAuth: true, role: "moderator" }
        },
        {
          path: "artists",
          name: "moderatorArtist",
          component: Artists,
          meta: { requiresAuth: true, role: "moderator" }
        },
        {
          path: "genres",
          name: "moderatorGenres",
          component: Genres,
          meta: { requiresAuth: true, role: "moderator" }
        },
        {
          path: "languages",
          name: "moderatorLanguages",
          component: Languages,
          meta: { requiresAuth: true, role: "moderator" }
        },
        {
          path: "producers",
          name: "moderatorProducers",
          component: Producers,
          meta: { requiresAuth: true, role: "moderator" }
        },
        {
          path: "profile",
          name: "moderatorProfile",
          component: Profile,
          meta: { requiresAuth: true, role: "moderator" }
        }
      ]
    },
    {
      path: "/noaccess",
      name: "noaccess",
      component: PageNoAccess,
      meta: {
        title: "noaccess",
        meta: { requiresAuth: false }
      }
    },
    {
      path: "/*",
      name: "page404",
      component: Page404,
      meta: {
        title: "Page404",
        meta: { requiresAuth: false }
      }
    }
  ],
  linkActiveClass: "router-active-sub-item" // active class for non-exact links.
});

router.beforeEach((to, from, next) => {
  var a_user = localStorage.getItem("user");
  var user = !a_user ? {} : JSON.parse(a_user);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    console.log("REQUIRES AUTH");
    if (!user) {
      // if not, redirect to login page.
      console.log("Not Logged in");
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else if (to.meta.role == user.role) {
      console.log("Logged in");
      next();
    } else {
      console.log("No Access");
      next({
        path: "/noaccess",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    console.log("Does not require auth");
    next();
  }
});

export default router;
