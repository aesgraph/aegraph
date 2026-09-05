/* eslint-disable unused-imports/no-unused-vars */
import { DEFAULT_APP_CONFIG } from "../../../AppConfig";
import { createStoryCardsFromDocsDirectory } from "../../../components/applets/StoryCards/cards/utils";
import { EntitiesContainer } from "../../../core/model/entity/entitiesContainer";
import { Graph } from "../../../core/model/Graph";
import { createEdgesTo } from "../../../core/model/GraphUtils";
import { Node, NodeId } from "../../../core/model/Node";
import { SceneGraph } from "../../../core/model/SceneGraph";

export const demo_Aegraph_Applications = () => {
  const graph = new Graph();

  const storyCards = graph.createNode({
    id: "Story Cards",
    type: "storyCard",
    userData: {
      title: "Story Cards",
      description:
        "Story cards are a way to represent complex information in a fun and interactive way.\nThey give creators a new paradigm for communicating information that allows users to explore different narratives that interest them.",
      tags: ["aegraph", "story cards", "interactive"],
    },
  });

  const interactiveHarryPotterTimeTravelAnalysis = graph.createNode({
    id: "Interactive Harry Potter Time Travel Analysis",
    type: "storyCard",
    userData: {
      title: "Interactive Harry Potter Time Travel Analysis",
      description:
        "An interactive analysis of time travel in the Harry Potter series, allowing users to explore different timelines and outcomes based on character decisions. Aegraph allows this thing to be easily codified, shared, and extendend to arbitrary complexity.",
      tags: ["harry potter", "time travel", "interactive"],
    },
  });

  const howToCreateRealMagic = graph.createNode({
    id: "Magic Explained",
    type: "storyCard",
    userData: {
      title: "Magic Explained",
      description:
        "What would it take to create real magic? How would we technically achieve transfiguration?",
      tags: ["aegraph", "magic", "applications"],
      markdownFile: "/storyCardFiles/magicExplained/intro.md",
    },
  });

  const fieldTheoreticalFrameworksAndComputationalPhilosophy = graph.createNode(
    {
      id: "Field Theoretical Frameworks and Computational Philosophy",
      type: "storyCard",
      userData: {
        title: "Field Theoretical Frameworks and Computational Philosophy",
        description:
          "Field theoretical frameworks and computational philosophy provide a way to understand and model complex systems, allowing for the exploration of ideas and concepts in a structured and interactive way. Aegraph leverages these frameworks to create a unified platform for codifying, inspecting, and navigating information.",
        tags: ["aegraph", "field theory", "computational philosophy"],
        markdownFile: "aegraph/fieldTheoreticalFrameworks.md",
      },
    }
  );

  const theInspirationOfStoryCardsInAegraph = graph.createNode({
    id: "The Inspiration of Story Cards in Aegraph",
    type: "storyCard",
    userData: {
      title: "The Inspiration of Story Cards in Aegraph",
      description:
        "The inspiration for story cards in Aegraph comes from various sources, including interactive fiction, choose-your-own-adventure books, and the desire to create engaging, branching narratives that allow users to explore complex information in a fun and interactive way. Furthermore, taking a scientific approach to the codification, inspection, and navigation of information.",
      tags: ["aegraph", "story cards", "inspiration"],
      markdownFile: "aegraph/inspiration.md",
    },
  });

  const scientificChallengeIsOrganizationalComplexity = graph.createNode({
    id: "Scientific Challenge is Organizational Complexity",
    type: "storyCard",
    userData: {
      title: "Scientific Challenge is Organizational Complexity",
      description:
        "The scientific challenge of our time is not just about discovering new facts, but about organizing and making sense of the vast amount of information we have. Aegraph provides a platform for codifying, inspecting, and navigating this information in a unified way.",
      tags: ["aegraph", "scientific challenge", "organizational complexity"],
      markdownFile: "aegraph/scientificChallenge.md",
    },
  });

  const accessibleComputationForWeb30 = graph.createNode({
    id: "Accessible Computation for Web 3.0",
    type: "storyCard",
    userData: {
      title: "Accessible Computation for Web 3.0",
      description:
        "Aegraph aims to make computation accessible for everyone, enabling users to create and share complex applications without needing deep technical knowledge. This democratizes access to powerful tools and allows for a more inclusive approach to software development.",
      tags: ["aegraph", "web 3.0", "accessible computation"],
      markdownFile: "aegraph/accessibleComputation.md",
    },
  });

  createEdgesTo(
    graph,
    theInspirationOfStoryCardsInAegraph.getId(),
    [
      scientificChallengeIsOrganizationalComplexity,
      accessibleComputationForWeb30,
    ].map((node) => node.getId()),
    { type: "StoryChoice", tags: ["EntryPoint"] }
  );

  const anIdea = graph.createNode({
    id: "An Idea",
    type: "storyCard",
    userData: {
      title: "An Idea",
      description:
        "An idea is a thought or suggestion as to a possible course of action. It can be a starting point for creating something new, or a way to solve a problem.",
      tags: ["idea", "thought", "suggestion"],
      markdownFile: "quips/anIdea.md",
    },
  });

  // Add a node that references a markdown file
  const numerologyInformation = graph.createNode({
    id: "Numerology Information",
    type: "storyCard",
    userData: {
      title: "Reading e",
      markdownFile: "numerology.md", // This will be loaded from /public/posts/numerology.md
      tags: ["numerology", "belief systems", "markdown"],
    },
  });

  // Connect it to the story cards node
  graph.createEdge(storyCards.getId(), numerologyInformation.getId(), {
    type: "StoryChoice",
    label: "Learn about Numerology",
  });

  const astrologyInformation = graph.createNode({
    id: "Astrology Information",
    type: "storyCard",
    userData: {
      title: "Legitimacy in Astrology",
      markdownFile: "astrology.md", // This will be loaded from /public/posts/astrology.md
      tags: ["astrology", "belief systems", "markdown"],
    },
  });

  const aboutTheAlethiometer = graph.createNode({
    id: "About the Alethiometer",
    type: "storyCard",
    tags: ["EntryPoint"],
    userData: {
      title: "About the Alethiometer",
      description:
        "The alethiometer, or golden compass, is a fictional device from Philip Pullman's 'His Dark Materials' series. It is used to find truth and navigate complex moral landscapes.",
      tags: ["alethiometer", "golden compass", "fiction"],
      markdownFile: "alethiometer/intro.md", // This will be loaded from /public/posts/aboutTheAlethiometer.md
    },
  });

  const simpleCaseAlethiometer = graph.createNode({
    id: "Simple Case Alethiometer",
    type: "storyCard",
    userData: {
      title: "Simple Case Alethiometer",
      description:
        "A simple case of using the alethiometer to answer a question about the legitimacy of astrology.",
      tags: ["alethiometer", "factor graph", "simple case"],
      markdownFile: "alethiometer/simpleCase.md", // Make sure this path matches your directory structure
    },
  });

  const advancedCaseAlethiometer = graph.createNode({
    id: "Advanced Case Alethiometer",
    type: "storyCard",
    userData: {
      title: "Advanced Case Alethiometer",
      description:
        "An advanced case of using the alethiometer to answer a question about the legitimacy of astrology, involving multiple layers of complexity and decision-making.",
      tags: ["alethiometer", "astrology", "advanced case"],
      markdownFile: "alethiometer/advancedCase.md", // This will be loaded from /public/posts/advancedCaseAlethiometer.md
    },
  });

  const constraintGraph = graph.createNode({
    id: "Constraint Graph",
    type: "storyCard",
    userData: {
      title: "Constraint Graph",
      description:
        "A constraint graph is a way to represent relationships between different entities in a system, allowing for complex decision-making and analysis.",
      tags: ["constraint graph", "decision making", "analysis"],
      markdownFile: "constraintGraph.md", // This will be loaded from /public/posts/constraintGraph.md
    },
  });

  const factorGraph = graph.createNode({
    id: "Factor Graph",
    type: "storyCard",
    userData: {
      title: "Factor Graph",
      description:
        "A factor graph is a bipartite graph that represents the factorization of a function into a product of smaller functions, allowing for efficient computation and analysis of complex systems.",
      tags: ["factor graph", "computation", "analysis"],
      markdownFile: "factorGraph.md", // This will be loaded from /public/posts/factorGraph.md
    },
  });

  graph.createEdge(simpleCaseAlethiometer.getId(), constraintGraph.getId(), {
    type: "StoryChoice",
  });

  graph.createEdge(advancedCaseAlethiometer.getId(), factorGraph.getId(), {
    type: "StoryChoice",
  });

  const alethiometerCases = createEdgesTo(
    graph,
    aboutTheAlethiometer.getId(),
    [simpleCaseAlethiometer, advancedCaseAlethiometer].map((node) =>
      node.getId()
    ),
    { type: "StoryChoice", tags: ["EntryPoint"] }
  );

  graph.createEdge(
    numerologyInformation.getId(),
    astrologyInformation.getId(),
    {
      type: "StoryChoice",
      label: "expansion",
    }
  );

  const conceptAlbumGallery = graph.createNode({
    id: "Concept Album Gallery",
    type: "storyCard",
    userData: {
      title: "Concept Album Gallery",
      description:
        "A gallery of concept albums, showcasing the intersection of music and storytelling through thematic and narrative coherence.",
      tags: ["concept album", "gallery", "music"],
      markdownFile: "conceptAlbum/gallery.md", // This will be loaded from /public/posts/conceptAlbumGallery.md
    },
  });

  const aboutAegraph = graph.createNode({
    id: "About Aegraph",
    type: "storyCard",
    userData: {
      title: "About Aegraph",
      description:
        "Aegraph is a platform for creating and sharing interactive stories, allowing users to explore complex information in a fun and engaging way. It provides tools for codifying, inspecting, and navigating information, enabling a new paradigm for communication and interaction.",
      tags: ["aegraph", "platform", "interactive stories"],
      markdownFile: "aegraph/about.md", // This will be loaded from /public/posts/aboutAegraph.md
    },
  });

  const unifiedDataPlatform = graph.createNode({
    id: "Unified Data Platform",
    type: "storyCard",
    userData: {
      title: "Unified Data Platform",
      description:
        "Aegraph serves as a unified data platform, allowing users to create, share, and interact with complex data structures in a modular and composable way. This enables a new level of flexibility and extensibility in application development, making it easier to build and maintain complex systems.",
      tags: ["aegraph", "data platform", "modular development"],
      markdownFile: "aegraph/unifiedDataPlatform.md", // This will be loaded from /public/posts/unifiedDataPlatform.md
    },
  });

  const aegraphTypeSystem = graph.createNode({
    id: "Aegraph Type System",
    type: "storyCard",
    userData: {
      title: "Aegraph Type System",
      description:
        "The Aegraph type system provides a way to define and enforce the structure of data in Aegraph, allowing for better organization and interaction with complex information. It enables users to create rich, structured data that can be easily navigated and understood.",
      tags: ["aegraph", "type system", "data structure"],
      markdownFile: "aegraph/typeSystem.md", // This will be loaded from /public/posts/aegraphTypeSystem.md
    },
  });

  const modelAndSceneGraphs = graph.createNode({
    id: "Model and Scene Graphs",
    type: "storyCard",
    userData: {
      title: "Model and Scene Graphs",
      description:
        "Model and scene graphs are fundamental components of Aegraph, providing a way to represent and navigate complex information structures. They enable users to create, share, and interact with rich, structured data in a unified way, allowing for better organization and understanding of complex systems.",
      tags: ["aegraph", "model graph", "scene graph"],
      markdownFile: "aegraph/modelAndSceneGraphs.md", // This will be loaded from /public/posts/modelAndSceneGraphs.md
    },
  });

  const annotations = graph.createNode({
    id: "Annotations",
    type: "storyCard",
    userData: {
      title: "Annotations",
      description:
        "Annotation trees are a way to represent hierarchical relationships between different pieces of information, allowing for complex data structures to be easily navigated and understood. They are a key feature of Aegraph, enabling users to create and interact with rich, structured data in a unified way.",
      tags: ["aegraph", "annotation trees", "hierarchical relationships"],
      markdownFile: "aegraph/annotationTrees.md", // This will be loaded from /public/posts/annotationTrees.md
    },
  });

  const imageBoxes = graph.createNode({
    id: "Image Boxes",
    type: "storyCard",
    userData: {
      title: "Image Boxes",
      description:
        "Image boxes are a way to represent images and their associated metadata in a structured way, allowing users to easily navigate and interact with visual information. They are a key feature of Aegraph, enabling users to create rich, interactive visualizations and galleries.",
      tags: ["aegraph", "image boxes", "visual information"],
      markdownFile: "aegraph/imageBoxCreator.md", // This will be loaded from /public/posts/imageBoxes.md
    },
  });

  const documents = graph.createNode({
    id: "Documents",
    type: "storyCard",
    userData: {
      title: "Documents",
      description:
        "Documents in Aegraph are structured representations of information, allowing users to create, share, and interact with complex data in a modular and composable way. They serve as the foundation for building rich, interactive applications and stories, enabling a new level of flexibility and extensibility in information management.",
      tags: ["aegraph", "documents", "information management"],
      markdownFile: "aegraph/documents.md", // This will be loaded from /public/posts/documents.md
    },
  });

  const songAnnotations = graph.createNode({
    id: "Song Annotations",
    type: "storyCard",
    userData: {
      title: "Song Annotations",
      description:
        "Song annotations are a way to represent and interact with musical information, allowing users to create, share, and explore complex musical structures in a unified way. They enable a new level of flexibility and extensibility in music applications, making it easier to build and maintain complex systems.",
      tags: ["aegraph", "song annotations", "music applications"],
      markdownFile: "aegraph/songAnnotations.md", // This will be loaded from /public/posts/songAnnotations.md
    },
  });

  const termDefinitions = graph.createNode({
    id: "Term Definitions",
    type: "storyCard",
    userData: {
      title: "Term Definitions",
      description:
        "Term definitions in Aegraph provide a way to codify and standardize the meaning of terms and concepts, enabling users to create, share, and interact with complex information in a unified way. This allows for better communication and understanding across different domains and applications.",
      tags: ["aegraph", "term definitions", "standardization"],
      markdownFile: "aegraph/termDefinitions.md", // This will be loaded from /public/posts/termDefinitions.md
    },
  });

  createEdgesTo(
    graph,
    annotations.getId(),
    [imageBoxes, documents, songAnnotations, termDefinitions].map((node) =>
      node.getId()
    ),
    { type: "StoryChoice", tags: ["EntryPoint"] }
  );

  const composabilityInAegraph = graph.createNode({
    id: "Composability in Aegraph",
    type: "storyCard",
    userData: {
      title: "Composability in Aegraph",
      description:
        "Composability in Aegraph refers to the ability to create complex applications by combining simple, reusable components. This allows for flexible and modular development, enabling users to build applications that can be easily extended and customized.",
      tags: ["aegraph", "composability", "modular development"],
      markdownFile: "aegraph/composability.md", // This will be loaded from /public/posts/composabilityInAegraph.md
    },
  });

  const entityComponentSystem = graph.createNode({
    id: "Entity Component System",
    type: "storyCard",
    userData: {
      title: "Entity Component System",
      description:
        "An Entity Component System (ECS) is a software architectural pattern that allows for the composition of complex systems from simple, reusable components. It is widely used in game development and other domains where flexibility and modularity are important.",
      tags: ["aegraph", "entity component system", "ecs"],
      markdownFile: "aegraph/entityComponentSystem.md", // This will be loaded from /public/posts/entityComponentSystem.md
    },
  });

  createEdgesTo(
    graph,
    composabilityInAegraph.getId(),
    [entityComponentSystem].map((node) => node.getId()),
    { type: "StoryChoice", tags: ["EntryPoint"] }
  );

  const aegraphIsIntermediateRepresentationLanguage = graph.createNode({
    id: "Intermediate Representation Language",
    type: "storyCard",
    userData: {
      title: "Aegraph is an Intermediate Representation Language",
      description:
        "Aegraph serves as an intermediate representation language, allowing for the codification and inspection of information in a unified way. This enables users to create complex applications that can interact with various data formats and systems, providing a flexible and extensible platform for information management.",
      tags: [
        "aegraph",
        "intermediate representation",
        "information management",
      ],
      markdownFile: "keyTerms/intermediateRepresentationLanguage.md", // This will be loaded from /public/posts/aegraphIsIntermediateRepresentationLanguage.md
    },
  });

  const aegraphCopilot = graph.createNode({
    id: "Aegraph Copilot",
    type: "storyCard",
    userData: {
      title: "Aegraph Copilot",
      description:
        "Aegraph Copilot is an AI-powered assistant that helps users navigate and interact with Aegraph. It provides intelligent suggestions and insights, making it easier to explore complex information and build applications.",
      tags: ["aegraph", "copilot", "ai assistant"],
      markdownFile: "aegraph/copilot.md", // This will be loaded from /public/posts/aegraphCopilot.md
    },
  });

  const aegraphChromeExtension = graph.createNode({
    id: "Aegraph Chrome Extension",
    type: "storyCard",
    userData: {
      title: "Aegraph Chrome Extension",
      description:
        "The Aegraph Chrome Extension allows users to interact with Aegraph directly from their browser, enabling seamless integration with web applications and services. It provides a powerful tool for codifying, inspecting, and navigating information in a unified way.",
      tags: ["aegraph", "chrome extension", "browser integration"],
      markdownFile: "aegraph/chromeExtension.md", // This will be loaded from /public/posts/aegraphChromeExtension.md
    },
  });

  const interspection = graph.createNode({
    id: "Interspection in Aegraph",
    type: "storyCard",
    userData: {
      title: "Interspection in Aegraph",
      description:
        "Interspection is the entire gamut of inspecting, navigating, and interacting with information in Aegraph. People can use Aegraph to inter information - codifying it in a standard language that allows it to be intered on in a unified application ecosystem. This spans from creating fun interactive stories, to complex linking annotation schemes across previously disparate data formats, or creating complex data science tools.",
      tags: ["aegraph", "interspection", "information", "codification"],
      markdownFile: "alethiometer/interspection.md", // This will be loaded from /public/posts/interspection.md
    },
  });

  const test = graph.createNode({
    id: "Test",
    type: "storyCard",
    userData: {
      title: "Test",
      description: "This is a test node for demonstration purposes.",
      tags: ["test", "demo"],
      markdownFile: "docs/applets/applets.md", // This will be loaded from /public/posts/test.md
    },
  });

  const bigScienceAndOrganizationalComplexity = graph.createNode({
    id: "Big Science and Organizational Complexity",
    type: "storyCard",
    userData: {
      title: "Big Science and Organizational Complexity",
      description:
        "Big science projects often face challenges related to organizational complexity, requiring innovative approaches to manage and navigate large-scale collaborations. Aegraph provides tools for codifying, inspecting, and navigating complex information structures, enabling better organization and understanding of complex systems.",
      tags: ["aegraph", "big science", "organizational complexity"],
      markdownFile: "aegraph/bigScience.md", // This will be loaded from /public/posts/bigScienceAndOrganizationalComplexity.md
    },
  });

  createEdgesTo(
    graph,
    aboutAegraph.getId(),
    [
      interspection,
      aegraphTypeSystem,
      composabilityInAegraph,
      annotations,
      aegraphIsIntermediateRepresentationLanguage,
      modelAndSceneGraphs,
      aegraphCopilot,
      aegraphChromeExtension,
    ].map((node) => node.getId()),
    { type: "StoryChoice", tags: ["EntryPoint"] }
  );

  createStoryCardsFromDocsDirectory(graph).then(
    (docsNodes: EntitiesContainer<NodeId, Node>) => {
      createEdgesTo(
        graph,
        storyCards.getId(),
        [docsNodes.first()!].map((node: Node) => node.getId()),
        { type: "StoryChoice", tags: ["EntryPoint"] }
      );
    }
  );

  const demo_stories = createEdgesTo(
    graph,
    storyCards.getId(),
    [
      interactiveHarryPotterTimeTravelAnalysis,
      howToCreateRealMagic,
      fieldTheoreticalFrameworksAndComputationalPhilosophy,
      theInspirationOfStoryCardsInAegraph,
      aboutTheAlethiometer,
      anIdea,
      conceptAlbumGallery,
      aboutAegraph,
      test,
      bigScienceAndOrganizationalComplexity,
    ].map((node) => node.getId()),
    { type: "StoryChoice", tags: ["EntryPoint"] }
  );

  console.log("reached here");

  return new SceneGraph({
    graph,
    metadata: {
      name: "Aegraph Applications Story Cards",
      description:
        "An actual version for explaining how Aegraph Story Cards work.",
    },
    defaultAppConfig: {
      ...DEFAULT_APP_CONFIG(),
      activeLayout: "dot",
      activeView: "ReactFlow",
    },
  });
};
