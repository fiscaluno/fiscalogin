import React from 'react';

import '../../../../../images/university.png';

const InstitutionHeader = () => (
    <div id="containerSearch" className={this.institutionBar}>
        <div id="institutionAvatar">
            <div id="institutionHeaderBackground"></div>
            <img src={require('../../../../../images/university.png')} />
        </div>
        <div id="institutionName">
            <p>
                Faculdade Impacta de Tecnologia
            </p>
        </div>
    </div>
);

export default InstitutionHeader;