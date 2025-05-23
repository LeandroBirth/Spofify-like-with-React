import React, { useEffect, useState } from 'react';
import ArtistCard from '../ArtistCard/Artist';
import './Main.css';

const Main = ({ artists, filteredArtists }) => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();
    
        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Bom dia 🌥️');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon ☀️');
        } else {
            setGreeting('Good Evening 🌙');
        }
    }, []);

    return (
        <main>
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <div className="greeting__text">
                            {greeting}
                        </div>
                        <h2 className="session">Browse all</h2>
                    </div>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {filteredArtists.length > 0 ? (
                                <div className="cards-container">
                                    {filteredArtists.map(artist => (
                                        <ArtistCard key={artist.id} artist={artist} />
                                    ))}
                                </div>
                            ) : (
                                <div className="cards-container">
                                    {artists.map(artist => (
                                        <ArtistCard key={artist.id} artist={artist} />
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
