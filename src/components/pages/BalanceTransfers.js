import React, { Component } from 'react';
import { Card, CardText, CardTitle, Grid, Cell, Textfield, Button, Snackbar } from 'react-mdl';
import { connect } from 'react-redux'
import * as actions from '../../actions'

const INITIAL_STATE = {
    fromAccount: null,
    toAccount: null,
    amount: ''
}

class BalanceTransfers extends Component {

    constructor(props) {
       super(props);

       this.state = INITIAL_STATE
    }

    selectAccount(account: any, colFrom: string) {
        colFrom === 'from'? this.setState({fromAccount:account}): this.setState({toAccount: account})
    }

    initiateTransfer() {
        this.props.transferAmount(this.state.fromAccount.id, this.state.toAccount.id, this.state.amount)
        this.setState(INITIAL_STATE)
    }

    checkTransferValid() {

        if(!this.state.fromAccount || !this.state.toAccount){
            return false;
        }

        if(this.state.fromAccount.id === this.state.toAccount.id){
            return false;
        }

        if(this.state.amount.length < 1){
            return false;
        }

        return true;
    }

    handleTimeoutSnackbar() {
        this.props.clearTransferDetails();
    }

    render() {
        return (
            <Card shadow={1} style={{width: '100%', margin: 'auto', minHeight: 800}}>
                <CardTitle>Balance Transfers</CardTitle>
                <CardText>
                    <Grid>
                        <Cell col={4}>
                            <h5>Transfer from</h5>
                            { this.props.accounts.map((account) => {
                                const selected = account === this.state.fromAccount
                                return (
                                    <div key={account.id}
                                         style={{cursor: 'pointer', fontWeight: selected? 'bold' : '' }}
                                         onClick={() => { this.selectAccount(account, 'from')}}
                                    >
                                        {account.type}
                                    </div>
                                );
                            }) }
                        </Cell>
                        <Cell col={4}>
                            <h5>Transfer to</h5>
                            { this.props.accounts.map((account) => {
                                const selected = account === this.state.toAccount
                                return (
                                    <div key={account.id}
                                         style={{cursor: 'pointer', fontWeight: selected? 'bold' : '' }}
                                         onClick={() => { this.selectAccount(account, 'to')}}
                                    >
                                        {account.type}
                                    </div>
                                );
                            }) }
                        </Cell>
                        <Cell col={4}>
                            <h5>Amount</h5>
                            <Textfield
                                onChange={(evt) => { this.setState({amount: evt.target.value})}}
                                label="Amount.."
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                error="Please enter a valid amount!"
                                value = {this.state.amount}
                                style={{width: '200px'}}></Textfield>
                        </Cell>
                    </Grid>
                    <Button raised ripple disabled={ this.checkTransferValid()? false : true } onClick={() => { this.initiateTransfer()}}>Transfer Money</Button>
                </CardText>
                <Snackbar
                    active={this.props.error || this.props.transferStatus? true : false}
                    onTimeout={this.handleTimeoutSnackbar.bind(this)}>
                    {this.props.error? this.props.error.error: 'Amount successfully transferred!!'}
                </Snackbar>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts.accounts,
        error: state.accounts.error,
        transferStatus: state.accounts.transferStatus
    }
}

export default connect(mapStateToProps, actions)(BalanceTransfers);
