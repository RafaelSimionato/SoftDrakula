import React from 'react';
import '../css/Projects.css';

class Products extends React.Component {
    redirectToSpa = () => {
        window.location.href = 'Spa.html';
    }

    redirectToMotorcycleParts = () => {
        window.location.href = 'motorcycleParts.html';
    }

    redirectToClock = () => {
        window.location.href = 'clock.html';
    }

    handleBackButton = () => {
        window.history.back();
    }

    render() {
        return (
            <div className="product-container">
                <header>
                    <h1>Our Portfolio</h1>
                </header>
                <main>

                    <div className="main-content">
                        <h2>Soft<span style={{ color: '#ff6600' }}>D</span>rakula</h2>
                        <h3>Crafting Front-End, Web Design and UX/UI solutions
                        </h3>
                        <p>Check out some of our projects below...</p>
                        <div className="button-container">
                            <button className="segment-button" onClick={this.redirectToSpa}>Kaasboerderij</button>
                            <button className="segment-button" onClick={this.redirectToMotorcycleParts}>MotorcycleParts</button>
                            <button className="segment-button" onClick={this.redirectToClock}>Clock</button>
                        </div>
                    </div>
                </main>
                <footer>
                    <p>&copy; 2024 Proudly powered by Soft<span style={{ color: '#ff6600' }}>D</span>rakula</p>
                    <button id="backButton" onClick={this.handleBackButton}>Back</button>
                </footer>
            </div>
        );
    }
}

export default Products;
