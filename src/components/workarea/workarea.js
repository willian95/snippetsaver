import React, {Component} from 'react';
import './workarea.css';

class Workarea extends Component{

    render(){

        return(
            <div className="Workarea">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
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