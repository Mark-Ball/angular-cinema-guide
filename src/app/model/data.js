export const CONSTANTS = {
    HOYTS_CHATSWOOD: 'Hoyts Chatswood',
    EVENT_GEORGEST: 'Event Cinemas George St',
    EVENT_HORNSBY: 'Event Cinemas Hornsby'
};

export const movies = [
    {
        name: 'The Dark Knight',
        cinemas: [
            { 
                name: HOYTS_CHATSWOOD,
                times: ['9:00', '11:00', '17:00']
            },
            {
                name: EVENT_GEORGEST,
                times: ['10:00', '13:00', '16:00', '19:00']
            },
            { 
                name: EVENT_HORNSBY,
                times: ['15:00', '20:00', '22:00']
            }
        ]
    },
    {
        name: 'The Thing',
        cinemas: [
            {
                name: HOYTS_CHATSWOOD,
                times: ['10:00', '18:00', '19:00', '20:00', '21:00']
            },
            {
                name: EVENT_HORNSBY,
                times: ['12:00', '20:00', '22:00']
            }
        ]
    },
    {
        name: 'John Wick',
        cinemas: [
            {
                name: HOYTS_CHATSWOOD,
                times: ['12:00', '18:00', '21:00']
            }
        ]
    }
];