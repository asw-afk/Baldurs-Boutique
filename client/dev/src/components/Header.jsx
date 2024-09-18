

export default function Header(){
    return (

        <Header className="header">
    
            
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">Baldurs Boutique</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Characters</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Builder</a>
      </li>
    </ul>
    <span className="navbar-text">
      Snappy tagline here
    </span>
  </div>
</nav>
       
       
        </Header>


    )
}