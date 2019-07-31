import React from 'react'
import MyCard from './imageCard'
import axios from 'axios'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'
class ImageGallery extends React.Component {
    constructor(props){
        super(props)
        this.state={
            images: []
        }
    }
    componentDidMount()
    {
        var that = this
        axios.get("http://jsonplaceholder.typicode.com/photos")
        .then(function(res){
            var data = res.data
            that.setState({
                images: data
            })
        })
    }

    render(){
        const count = this.props.count || 100
        const perRow = this.props.perRow || 6
        const images = _.take(this.state.images,count)
        return(
            <Card.Group itemsPerRow={perRow}> 
                {/* <MyCard title="test title" text="test text" image="https://picsum.photos/200"/> */}
                {images.map(function(item){
                    return(
                        <MyCard title={item.title}  image={item.url}/>
                    )
                })}
            </Card.Group>
        )
    }
}

export default ImageGallery