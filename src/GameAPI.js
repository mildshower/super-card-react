const host = (pName) =>
  fetch(`/game/host?pName=${pName}`).then((r) => r.json());

const isGameStarted = () => fetch(`/game/isStarted/`).then((r) => r.json());

const join = (pName, gameId) =>
  fetch(`/game/join?gameId=${gameId}&pName=${pName}`).then((r) => r.json());

const ownInfo = () => fetch("/game/playerDetails").then((r) => r.json());

const fight = (trait) => fetch(`/game/fight?trait=${trait}`);

export default { host, isGameStarted, join, ownInfo, fight };
