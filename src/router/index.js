import { createRouter, createWebHashHistory } from "vue-router";
import CinemaView from "../views/CinemaView.vue";
import EditUserInfoView from "../views/EditUserInfoView.vue";
import HomeView from "../views/HomeView.vue";
import HotListView from "../views/HotListView.vue";
import LoginView from "../views/LoginView.vue";
import NewsDetailView from "../views/NewsDetailView.vue";
import RecommendCinemaView from "../views/RecommendCinemaView.vue";
import RecommendVideoView from "../views/RecommendVideoView.vue";
import RecommendView from "../views/RecommendView.vue";
import UserLikeList from "../views/UserLikeList.vue";
import UserMainView from "../views/UserMainView.vue";
import UserView from "../views/UserView.vue";
import VideoView from "../views/VideoView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        redirect: "/home/recommend"
      },
      {
        path: "concern",
        name: "concern",
        component: RecommendView
      },
      {
        path: "recommend",
        name: "recommend",
        component: RecommendView
      },
      {
        path: "hot-list",
        name: "hot-list",
        component: HotListView
      }
    ]
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
    children: [
      {
        path: "",
        redirect: "/video/video-recommend"
      },
      {
        path: "/video/video-concern",
        name: "video-concern",
        component: RecommendVideoView
      },
      {
        path: "/video/video-recommend",
        name: "video-recommend",
        component: RecommendVideoView
      },
      {
        path: "/video/video-hot-list",
        name: "video-hot-list",
        component: RecommendVideoView
      }
    ]
  },
  {
    path: "/cinema",
    name: "cinema",
    component: CinemaView,
    children: [
      {
        path: "",
        redirect: "/cinema/cinema-recommend"
      },
      {
        path: "/cinema/cinema-recommend",
        name: "cinema-recommend",
        component: RecommendCinemaView
      },
      {
        path: "/cinema/movie",
        name: "movie",
        component: RecommendCinemaView
      },
      {
        path: "/cinema/tvshows",
        name: "tvshows",
        component: RecommendCinemaView
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    children: [
      {
        path: "",
        name: "user-main",
        component: UserMainView
      },
      {
        path: "user-edit-info",
        name: "user-edit-info",
        component: EditUserInfoView
      },
      {
        path: "/user-like-list",
        name: "user-like-list",
        component: UserLikeList
      }
    ]
  },
  {
    path: "/news-detail/:id",
    name: "news-detail",
    component: NewsDetailView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
