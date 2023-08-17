import './ExploreContainer.css';
import { Link } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonNav, IonNote,
    IonPage, IonTitle, IonToolbar, IonItem, 
    IonList, IonCheckbox, IonBadge, IonFab, IonFabButton, IonIcon, IonTabs } from '@ionic/react';
 import {add} from 'ionicons/icons';
 import { IonBackButton, IonButton, IonButtons, IonMenuButton, IonMenu} from '@ionic/react';
 import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
 import React from 'react';  

interface ContainerProps { }

const NavContainer: React.FC<ContainerProps> = () => {
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
              </IonPage>
                </>
            
    );
};

export default NavContainer;