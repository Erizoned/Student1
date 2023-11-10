import React, { useState } from "react";

function Sprav() {
  const [professionFilter, setProfessionFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("name");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [skokaLud, setSkokaLud] = useState()
  const people = [
    { id: 0, name: 'Антон', profession: 'Цыган' },
    { id: 1, name: 'Лера', profession: 'патологоанатом' },
    { id: 2, name: 'Тагир', profession: 'Тагир' },
    { id: 3, name: 'Не тагир', profession: 'Тагир' },
    { id: 4, name: 'Адильхан', profession: 'Да' },
  ];

  const skoka = () => {
    const prof = document.getElementById('hzhz').value;
    const votskoka = people.filter(person => person.profession === prof).length;
    setSkokaLud(votskoka);
  };

  const profff = () => {
    const filtered = people.filter(person =>
      person.profession.toLowerCase() === professionFilter.toLowerCase()
    );
    setFilteredPeople(filtered);
  };

  const sortPeople = (a, b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "profession") {
      return a.profession.localeCompare(b.profession);
    } else {
      return 0;
    }
  };

  const sortedPeople = filteredPeople.length > 0 ? filteredPeople.sort(sortPeople) : people.sort(sortPeople);

  const getImageUrl = (person) => {
    return `./${person.name.toLowerCase()}.jpg`;
  };
  const Stylee = {
    border: '2px',
    borderStyle: 'solid',
    backgroundColor: 'aquamarine'
  }
  return (
    <div>
        <hr></hr>
        <h1>5 задание</h1>
        <label>По какой профессии отфильтровать?: </label>
      <input
        type="text"
        id="prof"
        name="proff"
        onChange={(e) => setProfessionFilter(e.target.value)}
      />
      <button onClick={profff}>Подтвердить</button>
      <br />
      <label>Выберите порядок сортировки:</label>
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="name">По имени</option>
        <option value="profession">По профессии</option>
      </select>
      <br />
      {sortedPeople.map(person => (
        <div key={person.id} style={Stylee}>
          <img src={getImageUrl(person)} alt={person.name} />
          <p>{person.name}, {person.profession}</p>
        </div>
      ))}
    <label htmlFor="s">Сколько людей с профессией:</label>
    <input type="text" name="hz" id="hzhz" />
    <button onClick={() => skoka()}>Проверить</button>
    <div>Количество людей с данной профессией: {skokaLud}</div>
    </div>
  );
}

export default Sprav;
