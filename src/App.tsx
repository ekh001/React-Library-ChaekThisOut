import { HashRouter, Routes, Route } from 'react-router-dom'

import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import PageTransition from './components/PageTransition'

import AuthChecker from './auth/AuthChecker'

function App() {
 

  return (
    <HashRouter>

    {/* <PageTransition> */}

        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                  <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
            )) }
          </Routes>
        </Provider>
        {/* </PageTransition> */}
    </HashRouter>

  )
}


export default App

