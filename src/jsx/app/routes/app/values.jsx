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
      ids = [
        "#bar-chart-sincerity",
        "#bar-chart-excitement",
        "#bar-chart-competence",
        "#bar-chart-sophistication",
        "#bar-chart-ruggedness"
      ]
      for (var i in ids) {
        var ctx = $(ids[i]).get(0).getContext("2d");

        var data = {
          labels: ['Trait1', 'Trait2', 'Trait3', 'Trait4', 'Trait5'],
          datasets: [
            {
              fillColor: "rgba(220, 220, 220, 0.2)",
              strokeColor: "rgba(220, 220, 220, 1)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [60, 50, 30, 30, 28]
            }
          ]
        };
        new Chart(ctx).Bar(data);
      }
    })();
  },
  render: function() {
    return (
      <Container id="body">
        <Grid>
          <Row>
            <Col sm={12}>
              <ChartContainer id="bar-chart-sincerity" height="75" width="250" name="Sincerity"/>
              <ChartContainer id="bar-chart-excitement" height="75" width="250" name="Excitement"/>
              <ChartContainer id="bar-chart-competence" height="75" width="250" name="Competence"/>
              <ChartContainer id="bar-chart-sophistication" height="75" width="250" name="Sophisticatoin"/>
              <ChartContainer id="bar-chart-ruggedness" height="75" width="250" name="Ruggedness"/>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
});

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
    )
  }
});

module.exports = Page;
