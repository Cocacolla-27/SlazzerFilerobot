import React, { Component } from 'react';
import { ToolWrapper, ToolIcon, ToolLabel } from '../../styledComponents/index';
import Icon from '../icon/Icon';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends Component {
  render() {
    const { icon, name, activeTab, updateState, t } = this.props;
    const filteredName = name === 'rotate' ? 'orientation' : name;

    return (
      <ToolWrapper
        className="mb-1"
        active={activeTab === name}
        onClick={() => updateState({ activeTab: name })}
      >
        <div className="d-flex align-items-center justify-content-center flex-column m">
          <Icon name={icon} />
          <ToolLabel>{name}</ToolLabel>
          </div>
      </ToolWrapper>
    )
  }
}