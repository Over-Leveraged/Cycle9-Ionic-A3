import './ExploreContainer.css';
import AkielWalsh from '/images/AkielWalsh.jpg';

interface ContainerProps { }

const AboutContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <h1>Meet Akiel Walsh</h1>
      {/* Add an Image of Akiel */}
      <img src={AkielWalsh} alt='Akiel Walsh' className = "hero-pic"/>
      <h4> He is a member of The Focal Point team and a final year student at the University of the West Indies</h4>
      <p> This is his first time using ionic and react.</p>

    </div>
  );
};

export default AboutContainer;
