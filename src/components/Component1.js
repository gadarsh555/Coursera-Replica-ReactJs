import React,{ Component ,Fragment} from 'react';
import {Link} from 'react-router-dom';

class Component1 extends Component {
render(){
return(
<Fragment>
<div className="comp1" >
    <h4 style={{color:"white",padding:"2%"}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </h4>
        <Link to='/login'>
       <button style={{margin:"5%"}} className="btn-primary">Join for Free</button>
       </Link>
    
</div>
</Fragment>
);
}
}

export default Component1;