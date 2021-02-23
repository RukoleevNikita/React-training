import React, { Component } from 'react'
import Card from './componet/CardPosts/Card'
import posts from './posts.json'

import './index.css'

import { Button } from 'semantic-ui-react'

class AppTraining extends Component {
    state = {
        showPosts: false
    }

    getPostsHandler = () => {
        this.setState({
            showPosts: !this.state.showPosts
        })
    }

    render() {
        const  items  = posts
        let post = null

        if (this.state.showPosts) {
            post = items.map((el, index)=> {
                return (
                    <Card 
                        key={index}
                        {...el}
                        // title={el.title}
                        // description={el.description}
                        // image={el.image}
                    />
                )
            })
        }
        return (
            <div className="card__posts">
                {  post }
                <div className="card__btn">
                    <Button positive onClick={this.getPostsHandler}>Получить посты</Button>
                </div>
            </div>
        )
    }
}

export default AppTraining