import Img1 from '../../images/img121.webp';
import Perfil from '../Perfil/Perfil';
import './Main.css';
import Img2 from '../../images/images1.avif';
import Img3 from '../../images/images2.png';
import Img4 from '../../images/images3.jpg';
import Equipe from '../Equipe/Equipe';

const Main =() => {
      return(
        <main>
        <Equipe
          titulo={'capitão america'} 
          img1={Img1} nome1={'imgcapitão america'} 
          img2={Img2} nome2={'imgsalãoRobotica'}
          img3={Img3} nome3={'imgRobo Humano'}
        />
     </main>
  )
}

export default Main;




