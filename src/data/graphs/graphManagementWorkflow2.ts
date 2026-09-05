import { CustomLayoutType } from "../../core/layouts/CustomLayoutEngine";
import { Graph } from "../../core/model/Graph";
import { mergeIntoSceneGraph } from "../../core/model/mergeSceneGraphs";
import { SceneGraph } from "../../core/model/SceneGraph";
import { aegraphArchitectureDiagram } from "./graphmanagementworkflow3";
import { semanticWebTechnologiesDiagram } from "./semanticWebDiagram";
import { aegraphGraph } from "./aegraph";

export const graphManagementWorkflowDiagram2 = () => {
  const graph = new Graph();

  // Core Concept Nodes
  graph.createNode({
    id: "TextDefinedGraph",
    type: "concept pillar",
    tags: ["graph source", "story entrypoint"],
  });

  graph.createNode({
    id: "Graphviz",
    type: "graph software",
    tags: ["graph software", "story entrypoint"],
  });

  graph.createNode({
    id: "MermaidJS",
    type: "graph software",
    tags: ["graph software", "story entrypoint"],
  });

  graph.createNode({
    id: "SVG",
    type: "output format",
    tags: ["visualization"],
  });

  graph.createNode({
    id: "Aegraph",
    type: "concept pillar",
    tags: ["aegraph", "story entrypoint", "graph software"],
  });

  graph.createNode({
    id: "AegraphModelGraph",
    type: "concept pillar",
    tags: ["graph model"],
  });

  // Graph Operations
  graph.createNode({
    id: "UpdatePositions",
    type: "operation",
    tags: ["graph operation"],
  });

  graph.createNode({
    id: "UpdateOpacity",
    type: "operation",
    tags: ["graph operation"],
  });

  graph.createNode({
    id: "UpdateSizes",
    type: "operation",
    tags: ["graph operation"],
  });

  graph.createNode({
    id: "UpdateColors",
    type: "operation",
    tags: ["graph operation"],
  });

  graph.createNode({
    id: "Export",
    type: "operation",
    tags: ["graph operation"],
  });

  // New Nodes (Expanding Aegraph's Capabilities)
  graph.createNode({
    id: "EntityComponentSystem",
    type: "core framework",
    tags: ["data management", "graph architecture"],
  });

  graph.createNode({
    id: "OntologyGenerator",
    type: "concept pillar",
    tags: ["AI integration", "knowledge representation"],
  });

  graph.createNode({
    id: "MultiLayerDiagrams",
    type: "feature",
    tags: ["visualization", "diagramming"],
  });

  graph.createNode({
    id: "AIAnalysis",
    type: "feature",
    tags: ["AI integration", "data processing"],
  });

  graph.createNode({
    id: "TypeSystem",
    type: "feature",
    tags: ["dataset classification", "ontology"],
  });

  graph.createNode({
    id: "ImageAnnotations",
    type: "feature",
    tags: ["diagram enhancement", "linked metadata"],
  });

  graph.createNode({
    id: "DataChaining",
    type: "feature",
    tags: ["data synthesis", "workflow automation"],
  });

  graph.createNode({
    id: "GraphBasedUI",
    type: "interface",
    tags: ["user experience", "data interaction"],
  });

  graph.createNode({
    id: "MedicalTypeSystem",
    type: "specialized application",
    tags: ["healthcare", "structured knowledge"],
  });

  graph.createNode({
    id: "ZeroKnowledgeProofs",
    type: "security feature",
    tags: ["privacy", "AI validation"],
  });

  // Connections
  graph.createEdge("TextDefinedGraph", "Graphviz", { type: "converts to" });
  graph.createEdge("Graphviz", "SVG", { type: "outputs" });
  graph.createEdge("TextDefinedGraph", "MermaidJS", { type: "converts to" });
  graph.createEdge("MermaidJS", "SVG", { type: "outputs" });
  graph.createEdge("SVG", "Aegraph", { type: "imports into" });
  graph.createEdge("TextDefinedGraph", "Aegraph", { type: "inputs to" });
  graph.createEdge("Aegraph", "UpdatePositions", { type: "enables" });
  graph.createEdge("Aegraph", "UpdateOpacity", { type: "enables" });
  graph.createEdge("Aegraph", "UpdateSizes", { type: "enables" });
  graph.createEdge("Aegraph", "UpdateColors", { type: "enables" });
  graph.createEdge("UpdateOpacity", "AegraphModelGraph", { type: "modifies" });
  graph.createEdge("UpdateSizes", "AegraphModelGraph", { type: "modifies" });
  graph.createEdge("UpdatePositions", "AegraphModelGraph", {
    type: "modifies",
  });
  graph.createEdge("UpdateColors", "AegraphModelGraph", { type: "modifies" });
  graph.createEdge("AegraphModelGraph", "Export", { type: "outputs to" });
  graph.createEdge("Export", "TextDefinedGraph", { type: "creates" });

  // New Connections (Enhancing Aegraph's Graph)
  graph.createEdge("Aegraph", "EntityComponentSystem", { type: "built on" });
  graph.createEdge("EntityComponentSystem", "OntologyGenerator", {
    type: "enables",
  });
  graph.createEdge("Aegraph", "MultiLayerDiagrams", { type: "supports" });
  graph.createEdge("MultiLayerDiagrams", "ImageAnnotations", {
    type: "enhances",
  });
  graph.createEdge("Aegraph", "AIAnalysis", { type: "integrates" });
  graph.createEdge("AIAnalysis", "DataChaining", { type: "optimizes" });
  graph.createEdge("Aegraph", "TypeSystem", { type: "incorporates" });
  graph.createEdge("TypeSystem", "MedicalTypeSystem", {
    type: "specializes into",
  });
  graph.createEdge("Aegraph", "GraphBasedUI", { type: "provides" });
  graph.createEdge("Aegraph", "ZeroKnowledgeProofs", {
    type: "enables security for",
  });

  const main = new SceneGraph({
    graph,
    defaultAppConfig: {
      activeView: "ForceGraph3d",
      activeSceneGraph: "graphManagementWorkflow2",
      windows: {
        showEntityDataCard: false,
      },
      forceGraph3dOptions: {
        layout: "Physics",
      },
      activeLayout: CustomLayoutType.Random,
      legendMode: "type",
      activeFilter: null,
    },
  });

  const tmp = new SceneGraph();
  mergeIntoSceneGraph(tmp, main);
  mergeIntoSceneGraph(tmp, aegraphGraph());
  mergeIntoSceneGraph(tmp, aegraphArchitectureDiagram());
  mergeIntoSceneGraph(tmp, semanticWebTechnologiesDiagram());

  return new SceneGraph({
    graph: tmp.getGraph(),
    metadata: {
      name: "Aegraph",
      description: "A basic graph of Aegraph concepts",
    },
  });
};
