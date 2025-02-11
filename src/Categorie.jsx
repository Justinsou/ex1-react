import './Categorie.scss';

function Categorie({nom, couleur}) {

  return (
    <li style={{ backgroundColor: couleur }}>{nom}</li>
  )
}

export default Categorie;