import React from 'react';
import "./home.scss";
import AboutSection from './HomeItems/DescriptionHook'
class HomeComponent extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div class="homeContainer">
                hello
                <div>

                </div>
                <AboutSection/>
            </div>
        )
        
    }
}

export default HomeComponent