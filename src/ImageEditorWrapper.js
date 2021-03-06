import React, { Component } from 'react';
import ImageEditor from './ImageEditor';
import { Container } from './styledComponents';
import { ThemeProvider } from 'styled-components';
import { Modal } from './components/Modal';
import { CLOUDIMAGE_OPERATIONS, TOOLS, UPLOADER, ON_CLOSE_STATUSES, STANDARD_FONTS, CONTAINER_SELECTOR, EDITOR_ITEMS } from './config';
import './assets/fonts/filerobot-font.css';
import translations from './assets/i18n';
import dark from './assets/theme/dark';
import light from './assets/theme/light';
import { isServerSide } from './utils/is-server-side';


class ImageEditorWrapper extends Component {
  _isMounted = false;

  constructor({ src1 = '', config = {} }) {
    super();

    config.translations = config.translations || {};
    config.language = (config.translations[config.language] || translations[config.language]) ? config.language : 'en';
    config.theme = config.theme || {};
    config.theme.colors = config.theme.colors || {};
    config.theme.fonts = config.theme.fonts || STANDARD_FONTS;
    config.colorScheme = config.colorScheme || 'dark';
    config.platform = config.platform || 'filerobot';
    const isCustomColorScheme = typeof config.colorScheme === 'object';

    this.state = {
      src1,
      config: this.processConfig(config),
      t: {
        ...translations[config.language],
        ...config.translations[config.language]
      },
      colorScheme: isCustomColorScheme ? 'custom' : (config.colorScheme || 'dark'),
      theme: {
        colors: {
          ...(isCustomColorScheme
              ? { colors: config.colorScheme }
              : config.colorScheme === 'light'
                ? light
                : dark
            ).colors,
          ...config.theme.colors
        },
        fonts: config.theme.fonts
      }
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.show !== prevProps.show) {
  //     if (this.props.show) { this.open(this.props.src1); } else { this.close(); }
  //   }
  // }

  processConfig = (config) => {
    const processWithCloudService = config.processWithCloudimage;
    const tools = config.tools || (processWithCloudService ? CLOUDIMAGE_OPERATIONS : TOOLS);
    const editorItems =  config.editorItems || (processWithCloudService ? CLOUDIMAGE_OPERATIONS : EDITOR_ITEMS);

    return {
      ...UPLOADER,
      processWithCloudService,
      processWithFilerobot: !!config.filerobot,
      processWithCloudimage: !!config.cloudimage,
      ...config,
      tools: processWithCloudService ? tools.filter(tool => CLOUDIMAGE_OPERATIONS.indexOf(tool) > -1) : tools,
      editorItems:  editorItems
    };
  }

  open = (src1) => {
    const { onOpen } = this.props;

    if (this._isMounted) {
      this.setState({ isVisible: true, src1 }, () => {
        if (onOpen) onOpen();
      });
    }
  }

  close = (closingStatus = ON_CLOSE_STATUSES.CLOSE_BTN_CLICKED) => {
    const { onClose } = this.props;
    const status = typeof closingStatus === 'object' ? ON_CLOSE_STATUSES.CLOSE_BTN_CLICKED : closingStatus;

    if (this._isMounted) {
      this.setState({ isVisible: false }, () => {
        if (onClose) onClose({ status });
      });
    }
  }

  render() {
    const { isVisible, src1, config, t, theme } = this.state;
    const { onComplete = () => {}, onBeforeComplete, closeOnLoad } = this.props;
    const { showInModal = true } = config;

    // if(src1 instanceof Blob && config.processWithCloudimage) return null;

    const Inner = (
      <Container>
        <ImageEditor
          src1={src1}
          config={config}
          onComplete={onComplete}
          onBeforeComplete={onBeforeComplete}
          onClose={this.close}
          closeOnLoad={closeOnLoad}
          t={t}
        />
      </Container>
    );

    return (
      <ThemeProvider theme={{ ...theme }}>
        {showInModal
        ? <Modal
            noBorder
            fullScreen={'lg'}
            isHideCloseBtn={true}
            onClose={this.close}
            configModalId={config.elementId}
          >
            {Inner}
          </Modal>
        : <div
            className={CONTAINER_SELECTOR}
            id={CONTAINER_SELECTOR}
            style={{ width: '100%', height: '100%' }}
          >
            {Inner}
          </div>
        }
      </ThemeProvider>
    );
  }
}

export default ImageEditorWrapper;
