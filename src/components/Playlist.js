import React from 'react';
import { Link } from 'react-router-dom';

import './Playlist.css';

class Playlist extends React.Component {

    render() {

        return (
            <div className="playlist-wrapper">
                <Link
                    to={{
                        pathname: `/playlists/${this.props.id}`,
                        state: {
                            playlistName: this.props.name
                        }
                    }}
                >
                    <div style={{ width: '200px' }}>
                        <img
                            src={this.props.image}
                            alt={`Playlist ${this.props.name}`}
                            className="playlist-image"
                        />
                        <h3 className="playlist-title">
                            {
                                this.props.name
                            }
                        </h3>
                        <p className="playlist-description">
                            {
                                this.props.desc
                            }
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Playlist;