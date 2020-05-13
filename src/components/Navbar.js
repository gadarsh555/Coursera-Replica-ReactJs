import React,{ Component,Fragment } from 'react';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';


class Navbar extends Component {
render(){
return(
<Fragment>
<div style={{position:"fixed",width:"80%",zIndex:"10"}}>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to='/' >
  <img src={require('../img/download.svg')} style={{marginTop:"2%"}} alt="coursera"/>
</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active" style={{marginTop:"2%"}}>
      <button type="button" class="btn btn-primary" style={{marginLeft:"2%",marginRight:"30px"}} >
      <div class="dropdown">
  <span>Explore</span>
  <div class="dropdown-content" style={{color:"black"}}>
  <p>Hello World!</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  </div>
</div>
        </button>


      </li>
      <li className="nav-item" style={{marginTop:"2%"}} >
      <div style={{marginRight:"340px"}} >
      {/* <input type="text"  style={{width:"200px"}} name="search" placeholder="Search.."/>
      <button type="submit"  style={{marginRight:"260px",backgroundColor:"blue"}}><i class="fa fa-search"></i></button> */}
               <div class="input-group" style={{width:"400px"}}>
    <input type="text" class="form-control" style={{border:"1px solid blue"}} placeholder="Search this blog"/>
    <div class="input-group-append">
      <button class="btn btn-secondary" style={{backgroundColor:"blue"}} type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  
      </div>
      </li>
      <li className="nav-item" style={{marginTop:"2%"}}>
        <Link className="nav-link" style={{marginRight:"10px",color:"blue"}}>For Enterprise</Link>
      </li>
      <li className="nav-item" style={{marginTop:"2%"}}>
      <Link to='/login'>
      <button type="button" class="btn btn-primary" >
        Join for Free
        </button>
        </Link>
      </li>
    </ul>
  </div>
</nav>
</div>
</Fragment>
);
}
}
export default Navbar;
