
var json_data =
{
  "name": "Blockchain Taxonomy",
  "children": [
    {
      "name": "Executive Summary",
      "description": "Various consensus mechanisms used in blockchain networks.",
      "children": [
        {
          "name": "Overview, Key Findings, Value Proposition",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Introduction",
      "description": "Capabilities related to transactions on blockchain networks.",
      "children": [
        {
          "name": "Purpose, Background, Relevance of Blockchain",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Technology Overview",
      "description": "Protocols, consensus mechanisms, and blockchain platforms.",
      "children":[
        {
          "name": "Protocols",
          "description": null,
          "children": null
        },
        {
          "name": "Consensus Mechanisms",
          "description": null,
          "children": null
        },
        {
          "name": "Blockchain Platforms",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Problem Statement",
      "description": "Need for blockchain solution.",
      "children": [
        {
          "name": "Need for Blockchain Solution",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Solution Architecture",
      "description": "Architecture, platform, and system design considerations.",
      "children": [
        {
          "name": "Architecture",
          "description": null,
          "children": null
        },
        {
          "name": "Platform",
          "description": null,
          "children": null
        },
        {
          "name": "System Design Considerations",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Security Measures",
      "description": "Security features and key management.",
      "children": [
        {
          "name": "Security Features and Key Management",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Network and Protocol Specifications",
      "description": "Protocol details, network structure, network, nodes.",
      "children": [
        {
          "name": "Protocol Details",
          "description": null,
          "children": null
        },
        {
          "name": "Network Structure",
          "description": null,
          "children": [
            {
              "name": "Network",
              "description": null,
              "children": null
            },
            {
              "name": "Nodes",
              "description": null,
              "children": null
            }
          ]
        }
      ]
    },
    {
      "name": "Smart Contracts and Automation",
      "description": "Development, deployment, automation examples.",
      "children": [
        {
          "name": "Development, Deployment, Automation Examples",
          "description": null,
          "children": null
        }
      ]
    },
    {
      "name": "Tokenomics and Business Model",
      "description": "Business model and economic incentives, token model, token, transactions.",
      "children": [
        {
          "name": "Business Model and Economic Incentives",
          "description": null,
          "children": null
        },
        {
          "name": "Token Model",
          "description": null,
          "children": [
            {
              "name": "Token",
              "description": null,
              "children": null
            },
            {
              "name": "Transactions",
              "description": null,
              "children": null
            }
          ]
        }
      ]
    },
    {
      "name": "Use Cases and Application Scenarios",
      "description": "Use cases, applications.",
      "children": [
            {
              "name": "Use Cases",
              "description": null,
              "children": null
            },
            {
              "name": "Applications",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Implementation Plan and Development Roadmap",
      "description": "Development phases, milestones and timelines.",
      "children":  [
            {
              "name": "Development Phases",
              "description": null,
              "children": null
            },
            {
              "name": "Milestones and Timelines",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Community and Ecosystem Development",
      "description": "Partnerships and networks, building and engaging community.",
      "children": [
            {
              "name": "Partnerships and Networks",
              "description": null,
              "children": null
            },
            {
              "name": "Building and Engaging Community",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Market Analysis and Strategy",
      "description": "Go-to-market strategy, target market.",
      "children": [
            {
              "name": "Go-to-Market Strategy",
              "description": null,
              "children": null
            },
            {
              "name": "Target Market",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Performance Metrics and Scalability",
      "description": "Performance benchmarks and scalability solutions.",
      "children": [
            {
              "name": "Performance Benchmarks and Scalability Solutions",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Challenges and Limitations",
      "description": "Potential challenges and addressing strategies.",
      "children": [
            {
              "name": "Potential Challenges and Addressing Strategies",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Future Work and Innovation Pathways",
      "description": "Future research and development.",
      "children": [
            {
              "name": "Future Research and Development",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Conclusion",
      "description": "Summary of key points and impact.",
      "children": [
            {
              "name": "Summary of Key Points and Impact",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "References and Further Reading",
      "description": "Cited references.",
      "children": [
            {
              "name": "Cited References",
              "description": null,
              "children": null
            }
          ]
    },
    {
      "name": "Acknowledgments",
      "description": "Contributions and support.",
      "children": [
            {
              "name": "Contributions and Support",
              "description": null,
              "children": null
            }
          ]
    }
  ]
};

var m = [20, 120, 20, 200],
    w = 1280 - m[1] - m[3],
    h = 1800 - m[0] - m[2],
    i = 0,
    root;

var tree = d3.layout.tree()
    .size([h, w]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var vis = d3.select("#body").append("svg:svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

root = json_data;
root.x0 = h / 2;
root.y0 = 0;

function toggleAll(d) {
  if (d.children) {
    d.children.forEach(toggleAll);
    toggle(d);
  }
}

  // Initialize the display to show a few nodes.
  // root.children.forEach(toggleAll);
  // toggle(root.children[1]);
  // toggle(root.children[1].children[2]);
  // toggle(root.children[9]);
  // toggle(root.children[9].children[0]);

 update(root);


function update(source) {
  var duration = d3.event && d3.event.altKey ? 5000 : 500;

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse();

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", function(d) { toggle(d); update(d); });

  nodeEnter.append("svg:circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append('a')
      .attr('xlink:href', function(d) {
        return d.url;
      })
      .append("svg:text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style('fill', function(d) {
        return d.free ? 'black' : '#999';
      })
      .style("fill-opacity", 1e-6);

  nodeEnter.append("svg:title")
    .text(function(d) {
      return d.description;
    });

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = vis.selectAll("path.link")
      .data(tree.links(nodes), function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("svg:path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      })
    .transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children.
function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}
