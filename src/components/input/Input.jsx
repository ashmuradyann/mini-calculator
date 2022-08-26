import styled, { css } from 'styled-components'

const subColor = 'gray'
const mainColor = '#672aa0'

const shrinkLabelStyles = css`
  top: 5px;
  font-size: 12px;
  color: ${mainColor};
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 30px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid ${subColor};
  margin: 15px 0;

  &:focus {
    outline: none;
    border-bottom: 2px solid #672aa0;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`

export const Group = styled.div`
  position: relative;
`