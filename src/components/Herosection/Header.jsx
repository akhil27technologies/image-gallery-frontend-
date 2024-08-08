import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FcGallery } from "react-icons/fc";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-body-tertiary p-3">
       <Link to={'/'} style={{textDecoration:"none"}}><FcGallery style={{fontSize:"3rem"}} className="ms-4" /></Link>
        <Navbar.Brand className="ms-2"><h1>PixelParade</h1></Navbar.Brand>
    </Navbar>
  );
}

export default Header;
