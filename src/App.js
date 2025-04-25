import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import DoctorCard from './components/DoctorCard';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import { getQueryParams, updateURLParams } from './utils/helpers';
import './App.css';

const API_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

const Main = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ mode: '', specialties: [], sort: '' });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    const params = getQueryParams(location.search);
    setSearchTerm(params.q || '');
    setFilters({
      mode: params.mode || '',
      specialties: params.specialties ? params.specialties.split(',') : [],
      sort: params.sort || '',
    });
  }, [location.search]);

  useEffect(() => {
    let result = [...doctors];

    if (searchTerm) {
      result = result.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.mode) {
      result = result.filter((doc) =>
        doc.mode.toLowerCase().includes(filters.mode.toLowerCase())
      );
    }

    if (filters.specialties.length > 0) {
      result = result.filter((doc) =>
        filters.specialties.some((spec) => doc.speciality.includes(spec))
      );
    }

    if (filters.sort === 'fees') {
      result.sort((a, b) => a.fees - b.fees);
    } else if (filters.sort === 'experience') {
      result.sort((a, b) => b.experience - a.experience);
    }

    setFilteredDocs(result);
    updateURLParams(
      {
        q: searchTerm,
        mode: filters.mode,
        specialties: filters.specialties.join(','),
        sort: filters.sort,
      },
      navigate
    );
  }, [doctors, searchTerm, filters, navigate]);

  const suggestions = searchTerm
    ? doctors.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSearch = (value, selectSuggestion = false) => {
    setSearchTerm(value);
    if (selectSuggestion) {
      setFilters((prev) => ({ ...prev }));
    }
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} suggestions={suggestions} />
      <div className="main">
        <Filters filters={filters} setFilters={setFilters} />
        <div className="results">
          {filteredDocs.map((doc, i) => (
            <DoctorCard key={i} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;
