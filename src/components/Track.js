import React from 'react';

import './Track.css';

const Track = (props) => {

    return (
        <li>
            <section
                onClick={(event) => {
                    props.pickTrack(props.id);
                }}
                className={"track-wrapper " + ( props.isTrackPicked ? 'track-wrapper--selected' : '')}
            >
                <section className="track-main">
                    <h3>
                        { props.name }
                    </h3>
                    <section>
                        <ol className="artist-wrapper">
                            {
                                props.artists.map(artist => {
                                    return (
                                        <li key={`Artist${artist}`} className="artist">
                                            { artist }
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </section>
                </section>
                <p className="track-duration">
                    {
                        props.duration.toFixed(2)
                    }
                </p>
            </section>
        </li>
    );
};

export default Track;