'use strict';

import graph from './';

const copy = (g) => {
  const newGraph = graph();
  for (const u of g.vertices()) {
    newGraph.addVertex(u, g.vertex(u));
  }
  for (const [u, v] of g.edges()) {
    newGraph.addEdge(u, v, g.edge(u, v));
  }
  return newGraph;
};

export default copy;