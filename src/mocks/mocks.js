import lazyPromise from "./lazyPromise";
import { usePollReader } from "../hooks/usePollReader";
import { usePolling } from "../hooks/usePolling";

function fetchPlayers() {
  return lazyPromise([
    {
      id: 1,
      name: "sasaki",
      retired: true,
      turned: false,
      declarationStatus: "Yet",
    },
    {
      id: 2,
      name: "sawada",
      retired: false,
      turned: true,
      declarationStatus: "Yet",
    },
    {
      id: 3,
      name: "saeki",
      retired: false,
      turned: false,
      declarationStatus: "Now",
    },
    {
      id: 4,
      name: "sakai",
      retired: false,
      turned: false,
      declarationStatus: "Waiting",
    },
  ]);
}

function fetchPlayerCurrentTurn() {
  return lazyPromise({
    id: 1,
    name: "sawada",
  });
}

function fetchQuestions() {
  return lazyPromise([
    {
      id: 1,
      text: "test text",
      selected: false,
    },
    {
      id: 2,
      text: "test text",
      selected: true,
    },
    {
      id: 3,
      text: "test text",
      selected: false,
    },
    {
      id: 4,
      text: "test text",
      selected: false,
    },
    {
      id: 5,
      text: "test text",
      selected: false,
    },
  ]);
}

function fetchMyCards(id) {
  return lazyPromise([
    {
      id: 2,
      number: 1,
      color: "Red",
    },
    {
      id: 13,
      number: 2,
      color: "Blue",
    },
    {
      id: 4,
      number: 3,
      color: "Red",
    },
    {
      id: 6,
      number: 5,
      color: "Yellow",
    },
  ]);
}

function fetchAllCards() {
  return lazyPromise([
    {
      id: 1,
      number: 0,
      color: "Red",
    },
    {
      id: 2,
      number: 1,
      color: "Red",
    },
    {
      id: 3,
      number: 2,
      color: "Red",
    },
    {
      id: 4,
      number: 3,
      color: "Red",
    },
    {
      id: 5,
      number: 4,
      color: "Red",
    },
    {
      id: 6,
      number: 5,
      color: "Yellow",
    },
    {
      id: 7,
      number: 6,
      color: "Red",
    },
    {
      id: 8,
      number: 7,
      color: "Red",
    },
    {
      id: 9,
      number: 8,
      color: "Red",
    },
    {
      id: 10,
      number: 9,
      color: "Red",
    },
    {
      id: 11,
      number: 0,
      color: "Blue",
    },
    {
      id: 12,
      number: 1,
      color: "Blue",
    },
    {
      id: 13,
      number: 2,
      color: "Blue",
    },
    {
      id: 14,
      number: 3,
      color: "Blue",
    },
    {
      id: 15,
      number: 4,
      color: "Blue",
    },
    {
      id: 16,
      number: 5,
      color: "Yellow",
    },
    {
      id: 17,
      number: 6,
      color: "Blue",
    },
    {
      id: 18,
      number: 7,
      color: "Blue",
    },
    {
      id: 19,
      number: 8,
      color: "Blue",
    },
    {
      id: 20,
      number: 9,
      color: "Blue",
    },
  ]);
}

let counter = 0;

function fetchMembers() {

  console.log("fetch members...");

  counter += 1;
  console.log("counter: ", counter);
  if (counter === 1) {
    return lazyPromise([
      {
        name: "sasaki",
      },
    ]);
  } else if (counter === 2) {
    return lazyPromise([
      {
        name: "sasaki",
      },
      {
        name: "sawada",
      },
    ]);
  } else {
    return lazyPromise([
      {
        name: "sasaki",
      },
      {
        name: "sawada",
      },
      {
        name: "saeki",
      },
      {
        name: "sakai",
      },
    ]);
  }
}
function fetchUserInfo() {
  console.log("fetch user info...");

  const storageKey = "id";

  const id = localStorage.getItem(storageKey);

  return lazyPromise({
    id,
    name: id ? "sasaki" : null,
  });
}

export function useData() {
  const { data: cards } = usePollReader(fetchMyCards, []);
  const { data: allCards } = usePollReader(fetchAllCards, []);
  const { data: players, poll: pollPlayers } = usePollReader(fetchPlayers, []);
  const { data: player, poll: pollPlayer } = usePollReader(fetchPlayerCurrentTurn, []);
  const { data: questions, poll: pollQuestions } = usePollReader(fetchQuestions, []);
  const { data: members, poll: pollMembers } = usePollReader(fetchMembers, []);
  const { data: userInfo, poll: pollUserInfo } = usePollReader(fetchUserInfo, []);

  usePolling([pollPlayer, pollPlayers, pollQuestions, pollMembers, pollUserInfo]);

  return {
    cards,
    allCards,
    player,
    players,
    questions,
    members,
    userInfo
  }
}

function declare(cards) {
  return lazyPromise(true);
}

function saveMember({ name }) {
  console.log("saving now... name: ", name);
  const promise = lazyPromise(true);

  // When production, promise returns uuid, so set it on local storage.
  const demoId = "ac4b64e8-2408-8971-f36a-7ed2566a811e";
  localStorage.setItem("id", demoId);

  return promise;
}

function removeMember({ id }) {
  console.log("removing now... id: ", id);
  const promise = lazyPromise(true);

  localStorage.removeItem("id");

  return promise;
}

function selectQuestion(id) {
  console.log("question card selected. id: ", id);

  return lazyPromise(true);
}

function startGame() {
  return Promise.resolve(true);
}

export const actions = {
  saveMember,
  removeMember,
  selectQuestion,
  declare,
  startGame,
}