   import Logo from '../../images/logo.jpg';
   import './Header.css';

     const Header =() =>{ 
     return(
        <header className='menu'>
        <img src={Logo}></img>
        <h1> Perfil</h1>
      </header>
     )
}


export default Header;