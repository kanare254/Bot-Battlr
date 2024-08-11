# Bot Battlr

Welcome to Bot Battlr, the ultimate platform for building and managing your very own Bot Army! In this project, I'll be creating a React application that lets users browse through a list of robots, view detailed information about each one, and enlist bots into their army.

Implimentation:

BotCollection
In the BotCollection component, I'll be responsible for:

Rendering profiles of all available bots: This means displaying a list or grid of all the robots fetched from the backend. Each bot will be shown with relevant details, allowing users to see and interact with the available options.

YourBotArmy
In the YourBotArmy component, I'll implement the following features:

Adding an individual bot to your army: Users can click on a bot from the BotCollection, and it will be added to the YourBotArmy component. This allows users to build their own custom army of bots.

Ensuring the bot remains in both collections: Once a bot is added to the army, it should still appear in the BotCollection. This ensures that users can continue to view and potentially enlist other bots.

Releasing a bot from YourBotArmy: Users should be able to click on a bot in the YourBotArmy to remove it. The bot will disappear from the army but will remain in the BotCollection.

Discharging a bot: For a more permanent action, users can "discharge" button to discharge a bot. This action will remove the bot from both the YourBotArmy and the backend server, effectively deleting it from the application entirely.

