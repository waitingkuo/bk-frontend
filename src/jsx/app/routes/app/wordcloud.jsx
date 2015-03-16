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
              {/*
              <canvas id={this.props.id} width={this.props.width} height={this.props.height} />
              */}
              <div id={this.props.id} width={this.props.width} height={this.props.height} />
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

      var fill = d3.scale.category20();
      d3.layout.cloud().size([300, 300])
          .words([
            "Sincerity", "Excitement", "Ruggedness", "Competence", "Sophistication", "more", "words",
            "Sincerity", "Excitement", "Ruggedness", "Competence", "Sophistication", "more", "words",
            "Sincerity", "Excitement", "Ruggedness", "Competence", "Sophistication", "more", "words",
            "than", "this"].map(function(d) {
            return {text: d, size: 10 + Math.random() * 90};
          }))
          .padding(5)
          .rotate(function() { return ~~(Math.random() * 2) * 90; })
          .font("Impact")
          .fontSize(function(d) { return d.size; })
          .on("end", draw)
          .start();
      function draw(words) {
console.log($('#word-cloud'));
        d3.select("#word-cloud").append("svg")
            .attr("width", 300)
            .attr("height", 300)
          .append("g")
            .attr("transform", "translate(150,150)")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
      }


    })();
  },
  render: function() {
    return (
      <Container id="body">
        <Grid>
          <Row>
            <Col sm={12}>
              <ChartContainer id="word-cloud" height="75" width="250" name="Word Cloud"/>
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

