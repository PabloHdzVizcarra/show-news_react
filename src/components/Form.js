import React from 'react'
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'

const Form = ({ setCategory }) => {

  // create options/categorys
  const OPTIONS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'healt', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnologia'},
  ];


  const searchNews = event => {
    event.preventDefault();

    setCategory(category);
  }

  // use custom hook
  const [ category, SelectNews ] = useSelect('general', OPTIONS);

  return (
    <div className={`row ${styles.serach}`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={searchNews}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNews />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
}

export default Form
