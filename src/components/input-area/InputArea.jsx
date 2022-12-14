import Slider from '../range-slider/Slider'

const InputArea = ({ data, handleChange }) => {
    return (
        <>
            <div className="input-area">
                {data.value >= 190000 && <p className="count-p">От</p>}
                <input className="input-count" type="text" style={data.value <= 0 ? { borderBottom: "3px solid #672aa0" } : null} value={data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} onChange={handleChange} onBlur={handleChange} />
                <p className="count-p">₽{data.value >= 190000 && "/мес"}</p>
            </div>
            <Slider step={100} min={0} max={190000} value={data.value !== "" ? data.value : 0} onChange={handleChange} />
        </>
    )
}

export default InputArea