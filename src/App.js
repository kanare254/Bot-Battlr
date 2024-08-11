import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import BotSpecs from './components/BotSpecs';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => {
        console.error('Error fetching bots:', error);
        setError('Failed to fetch bots.');
      });
  }, []);

  const handleEnlist = (bot) => {
    if (!armyBots.some(b => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmyBots(armyBots.filter(b => b.id !== bot.id));
  };

  const handleDelete = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setArmyBots(armyBots.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  const handleSort = (attribute) => {
    const sortedBots = [...bots].sort((a, b) => b[attribute] - a[attribute]);
    setBots(sortedBots);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  const handleViewBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  if (selectedBot) {
    return (
      <BotSpecs
        bot={selectedBot}
        onGoBack={handleGoBack}
        onEnlist={handleEnlist}
      />
    );
  }

  return (
    <div className="app">
      <SortBar onSort={handleSort} />
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <BotCollection bots={bots} onEnlist={handleViewBotSpecs} />
          <YourBotArmy
            armyBots={armyBots}
            onRelease={handleRelease}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}

export default App;
