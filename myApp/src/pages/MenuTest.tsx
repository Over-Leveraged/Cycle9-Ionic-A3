import React from 'react';
import { IonButtons,IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
function Example() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Discover</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

        <IonButton expand="full">Home</IonButton>
        <IonButton expand="full">About</IonButton>
        <IonButton expand="full">Products</IonButton>
        </IonContent>

      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
}
export default Example;