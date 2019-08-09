import stores from '../stores';

describe("Venues Class" , () => {
    beforeEach(() => {
        //Unselect all users
        stores.Users.users = stores.Users.users.map( user => ({
            ...user,
            isSelected : false
        }))
    });

    test("John Davis and Robert Webb", () => {
        stores.Users.selectUser(0);
        stores.Users.selectUser(2);    

        expect(stores.Venues.calculatePlaces.suitablePlaces)
            .toStrictEqual([ 
                { name: 'Twin Dynasty' },
                { name: 'Spice of life' },
                { name: 'The Cambridge' },
                { name: 'Spirit House' } 
            ])
    });

    test("No users selected" , () => {
        expect(stores.Venues.calculatePlaces.suitablePlaces)
            .toStrictEqual([                 
                {
                    name: "El Cantina"
                },
                {
                    name: "Twin Dynasty"
                },
                {
                    name: "Spice of life"
                },
                {
                    name: "The Cambridge"
                },
                {
                    name: "Wagamama"
                },
                {
                    name: "Sultan Sofrasi"
                },
                {
                    name: "Spirit House"
                },
                {
                    name: "Tally Joe"
                },
                {
                    name: "Fabrique"
                },
            ])
    });

    test("The entire team" , () => {
        stores.Users.users = stores.Users.users.map( user => ({
            ...user,
            isSelected : true
        }));

        console.log(stores.Venues.calculatePlaces.suitablePlaces);

        expect(stores.Venues.calculatePlaces.suitablePlaces)
            .toStrictEqual([                 
                { name: 'Spice of life' },
                { name: 'The Cambridge' }
            ])

    })
});

