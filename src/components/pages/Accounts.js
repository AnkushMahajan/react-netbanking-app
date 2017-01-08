import React, { Component } from 'react';
import { Card, CardTitle, CardText, Icon, List, ListItem, ListItemContent, ListItemAction } from 'react-mdl';
import AccountDetails from './AccountDetails'

import { connect } from 'react-redux'
import * as actions from '../../actions'

const creditColor = 'rgb(76, 175, 80)';
const debitColor = 'rgb(213,0,0)';

class Accounts extends Component {

  componentWillMount() {
    this.props.clearActiveAccount();
    this.props.fetchAccounts();
  }

  callBack(){
      this.props.clearActiveAccount();
  }

  render() {

    if(this.props.account){
        return (
            <AccountDetails activeAccount={this.props.account[0]} callFunc={this.callBack.bind(this)}/>
        )
    }

    if(this.props.accounts.length){
        return (
            <Card shadow={3} style={{width: '100%', margin: 'auto'}} className="test-card-accounts">
                <CardTitle>
                    <h2 className="mdl-card__title-text">My Accounts</h2>
                </CardTitle>

                <CardText></CardText>

                <List>
                    {this.props.accounts.map((account) => (
                        <ListItem key={account.id} threeLine style={{borderTop: '1px solid #eee'}} onClick={() => { this.props.fetchAccountTransactions(account.id) }}>
                            <ListItemContent icon={(account.icon)? account.icon: 'account_balance'} subtitle={account.owner.name}>
                                {account.type} <small>Account ID: {account.id}</small>
                            </ListItemContent>

                            <ListItemAction>
                  <span className="test-account-balance" style={{color: account.balance > 0? creditColor: debitColor}}>
                    {(account.balance >= 0? '$': '-$')}{Math.abs(account.balance).toFixed(2)}
                  </span>
                            </ListItemAction>
                        </ListItem>
                    ))}
                </List>
                <br />
            </Card>
        );
    }

      return (
          <div>Loading...</div>
      );


  }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts.accounts,
        account: state.accounts.account
    }
}

export default connect(mapStateToProps, actions)(Accounts);
