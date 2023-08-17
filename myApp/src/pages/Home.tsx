import { IonContent, IonHeader, IonLabel, IonNav, IonNote,
   IonPage, IonTitle, IonToolbar, IonItem, 
   IonList, IonCheckbox, IonBadge, IonFab, IonFabButton, IonIcon, IonTabs } from '@ionic/react';
import {add} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonBackButton, IonButton, IonButtons, IonMenuButton, IonMenu} from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import React from 'react';  
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      <Link to="/home" className='nav-btn'><IonButton expand="full">Home</IonButton></Link>
      <Link to="/about" className='nav-btn'><IonButton expand="full">About</IonButton></Link>
      <Link to="/Products" className='nav-btn'><IonButton expand="full">Products</IonButton></Link>
      </IonContent>

    </IonMenu>

    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar >
          <IonButtons slot="start">
          <IonMenuButton ></IonMenuButton>
        </IonButtons>
        <IonButtons slot="secondary">
        <Link to="/about" className='nav-btn'><IonButton>About</IonButton></Link>
        </IonButtons>
        <IonButtons slot="primary">
        <Link to="/Products" className='nav-btn'><IonButton>Products</IonButton></Link>
        </IonButtons>
        <Link to="/Home" className='nav-btn'><IonTitle>The Watch Shop</IonTitle></Link>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Akiel Walsh - About</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />


      </IonContent>

    </IonPage>
    </>
  );
};

export default Home;
