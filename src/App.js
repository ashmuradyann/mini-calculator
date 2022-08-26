import { useState, useEffect } from 'react'

import { FormInputLabel, Input, Group } from './components/input/Input.jsx'

import Slider from './components/range-slider/Slider'

import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'

import './app.scss'

const App = () => {

  const [data, setData] = useState({
    image: image1,
    value: 5000,
    text: "Ничего не выйдет"
  })

  const [showForm, setShowForm] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (data.value > 80000) {
      setData({ ...data, value: 80000 })
    }
  }, [data.value])

  const handleChange = (e) => {
    let value = e.target.value.replaceAll(" ", "")

    if (value.length <= 5) {
      if (value >= 0 && value <= 8000) {
        setData({
          image: image1,
          value: value,
          text: "Ничего не выйдет"
        })
      } else if (value > 8000 && value <= 16000) {
        setData({
          image: image2,
          value: value,
          text: "Мы можем что-то придумать, но не обещаем"
        })
      } else if (value > 16000 && value <= 25000) {
        setData({
          image: image3,
          value: value,
          text: "Хороший бюджет для пробных показов и проверки гипотез"
        })
      } else if (value > 25000) {
        setData({
          image: image4,
          value: value,
          text: "Давайте обсудим"
        })
      }
    }
  }

  const [formValues, setFormValues] = useState({
    name: "",
    number: ""
  })

  const nameHandleChange = (e) => {
    if (e.target.value.length >= 0) {
      setFormValues({ ...formValues, name: e.target.value })
    }
  }

  const phoneNumberHandleChange = (e) => {
    if (e.target.value.length !== 13) {
      setFormValues({ ...formValues, number: "+7" + e.target.value.replaceAll("+7", "").replace(/[^+\d]/g, '') })
    }
    if (e.target.value === "+7") setFormValues({ ...formValues, number: "" })
  }

  const submit = () => {
    setSent(true)
    console.log({
      name: formValues.name,
      number: formValues.number,
      count: data.value + "₽"
    })
  }

  return (
    <div className="main" style={showForm ? { justifyContent: "flex-start" } : { justifyContent: "center" }}>
      <div className="container">
        <img src={data.image} alt={data.image} />
        <div>
          <input className="input-count" type="text" style={data.value <= 0 ? { borderBottom: "3px solid #672aa0" } : null} value={data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} onChange={handleChange} onBlur={handleChange} />
          <p>₽</p>
        </div>
        <Slider step={100} min={0} max={80000} value={data.value !== "" ? data.value : 0} onChange={handleChange} />
        <div>
          <h3>{data.text}</h3>
        </div>
        <div>
          <span className="button" style={showForm ? { opacity: 0, pointerEvents: "none" } : null} onClick={() => setShowForm(true)}>
            <p>Запросить КП</p>
          </span>
        </div>
        {showForm && <div className="contacts">
          <Group>
            <Input className="input-contact" type="text" value={formValues.name} onChange={nameHandleChange} />
            <FormInputLabel shrink={formValues.name.length}>Имя</FormInputLabel>
          </Group>
          <Group>
            <Input className="input-contact" type="text" value={formValues.number !== "+7" ? formValues.number : ""} onChange={phoneNumberHandleChange} />
            <FormInputLabel shrink={formValues.number.length}>Телефон</FormInputLabel>
          </Group>
          <span className="button" style={sent ? {backgroundColor: "#ba93df", pointerEvents: "none"} : data.name !== "" && formValues.number.length === 12 ? {backgroundColor: "#672aa0"} : {backgroundColor: "#ba93df", pointerEvents: "none"}} onClick={submit}>
            {sent ? <p>Отправлено</p> : <p>Отправить</p>}
          </span>
        </div>}
      </div>

    </div>
  )
}

export default App
