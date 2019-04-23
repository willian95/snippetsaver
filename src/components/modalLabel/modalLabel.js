import React, {Component} from 'react';
import { ReactIndexedDB } from 'react-indexed-db';
import './modalLabel.css';

class ModalLabel extends Component{

    constructor() {
        super();
        let db = ReactIndexedDB;
        this.checkInput = this.checkInput.bind(this);
        this.saveLabel = this.saveLabel.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.clearInput = this.clearInput.bind(this);

        this.db = new ReactIndexedDB('snippets', 1);
        this.db.openDatabase(1, evt => {
            let objectStoreLabel = evt.currentTarget.result.createObjectStore('labels', { keyPath: 'id', autoIncrement: true });
            objectStoreLabel.createIndex('label', 'label', { unique: true });

            let objectStoreSnippet = evt.currentTarget.result.createObjectStore('snippets', { keyPath: 'id', autoIncrement: true });
            objectStoreSnippet.createIndex('title', 'title', { unique: true });
            objectStoreSnippet.createIndex('snippet', 'snippet', { unique: false });
            objectStoreSnippet.createIndex('label_id', 'label_id', { unique: false });

        });
    }

    closeModal() {
        let modal = document.getElementById("modalLabel");
        modal.style.display = "none";
    }

    clearInput(){

        document.getElementById('labelInput').value = ""

    }

    checkInput(label){
        let error = false;

        if(label == ""){
            error = true
        }

        return error;

    }

    saveLabel(){

        let label = document.getElementById('labelInput').value;

        if(this.checkInput(label)){
            alert('Label cannot be empty')
        }else{
            
            this.db.add('labels', { label: label}).then(
                () => {
                    alert('Success')
                    this.clearInput()
                },
                error => {
                    if(error.srcElement.error.code == 0){
                        alert('Duplicate label')
                    }
                }
            );
            
        }

    } 

    render(){

        return(
            <div className="ModalLabel" id="modalLabel">
                <div className="custom-modal">
                
                    <div className="content">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Label name</h5>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="labelInput" placeholder="Your label name" />
                                    </div>
                                </form>
                                <div className="button-div">
                                    <button href="#" class="btn btn-primary" onClick={ this.closeModal }>Close</button>
                                    <button href="#" class="btn btn-primary" onClick={ this.saveLabel }>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );

    }

}

export default ModalLabel;