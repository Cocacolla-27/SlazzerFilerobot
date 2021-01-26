import React, { Component } from 'react';
import { Toolbar, NoClickOverlay, NoClickToolbar } from '../../styledComponents';
import Edit from './ToolbarOptionContainer/Edit';
import Effects from './Effects';
import Filters from './Filters';
import Crop from './Crop';
import Resize from './Resize';
import Orientation from './Orientation';
import Adjust from './Adjust';
import Watermark from './Watermark';
import FocusPoint from './FocusPoint';
import Shapes from './Shapes';
import Image from './Image';
import Text from './Text';
import Icon from '../icon/Icon';


export default class extends Component {

  state = {
    isCropping: false
  }

  render() {
    const { isCropping } = this.state
    const { activeTab, isShowSpinner, activeBody, updateState, config, setCropping } = this.props;
    // const { tools } = config;
    // const { setCropping } = config

    return (
      <Toolbar overlayYHidden={activeTab !== 'watermark'}>
        {/* {!activeTab && tools.map(name => <Tool name={name} key={name} {...this.props} />)} */}
        {/* {activeTab === 'adjust' && <Adjust {...this.props}/>}
        {activeTab === 'effects' && <Effects {...this.props}/>}
        {activeTab === 'filters' && <Filters {...this.props}/>}
        {activeTab === 'rotate' && <Orientation {...this.props}/>} */}

        {/* {(isShowSpinner) && <NoClickOverlay />}
        {activeBody !== 'preview' && <NoClickToolbar />} */}
       
        <Edit setCropping={() => {
          this.setState({ isCropping: true })
          updateState({ activeTab: 'crop' })
        }
        } {...this.props} />
        {/* {isCropping && <Crop {...this.props} />} */}
      </Toolbar>
    )
  }
}