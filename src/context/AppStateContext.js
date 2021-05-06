import React, { createContext, useState } from "react";

export const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [showTools, setShowTools] = useState(false);
  const [day, setDay] = useState(1);
  const [eventsMessages, setEventsMessages] = useState([]);
  const [currentTown, setCurrentTown] = useState("Katowice");
  const [storage, setStorage] = useState(0);

  const calculateStorage = () => {
    let sum = 0;
    value.inventoryItems.forEach((item, i) => (sum += item.amount));
    setStorage(sum);
  };

  const value = {
    stats: {
      money: 1000,
      deposit: 0,
      prestige: 0,
      debt: 1000,
      condition: 100,
      storage: storage,
      storageMax: 1000,
      currentTown: currentTown,
      day: day,
    },

    showTools: {
      value: showTools,
      onClick: () => setShowTools(!showTools),
    },

    travel: {
      onClick: (event) => {
        setCurrentTown(event.nativeEvent.srcElement.childNodes[0].data);
        setDay(day + 1);
        calculateStorage();

        setEventsMessages(
          eventsMessages.concat(
            `Nastał nowy ${
              day + 1
            } dzień Twojej nędznej egzystencji w ${currentTown}`
          )
        );
      },
    },

    events: {
      eventsMessages: eventsMessages,
    },

    marketItems: [
      {
        id: 1,
        name: "grzybki",
        amount: 555,
        price: 47,
      },
      {
        id: 2,
        name: "gras",
        amount: 68,
        price: 36,
      },
      {
        id: 3,
        name: "grzybki",
        amount: 13,
        price: 25,
      },
      {
        id: 4,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
    ],

    inventoryItems: [
      {
        id: 1,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 2,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 3,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 4,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 5,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 6,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
    ],

    inventoryTools: [
      {
        id: 1,
        name: "Kurtka",
        amount: 1,
        legal: true,
      },
      {
        id: 2,
        name: "Torba",
        amount: 1,
        legal: true,
      },
      {
        id: 3,
        name: "Aktówka",
        amount: 1,
        legal: true,
      },
      {
        id: 4,
        name: "Fiat 126p",
        amount: 1,
        legal: true,
      },
      {
        id: 5,
        name: "Gnat",
        amount: 1,
        legal: false,
      },
      {
        id: 6,
        name: "Pestki do gnata",
        amount: 1,
        legal: false,
      },
      {
        id: 7,
        name: "Kałach",
        amount: 1,
        legal: false,
      },
      {
        id: 8,
        name: "Magazynek",
        amount: 1,
        legal: false,
      },
      {
        id: 9,
        name: "Granat",
        amount: 1,
        legal: false,
      },
      {
        id: 10,
        name: "Shunikan?",
        amount: 1,
        legal: false,
      },
    ],
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
