// app/mirage/fixtures/users.js

export default [
    {
        id: 1,
        username: 'bernardop',
        numberOfChirps: 2,
        numberOfFollowing: 5,
        numberOfFollowers: 5,
        aboutMe: 'I like Ember',
        joinedAt: new Date('2015-09-30T09:00:00'),
        chirps: [1, 2, 3],
        followees: [1],
        followers: [1]
    }
];
