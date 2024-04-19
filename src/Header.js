import {menuCategories} from "./data";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <h1>کافه رستوران مِیسِن</h1>
                    <h2>Mason Cafe & Restaurant Since 1982</h2>
                    <Navbar menuCategoriesList={menuCategories}></Navbar>
                </div>
            </div>
        </div>
    );
  };