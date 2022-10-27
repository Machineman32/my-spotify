import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
                <Link
                    to={{
                        pathname: `/categories/${this.props.id}`,
                        state: {
                            categoryName: this.props.name
                        }
                    }}
                >
                    <div className="category-name">
                        <p id="category-name">{this.props.name}</p>
                    </div>
                    <img id='category-img' src={this.props.url} alt={this.props.name}/>
                </Link>
        );
    }
}

export default Category;