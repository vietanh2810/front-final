import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import DashBoard from "./components/DashBoard.vue";
import SignupPage from "./components/SignUpPage.vue";
import AdminPage from "./components/AdminPage.vue";
import SdkPage from "./components/SdkPage.vue";
import GraphePage from "./components/GraphePage.vue";
import HeatMapPage from "./components/HeatMapPage.vue";
import KpiPage from "./components/KpiPage.vue";
import TagPage from "./components/TagPage.vue";
import ConversionTunnel from "./components/ConversionTunnel.vue";

const routes = [
    {
        path: "/",
        component: DashBoard,
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/dashboard",
        component: DashBoard,
    },
    {
        path: "/signup",
        component: SignupPage,
    },
    {
        path: "/sdk",
        component: SdkPage,
    },
    {
        path: "/conversiontunnel",
        component: ConversionTunnel,
    },
    {
        path: "/admin",
        component: AdminPage,
    },
    {
        path: "/graphe",
        component: GraphePage,
    },
    {
        path: "/heatmap",
        component: HeatMapPage,
    },
    {
        path: "/kpi",
        component: KpiPage,
    },
    {
        path: "/tags",
        component: TagPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ["/login", "/signup"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");
    const userRole = loggedIn ? JSON.parse(loggedIn).user.role : null;

    if (authRequired && !loggedIn) {
        next("/login");
    } else if (to.path === "/admin" && userRole !== "admin") {
        next(from.path);
    } else {
        next();
    }
});

export default router;
