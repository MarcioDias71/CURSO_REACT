import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import PagePromotionSearch  from "./Promotions/Search/Search";
import PagesPromotionForm from "./Promotions/Form/Form";

const Root = () => {

    return (

        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm}/>
                <Route path="/edit/:id" component={PagesPromotionForm}/>

                <Route path="/" component={PagePromotionSearch}/>
            </Switch>
        </Router>
    )

}

export default Root
