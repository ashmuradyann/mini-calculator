import { FormInputLabel, Input, Group } from '../input/Input.jsx'

const Form = ({ formValues, data, sent, nameHandleChange, phoneNumberHandleChange, submit }) => {
    return <div className="contacts">
        <Group>
            <Input className="input-contact" type="text" value={formValues.name} onChange={nameHandleChange} />
            <FormInputLabel shrink={formValues.name.length}>Имя</FormInputLabel>
        </Group>
        <Group>
            <Input className="input-contact" type="text" value={formValues.number !== "+7" ? formValues.number : ""} onChange={phoneNumberHandleChange} />
            <FormInputLabel shrink={formValues.number.length}>Телефон</FormInputLabel>
        </Group>
        <span className="button" style={sent ? { backgroundColor: "#ba93df", pointerEvents: "none" } : data.name !== "" && formValues.number.length === 12 ? { backgroundColor: "#672aa0" } : { backgroundColor: "#ba93df", pointerEvents: "none" }} onClick={submit}>
            {sent ? <p className="button-p">Отправлено</p> : <p className="button-p">Отправить</p>}
        </span>
    </div>
}

export default Form