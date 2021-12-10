export const chatList = [
    {
        id: 1,
        title: 'krendeleno',
        image: require('../assets/defaultAvatars/main.png'),
        lastMessage: {
            text: 'kek2',
            author: 'Ulyana',
            date: new Date(15),
        }
    },
    {
        id: 2,
        title: 'krendeleno2',
        image: require('../assets/defaultAvatars/main.png'),
        lastMessage: {
            text: 'kek2',
            author: 'Dana',
            date: new Date(4),
        }
    },
    {
        id: 3,
        title: 'krendeleno3',
        image: require('../assets/defaultAvatars/main.png'),
        lastMessage: {
            text: 'kek3',
            author: 'you',
            date: new Date(0),
        }
    }
]

export const groupChatList = [
    {
        id: 1,
        title: 'Грустная тусовка',
        image: require('../assets/defaultAvatars/main.png'),
        lastMessage: {
            text: 'я больше не вывожу',
            author: 'Ulyana',
            date: new Date(5),
        }
    },
    {
        id: 2,
        title: 'Грустные танцы',
        image: require('../assets/defaultAvatars/main.png'),
        lastMessage: {
            text: 'что ш',
            author: 'Dana',
            date: new Date(3),
        }
    },
    {
        id: 3,
        title: 'Грустный чатик',
        image: require('../assets/defaultAvatars/main.png'),
        lastMessage: {
            text: 'кто сделал Никитину?',
            author: 'you',
            date: new Date(2),
        }
    }
]


export const chatMessages = [
    {
        id: 1,
        image: require('../assets/defaultAvatars/main.png'),
        messages: [
            {
                id: 1,
                text: 'kek1',
                author: 'Ulyana',
                date: new Date(0),
            },
            {
                id: 2,
                text: 'kek2',
                author: 'you',
                date: new Date(10),
            },
        ]
    },
    {
        id: 2,
        image: require('../assets/defaultAvatars/main.png'),
        messages: [
            {
                id: 1,
                text: 'yet another message',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'oh no',
                author: 'you',
                date: new Date(13),
            },
        ]
    },
    {
        id: 3,
        image: require('../assets/defaultAvatars/main.png'),
        messages: [
            {
                id: 1,
                text: 'yet another message',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'oh no',
                author: 'you',
                date: new Date(13),
            },
            {
                id: 3,
                text: 'oh no 2',
                author: 'you',
                date: new Date(20),
            },
        ]
    },
]

export const groupChatMessages = [
    {
        id: 1,
        image: require('../assets/defaultAvatars/main.png'),
        participants: 3,
        messages: [
            {
                id: 1,
                text: 'kek1',
                author: 'Ulyana',
                date: new Date(0),
                image: require('../assets/defaultAvatars/main.png'),
                authorId: 1
            },
            {
                id: 2,
                text: 'kek2',
                author: 'you',
                date: new Date(10),
            },
        ]
    },
    {
        id: 2,
        image: require('../assets/defaultAvatars/main.png'),
        participants: 10,
        messages: [
            {
                id: 1,
                text: 'yet another message',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'oh no',
                author: 'you',
                date: new Date(13),
            },
        ]
    },
    {
        id: 3,
        image: require('../assets/defaultAvatars/main.png'),
        participants: 12,
        messages: [
            {
                id: 1,
                text: 'yet another message',
                author: 'you',
                date: new Date(15),
            },
            {
                id: 2,
                text: 'oh no',
                author: 'you',
                date: new Date(13),
            },
            {
                id: 3,
                text: 'oh no 2',
                author: 'someone',
                date: new Date(20),
                image: require('../assets/defaultAvatars/main.png'),
                authorId: 1
            },
        ]
    },
]
