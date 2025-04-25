// src/components/Filters.jsx
import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleModeChange = (e) => {
    setFilters({ ...filters, mode: e.target.value });
  };

  const handleSpecialtyChange = (e) => {
    const value = e.target.value;
    const updated = filters.specialties.includes(value)
      ? filters.specialties.filter((s) => s !== value)
      : [...filters.specialties, value];

    setFilters({ ...filters, specialties: updated });
  };

  const handleSortChange = (e) => {
    setFilters({ ...filters, sort: e.target.value });
  };

  return (
    <div className="filters">
      <div data-testid="filter-header-moc"><strong>Mode of consultation</strong></div>
      <label><input data-testid="filter-video-consult" type="radio" name="mode" value="Video" checked={filters.mode === 'Video'} onChange={handleModeChange} /> Video Consultation</label>
      <label><input data-testid="filter-in-clinic" type="radio" name="mode" value="In-clinic" checked={filters.mode === 'In-clinic'} onChange={handleModeChange} /> In-clinic Consultation</label>
      
      <div data-testid="filter-header-speciality"><strong>Specialities</strong></div>
      {[
        'General Physician', 'Dentist', 'Dermatologist', 'Paediatrician', 'Gynaecologist', 'ENT',
        'Diabetologist', 'Cardiologist', 'Physiotherapist', 'Endocrinologist', 'Orthopaedic',
        'Ophthalmologist', 'Gastroenterologist', 'Pulmonologist', 'Psychiatrist', 'Urologist',
        'Dietitian/Nutritionist', 'Psychologist', 'Sexologist', 'Nephrologist', 'Neurologist',
        'Oncologist', 'Ayurveda', 'Homeopath'
      ].map((spec) => (
        <label key={spec}>
          <input
            data-testid={`filter-specialty-${spec.replaceAll('/', '-').replace(/\s+/g, '-')}`}
            type="checkbox"
            value={spec}
            checked={filters.specialties.includes(spec)}
            onChange={handleSpecialtyChange}
          />
          {spec}
        </label>
      ))}

      <div data-testid="filter-header-sort"><strong>Sort By</strong></div>
      <label><input data-testid="sort-fees" type="radio" name="sort" value="fees" checked={filters.sort === 'fees'} onChange={handleSortChange} /> Price: Low–High</label>
      <label><input data-testid="sort-experience" type="radio" name="sort" value="experience" checked={filters.sort === 'experience'} onChange={handleSortChange} /> Experience: Most First</label>
    </div>
  );
};

export default Filters;
