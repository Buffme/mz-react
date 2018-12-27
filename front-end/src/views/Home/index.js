import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tabbar from '@/components/Tabbar';

import HomeFilms from './HomeFilms';
import HomeCinemas from './HomeCinemas';
import HomeCenter from './HomeCenter';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myTabs: [
        { key: 'films', href: "/films", icon: "icon-films", name: '电影' },
        { key: 'cinemas', href: "/cinemas", icon: "icon-cinemas", name: '影院' },
        { key: 'center', href: "/center", icon: "icon-center", name: '我的' }
      ]
    }
  }

  render() {
    return (
      <div>
        {/* 上面是可变的 */}
        <Switch>
          <Route path="/films" component={HomeFilms}></Route>
          <Route path="/cinemas" component={HomeCinemas}></Route>
          <Route path="/center" component={HomeCenter}></Route>
          <Redirect to="/films"></Redirect>
        </Switch>

        {/* 下面的固定的 tabbar */}
        <Tabbar tabs={this.state.myTabs}></Tabbar>
      </div>
    )
  }
}
