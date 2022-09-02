import { useState, useEffect } from 'react'

import InputArea from './components/input-area/InputArea.jsx'
import Info from './components/info/Info.jsx'
import Form from './components/form/Form.jsx'

import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'

import './app.scss'

const App = () => {

  const [data, setData] = useState({
    image: image1,
    value: 5000,
    text: "Ничего не выйдет",
    lowest: 0,
    highest: 0
  })

  const [formValues, setFormValues] = useState({
    name: "",
    number: ""
  })

  const [showForm, setShowForm] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = () => {
    setSent(true)
    console.log({
      name: formValues.name,
      number: formValues.number,
      count: data.value + "₽",
      lowest: data.lowest,
      highest: data.highest
    })
  }

  useEffect(() => {
    if (data.value > 190000) {
      setData({ ...data, value: 190000 })
    }
  }, [data.value])

  const handleChange = (e) => {
    let value = e.target.value.replaceAll(" ", "")
    if (value.startsWith("0") && value > 0) value = value.replace("0", "")

    if (value.length <= 6) {
      if (value >= 0 && value <= 8000) {
        setData({
          image: image1,
          value: value,
          text: "Ничего не выйдет",
          lowest: 0,
          highest: 0
        })
      } else if (value > 8000 && value <= 16000) {
        setData({
          image: image2,
          value: value,
          text: "Мы можем что-то придумать, но не обещаем",
          lowest: Math.round((value - 4500) / 23.84),
          highest: Math.round((value - 4500) / 59.6)
        })
      } else if (value > 16000 && value <= 25000) {
        setData({
          image: image3,
          value: value,
          text: "Хороший бюджет для пробных показов и проверки гипотез",
          lowest: Math.round((value - 8000) / 23.84),
          highest: Math.round((value - 8000) / 59.6)
        })
      } else if (value > 25000 && value < 190000) {
        setData({
          image: image4,
          value: value,
          text: "Давайте обсудим",
          lowest: Math.round((value - 8000 + (value - value * 4 / 100)) / 23.84),
          highest: Math.round((value - 8000 + (value - value * 4 / 100)) / 59.6)
        })
      } else if (value >= 190000) {
        setData({
          image: image5,
          value: value,
          text: "Отличный бюджет! Как насчет официальной рекламы Telegram?",
          lowest: Math.round((value - 8000 + (value - value * 4 / 100)) / 23.84),
          highest: Math.round((value - 8000 + (value - value * 4 / 100)) / 59.6)
        })
      }
    }
  }

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

  return (
    <div className="main" style={showForm ? { justifyContent: "flex-start" } : { justifyContent: "center" }}>
      <div className="container">
        <img src={data.image} alt={data.image} />
        <InputArea data={data} handleChange={handleChange} />
        <div>
          <h3>{data.text}</h3>
        </div>
        <Info lowest={data.lowest} highest={data.highest} />
        <div>
          <span className="button" style={showForm ? { opacity: 0, pointerEvents: "none" } : null} onClick={() => setShowForm(true)}>
            <p>Запросить КП</p>
          </span>
        </div>
        {showForm && <Form
          submit={submit}
          sent={sent}
          formValues={formValues}
          data={data}
          nameHandleChange={nameHandleChange}
          phoneNumberHandleChange={phoneNumberHandleChange} />}
      </div>

    </div>
  )
}

export default App
