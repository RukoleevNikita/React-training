import React from 'react'

import '../../index.css'
import { Item } from 'semantic-ui-react'

const Card = ({ image, title, description }) => {
    return (
        <Item.Group divided>
            <Item>
            <Item.Image src={image} />
            <Item.Content>
                <Item.Header as='a'>{title}</Item.Header>
                <Item.Description>{description}</Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
    )
}

export default Card


