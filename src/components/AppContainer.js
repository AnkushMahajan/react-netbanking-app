import React, { Component, PropTypes } from 'react';
import { Layout, Grid, Cell, Icon, Header, HeaderRow, HeaderTabs, Tab, Content, Button, Navigation, Chip, ChipContact } from 'react-mdl';
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Exercise1Instructions } from 'react-training-lib';

class AppContainer extends Component {

   // contextTypes in react provides access to context using Proptypes from react lib, use this to get access to router
   static contextTypes ={
       router: PropTypes.object
   }

  renderChip() {

      if(this.props.loggedIn){
          return(
              <Chip>
                  <ChipContact className="mdl-color--teal mdl-color-text--white">{this.props.user.name.substring(0,1)}</ChipContact>
                  {this.props.user.name}
              </Chip>
          )
      }else {
          return null;
      }

  }

  render() {

    // A map which stores Key (tabId) : Value (Object of URL and Title associated to each tab) pair
    const tabMap = {
        0: {
            URL: '/',
            Title: 'Login',
            tabIndex: 0
        },
        1: {
            URL: 'accounts',
            Title: 'Accounts',
            tabIndex: 1
        },
        2: {
            URL: 'transfer',
            Title: 'Balance Transfer',
            tabIndex: 2
        }
    }

    // get the correct url path { routes[1] since paths are appended on top of the base route i.e / }
    const urlPath= this.context.router.routes[1].path;
    let activeTabId;
    if(urlPath){
        const value = Object.values(tabMap).filter((tab) => {
            return tab.URL === urlPath;
        });

        activeTabId =  value[0].tabIndex;
    }else{
        activeTabId = 0;
    }

    return (
        <Layout fixedHeader>
            <Header>
                <HeaderRow title={(
                  <span>
                    <Icon name="location_city" style={{fontSize: '38px', position: 'relative', top: '5px'}}/>
                    &nbsp;
                    <span>Internet Banking</span>
                  </span>
                )} >

                    {this.renderChip()}

                </HeaderRow>
                <HeaderTabs ripple activeTab={activeTabId} onChange={(tabId) => {
                    // on tab change change the component state to hold correct active tab
                    // and push the related route retrieved from the map to the history
                    if(tabId === 0 && this.props.loggedIn){
                        this.props.logoutUser()
                    }
                    this.context.router.push(tabMap[tabId].URL);
                }}>
                    <Tab>{this.props.loggedIn? 'Logout': 'Login'}</Tab>
                    <Tab>Accounts</Tab>
                    <Tab>Balance Transfers</Tab>{/*
                    <Tab>Messages</Tab>
                    <Tab>New Conversation</Tab>
                    <Tab>View Conversation</Tab>*/}
                </HeaderTabs>
            </Header>
            <Content>


              <div style={{maxWidth: '768px', margin: '0 auto', width: 'calc(100% - 16px)'}}>
                  <Grid>
                      <Cell col={12} tablet={8} phone={4} >

                          {this.props.children}

                      </Cell>
                  </Grid>
              </div>

            </Content>
        </Layout>
    );
  }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedInDetails.loggedIn,
        user: state.loggedInDetails.user
    }
}


export default connect(mapStateToProps, actions)(AppContainer);
