import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './side-nav.documents.components';

export default function Documents(){
    return(
        <div className="container">
            <h1 className="text-center">Documents for a MERN Stack CRUD app</h1>
            <div>
                <SideNav />
            </div>

        </div>
    );
}