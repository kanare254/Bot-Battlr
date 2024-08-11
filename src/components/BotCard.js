import React from 'react';
import './BotCard.css';

function BotCard({ bot, onEnlist }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default BotCard;
