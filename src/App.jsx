import { BrowserRouter } from 'react-router-dom';

import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works,
} from './components';
const App = () => {
    return (
        <BrowserRouter>
            <div id="app-wrapper" className="relative z-0 bg-primary">
                <div
                    id="navbar-wrapper"
                    className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
                >
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div id="contact-wrapper" className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
