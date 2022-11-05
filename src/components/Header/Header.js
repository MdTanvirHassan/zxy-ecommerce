import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            
            <div id="header " className='sticky-top'>
                
                <nav className="navbar navbar-expand-lg  sticky-top dg">
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item style">
                            <a className="navbar-brand" href="/"> <img id='logo' src='../images/zxy-logo.jpg' alt="" width="30" height="24"/> </a>
                            </li>
                            <li className="nav-item style">
                            <a className="nav-link active" aria-current="page" href="/">Our Group</a>
                            </li>
                            
                            <li className="nav-item style dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products & Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                            </li>

                            <li className="nav-item style ">
                            <a className="nav-link active" aria-current="page"  href="/">Our Promise</a>
                            </li>
                            <li className="nav-item style">
                            <a className="nav-link active" aria-current="page"  href="/">Global Locations</a>
                            </li>
                            <li className="nav-item style">
                            <a className="nav-link active" aria-current="page"  href="/">Newsfeed</a>
                            </li>

                        <li className="nav-item style ">
                        <form className="d-flex" role="search"/>
                            <input id=' search' className=" me-2" type="search" placeholder="Search" aria-label="Search"/>
                           
                            <button className="cBtn" type="submit">Contract Us</button>
                        </li>

                        {/* social logo */}
                           
                        <li className="nav-item style social" >
                            <a className="navbar-brand" href="/"> <img id='logo' src='../images/zxy-logo.jpg' alt="" width="30" height="24"/> </a>
                         </li>

                         <li className="nav-item style social">
                            <a className="navbar-brand" href="/"> <img id='logo' src='../images/zxy-logo.jpg' alt="" width="30" height="24"/> </a>
                            </li>

                            <li className="nav-item style social">
                            <a className="navbar-brand" href="/"> <img id='logo' src='../images/zxy-logo.jpg' alt="" width="30" height="24"/> </a>
                            </li>

                            <li className="nav-item style social">
                            <a className="navbar-brand" href="/"> <img id='logo' src='../images/zxy-logo.jpg' alt="" width="30" height="24"/> </a>
                            </li>
                            <li className="nav-item style social">
                            <a className="navbar-brand" href="/"> <img id='logo' src='../images/zxy-logo.jpg' alt="" width="30" height="24"/> </a>
                            </li>
                           
                        </ul>
                       
                        
                        </div>
                    </div>
                    </nav>
                
            </div>

            <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center" >
              <div class="content text-center">
                  <h1 class="text-white">WEB ZONE</h1>
             </div>
         </div>




         <div class="container my-5 d-grid gap-5">
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi. df
        </p>
      </div>
    </div>
    
    




        </div>
    );
};

export default Header;