import styled from 'styled-components'

const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 3px;
  border-radius: 5px;
  user-select: none;
  background: ${(props) =>
    `linear-gradient(to right, #682e9d 0 ${props.value / props.max * 100 - props.min / props.max * (props.value > 170000 ? 37 : 63)}%, #c4c3c3 ${props.value / props.max * 100 - props.min / props.max * (props.value > 170000 ? 37 : 63)}% 100%)`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #682e9d;
    border-radius: 50%;
  }

  ::-moz-range-thumb {
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #682e9d;
    border-radius: 50%;
  }
`

export default Slider