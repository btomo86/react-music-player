import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "Far From Home",
      artist: "Toonorth",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#5A8585", "#FFD67C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
    },
    {
      name: "Cozy Fire",
      artist: "xander",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#D84C57", "#E1B242"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7955",
    },
    {
      name: "Home Sick",
      artist: "Blue Wednesday, another silent weekend",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#D84C57", "#E1B242"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7938",
    },
    {
      name: "Ocean View",
      artist: "G Mills, Kyle McEvoy, Luke Otwell",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#DC5A80", "#20487C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10320",
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default chillHop;
