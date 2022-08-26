import './info.scss'

const Info = ({ lowest, highest }) => {
    return (
        <div className="info">
            <p>Прогноз результатов:</p>
            <p>1000 показов ~ от 119,2 ₽</p>
            <p>Цена 1 клика ~ 23,84 - 59,6 ₽</p>
            <p>Кликов за ваш бюджет ~ {lowest} - {highest} ₽</p>

            <p>Прогноз приблизительный, реальные результаты зависят от сферы, параметров размещения, спроса и вашего продукта</p>
        </div>
    )
}

export default Info