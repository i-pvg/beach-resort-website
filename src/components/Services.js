import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';


export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:"lorem ipsum dolor sit amet conssectetur adipiscing elit magni corporis"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"lorem ipsum dolor sit amet conssectetur adipiscing elit magni corporis"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"lorem ipsum dolor sit amet conssectetur adipiscing elit magni corporis"
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:"lorem ipsum dolor sit amet conssectetur adipiscing elit magni corporis"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
