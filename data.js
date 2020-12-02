export const classItems = [
    {
      id : 0,
      title: "Hip Hop basic",
      teacher: "Boun",
      img: "../assets/image1.jpg",
      description: " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      price: "10€",
      studio : 'Studio Bleu',
      img : require('./assets/image1.jpg'),
      genre : [1,2,3]
    },
    {
      id : 1,
      title: "House danse",
      teacher: "Boun",
      img: "../assets/image2.jpg",
      description: " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      price: "15€",
      img : require('./assets/image2.jpg'),
      studio : 'Studio Bleu',
      genre : [4]

    },
    {
      id : 2,
      title: "Break",
      teacher: "Vins",
      img: "../assets/image3.jpg",
      description:  " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      studio : 'Studio harmonic',
      img : require('./assets/image3.jpg'),
      price: "20€",
      genre : [4]
    },
    {
      id : 3,
      title: "Danse Classique",
      teacher: "Alix",
      img: "../assets/image4.jpg",
      description: " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      studio : 'LAX Studio',
      img : require('./assets/image4.jpg'),
      price: "5€",
      genre : [3]
    },
  
    {
      id : 4,
      title: "Love for all",
      teacher: "Boun",
      img: "../assets/image5.jpg",
      description: " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      studio : 'Studio Massaro',
      img : require('./assets/image5.jpg'),
      price: "14€",
      genre : [4,2]
    },
  
    {
      id : 5,
      title: "Heal dance",
      teacher: "Mercedes",
      img: "../assets/image6.jpg",
      description: " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      studio : 'Studio MRG',
      img : require('./assets/image6.jpg'),
      price: "14€",
      genre : [1,2,5]
    },
    {
      id : 6,
      title: "New class",
      teacher: "Salam",
      img: "../assets/image6.jpg",
      description: " ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ",
      studio : 'Studio MRG',
      img : require('./assets/image2.jpg'),
      price: "14€",
      genre : [2]
    }
  ];
  
  export const user = {
    name : 'Anna',
    lastName : 'MONTANA',
    email : 'samira@gmail.com',
    userName : 'moussa',
    password : 'moussa'
  }

  
  export const teachers = [
    {
      id : 0,
      name : 'Jerky',
      picture : require('./assets/teacher/jerky.jpg') ,
      style : 'Hip Hop',
      genre : [1,2]
    },
    {
      id : 1,
      name : 'Yacine',
      picture : require('./assets/teacher/yacine.jpg'),
      style : 'Hip Hop',
      genre : [1,5]
    },
    {
      id : 2,
      name : 'Dante',
      picture : require('./assets/teacher/dante.jpg'),
      style : 'Break',
      genre : [3]
    },
    {
      id : 3,
      name : 'Lionel',
      picture : require('./assets/teacher/lionel.jpg'),
      style : 'Afro',
      genre : [2]
    },
    {
      id : 4,
      name : 'Carmel',
      picture : require('./assets/teacher/carmel.jpg'),
      style : 'House',
      genre : [1, 4]
    },
    {
      id : 5,
      name : 'Nazar',
      picture : require('./assets/teacher/nazar.jpg'),
      style : 'House',
      genre : [5]
    }
  ]

  export const events = [
    {
      id : 0,
      name : 'Afro Nation',
      picture : require('./assets/events/afroNation.jpg'),
      bkg_picture : require('./assets/events/afroNationCover.jpg'),
      overview : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed mollitia nobis, reprehenderit consectetur tenetur voluptatem iusto debitis quaerat deserunt dolor consequuntur eaque ratione hic! Ea quos dolor tempora numquam?',
      
    },
    {
      id : 1,
      name : 'All 4 House',
      picture : require('./assets/events/all4house.jpg'),
      bkg_picture : require('./assets/events/all4houseCover.jpg'),
      overview : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed mollitia nobis, reprehenderit consectetur tenetur voluptatem iusto debitis quaerat deserunt dolor consequuntur eaque ratione hic! Ea quos dolor tempora numquam?',
      
    },
    {
      id : 2,
      name : 'Just Debout',
      picture : require('./assets/events/justdebout.jpg'),
      bkg_picture : require('./assets/events/justdeboutCover.jpg'),
      overview : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed mollitia nobis, reprehenderit consectetur tenetur voluptatem iusto debitis quaerat deserunt dolor consequuntur eaque ratione hic! Ea quos dolor tempora numquam?',
      
    }
  ]

  export const genres = {
    1 : 'hip - Hop',
    2 : 'Afro',
    3 : 'House',
    4 : 'Break',
    5 : 'Danse Classique',
  }