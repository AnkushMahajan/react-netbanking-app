import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import renderField from '../common/renderformfields'

import loginCover from './login_cover.jpg';
import validate from '../../utils'

class Login extends Component {

  static contextTypes = {
      router: PropTypes.object
  }

  componentWillUpdate(nextProps){
      if(nextProps.loggedIn){
          if(nextProps.user){
              this.context.router.push('accounts')
          }else{
              this.props.getUser();
          }

      }
  }

  onSubmit() {
    this.props.authenticateUser();
  }


  render() {

    const { handleSubmit } = this.props;
    return (
      <div>
        <Card shadow={1} style={{width: '100%', maxWidth: '400px', margin: 'auto'}}>
          <CardTitle expand style={{ minHeight: '150px', background: `url(${ loginCover }) center / cover` }}>

          </CardTitle>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <CardText>
                <div>
                    <Field name="email" component={renderField} type="text" label="Email"/>
                </div>
                <div>
                    <Field name="password" component={renderField} type="password" label="Password"/>
                </div>
                </CardText>
                <Button colored type="submit">Login</Button>
            </form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedInDetails.loggedIn,
        error: state.loggedInDetails.error,
        user: state.loggedInDetails.user
    }
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'Login',
    validate
})(Login));
