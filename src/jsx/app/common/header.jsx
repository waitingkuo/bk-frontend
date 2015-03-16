var Brand = React.createClass({
  render: function() {
    return (
      <NavHeader {...this.props}>
        <NavBrand tabIndex='-1'>
          {/*
          <span style={{position: 'absolute', left: '100px', color: 'white', fontWeight: 'bold'}}>Brandkoop</span>
          <img src='/imgs/logo.png' alt='Brandkoop' width='47' height='47' style={{marginTop: '-7px'}}/>
          */}
        </NavBrand>
      </NavHeader>
    );
  }
});

var Navigation = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  render: function() {
    var props = React.mergeProps({
      className: 'pull-right'
    }, this.props);

    return (
      <NavContent {...props}>
        <Nav>
          <NavItem className='logout' href='#'>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </NavContent>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <Grid {...this.props} id='navbar'>
        <Row>
          <Col xs={12}>
            <NavBar fixedTop id='rubix-nav-header'>
              <Container fluid>
                <Row>
                  <Col xs={3} visible='xs'>
                    <SidebarBtn />
                  </Col>
                  <Col xs={6} sm={4}>
                    <Brand />
                  </Col>
                  <Col xs={3} sm={8}>
                    <Navigation />
                  </Col>
                </Row>
              </Container>
            </NavBar>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Header;
