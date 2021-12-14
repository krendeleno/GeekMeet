export const chatList = [
    {
        id: 1,
        title: 'CoffeeZombie',
        image: require('../assets/defaultAvatars/naruto.png'),
        lastMessage: {
            text: 'прив че дел',
            author: 'Вы',
            date: new Date(15),
        }
    },
    {
        id: 2,
        title: 'CrazyKitten',
        image: require('../assets/defaultAvatars/betmen.png'),
        lastMessage: {
            text: 'У меня к тебе есть серьезный разговор',
            author: 'Вы',
            date: new Date(4),
        }
    },
    {
        id: 3,
        title: 'HungryKitten',
        image: require('../assets/defaultAvatars/kharli.png'),
        lastMessage: {
            text: 'давай дружить',
            author: 'Вы',
            date: new Date(0),
        }
    }
]

export const groupChatList = [
    {
        id: 1,
        title: 'Очередная тусовка',
        image: require('../assets/defaultEventCovers/vecherinka.png'),
        lastMessage: {
            text: 'было жестко ребята',
            author: 'Ulyana',
            date: new Date(5),
        }
    },
    {
        id: 2,
        title: 'Dungeons & Dragons',
        image: require('../assets/defaultEventCovers/nastolki.png'),
        lastMessage: {
            text: 'Эта партия за мной',
            author: 'Dana',
            date: new Date(3),
        }
    },
    {
        id: 3,
        title: 'Комиксы!',
        image: require('../assets/defaultEventCovers/komixy.png'),
        lastMessage: {
            text: 'Я недавно такой редкий выпуск нашел!',
            author: 'HungryKitten',
            date: new Date(2),
        }
    }
]


export const chatMessages = [
    {
        id: 1,
        image: require('../assets/defaultAvatars/naruto.png'),
        messages: [
            {
                id: 1,
                text: '(((',
                author: 'CoffeeZombie',
                date: new Date(0),
            },
            {
                id: 2,
                text: 'прив че дел',
                author: 'you',
                date: new Date(10),
            },
        ]
    },
    {
        id: 2,
        image: require('../assets/defaultAvatars/betmen.png'),
        messages: [
            {
                id: 1,
                text: 'У меня к тебе есть серьезный разговор',
                author: 'you',
                date: new Date(13),
            },
        ]
    },
    {
        id: 3,
        image: require('../assets/defaultAvatars/kharli.png'),
        messages: [
            {
                id: 1,
                text: 'привет',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'классная аватарка',
                author: 'you',
                date: new Date(13),
            },
            {
                id: 3,
                text: 'давай дружить',
                author: 'you',
                date: new Date(20),
            },
        ]
    },
]

export const groupChatMessages = [
    {
        id: 1,
        image: require('../assets/defaultEventCovers/vecherinka.png'),
        participants: 3,
        messages: [
            {
                id: 1,
                text: 'Как вы после вчерашнего?',
                author: 'you',
                date: new Date(0),
                authorId: 1
            },
            {
                id: 2,
                text: 'было жестко ребята',
                author: 'Ulyana',
                image: require('../assets/defaultAvatars/germiona.png'),
                date: new Date(10),
                authorId: 3
            },
        ]
    },
    {
        id: 2,
        image: require('../assets/defaultEventCovers/nastolki.png'),
        participants: 10,
        messages: [
            {
                id: 1,
                text: 'о нет я проиграл',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'Эта партия за мной',
                author: 'Dana',
                image: require('../assets/defaultAvatars/kharli.png'),
                date: new Date(13),
                authorId: 2
            },
        ]
    },
    {
        id: 3,
        image: require('../assets/defaultEventCovers/komixy.png'),
        participants: 12,
        messages: [
            {
                id: 1,
                text: 'ну что',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'как у кого дела',
                author: 'you',
                date: new Date(13),
            },
            {
                id: 3,
                text: 'Я недавно такой редкий выпуск нашел!',
                author: 'HungryKitten',
                date: new Date(20),
                image: require('../assets/defaultAvatars/naruto.png'),
                authorId: 1
            },
        ]
    },
]
