import './App.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {PostsPage} from './Pages/Posts';
import {PostPage} from './Pages/Post';
import {NoMatchPage} from './Pages/NoMatchPage';

const HELLO = 'Hello from';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/posts"/>
                </Route>
                <Route
                    path="/posts"
                    render={(props) => <PostsPage hello={HELLO} {...props}/>}
                />
                <Route
                    path="/post/:id"
                    render={(props) => <PostPage hello={HELLO} {...props}/>}
                />
                <NoMatchPage
                    hello={HELLO}
                />
            </Switch>
        </Router>
    );
}

export default App;
