import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function ( ComposedComponent ){

    class Authentication extends Component {

        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if(!this.props.loggedIn){
                this.context.router.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.loggedIn){
                this.context.router.push('/');
            }
        }

        render() {
            if(this.props.loggedIn){
                return (
                    <ComposedComponent {...this.props}/>
                )
            } else {
                return null;
            }

        }
    }

    function mapStateToProps(state){
        return {
            loggedIn: state.loggedInDetails.loggedIn
        }
    }

    return connect(mapStateToProps)(Authentication)
}
