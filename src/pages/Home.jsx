import {Featuresdata} from "../data/Featuresdata.jsx"
import Features from "../components/Features/Features.jsx"

function Home() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {Featuresdata.map(({ id, image, title, description }) => (
                    <Features 
                        key={id}
                        image={image}
                        title={title}
                        description={description}    
                    />
                ))}
            </section>      
        </main>
    )
}

export default Home