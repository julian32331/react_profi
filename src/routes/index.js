import LandingPage from "../views/pages/LandingPage.js";
var indexRoutes = [
        { path: "/auth", name: "Pages", component: LandingPage },
        { path: "/registration", name: "Notifications", mini: "N", component: LandingPage },
        { path: "/", name: "LandingPage", component: LandingPage }
      ] 
  

export default indexRoutes;