import * as React from 'react';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import "./Sliders.scss"

const Sliders  = () => {

    const minDistance = 1;
    const [value, setValue] = React.useState([8,14]);
    const [value2, setValue2] = React.useState([8,14]);
    const [value3, setValue3] = React.useState([8,14]);
    const [value4, setValue4] = React.useState([8,14]);
    const [value5, setValue5] = React.useState([8,14]);
    const [value6, setValue6] = React.useState([8,14]);
    const [value7, setValue7] = React.useState([8,14]);

    const [status,setStatus] = useState(true)
    const [status2,setStatus2] = useState(true)
    const [status3,setStatus3] = useState(true)
    const [status4,setStatus4] = useState(true)
    const [status5,setStatus5] = useState(true)
    const [status6,setStatus6] = useState(true)
    const [status7,setStatus7] = useState(true)

    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
    };
    const handleChange3 = (event) => {
        setChecked3(event.target.checked);
    };
    const handleChange4 = (event) => {
        setChecked4(event.target.checked);
    };
    const handleChange5 = (event) => {
        setChecked5(event.target.checked);
    };
    const handleChange6 = (event) => {
        setChecked6(event.target.checked);
    };
    const handleChange7 = (event) => {
        setChecked7(event.target.checked);
    };

    const ChangeMo = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };
    const ChangeTu = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        } else {
            setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        }
    };
    const ChangeWe = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue3([Math.min(newValue[0], value3[1] - minDistance), value3[1]]);
        } else {
            setValue3([value3[0], Math.max(newValue[1], value3[0] + minDistance)]);
        }
    };
    const ChangeTh = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue4([Math.min(newValue[0], value4[1] - minDistance), value4[1]]);
        } else {
            setValue4([value4[0], Math.max(newValue[1], value4[0] + minDistance)]);
        }
    };
    const ChangeFr = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue5([Math.min(newValue[0], value5[1] - minDistance), value5[1]]);
        } else {
            setValue5([value5[0], Math.max(newValue[1], value5[0] + minDistance)]);
        }
    };
    const ChangeSa = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue6([Math.min(newValue[0], value6[1] - minDistance), value6[1]]);
        } else {
            setValue6([value6[0], Math.max(newValue[1], value6[0] + minDistance)]);
        }
    };
    const ChangeSu = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue7([Math.min(newValue[0], value7[1] - minDistance), value7[1]]);
        } else {
            setValue7([value7[0], Math.max(newValue[1], value7[0] + minDistance)]);
        }
    };

    const statusChange = () => {
        setStatus(prevStatus => !prevStatus)
    }
    const statusChange2 = () => {
        setStatus2(prevStatus2 => !prevStatus2)
    }
    const statusChange3 = () => {
        setStatus3(prevStatus => !prevStatus)
    }
    const statusChange4 = () => {
        setStatus4(prevStatus => !prevStatus)
    }
    const statusChange5 = () => {
        setStatus5(prevStatus => !prevStatus)
    }
    const statusChange6 = () => {
        setStatus6(prevStatus => !prevStatus)
    }
    const statusChange7 = () => {
        setStatus7(prevStatus => !prevStatus)
    }


    const marks = [
        {
            value: 8,
            label: '8',
        },
        {
            value: 12,
            label:'12',
        },
        {
            value: 16,
            label: '16',
        },
        {
            value: 20,
            label: '20',
        },
    ];
    return (
        <div  className="container">
            <div className = "container__Days">
                <h3 className="container__Text">Mon</h3>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange}
                />
                <Slider
                    aria-label="Time"
                    valueLabelDisplay="on"
                    step={1}
                    onChange={ChangeMo}
                    value={value}
                    marks = {marks}
                    disableSwap
                    min={7}
                    max={22}
                    disabled={status}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            <div className = "container__Days">
                <h3 className="container__Text">Tue</h3>
                <Checkbox
                    checked={checked2}
                    onChange={handleChange2}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange2}
                />
                <Slider
                        aria-label="Time"
                        defaultValue={20}
                        valueLabelDisplay="on"
                        step={1}
                        onChange={ChangeTu}
                        value={value2}
                        marks = {marks}
                        disableSwap
                        min={7}
                        max={22}
                        disabled={status2}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            <div className = "container__Days">
                <h3 className="container__Text">Wed</h3>
                <Checkbox
                    checked={checked3}
                    onChange={handleChange3}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange3}
                />
                <Slider
                        aria-label="Time"
                        valueLabelDisplay="on"
                        step={1}
                        onChange={ChangeWe}
                        value={value3}
                        marks = {marks}
                        disableSwap
                        min={7}
                        max={22}
                        disabled={status3}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            <div className = "container__Days">
                <h3 className="container__Text">Thu</h3>
                <Checkbox
                    checked={checked4}
                    onChange={handleChange4}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange4}
                />
                <Slider
                        aria-label="Time"
                        valueLabelDisplay="on"
                        step={1}
                        onChange={ChangeTh}
                        value={value4}
                        marks = {marks}
                        disableSwap
                        min={7}
                        max={22}
                        disabled={status4}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            <div className = "container__Days">
                <h3 className="container__Text">Fri</h3>
                <Checkbox
                    checked={checked5}
                    onChange={handleChange5}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange5}
                />
                <Slider
                        aria-label="Time"
                        valueLabelDisplay="on"
                        step={1}
                        onChange={ChangeFr}
                        value={value5}
                        marks = {marks}
                        disableSwap
                        min={7}
                        max={22}
                        disabled={status5}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            <div className = "container__Days">
                <h3 className="container__Text">Sat</h3>
                <Checkbox
                    checked={checked6}
                    onChange={handleChange6}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange6}
                />
                <Slider className="container__slider"
                        aria-label="Time"
                        valueLabelDisplay="on"
                        step={1}
                        onChange={ChangeSa}
                        value={value6}
                        marks = {marks}
                        disableSwap
                        min={7}
                        max={22}
                        disabled={status6}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            <div className = "container__Days">
                <h3 className="container__Text">Sun</h3>
                <Checkbox className="container__checkbox"
                    checked={checked7}
                    onChange={handleChange7}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={statusChange7}
                />
                <Slider
                        aria-label="Time"
                        valueLabelDisplay="on"
                        step={1}
                        onChange={ChangeSu}
                        value={value7}
                        marks = {marks}
                        disableSwap
                        min={7}
                        max={22}
                        disabled={status7}
                        sx={{'& .MuiSlider-mark': {
                                height: "15px",
                            },
                            '& .MuiSlider-rail': {
                                height: "8px",

                            }}}
                />
            </div>
            </div>
        );
    }

export default Sliders;