import React, { Component } from 'react';
import { Footer, PreviousBtn, NextBtn, ResetBtn, Switcher, FullscreenBtn, FooterToolbarMiddleBox } from '../../styledComponents';
import { toggleModalFullscreen } from '../../utils/full-screen-handle';
import MuiIconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '../icon/Icon';

// const Button = withStyles({
//   root: {
//     fontSize: '12px!important',
//     textTransform: 'capitalize',
//     '&.downloadBtn': {
//       background: '#007cc7',
//       marginLeft: '10px',
//       color: 'white'
//     },
//     '&.downloadBtn:hover' : {
//       color: 'black',
//       background: 'white'
//     },
//     '&.shareBtn:hover': {
//       color: 'white' 
//     }
//   },
  
//   label: {

//   }
// })(MuiButton)

const IconButton =  withStyles({
  root: {
    padding: '8px',
    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  label: {
      color: '#a1a1a1',
      '&:hover': {
        color: 'white'
    }
  }
})(MuiIconButton)

export default function FooterToolbarBox() {
  return(
    <FooterToolbarMiddleBox>
      <IconButton aria-label="delete"><Icon name="minus" /></IconButton>
      <span>100%</span>
      <IconButton aria-label="delete"><Icon name="plus-circle" /></IconButton>
      <IconButton aria-label="delete"><Icon name="layers" /></IconButton>
      <IconButton aria-label="delete"><Icon name="screen-full" /></IconButton>
      <IconButton aria-label="delete"><Icon name="copy" /></IconButton>
      <IconButton aria-label="delete"><Icon name="corner-up-left" /></IconButton>
      <IconButton aria-label="delete"><Icon name="icon-repeat" /></IconButton>
    </FooterToolbarMiddleBox>
  )
}