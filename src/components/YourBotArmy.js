import React from 'react';
import './YourBotArmy.css';

function YourBotArmy({ armyBots, onRelease, onDelete }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {armyBots.map(bot => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => onRelease(bot)}>Release</button>
          <button onClick={() => onDelete(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

