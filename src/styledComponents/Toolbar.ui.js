import styled from 'styled-components';
import { getIconStyles, getIconByName } from './styleUtils';


const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: ${p => p.overlayYHidden ? 'auto' : 'none'};
  overflow-y: ${p => p.overlayYHidden ? 'hidden' : 'visible'};
  text-align: center;
  color: white;
  
  ::-webkit-scrollbar {
    height: 10px !important;
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border || '#3b4d54'};
    border-radius: 5px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: initial;
    padding: 0 10px;
  }
`;

const ToolWrapper = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  &:hover {
    background: #333333;
  }
`;

const ToolIcon = styled.div`
  height: 40px;
  font-size: 40px;
  
  ${props => getIconStyles(props)};
  ${props => getIconByName(props.name)};
`;

const ToolLabel = styled.div`
  font-family: 'Poppins', 'sans-serif';
  line-height: 18px;
  margin-top: 8px;
`;

const EffectsWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  
  ::-webkit-scrollbar {
    height: 10px !important;
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border || '#3b4d54'};
    border-radius: 5px;
  }
`;

const EffectWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  text-align: center;
  min-width: 90px;
  height: 90px;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  background: ${p => p.active ? p.theme.colors.secondaryBgHover : 'transparent'};
  
  &:hover {
    background: ${p => p.theme.colors.secondaryBgHover};
  }
`;

const EffectIcon = styled.div`
  background: url('${props => props.src}') 50% 50% / cover no-repeat;
  width: 55px;
  height: 55px;
  border-radius: 2px;
  overflow: hidden;
  display: inline-block;
`;

const EffectLabel = styled.div`
  text-transform: ${p => p.noCapitalStrs ? 'none' : 'capitalize'};
  height: 20px;
  line-height: 20px;
`;

export {
  Toolbar, ToolWrapper, ToolIcon, ToolLabel, EffectsWrapper, EffectWrapper, EffectIcon, EffectLabel
};
