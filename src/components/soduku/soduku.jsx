import React from 'react';
import "./header.scss";
class Soduku extends React.Component {
    constructor(props){
        super(props)
    }
    availableNumbers=[1,2,3,4,5,6,7,8,9]
    gridH = -{1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},}
    gridV= {
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[],
        7:[],
        8:[],
    }
    generateGird(grid,secondGrid =false){
        dummyNumbers = this.availableNumbers.sort((a, b) => 0.5 - Math.random());
        for(let i =0;i<9;i++){
            gridV[i+1].push(dummyNumbers)[i];
            gridH[i+1].push(dummyNumbers)[i];
        }
    }
    initalLogic(){
        this.generateGird(gridV);
        this.generateGird(gridH,true);
    }
    render(){
        return(
            <div class="headerContainer">
                header
            </div>
        )
        
    }
}

export default Soduku