import React from 'react';
import { Container , Icon, Menu, Segment } from 'semantic-ui-react'

export default class MainLayout extends React.Component{
    render(){
        return (
            <Container>                
                <Segment attached='bottom'>                          
                    { this.props.children }
                </Segment>                            
            </Container>
        )
    }
}