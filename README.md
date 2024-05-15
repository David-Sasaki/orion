# Orion Game

Orion is a two-player game where players take turns placing stones on a game board. This project implements a web-based version of the game along with logging functionality to track the gameplay.

## Features

- Two-player mode
- Turn-based gameplay
- Logging of player actions
- Detailed log views
- Dynamic routing for log pages

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/David-Sasaki/orion.git
   ```

2. Install dependencies:

   ```bash
   cd orion
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to [http://localhost:3000/game](http://localhost:3000/game) to play the game.

3. After the game ends, click on the "View Logs" button to see detailed logs of the gameplay.

4. In the log view, you can switch between tabs to view logs for all actions, Player A's actions, or Player B's actions.

5. To return to the game, click on the "Back to game" button.

## File Structure

- `/src`: Contains the source code for the Orion game.
- `/public`: Contains static assets and HTML templates.
- `/logs`: Stores log files generated during gameplay.

## Technologies Used

- React.js
- React Router
- CustomTabs component for tabbed navigation
- HTML5
- CSS3
- TypeScript
- TailwindCSS
