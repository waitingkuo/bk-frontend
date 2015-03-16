var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var ChartContainer = React.createClass({
  render: function() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelBody style={{padding:25}} className="text-center">
            <h4>{this.props.name}</h4>
            <div>
              <canvas id={this.props.id} width={this.props.width} height={this.props.height} />
            </div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});


var Body = React.createClass({
  getInitialState: function() {
    return {
      legend: ''
    }
  },
  componentDidMount: function() {
    (function() {
      var ctx = $('#radar-chart').get(0).getContext("2d");
      var data = {
        labels: ['Sincerity', 'Excitement', 'Competence', 'Sophistication', 'Ruggedness'],
        datasets: [
          {
            label: "Woo",
            fillColor: "rgba(220, 220, 220, 0.2)",
            strokeColor: "rgba(220, 220, 220, 1)",
            pointColor: "rgba(220, 220, 220, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151, 187, 205, 1)",
            data: [70, 50, 30, 30, 48]
          }
        ]
      };
      new Chart(ctx).Radar(data);
    })();
  },
  render: function() {
    return (
      <Container id="body">
        <Grid>
          <Row>
            <Col sm={12}>
              <ChartContainer id="radar-chart" height="75" width="250" name="Radar Chart"/>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
});

var classSet = React.addons.classSet;
var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = React.addons.classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
});

module.exports = Page;

