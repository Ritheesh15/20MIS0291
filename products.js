import React, { useState } from 'react';
import './Artgallery.css';

function Artgallery2() {
  const [cards, setCards] = useState([
    {
      id: 1,
      company: 'AMZ',
      product: 'Laptop',
      cost: '80000Rs',
       isEditing: false, // Track editing state
    },
    {
        id: 2,
        company: 'FLP',
        product: 'Phone',
        cost: '40000Rs',
         isEditing: false, // Track editing state
    },
    {
      id: 3,
      company: 'SNP',
      product: 'TV',
      cost: '80000Rs',
       isEditing: false, // Track editing state editing state
    },
    {
      id: 4,
      
      company: 'AMZ',
      product: 'Laptop',
      cost: '60000Rs',
       isEditing: false, // Track editing stateTrack editing state
    },
  ]);

  const [newCard, setNewCard] = useState({
    company: '',
    product: '',
    cost: '',
    isEditing: false, // Track editing state for new card
  });

  const handleAddCard = () => {
    const newId = cards.length + 1;
    const card = {
      id: newId,
      ...newCard,
    };
    setCards([...cards, card]);
    setNewCard({ company: '', product: '', cost: '',isEditing: false });
  };

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleEditCard = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isEditing: true };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleSaveCard = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isEditing: false };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <div>
      <nav className="navbar bg-dark">
        <a href="/Artgallery2" className="navbar-brand text-light">TOP N PRODUCTS</a>
        <div className="navbar nav">
          <a href="/" className="nav-link " id="navlink">Sign out</a>
        </div>
      </nav>
      <div className='artback'>
        <p id="artpara1">Welcome to The Spot</p>
        <p id="artpara2">Explore Various Kinds of Products</p>
        <div className='container'>
          <div className="row" id="row1">
            {cards.map((card) => (
              <div className="col" id="col1" key={card.id}>
                <div className="card1 h-100">
                  <div className="card-body">
                    {card.isEditing ? (
                      <>
                        <h3 className="card-title">
                          <input
                            type="text"
                            value={card.title}
                            onChange={(e) => {
                              const updatedCards = cards.map((c) => {
                                if (c.id === card.id) {
                                  return { ...c, title: e.target.value };
                                }
                                return c;
                              });
                              setCards(updatedCards);
                            }}
                          />
                        </h3>
                        <p className="card-text">
                          Artist:
                          <input
                            type="text"
                            value={card.artist}
                            onChange={(e) => {
                              const updatedCards = cards.map((c) => {
                                if (c.id === card.id) {
                                  return { ...c, artist: e.target.value };
                                }
                                return c;
                              });
                              setCards(updatedCards);
                            }}
                          />
                        </p>
                        <p className="card-text">
                          Cost:
                          <input
                            type="text"
                            value={card.cost}
                            onChange={(e) => {
                              const updatedCards = cards.map((c) => {
                                if (c.id === card.id) {
                                  return { ...c, cost: e.target.value };
                                }
                                return c;
                              });
                              setCards(updatedCards);
                            }}
                          />
                        </p>
                        <p className="card-text">
                          <input
                            type="text"
                            value={card.imageUrl}
                            onChange={(e) => {
                              const updatedCards = cards.map((c) => {
                                if (c.id === card.id) {
                                  return { ...c, imageUrl: e.target.value };
                                }
                                return c;
                              });
                              setCards(updatedCards);
                            }}
                          />
                        </p>
                        <button className="btn btn-primary" onClick={() => handleSaveCard(card.id)}>
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-text">Artist: {card.artist}</p>
                        <p className="card-text">Cost: {card.cost}</p>
                        <img src={card.imageUrl} alt="" className="card-image" id="artimg" /> {/* Image component */}
                        <button
                          className="btn btn-danger" id="artbutn"
                          onClick={() => handleDeleteCard(card.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary" id="artbutn"
                          onClick={() => handleEditCard(card.id)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="col1">
              <div className="card1 h-100">
                <div className="card-body">
                  <h3 className="card-title">
                    <input
                      type="text"
                      value={newCard.title}
                      onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                      placeholder="Title"
                    />
                  </h3>
                  <p className="card-text">
                    Artist:
                    <input
                      type="text"
                      value={newCard.artist}
                      onChange={(e) => setNewCard({ ...newCard, artist: e.target.value })}
                      placeholder="Artist"
                    />
                  </p>
                  <p className="card-text">
                    Cost:
                    <input
                      type="text"
                      value={newCard.cost}
                      onChange={(e) => setNewCard({ ...newCard, cost: e.target.value })}
                      placeholder="Cost"
                    />
                  </p>
                  <p className="card-text">
                    Image URL:
                    <input
                      type="text"
                      value={newCard.imageUrl}
                      onChange={(e) => setNewCard({ ...newCard, imageUrl: e.target.value })}
                      placeholder="Image URL"
                    />
                  </p>
                  <button className="btn btn-primary" onClick={handleAddCard}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artgallery2;
