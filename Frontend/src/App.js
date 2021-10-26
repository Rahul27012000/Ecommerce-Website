import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart';
import DetailView from './Components/Product/DetailView'
import { TemplateProvider } from './templates/templateprovider'
import ContextProvider from './Context/contextprovider'
import { Box } from '@material-ui/core'
function App() {
  return (
    <TemplateProvider >
      <ContextProvider>
        {/* BrowserRouter enables routing in our proj */}
        <BrowserRouter >
          <Header />
          <Box style={{ marginTop: '54px' }}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/cart" component={Cart}></Route>
              <Route exact path="/product/:id" component={DetailView}></Route>
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
