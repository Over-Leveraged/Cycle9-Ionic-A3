import './ExploreContainer.css';
import { Link } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonNav, IonNote, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonCheckbox, IonBadge, IonFab, IonFabButton, IonIcon, IonTabs, IonButton } from '@ionic/react';


interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <img src="images/Vacheron Constantin Overseas.jpg" alt="Watch" className='hero-pic' />
      <h1>The Watch Shop</h1>
      

      <div className='Button-Container'>
      <Link to="/about" className='navs-btn'><IonButton >Meet Akiel Walsh</IonButton></Link>
      <Link to="/Products" className='navs-btn'><IonButton  >Order Now</IonButton></Link>

      </div>

      <p></p>

    </div>
  );
};

export default ExploreContainer;
