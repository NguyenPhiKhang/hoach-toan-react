import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppContext from "../appContext";

class AuthGuard extends Component {
  constructor(props, context) {
    super(props);
    let { routes } = context;

    this.state = {
      authenticated: false,
      routes
    };
  }

  componentDidMount() {
    console.log("---- componentDidMount - AuthGuard -------");
    console.log(this.state.authenticated)
    if (!this.state.authenticated) {
      console.log("ok1")
      this.redirectRoute(this.props);
    }
  }

  componentDidUpdate() {
    console.log("---- componentDidUpdate - AuthGuard -------");
    console.log(this.state.authenticated)
    if (!this.state.authenticated) {
      this.redirectRoute(this.props);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("---- shouldComponentUpdate - AuthGuard -------");
    console.log(nextState.authenticated);
    console.log(this.state.authenticated);
    return nextState.authenticated !== this.state.authenticated;
  }

  static getDerivedStateFromProps(props, state) {   
    console.log("---- getDerivedStateFromProps - AuthGuard -------");
    const { location, user } = props;
    const { pathname } = location;
    console.log(props);
    const matched = state.routes.find(r => r.path === pathname);
    console.log(matched)
    const authenticated =
      matched && matched.auth && matched.auth.length
        ? matched.auth.includes(user.role)
        : true;
    console.log("authenticated: "+ authenticated);
    return {
      authenticated
    };
  }

  redirectRoute(props) {
    const { location, history } = props;
    const { pathname } = location;

    history.push({
      pathname: "/session/signin",
      state: { redirectUrl: pathname }
    });
  }

  render() {
    console.log("---- Render -- AuthGuard ----");
    let { children } = this.props;
    const { authenticated } = this.state;
    return authenticated ? <Fragment>{children}</Fragment> : null;
  }
}

AuthGuard.contextType = AppContext;

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps)(AuthGuard));
