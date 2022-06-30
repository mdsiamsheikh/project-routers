import HomeVewVue from "./components/HomeVew.vue";
import PortfolioVew from "./components/portfolio/PortfolioVew.vue";
import StocksVew from "./components/stocks/StocksVew.vue";

const router = [
  { path: "/", component: HomeVewVue },
  { path: "/portfolio", component: PortfolioVew },
  { path: "/stocks", component: StocksVew },
];
export default router;
