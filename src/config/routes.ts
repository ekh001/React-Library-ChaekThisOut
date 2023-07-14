import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Intro from '../pages/Intro'
import EditData from '../pages/EditData'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}


const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    },

    {
      path: "/intro",
      component: Intro,
      name: "Intro",
      protected: false,
    },
    {
      path: "/editdata",
      component: EditData,
      name: "Edit Data",
      protected: false,
    }

  ]

  export default routes