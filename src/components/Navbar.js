
export default function NavbarPage(){
  return(
    <nav className='"navbar navbar-expand-lg navbar-light bg-light"'>
      <div>
        <a className="navbar-brand" href="/">Proyecto</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li className='nav-item'>
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className='nav-item'>
            <a className="nav-link" href="/contact">Contact</a>
            </li>

            <li className='nav-item'>
             <a className="nav-link" href="/categories">Categories</a>
            </li>

            <li className='nav-item'>
              <a className="nav-link" href="/divisores">Divisores</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
  )
}
