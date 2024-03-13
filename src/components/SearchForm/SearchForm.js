import css from './SearchForm.module.css';

function SearchForm({ formSubmit }) {
  return (
    <form className={css.search} onSubmit={formSubmit}>
      <label>
        <input
          className={css.searchField}
          type="text"
          placeholder="start searching"
          autoComplete="off"
        />
      </label>
      <button className={css.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
