import './Produit.scss';


function Produit({img, produit, btn, categorie, unites, ventes}) {

  return (
   
          <tr className='Produit'>
            <td>
              <img src={img} alt="" /> 
            </td>
            <td>{produit}</td>
            <td><button>{btn}</button></td>
            <td>{categorie}</td>
            <td>{unites}</td>
            <td>{ventes} $</td>
          </tr>
  )
}

export default Produit;