import React from 'react';

const Main = () => {
  return (
    <main className="main-content">
      <section className="text-block">
        <h1>Текст</h1>
      </section>

      <section className="photo-block">
        <div className="placeholder-image">
          <img src="https://www.5.ua/media/pictures/original/294300.jpg?t=1725796642" alt=""></img>
        </div>
      </section>

      <section className="text-block">
        <p>текст</p>
      </section>
    </main>
  );
};

export default Main;