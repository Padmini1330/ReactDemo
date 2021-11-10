import "./Home.css"
import React from "react";
class Home extends React.Component{
    render() {
    return (
    <>
    <header class="headerContainer"><h1>WELCOME TO BRIDGELABZ</h1></header>
    <div class="mainContainer">
        <section class="mainContainerItem">
            <article>
            <p>We are a techie community of</p>
            <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
            </ul>
            </article>
            <article>
            <p>Working together to keep the tech Employablility of Engineers alive and accessible, 
            so Tech Companies worldwide can get contributors and creators for technology solutions.
            </p>
            </article>
            <article>
            <p> To know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
            <strong>Employablility to all</strong></p>
            </article>
        </section>    
        <sideBar class="sideBarItem sideBarLeftItem"><div class="center"><p></p></div></sideBar>
        <sideBar class="sideBarItem sideBarRightItem"><div class="center"><p></p></div></sideBar>   
    </div>
    <footer class="footerContainer"></footer>
    </>
    );
    }
}
export default Home;