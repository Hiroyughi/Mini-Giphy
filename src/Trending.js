import React, { Component } from 'react';
import { API_KEY } from './App'

class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs : {data:[]}
        };
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=4`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((result) => {
                this.setState({
                    gifs: result,
                    });
                })
    }

    render() {
        const listItems = this.state.gifs.data.map((item) =>
            <a href={item.url} target="new" key={item.id}>
                <img src={item.images.original.url} />
            </a>
        );
        return (
            <div className="pakageTrending">
                <h1>Top Trending</h1>
                    <div className="trending">
                        {listItems}
                    </div>
            </div>
        )
    }
}

export default Trending;