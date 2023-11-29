import React from "react";
import { Link } from "react-router-dom";
import '../components/footer.css'
function Footer(){
    return(
        
        <div className="footer-box container text-center text-md-start pt-5 pb-4">
            <div className="row text-center text-md-start ">
                <div className="col-md-3 cold-lg-3 col-xl-3 mx-auto mt-3 ">

                    <h5 className="mb-4  text-danger fw-bold">A propos </h5>
                    <p>
Implantée à Nabeul depuis 2010, notre société s’est spécialisée dans la fabrication et la vente de produits en céramique
                    </p>
                </div>
                
                
                 <div className="col-md-2 cold-lg-2 col-xl-2 mx-auto mt-3 ">
                   <Link style={{textDecoration:"none"}} as to="/"> <h5  className="mb-4 text-danger fw-bold">Information</h5></Link>
                      <p>Vous voulez quelques idées astucieuses sur la poterie?</p>
                 </div>


                  <div className="col-md-2 cold-lg-2 col-xl-2 mx-auto mt-3 ">
                     <Link style={{textDecoration:"none"}} as to="/"> <h5  className="mb-4 text-danger fw-bold">Products</h5></Link>
                      <p>Découvrez nos produits</p>
                  </div>

                
                  <div className="col-md-4 cold-lg-2 col-xl-3 mx-auto mt-3 ">
                   <Link style={{textDecoration:"none"}} as to="/contact"> <h5  className="mb-4 text-danger fw-bold">Contact</h5></Link>
                      <p>
                        <i style={{color:"red"}} className="fas fa-home me-2 "></i>Souse, TN
                        </p>
                      <p>
                        <i style={{color:"#f9a688"}} className="fas fa-envelope me-2 "></i>Yosartceramic@gmail.com
                        </p>
                         <p>
                        <i style={{color:"red"}  } className="fas fa-phone  me-2 "></i>22 123 123
                        </p>        
                  </div>
            </div>
            
            <hr className="mb-4"/>

            <div className="row ">
                <div className="col-md-4 col-xl-5">
                    <p>
                        Copyright <i className="fas fa-copyright"></i> 2023 <i style={{color:"red"}}>YOS</i><i style={{color:"#f9a688"}}>ART</i>
                    </p>

                </div>
            
            <div className="col-sm-10 col-md-8 col-xl-6 d-flex justify-content-end ">
                <div> 
                <ul  className="list-unstyled list-group list-group-horizontal"> 
                <li >
                    <a  href="https://www.facebook.com/Yosartcollection"  target="_blank" style={{fontSize:"20px", textDecoration:"none"}}> <i className="fab fa-facebook"></i> Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/yosart_ceramic/" target="_blank"className="ms-3 text-danger "style={{fontSize:"20px", textDecoration:"none"}}> <i className="fab fa-instagram"></i> Instagram</a>
                </li>
                <li>
                    <a href="https://www.threads.net/@yosart_ceramic" target="_blank" className=" ms-3 text-black"style={{fontSize:"20px", textDecoration:"none"}}> <i className="fab fa-threads"></i> threads</a>
                </li>
                    </ul>  

                </div>
            </div>
            </div>
        </div>
     
    )
}
export default Footer ;