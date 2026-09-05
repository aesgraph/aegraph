import { Graph } from "../../core/model/Graph";
import { GraphBuilder } from "../../core/model/GraphBuilder";
import { SceneGraph } from "../../core/model/SceneGraph";

export const aegraphGraph2 = () => {
  const graph = new Graph();

  graph.createNode({
    id: "axiomOfInteraction",
    type: "concept pillar",
    tags: ["axiom of interaction", "story entrypoint"],
  });

  graph.createNode({
    id: "theoryOfEverything",
    type: "concept pillar",
    tags: ["theory of everything", "story entrypoint"],
  });

  graph.createNode({
    id: "aegraph",
    type: "concept pillar",
    tags: ["aegraph", "story entrypoint", "graph software"],
  });

  graph.createNode({
    id: "graphviz",
    type: "graph software",
    tags: ["graph software"],
  });

  graph.createNode({
    id: "reactflow",
    type: "graph software",
    tags: ["graph software", "story entrypoint"],
  });

  graph.createEdgeIfMissing("axiomOfInteraction", "theoryOfEverything", {
    type: "philosophical approach to",
  });

  graph.createEdgeIfMissing("aegraph", "theoryOfEverything", {
    type: "technology to implement a",
  });

  graph.createNode({
    id: "communication medium",
    type: "technology",
    tags: ["technology", "language"],
  });

  graph.createEdgeIfMissing("aegraph", "communication medium", {
    type: "is a",
  });

  graph.createNode({ id: "analytics engine", type: "concept pillar" });
  graph.createEdgeIfMissing("aegraph", "analytics engine", {
    type: "is a",
  });

  graph.createEdgeIfMissing("aegraph", "axiomOfInteraction", {
    type: "can be understood through",
  });

  graph.createEdgeIfMissing("aegraph", "graphviz", { type: "adaptor for" });
  graph.createEdgeIfMissing("aegraph", "reactflow", { type: "adaptor for" });

  graph.createNode({
    id: "logical mind maps",
    type: "material thing",
  });

  graph.createEdgeIfMissing("axiomOfInteraction", "logical mind maps", {
    type: "is a",
  });

  graph.createEdgeIfMissing("aegraph", "logical mind maps", {
    type: "builds",
  });

  graph.createEdgeIfMissing("logical mind maps", "theoryOfEverything", {
    type: "to describe a",
  });

  graph.createEdgeIfMissing("logical mind maps", "analytics engine", {
    type: "powered by",
  });

  graph.createEdgeIfMissing("communication medium", "logical mind maps", {
    type: "in the form of",
  });

  // graph.createEdgeIfMissing("theoryOfEverything", "analytics engine", {
  //   type: "described within",
  // });

  graph.createEdgeIfMissing("analytics engine", "theoryOfEverything", {
    type: "to build and navigate a",
  });

  const builder = new GraphBuilder(graph);
  builder.addEdge("theoryOfEverything", "is a", "overloaded term");

  // console.log("journal", aegraphGraph2);
  return new SceneGraph({ graph: graph });
};
