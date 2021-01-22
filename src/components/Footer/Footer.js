import React, { Component, useState } from 'react';
import FooterToolbarBox from './FooterToolbarBox';
import { Footer, PreviousBtn, NextBtn, ResetBtn, Switcher, FullscreenBtn } from '../../styledComponents';
import { toggleModalFullscreen } from '../../utils/full-screen-handle';
import MuiButton from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Button = withStyles({
  root: {
    fontSize: '12px!important',
    textTransform: 'capitalize',
    '&.downloadBtn': {
      background: '#007cc7',
      marginLeft: '10px',
      color: 'white'
    },
    '&.downloadBtn:hover' : {
      color: 'black',
      background: 'white'
    },
    '&.shareBtn:hover': {
      color: 'white' 
    }
  },
  
  label: {

  }
})(MuiButton)

// const  useStyles = makeStyles({
//   downloadBtn: {
//     marginLeft: '10px', 
//     fontSize: '12px!important', 
//     background: '007cc7',
//     '&:hover': {
//       color: 'black',
//       background: 'white'
//     }
//   }
// })

export default class extends Component {
  onApplyWatermarkChange = () => {
    this.props.updateState({
      watermark: { ...this.props.watermark, applyByDefault: !this.props.watermark.applyByDefault }
    });
  }

  
  render() {
    const {
      initialZoom, operations, operationsZoomed, currentOperation = null, redoOperation,
      resetOperations, activeBody, t, logoImage, watermark, config
    } = this.props;
    const { elementId } = config;
    const operationList = initialZoom === 1 ? operations : operationsZoomed;
    const currentOperationIndex = operationList.findIndex(operation => operation === currentOperation);
    const isCurrentOperationLast = currentOperation && (operationList[operationList.length - 1] === currentOperation);
    const isPrevForbidden = (operationList.length < 1) || (currentOperationIndex === -1);
    const isNextForbidden = (operationList.length < 2 || (operationList.length > 1 && isCurrentOperationLast)) &&
      (currentOperationIndex !== -1 || operationList.length !== 1);
    
    
    
      return (
      <Footer>
        <>
        <span>Credit Card: 200</span>
        <FooterToolbarBox />
        <div>
         
            <Button
            style={{color: '#a1a1a1'}}
              color="default"
              className="shareBtn"
              startIcon={<i className="icon-share" />}
            >
              share
            </Button>
        
          <span className="shareBorderLeft">
          <Button
            variant="contained"
            color="default"
            size="small"
            className="downloadBtn"
            startIcon={<i className="icon-download2" />}
          >
            Download
          </Button>
          </span>
        </div>
        </>
      </Footer>
    )
  }
}