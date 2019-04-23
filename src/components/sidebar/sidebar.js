import React, { Component } from 'react';
import { ReactIndexedDB } from 'react-indexed-db';
import './sidebar.css';

class Sidebar extends Component{

    constructor(){
        super();
        this.labels = [];
        this.state = {
            labels
        }

        let db = ReactIndexedDB;
        this.showLabels = this.showLabels.bind(this)
        
        this.db = new ReactIndexedDB('snippets', 1);
        let _this = this;        
        this.db.openDatabase(1, evt => {
            
            let objectStoreLabel = evt.currentTarget.result.createObjectStore('labels', { keyPath: 'id', autoIncrement: true });
            objectStoreLabel.createIndex('label', 'label', { unique: true });

            let objectStoreSnippet = evt.currentTarget.result.createObjectStore('snippets', { keyPath: 'id', autoIncrement: true });
            objectStoreSnippet.createIndex('title', 'title', { unique: true });
            objectStoreSnippet.createIndex('snippet', 'snippet', { unique: false });
            objectStoreSnippet.createIndex('label_id', 'label_id', { unique: false });

        }).then(function(){
            _this.showLabels()
            console.log(this.labels)
        });



    }

    showModal() {
        var modal = document.getElementById("modalLabel");
        modal.style.display = "block";
    }

    showLabels(){
        let _this = this;
        this.db.getAll('labels').then(
            labels => {
                this.labels = labels
            },
            error => {
                console.log(error);
            }
        );

    }

    //const labelList

    render(){
        return(
            <div className="Sidebar">
                <div className="container">
                    <div className="row add-labels">
                        <div className="col-lg-12 col-md-12">
                            <h4>Label <button onClick={this.showModal} className="btn btn-round" data-toggle="modal" data-target="#addLabel">
                                <i className="fas fa-plus"></i></button>
                            </h4>
                        </div>
                    </div>
                    <div className="row labels-list">
                        <div className="col-lg-12 col-md-12">
                            <ul className="list-group">
                                {
                                    this.props.labels.map(function(label){

                                        return <li className='list-group-item d-flex justify-content-between align-items-center'>
                                            label.label
                                            <span className='badge badge-primary badge-pill'>14</span>
                                        </li>

                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Sidebar;
