import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
    return(
        <BrowserRouter>
            {/* Switch faz com que apenas uma rota seja mostrada por vez*/}
            <Switch>
                {/* Qual o caminho e qual o componente que ele vai mostrar na tela, exact geralmente só coloca na rota inicial */}
                <Route path='/' exact component={Landing} />
                <Route path='/app' component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;