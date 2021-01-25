import React, { Component } from 'react';
import Icon from '../../icon/Icon';
import PropTypes from 'prop-types';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiButton from '@material-ui/core/Button';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiNativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ToolbarOption.css';

import MuiIconButton from '@material-ui/core/IconButton';

const Accordion = withStyles({
    root: {
        border: 'none',
        boxShadow: 'none',
        fontFamily: "'Poppins','sans-serif'!important",
        background: 'transparent',
        color: '#bbb',
        fontSize: '12px',
        transition: 'all 0.5s ease',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: '0',
            background: '#222222'
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1,
        minHeight: 30,
        padding: '0 10px',
        '&$expanded': {
            minHeight: 30,
            color: 'white'
        },

    },
    content: {
        alignItems: 'center',
        margin: '8px 0',
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        background: '#222222',
        borderRadius: '0 0 5px 5px',
        color: '#bbb',
        padding: '0 10px'
    },
}))(MuiAccordionDetails);

const Typography = withStyles({
    root: {
        fontSize: '12px'
    },

    body1: {
        fontFamily: "'Poppins', 'sans-serif'"
    }
})(MuiTypography);


const Button = withStyles({
    root: {
        //   padding: '0'
    },

    label: {
        fontSize: '12px',
        fontFamily: "'Poppins','sans-serif'"
    },
    startIcon: {
        marginLeft: '0px',
        marginRight: '5px'
    }
})(MuiButton);

const IconButton = withStyles({
    root: {
        padding: '8px'

    },
    label: {
        color: '#a1a1a1',
        '&:hover': {
            color: 'white'
        }
    }
})(MuiIconButton);

const NativeSelect = withStyles({
    root: {
        color: '#bbb',
        fontSize: '12px',
        height: 'auto'
    },
    select: {
        lineHeight: '15px',
        paddingLeft: '8px'
    },
    icon: {
        color: '#bbb'
    }
})(MuiNativeSelect)

const useStyles = makeStyles((theme) => ({

    column2: {
        display: 'flex',
        justifyContent: 'center'
    },
    saveCancel: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        marginBottom: '8px'
    },
    iconMargin: {
        marginRight: '8px',
        fontSize: '18px'
    },
    inputOutline: {
        border: '1px solid #353535',
        lineHeight: '20px',
        width: '100%'
    },
    numberType: {
        marginRight: '10px'
    },
    rotationGroup: {
        display: 'flex',
        marginBottom: '5px'
    },
    rotateOption: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputValue: {
        width: 20,
        margin: '0px 10px',
        color: '#a1a1a1',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center'
    },
    inputValBox: {
        display: 'flex',
        alignItems: 'center'
    },
    iconHover: {
        cursor: 'pointer',
        '&:hover': {
            color: 'white'
        },
    }
}));


function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

function Edit(props) {


    const { updateState, apply, activeTab, handleSave, setCropping, initialZoom, cropDetails, original, t, config, onRotate, correctionDegree, flipX, flipY } = props;
    const { width, height } = cropDetails;
    const applyAndSave = () => { apply(); };
    // original: { width = 1, height = 1 },
    const { cropPresets = [] } = config
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        aspectRatio: NaN,
        activeRatio: 'custom',
        name: '',
        strengthValue: 20,
        setScreenmode: []
    });

    const changeWidth = (event) => {
        window.scaleflexPlugins.cropperjs.setCropBoxData({ width: +event.target.value / initialZoom / window.scaleflexPlugins.zoom });
    }

    const changeHeight = (event) => {

        window.scaleflexPlugins.cropperjs.setCropBoxData({ height: +event.target.value / initialZoom / window.scaleflexPlugins.zoom });
    }

    const changeRatio = (box) => {

        let value;

        if (box.name === 'custom' && !aspectRatio) {
            setState({ activeRatio: box.name });
            return;
        }

        value = box.name === 'original' ? 1 : box.value;
        window.scaleflexPlugins.cropperjs.setAspectRatio(value);
        setState({ activeRatio: box.name, aspectRatio: value });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });

        switch (event.target.value) {
            case "0":
                changeRatio(cropPresets[0])
                break;

            case "10":
                changeRatio(cropPresets[1])
                break;

            case "20":
                changeRatio(cropPresets[6])
                break;

            case "30":
                changeRatio(cropPresets[7])
                break;
        }
    };

    const handleStrengthSliderChange = (event, newValue) => {
        // setValue(newValue);
        setState({
            ...state,
            strengthValue: newValue
        })

        props.onRotate(0, parseFloat(newValue), flipX, flipY);

    }

    const plusStrengthVal = () => {
        setState({
            ...state,
            strengthValue: parseInt(state.strengthValue) + 1
        });
    };

    const minusStrengthVal = () => {
        setState({
            ...state,
            strengthValue: parseInt(state.strengthValue) - 1
        })
    };

    const [expanded, setExpanded] = React.useState('');

    const handleAccordionChange = (panel) => (event, newPanel) => {
        setExpanded(newPanel ? panel : false);
    }



    //rotate
    const leftRotate = () => {
        onRotate(-90, parseInt(correctionDegree), flipX, flipY);
    }

    const rightRotate = () => {
        onRotate(90, parseInt(correctionDegree), flipX, flipY);
    }

    const onFlip = (val) => {
        const nextFlipXValue = val === 'x' ? !flipX : flipX;
        const nextFlipYValue = val === 'y' ? !flipY : flipY;

        props.onRotate(0, correctionDegree, nextFlipXValue, nextFlipYValue);
    }
    //rotate finish

    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')} onClick={() => setCropping()}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="accordionSummary"
                >
                    <Typography className={classes.iconMargin}><i className="icon-crop"></i></Typography>
                    <Typography>Crop</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="naviselect-box">
                        <NativeSelect
                            value={state.age}
                            onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-helper',
                            }}
                            className={classes.inputOutline}
                        >
                            <option value={0}>Original Size</option>
                            <option value={10}>Square 1:1</option>
                            <option value={20}>Pasport Photo 4:6</option>
                            <option value={30}>Video thumb 16:9</option>
                        </NativeSelect>
                        <div className="d-flex flex-row align-items-center">
                            <TextField
                                id="sizeValue"
                                label="Width(Px)"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={Math.round(cropDetails.width * initialZoom)}
                                margin="normal"
                                style={{ color: '#a1a1a1' }}
                                className={classes.numberType}
                                onChange={changeWidth}
                            />
                            <TextField
                                id="sizeValue"
                                label="Height(Px)"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={Math.round(cropDetails.height * initialZoom)}
                                margin="normal"
                                onChange={changeHeight}
                            />
                        </div>
                        <div className={classes.saveCancel}>
                            <Button
                                color="secondary"
                                startIcon={<Icon name="cancel1" />}
                            >
                                Cancel
                        </Button>
                            <Button
                                color="primary"
                                startIcon={<Icon name="check-circle"
                                    className="saveClass" />}
                                onClick={() => { apply(); }}
                            >
                                Save
                        </Button>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="accordionSummary"
                >
                    <Typography className={classes.iconMargin}><i className="icon-rotate-cw"></i></Typography>
                    <Typography>Rotate</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rotateOption}>
                    <div className={classes.rotationGroup}>
                        <IconButton color="" aria-label="rotate left" onClick={leftRotate}>
                            <Icon name="rotate-ccw" />
                        </IconButton>
                        <IconButton color="" aria-label="rotate right" onClick={rightRotate}>
                            <Icon name="rotate-cw" />
                        </IconButton>
                        <IconButton color="" aria-label="Flip Horizontal" onClick={() => { onFlip('x'); }}>
                            <Icon name="icon-swap_horizontal_circle" />
                        </IconButton>
                        <IconButton color="" aria-label="Flip Vertical" onClick={() => { onFlip('y'); }}>
                            <Icon name="icon-swap_vertical_circle" />
                        </IconButton>
                    </div>
                    <Typography>
                        <div className={classes.inputBox}>
                            <span>Strength</span>
                            <div className={classes.inputValBox}>

                                <Icon name="plus" className={classes.iconHover} onClick={() => plusStrengthVal()} />
                                <Icon name="minus" className={classes.iconHover} onClick={() => minusStrengthVal()} />

                                <Input
                                    className={classes.inputValue}
                                    value={state.strengthValue}
                                    inputProps={{
                                        step: 10,
                                        min: -90,
                                        max: 90,
                                        type: 'text',
                                        'aria-labelledby': 'input strength value',
                                    }}
                                />
                            </div>
                        </div>

                    </Typography>
                    <div style={{ padding: '0 5px' }}>
                        <Slider
                            ValueLabelComponent={ValueLabelComponent}
                            value={state.strengthValue}
                            onChange={handleStrengthSliderChange}
                            aria-label="input strength value"
                            defaultValue={0}
                            step={1}
                            min={-90}
                            max={90}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Edit;
