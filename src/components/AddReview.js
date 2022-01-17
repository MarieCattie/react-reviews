import React, {useState} from "react";
function AddReview({onAddition}) {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    function submitHandler(event) {
        event.preventDefault();
        //trim - убирает пробелы из строки/проверка на пустоту поля
        if(value.trim() && name.trim()) {
            onAddition(name, value);
            setValue('');
            setName('');
        }
    }
    return ( 
        <form onSubmit={submitHandler} className="add-review">
            <h1 className="title add-review__title">Добавить отзыв</h1>
            <div>
                <label>
                <p className="add-review__field">Ваше имя</p>
                <input value={name} onChange={event => setName(event.target.value)} placeholder="ФИО или ваше секретное прозвище" className="add-review__input" />    
                </label>
                <label>
                <p className="add-review__field">Ваш отзыв</p>
                <textarea value={value} onChange={event => setValue(event.target.value)} placeholder="Напишите отзыв" className="add-review__input add-review__area"></textarea>    
                </label>
                <button type="submit" className="btn add-review__btn">Добавить отзыв</button>                
            </div>

        </form>
     );
}
export default AddReview;