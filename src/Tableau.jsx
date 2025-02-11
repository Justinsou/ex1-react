import './tableau.scss';

import produits from '../src/data/produits.json';
import Produit from './Produit.jsx';

function Tableau() {

  return (
    <article className='Tableau'>
      <table>
        <thead className='Tableau__entete'>
          <tr >
            <th className='padding_right'>Produit</th>
            <th>Catégories</th>
            <th>Unités</th>
            <th>Ventes</th>
          </tr>
        </thead>
        <tbody>
          {produits.map(prod =>
          <Produit {...prod} />
          )}
        </tbody>
      </table>
    </article>
  )
}

export default Tableau;