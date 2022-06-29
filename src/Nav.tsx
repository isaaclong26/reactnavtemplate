import React,{useState, useEffect, cloneElement} from "react";
import styled from "styled-components"

// configurable colors for Navigation
interface navTheme {
background: string,
primary: string,
secondary: string,
accent: string,
font: string,
round: boolean,
pos: string, // left, right
};
// interface for Children 
export interface child {
    component: any;
    name: string,
    data?: any,
    logo?: any,
    stack?:boolean,
};

// Custom Prop Type
interface navProps {
    theme: any,
    children: child[],
};


const HoverBox = styled.div`
position: fixed;
z-index: 2;
width: 5vw;
height: 75vh;
margin-top: 12.5vh;
color:white;
text-align: center;
padding: 10px 10px 10px 0 px;
background-color:orange;

`

const Menu = styled.div`
position: fixed;
z-index: 3;

width: 4vw;
border-radius: 0 20px  20px 0;
color:white;
text-align: center;
padding: 10px;
background-color: rgba(171, 184, 195);
pointer-events:none;
margin-top: 19vh;
`

const Nav = (props:navProps) =>{
    const kidCount = props.children?.length
  

    return(
  
    <div className="container-fluid" style={{backgroundColor: `${props.theme.background}`, height: "100vh"}}>

       {props.theme.pos === "left" && <HoverBox style={{left:0, borderRadius: "0 20px  20px 0"}}>
            <Menu style={{left: 0}}></Menu>
        </HoverBox>} 
       {props.theme.pos === "right" && <HoverBox style={{right:0}}>
       <Menu style={{right: 0,  borderRadius: " 20px 0  0 20px", height: `${props.children?.length*5}vh`}}></Menu>

        </HoverBox>} 

        {/* {ChildrenWithProps} */}




    </div>

    )
}



export default Nav;