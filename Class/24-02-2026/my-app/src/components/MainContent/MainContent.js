import { Card } from "../Card/Card";

export const Main = () => {
  const cardsData = [
    { id: 1, title: "Карточка 1", text: "Простой текст в карточке." },
    { id: 2, title: "Карточка 2", text: "Компонент можно переиспользовать." },
    { id: 3, title: "Карточка 3", text: "JSX упрощает структуру." },
    { id: 4, title: "Карточка 4", text: "Всё без useState." },
  ];

  return (
    <main className="main">
      <h2>Главная область</h2>
      <p>Макет страницы на React + JSX.</p>
      <div className="cards">
        {cardsData.map(card => (
          <Card key={card.id} title={card.title}>
            {card.text}
          </Card>
        ))}
      </div>
    </main>
  );
};