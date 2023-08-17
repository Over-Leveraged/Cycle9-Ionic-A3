import { IonContent, IonHeader, IonLabel, IonNav, IonNote,
    IonPage, IonTitle, IonToolbar, IonItem, 
    IonList, IonCheckbox, IonBadge, IonFab, IonFabButton, IonIcon, IonTabs } from '@ionic/react';
 import {add} from 'ionicons/icons';
 import './Home.css';
 import { IonBackButton, IonButton, IonButtons, IonMenuButton, IonMenu} from '@ionic/react';
 import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
 import React from 'react';  
 import { Link } from 'react-router-dom';
import AboutContainer from '../components/AboutContainer';

const About: React.FC = () => {
    return (
        <>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Discover</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
    
          <IonButton expand="full"><Link to="/home" className='nav-btn'>Home</Link></IonButton>
          <Link to="/about" className='nav-btn'><IonButton expand="full">About</IonButton></Link>
          <IonButton expand="full">Products</IonButton>
          </IonContent>
    
        </IonMenu>
    
        <IonPage id='main-content'>
          <IonHeader>
            <IonToolbar >
              <IonButtons slot="start">
              <IonMenuButton ></IonMenuButton>
            </IonButtons>
            <IonButtons slot="secondary">
              <IonButton>About</IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton>Products</IonButton>
            </IonButtons>
            <IonTitle>Akiel Walsh</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Akiel Walsh - About</IonTitle>
              </IonToolbar>
            </IonHeader>
    
            <AboutContainer />
    
    
          </IonContent>
    
        </IonPage>
        </>
      );
    };

export default About;