import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../../actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)

export default class Computers extends Component{
    constructor(){
        super();
        // this.state={id:0}
    }
    // componentWillMount(){
    //     let {computers}=this.props.list;
    //     computers.find((item,index)=>{
    //         this.setState({id:item.id})
    //     })
    //
    // }

    render(){

        return (
            <ul>


                {
                    this.props.list.computers.map((item, index) => (
                        <li key={index}>
                                <Link to={{pathname:'/detail',state:{item}}}>
                                <div className="cover">
                                    <img src={item.cover}/>
                                </div>
                                <div className="description">

                                    <p>{item.description}</p>
                                    <span>￥ {item.price}</span>
                                </div>
                                </Link>
                            </li>

                        ))
                }

            </ul>
        )
    }
}
