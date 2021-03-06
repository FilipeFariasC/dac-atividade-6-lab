import { Link, NavLink } from 'react-router-dom';
import NavItem from './NavItem';


export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Biblioteca Farias</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <NavItem link="/registerAuthor" label={'Cadastrar Autor'}/>
            <NavItem link="/registerBook" label={'Cadastrar Obra'}/>
            <NavItem link="#" label={'Cadastrar'} appendClassName="dropdown">
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/registerAuthor"> Autor </NavLink>
                <NavLink className="dropdown-item" to="/registerBook"> Obra </NavLink>
              </div>
            </NavItem>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}