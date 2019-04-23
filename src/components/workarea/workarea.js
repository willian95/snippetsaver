import React, {Component} from 'react';
import './workarea.css';

class Workarea extends Component{

    render(){

        return(
            <div className="Workarea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Workarea;