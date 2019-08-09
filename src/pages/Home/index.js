import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Image, Segment, Divider, List, Icon, Checkbox } from 'semantic-ui-react';


@inject('Users','Venues')
@observer
export default class HomePage extends React.Component {
    render(){
        console.log(this.props.Venues.calculatePlaces);
        return (
            <Segment>
                <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <List selection verticalAlign='middle'>
                        {
                            this.props.Users.users.map( ( user , index ) => (
                                <List.Item onClick={ () => this.props.Users.selectUser( index )}>                
                                    <List.Content>                    
                                        <List.Header>
                                            <Checkbox checked   ={ user.isSelected }  />
                                            { user.name }
                                        </List.Header>
                                    </List.Content>
                                </List.Item>                
                            ))
                        }            
                    </List>        
                </Grid.Column>
                <Grid.Column>
                    <h1>Places to go:</h1>
                    {
                        this.props.Venues.calculatePlaces.suitablePlaces.map( place =>(
                            <p>{ place.name }</p>
                        ))
                    }
                    <h1>Places to avoid:</h1>
                    {
                        this.props.Venues.calculatePlaces.unsuitablePlaces.map( place =>(
                            <React.Fragment>
                                <p>{ place.name }</p>
                                {
                                    place.affectedMembers.map( member => (
                                        <h4>
                                            { `There is nothing for ${ member.name } to ${ member.item }`}
                                        </h4>
                                    ))
                                }
                            </React.Fragment>
                            
                        ))
                    }
                </Grid.Column>
                </Grid>

                <Divider vertical>
                    <Icon disabled name='right' />
                </Divider>
            </Segment>
        );
    }
}