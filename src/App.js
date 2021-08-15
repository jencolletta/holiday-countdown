import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [allHolidays, setHolidays] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{allHolidays.length} Upcoming Holidays</h3>
        <List allHolidays={allHolidays} />
        <button onClick={() => setHolidays([])}>clear all</button>
      </section>
    </main>
  )
}

export default App