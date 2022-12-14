import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


import Category from '../components/Category';

import Playlists from "./Playlists";


import { checkAndReturnToken } from '../utils';

class Categories extends React.Component {

    state = {
        categories: [],
        isLoading: false
    };

    async componentDidMount() {
        try {
            const token = checkAndReturnToken(this.props.history);

            if (token === null) {
                return;
            }

            this.setState({
                isLoading: true
            });

            const result = await fetch('https://api.spotify.com/v1/browse/categories', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await result.json();

            const categories = data.categories.items.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    url: item.icons && item.icons.length > 0 ?
                        item.icons[0].url : ''
                }
            });

            this.setState({
                categories: categories,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
            throw new Error('Failed to fetch data');
        } finally {
            console.log('I am finally here')
            this.setState({
                isLoading: false
            })
        }
    }

    render() {

        let categoriesSection = null;

        if (this.state.isLoading) {
            categoriesSection = (
                console.log('Loading')
            );

        } else if (this.state.categories && this.state.categories.length > 0) {
            categoriesSection =  this.state.categories
                .map(category => {
                    return (
                            <div className="category">
                                <Category
                                    key={`Category${category.id}`}
                                    name={category.name}
                                    id={category.id}
                                    url={category.url}
                                />
                            </div>
                    )
                });
        } else {
            categoriesSection = 'No categories. We will be back soon';
        }

        return (
            <Switch>
                <Route
                    path={`${this.props.match.path}/:id`}
                    component={Playlists}
                />
                <Route
                    path={`${this.props.match.path}*`}
                >
                    {
                        <div className="mid-wrapper">
                            {categoriesSection}
                        </div>
                    }
                </Route>
            </Switch>
        );
    }
}

export default withRouter(Categories);
