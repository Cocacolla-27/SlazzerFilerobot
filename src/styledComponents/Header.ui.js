import styled from 'styled-components';
import { Button } from './Button';
import { getHoverColor } from './styleUtils';

const HeaderWrapper = styled.div`
  background: ${props => props.theme.colors.secondaryBg};
`;

const HeaderTop = styled.div`
  line-height: 35px;
  background: ${props => props.theme.colors.primaryBg};
  padding: 0px 0;
  height: 50px
`;

const HeaderImgLogo = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  min-width: 62px;
  height: 50px;
  line-height: 30px;
  display: flex;
  align-items: center;
  left: 10px;
  top: 0;
`;

const Title = styled.div`
  text-align: center;
  text-transform: ${props => props.noCapitalStrs ? 'none' : 'capitalize'};
  color: ${props => props.theme.colors.text};
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 8px;
`;

const CancelBtn = styled(Button)`
  background: ${props => props.theme.colors.primaryBg};
  border-color: ${props => props.theme.colors.primaryBg};
  color: ${props => props.theme.colors.text};
  text-transform: ${props => props.noCapitalStrs ? 'none' : 'capitalize'};
  min-width: 62px;
  height: 30px;
  margin-right: 8px;
  border: 0;

  &:hover {
    background: ${props => getHoverColor(props.theme.colors.primaryBg)};
    border-color: ${props => props.theme.colors.primaryBg};
    color: ${props => props.theme.colors.text};  
  }
`;

const ToolbarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: ${props => props.theme.colors.secondaryBg};
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: initial;
  }
`;

export { HeaderWrapper, HeaderTop, Title, ButtonsWrapper, ToolbarWrapper, CancelBtn, HeaderImgLogo };
