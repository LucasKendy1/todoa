import { useState } from 'react'
import styles from './TodoForm.module.css'
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        
        

        addTodo({
            text: value,
            category: category,
            isCompleted: false
        },
        window.location.reload()
        );

        setCategory("");
        setValue("");
        
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSelect = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className={styles.main}>
            <h2>Criar Tarefa</h2>
            <form onSubmit={submit} className={styles.form}>
                <input 
                    type="text" 
                    placeholder='Digite o título'
                    onChange={handleChange}
                    value={value}
                    className={styles.input}
                />

                <select 
                    onChange={handleSelect}
                    value={category}
                    className={styles.input}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Faculdade">Faculdade</option>
                </select>
                <button type='submit'
                className={styles.button}
                >Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm;
