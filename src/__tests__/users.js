import stores from '../stores';

describe("user Class" , () => {
    beforeEach(() => {
        //Unselect all users
        stores.Users.users = stores.Users.users.map( user => ({
            ...user,
            isSelected : false
        }))
    });

    test("selectUser" , () => {
        stores.Users.selectUser(0);

        expect(stores.Users.users)
            .toStrictEqual([
                {
                    name: "John Davis",
                    wont_eat: ["Fish"],
                    drinks: ["Cider", "Rum", "Soft drinks"],
                    isSelected : true,
                },
                {
                    name: "Gary Jones",
                    wont_eat: ["Eggs", "Pasta"],
                    drinks: ["Tequila", "Soft drinks", "beer", "Coffee"],
                    isSelected : false,
                },
                {
                    name: "Robert Webb",
                    wont_eat: ["Bread", "Pasta"],
                    drinks: ["Vokda", "Gin", "Whisky", "Rum"],
                    isSelected : false,
                },
                {
                    name: "Gavin Coulson",
                    wont_eat: [],
                    drinks: ["Cider", "Beer", "Rum", "Soft drinks"],
                    isSelected : false,
                },
                {
                    name: "Alan Allen",
                    wont_eat: ["Meat", "Fish"],
                    drinks: ["Soft drinks", "Tea"],
                    isSelected : false,
                },
                {
                    name: "Bobby Robson",
                    wont_eat: ["Mexican"],
                    drinks: ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"],
                    isSelected : false,
                },
                {
                    name: "David Lang",
                    wont_eat: ["Chinese"],
                    drinks: ["Beer", "cider", "Rum"],
                    isSelected : false,
                } 
            ])
    });

    test("Should not go out of bounds" , () => {
        stores.Users.selectUser(20);

        expect(stores.Users.users)
            .toStrictEqual([
                {
                    name: "John Davis",
                    wont_eat: ["Fish"],
                    drinks: ["Cider", "Rum", "Soft drinks"],
                    isSelected : false,
                },
                {
                    name: "Gary Jones",
                    wont_eat: ["Eggs", "Pasta"],
                    drinks: ["Tequila", "Soft drinks", "beer", "Coffee"],
                    isSelected : false,
                },
                {
                    name: "Robert Webb",
                    wont_eat: ["Bread", "Pasta"],
                    drinks: ["Vokda", "Gin", "Whisky", "Rum"],
                    isSelected : false,
                },
                {
                    name: "Gavin Coulson",
                    wont_eat: [],
                    drinks: ["Cider", "Beer", "Rum", "Soft drinks"],
                    isSelected : false,
                },
                {
                    name: "Alan Allen",
                    wont_eat: ["Meat", "Fish"],
                    drinks: ["Soft drinks", "Tea"],
                    isSelected : false,
                },
                {
                    name: "Bobby Robson",
                    wont_eat: ["Mexican"],
                    drinks: ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"],
                    isSelected : false,
                },
                {
                    name: "David Lang",
                    wont_eat: ["Chinese"],
                    drinks: ["Beer", "cider", "Rum"],
                    isSelected : false,
                } 
            ])
    });


    
});

