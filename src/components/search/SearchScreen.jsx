import React, {useMemo} from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const [{search}, handleInputChange] = useForm({ search: q});

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch} >
            <input value={search} onChange={handleInputChange} type="text" placeholder="Find" className="form-control" name="search" autoComplete="off" />
            <button className="btn btn-block btn-outline-primary m-1" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

            { (q === '') && <div className="alert alert-info">Search a hero</div>}
            { (q !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger">There is not a hero with {q}</div>}

            {
              heroesFiltered.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
        </div>
      </div>
    </div>
  )
}
