import React, { Component } from 'react';
import { ToolWrapper, ToolIcon, ToolLabel } from '../../styledComponents/index';
import Icon from '../icon/Icon';
import Button from '@material-ui/core/Button';


export default class extends Component {
  render() {
    const { key, icon, name, activeTab, updateState, t } = this.props;

    return (
      <ToolWrapper>
          <Button
            variant="contained"
            color="secondary"
            className=""
            startIcon={<Icon name={icon} />}
            >
            { name }
        </Button>
      </ToolWrapper>
    )
  }
}