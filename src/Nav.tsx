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
    component: React.FunctionComponent<any>;
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

`

const Menu = styled.div`
position: fixed;
z-index: 3;
height:auto;
width: 4vw;
border-radius: 0 20px  20px 0;
color:white;
text-align: center;
padding: 10px;
background-color: rgba(171, 184, 195);
pointer-events:none;
margin-top: 19vh;
`
const NavLogo = styled.img`
max-width:100%;
background: transparent;
width: 100%;
margin: 15px 0; 
pointer-events:auto;
`

const Nav = (props:navProps) =>{
    const kidCount = props.children?.length
    const [menuVis, setMenuVis] = useState(true)

    const [kid1Vis, setKid1Vis] = useState(true)
    const [kid2Vis, setKid2Vis] = useState(false)
    const [kid3Vis, setKid3Vis] = useState(false)
    const [kid4Vis, setKid4Vis] = useState(false)
    const [kid5Vis, setKid5Vis] = useState(false)

    const Kid1 = props.children[0].component;
    const Kid2 = props.children[1]?.component;
    const Kid3 = props.children[2]?.component;
    const Kid4 = props.children[3]?.component;
    const Kid5 = props.children[4]?.component;

    const kid1Logo = require(`./images/${ props.children[0].logo}.png`)
    const kid2Logo = require(`./images/${props.children[1].logo}.png`)
    var  kid3Logo = " ";
    var  kid4Logo= " ";
    var  kid5Logo =" ";
    if(kidCount > 2){kid3Logo = require(`./images/${props.children[2].logo}.png`)}
    if(kidCount > 3){kid3Logo = require(`./images/${props.children[3].logo}.png`)}
    if(kidCount > 4){kid3Logo = require(`./images/${props.children[4].logo}.png`)}



    
    useEffect(()=>{

        document.getElementById("fixed")?.addEventListener("mouseover", function( event ) {
            event.preventDefault();

            setMenuVis(true)
        });
        document.getElementById("fixed")?.addEventListener("mouseleave", function( event ) {
            event.preventDefault();
            setMenuVis(false)
        });
    })

    return(
  
    <div className="container-fluid" style={{backgroundColor: `${props.theme.background}`, height: "100vh"}}>

       {props.theme.pos === "left" && 
        <HoverBox style={{left:0, borderRadius: "0 20px  20px 0"}} id="fixed">
            {menuVis && 
                <Menu style={{left: 0}}>
                    <NavLogo className="navLogo" src={kid1Logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid1Vis)}}></NavLogo>
                    <NavLogo className="navLogo" src={kid2Logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid2Vis)}}></NavLogo>
                    {kidCount > 2 && <NavLogo className="navLogo" src={kid3Logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid3Vis)}}></NavLogo>}
                    {kidCount > 3 && <NavLogo  className="navLogo"src={kid4Logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid4Vis)}}></NavLogo>}
                    {kidCount > 4 && <NavLogo  className="navLogo"src={kid5Logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid5Vis)}}></NavLogo>}

                </Menu>
}
            </HoverBox>
        } 

       {props.theme.pos === "right" &&
        <HoverBox style={{right:0}} id="fixed">
                            {menuVis && 

            <Menu style={{right: 0,  borderRadius: " 20px 0  0 20px", height: `${props.children?.length*5}vh`}}>
                     <NavLogo src={props.children[0].logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid1Vis)}}></NavLogo>
                    <NavLogo src={props.children[1].logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid2Vis)}}></NavLogo>
                    {kidCount > 2 && <NavLogo src={props.children[2].logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid3Vis)}}></NavLogo>}
                    {kidCount > 3 && <NavLogo src={props.children[3].logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid4Vis)}}></NavLogo>}
                    {kidCount > 4 && <NavLogo src={props.children[4].logo}  onClick={(e)=> {e.stopPropagation(); setKid1Vis(!kid5Vis)}}></NavLogo>}

                
            </Menu>
}
        </HoverBox>} 

        {kid1Vis && <Kid1 data={props.children[0].data}></Kid1>}
        {kid2Vis && <Kid2 data={props.children[1].data}></Kid2>}
        {kid3Vis && <Kid3 data={props.children[2].data}></Kid3>}
        {kid4Vis && <Kid4 data={props.children[3].data}></Kid4>}
        {kid5Vis && <Kid5 data={props.children[4].data}></Kid5>}



    </div>

    )
}



export default Nav;