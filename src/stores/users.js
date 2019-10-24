import { observable, action, computed } from 'mobx';

export default class Users {
    @observable users = [
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
        
    ];

    @action
    selectUser( userIndex ){
        if( userIndex < 0 || userIndex >= this.users.length ){
            return;
        }

        const users = Object.assign( {} , this.users );

        users[ userIndex ] = {
            ...users[userIndex],
            isSelected : false
        }
            
        this.users[ userIndex ].isSelected = !this.users[ userIndex ].isSelected;        
    }

    @computed get selectedUsers(){
        return this.users.filter( user => user.isSelected );
    }
}