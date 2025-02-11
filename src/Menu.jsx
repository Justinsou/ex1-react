import './Menu.scss';
import Categorie from './Categorie.jsx';

import categories from '../src/data/categories.json';

function Menu() {

  return (
    <main className='Menu'>
      <h1>Catalogue</h1>
      <ul>
        {categories.map(cat => 
         <Categorie {...cat}/>
        )}
      </ul>
    </main>
  )
}

export default Menu;