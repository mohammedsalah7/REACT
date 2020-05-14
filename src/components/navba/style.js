import styled from "styled-components";


export  const Navrbarsection = styled.div `
padding: 0px 0;
overflow: hidden;
background-color:#fff;
position: relative;
border-bottom: 1px solid #000


`
 
export const Logo = styled.div `

    width: 50%;
    float: left;
    color : black
`
export const Logotext = styled.h2 `

background-image:url('./images/logo.PNG'); 
background-repeat: no;
font-size: 30px;
font-weight: bold

width: 460px;
height: 85px;

overflow: hidden;
margin-top: 3px;
`

export const ULlist = styled.ul `
width: 50%;
float: left;
list-style: none;
padding: 0;
margin-top: 35px;
`

export const ListItem = styled.li `
display: inline-block;
`

export const Ancor  = styled.a `
display: block;
color: black;
text-decoration: none;
padding: 1px 10px;
font-weight: bold;
 &:hover {
    color: #eb5424
 }
 
`





// /* Media for Navbar Style */ 

// @media (min-width : 992px) {
//     .navbar label {
//         display: none
//     }
// }

// @media (max-width : 991px) {
//     .navbar .logo {
//         width: 100%;
//         float: none;
//     }
    
//     .navbar .ul-list {
//         width: 100%;
//         float:  none;
//         margin-top: 20px;
//         display: none
//     }
    
//     .navbar .ul-list .list-item {
//         display: block;
//         text-align: center;
//     }
// }