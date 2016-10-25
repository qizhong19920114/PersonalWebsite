import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }

  }
  render(){
    //<Page HTMLContent={this.props.body} />
    var styles = _.cloneDeep(this.constructor.styles);

    return(<Section {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}
      >


    </Section>)
  }
}

Footer.styles = {

}
