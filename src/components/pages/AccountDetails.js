import React, { Component } from 'react';
import { Card, CardText, CardTitle, DataTable, TableHeader, Icon, FABButton } from 'react-mdl';

class AccountDetails extends Component {

    renderTransactions() {
        return (
            <DataTable
                selectable
                shadow={1}
                rowKeyColumn="id"
                rows={this.props.activeAccount.transactions.map((transaction) => {
                    return {id: transaction.id, amount: transaction.amount, current: transaction.balanceAfter, before: transaction.balanceBefore, currency: transaction.currency}
                })}>

                <TableHeader name="amount" tooltip="Amount transacted">Amount Transacted</TableHeader>
                <TableHeader numeric name="before" tooltip="previous balance">Previous Balance</TableHeader>
                <TableHeader numeric name="current" tooltip="current balance">Current</TableHeader>
                <TableHeader numeric name="currency" tooltip="unit">Currency</TableHeader>

            </DataTable>
        )
    }

    render() {
      return (
        <Card shadow={1} style={{width: '100%', margin: 'auto'}}>
            <CardTitle style={{display: 'block'}}>
                <span style={{padding: '25px'}}>
                    {this.props.activeAccount.description}
                </span>
                <span>
                    <FABButton onClick={() => {this.props.callFunc()    }}>
                        <Icon name="cancel" />
                    </FABButton>
                </span>


            </CardTitle>

            <CardText>
            {this.renderTransactions()}
            </CardText>
        </Card>
      )
    }
}

export default AccountDetails;
