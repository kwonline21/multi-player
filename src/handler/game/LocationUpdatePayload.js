import { getGameSession } from '../../sessions/game.session.js';

const locationUpdateHandler = ({ socket, userId, payload }) => {
  try {
    const { x, y } = payload;
    const gameSession = getGameSession();

    if (!gameSession) {
      console.error('Game session not found');
    }

    console.log(gameSession);

    const user = gameSession.getUser(userId);
    if (!user) {
      console.error('User not found');
    }

    user.updatePosition(x, y);

    socket.write('');
  } catch (e) {
    console.error(e);
  }
};

export default locationUpdateHandler;
