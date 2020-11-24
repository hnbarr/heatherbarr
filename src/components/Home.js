import React, { Component } from 'react';
import NavTabs from './NavTabs';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-12">
                <NavTabs/>

                </div>
                    <h4 className="col-12 my-3">
                        I'm passionate about creating and nurturing inclusive and open environmenets everywhere I go. 
                    </h4>
                    <div className="col-12">
                        <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                        The passage is attributed to an unknown typesetter in the 15th century 
                        who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
                        </p>
                        <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                        The passage is attributed to an unknown typesetter in the 15th century 
                        who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
                        </p>
                        <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                        The passage is attributed to an unknown typesetter in the 15th century 
                        who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
