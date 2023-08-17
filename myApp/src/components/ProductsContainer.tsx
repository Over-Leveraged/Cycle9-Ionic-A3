import './ExploreContainer.css';
import { Link } from 'react-router-dom';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const products = [

    {
        "id": 2,
        "name": "Rolex Milgauss",
        "price": 11549,
        "image": "images/Rolex Milgauss.jpg",
        "description": "A must-have watch Swiss-made Rolex Milgauss Oystersteel Men's watch model 116400GV-0001. Features a polished 904L stainless steel case with a screw-down crown & case back and a brushed with polished 904L stainless steel oyster bracelet. A deep black dial is accentuated by Chromalight luminescent hands."
    },
    {
        "id": 1,
        "name": "Omega Speedmaster - Apollo Edition",
        "price": 16960,
        "image": "images/Omega Speedmaster - Apollo Edition.webp",
        "description": "This 42-mm Speedmaster features a couple of unique elements from the steel version. One such element is the Apollo XVII mission patch in gold that is located on the subdial at nine o'clock. The same gold mission patch can be found on the case back. The blue dial corresponds with the blue ceramic bezel."
    },
    {
        "id": 3,
        "name": "Rolex Submariner - Hulk",
        "price": 21990,
        "image": "images/Rolex Submariner - Hulk.webp",
        "description": "Stainless steel case with a stainless steel oyster bracelet. Uni-directional rotating stainless steel bezel with a green cerachrom top ring. Green dial with silver-tone Mercedes-logo, sword, and Breguet-style shape hands and luminous dot hour markers. Minute markers around the outer rim. "
    },
    {
        "id": 4,
        "name": "Audemars Piguet Royal Oak",
        "price": 115999,
        "image": "images/AudemarsPiguetRoyalOak.jpg",
        "description": "A must have example of simple and clean, the Royal Oak Extra Thin Tourbillon is a welcome take on the impressive offerings from Audemars Piguet. The 18k rose gold 41 mm case is assembled with a matching, fixed bezel, blue petite tapisserie dial, and a screw-down crown. This timepiece is powered by a 2924 calibre with a 70-hour power reserve and power reserve indicator."
    },
    {
        "id": 5,
        "name": "Omega Seamaster 300M",
        "price": 6000,
        "image": "images/Omega Seamaster.webp",
        "description": "The watch is in New/Unworn condition, with no signs of wear. The pictures are very representative of the condition. Omega Seamaster Diver 300M Blue Dial."
    },
    {
        "id": 6,
        "name": "Vacheron Constantin Overseas",
        "price": 121000,
        "image": "images/Vacheron Constantin Overseas.jpg",
        "description": "Vacheron Constantin 4300V Overseas Perpetual Calendar Ultra-Thin Skeleton 4300V/120R-B547, 4300V120RB547, 4300V 120R B547, 18k rose gold on an integral 18k rose gold bracelet with a double folding deployant clasp, automatic Vacheron caliber 1120 QP/1, 40-hour power reserve, skeletonized dial with applied luminous rose gold hour markers and luminous hands, perpetual calendar with indications for the month (with leap year), day, date, and moonphase, sapphire crystal, water resistant to 50 meters, diameter: 41.5mm, thickness: 8.1mm. Like new with box and undated papers. The watch was worn only a couple of times."
    }
]

const ProductsContainer: React.FC = () => {
    return (
        <div id="container">
            <strong>Products</strong>
            <div className="product-list">
                {products.map(product => (
                    <IonCard key={product.id}>
                        <img src={product.image} alt={product.name} className='display-img' />
                        <IonCardHeader>
                            <IonCardTitle>{product.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {/* <p>{product.description}</p> */}
                            <p>Price: ${product.price}</p>
                            
                        </IonCardContent>
                    </IonCard>
                ))}
            </div>
        </div>
    );
}

export default ProductsContainer;