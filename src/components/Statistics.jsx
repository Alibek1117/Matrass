import React from 'react'
import { useFetch } from '../hook/useFetch';

function Statistics() {
    const { data, loader, error } = useFetch(
      "http://localhost:1212/api/statistics",
    );
    // console.log(data);
  return (
    // {loader  <h2>Loading...</h2>}
    <>
      {loader && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {
        <section className="statistics container">
          <div className="stat__card">
            <div className="stat__number">{data && data.experience}</div>
            <p className="number__subtitle">yillik tajriba</p>
          </div>
          <div className="stat__card">
            <div className="stat__number">{data && data.clients}</div>
            <p className="number__subtitle">mamnun mijozlar</p>
          </div>
          <div className="stat__card">
            <div className="stat__number">{data && data.warranty}</div>
            <p className="number__subtitle">yillik kafolat</p>
          </div>
          <div className="stat__card">
            <div className="stat__number">{data && data.delivery}</div>
            <p className="number__subtitle">kunda yetkazish</p>
          </div>
        </section>
      }
    </>
  );
}

export default Statistics