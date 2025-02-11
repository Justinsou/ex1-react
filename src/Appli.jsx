import './Appli.scss';
import Entete from './entete.jsx';
import Menu from './Menu.jsx';
import Tableau from './Tableau.jsx';

function Appli() {

  return (
    <div className='Appli'>
      <Entete/>
      <Menu />
      <Tableau />
    </div>
  )
}

export default Appli;
