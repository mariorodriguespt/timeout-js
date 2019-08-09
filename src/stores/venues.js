import {observable, computed, asStructure} from 'mobx';
import stores from '../stores';
import { intersection , difference } from '../utils/sets';

export default class Venues {
    @observable venues = [
        {
            name: "El Cantina",
            food: ["Mexican"],
            drinks: ["Soft drinks", "Tequila", "Beer"]
        },
        {
            name: "Twin Dynasty",
            food: ["Chinese"],
            drinks: ["Soft Drinks", "Rum", "Beer", "Whisky", "Cider"]
        },
        {
            name: "Spice of life",
            food: ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
            drinks: ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
        },
        {
            name: "The Cambridge",
            food: ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
            drinks: ["Vokda", "Gin", "Cider", "Beer", "Soft drinks"]
        },
        {
            name: "Wagamama",
            food: ["Japanese"],
            drinks: ["Beer", "Cider", "Soft Drinks", "Sake"]
        },
        {
            name: "Sultan Sofrasi",
            food: ["Meat", "Bread", "Fish"],
            drinks: ["Beer", "Cider", "Soft Drinks"]
        },
        {
            name: "Spirit House",
            food: ["Nuts", "Cheese", "Fruit"],
            drinks: ["Vodka", "Gin", "Rum", "Tequila"]
        },
        {
            name: "Tally Joe",
            food: ["Fish", "Meat", "Salad", "Deserts"],
            drinks: ["Beer", "Cider", "Soft Drinks", "Sake"]
        },
        {
            name: "Fabrique",
            food: ["Bread", "Cheese", "Deli"],
            drinks: ["Soft Drinks", "Tea", "Coffee"]
        },
    ];

    @computed get calculatePlaces(){
        const suitablePlaces = [],
              unsuitablePlaces = [];

        const PERFECT = 1,
            NO_DRINKS = 2,
            NO_FOOD = 3;

        const users = stores.Users.selectedUsers;    
        const satifiesUser = ( venue , user ) => {
    
            if( intersection( new Set( user.drinks ) , new Set( venue.drinks ) ).size === 0 ){
                return NO_DRINKS;
            }

            if( difference( new Set( venue.food ) , new Set( user.wont_eat ) ).size === 0 ){
                return NO_FOOD;
            }

            return PERFECT;
        }

        this.venues.forEach( venue => {
            let isPerfect = true;
            
            users.forEach( user => {
                const response = satifiesUser( venue , user );
                if( response !== PERFECT ){
                    isPerfect = false;
                    const item = response === NO_DRINKS ? 'drink' : 'eat';
                    if( unsuitablePlaces.length > 0 && unsuitablePlaces[ unsuitablePlaces.length - 1 ].name === venue.name ){
                        unsuitablePlaces[ unsuitablePlaces.length - 1 ].affectedMembers.push({
                            name : user.name,
                            item
                        })
                    }
                    else{
                        unsuitablePlaces.push({
                            name : venue.name,
                            affectedMembers : [
                                {
                                    name : user.name,
                                    item
                                }
                            ]
                        });
                    }
                }
            });

            if( isPerfect ){
                suitablePlaces.push({
                    name : venue.name
                });
            }
        })

        return {
            suitablePlaces,
            unsuitablePlaces
        }
    }
}