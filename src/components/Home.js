import React,{Component} from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'
import Component6 from './Component6'

class Home extends Component {
render(){
return(
<div>
      <Navbar/>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Footer/>
</div>
);
}
}

export default Home
