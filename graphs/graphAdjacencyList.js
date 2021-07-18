const PriorityQueue = require("./priorityQueue");

class GraphAL {
  constructor() {
    this.adjacencyList = new Map();
    this.uniqueNodes = new Set();
  }

  setList(airport) {
    this.adjacencyList.set(airport, []);
  }

  // Undirected, unweighted
  // If its undirected, we need to implement a bidirectional approach
  // i.e, both ways
  addEdge(origin, destination, weight = 100) {
    try {
      this.adjacencyList.get(origin).push({ destination, weight });
    } catch (TypeError) {
      this.setList(origin);
      this.addEdge(origin, destination, weight);
    }

    // Add bidirectional
    if (!this.nodesNameOnly(destination).includes(origin)) {
      this.addEdge(destination, origin, weight);
    }

    if (!this.uniqueNodes.has(origin)) this.uniqueNodes.add(origin);
    if (!this.uniqueNodes.has(destination)) this.uniqueNodes.add(destination);
  }

  getConnectingNodes(airport) {
    return [...(this.adjacencyList.get(airport) || [])];
  }

  nodesNameOnly(airport) {
    return this.getConnectingNodes(airport).map((node) => node.destination);
  }

  numNodes() {
    return this.uniqueNodes.size;
  }

  // O(V + E)
  bfs(startingNode) {
    if (!this.adjacencyList.has(startingNode)) return;

    const visitedNodes = new Set();
    const queue = [{ destination: startingNode, weight: "Source" }];

    let obj, node, weight, connectingNodes;

    while (queue.length) {
      obj = queue.shift(); // take from front of queue
      node = obj.destination;
      weight = obj.weight;

      if (!visitedNodes.has(node)) {
        connectingNodes = this.adjacencyList.get(node) || [];
        queue.push(...connectingNodes);
        visitedNodes.add(node);

        console.log({ node, weight });
      }
    }
  }

  // O(V + E)
  dfs(startingNode, visitedNodes = null) {
    if (startingNode.weight === undefined)
      startingNode = { destination: startingNode, weight: "Source" };
    if (visitedNodes === null) visitedNodes = new Set();
    if (!this.adjacencyList.has(startingNode.destination)) return;

    const { destination } = startingNode;
    const connectingNodes = this.getConnectingNodes(destination);

    let nextNode;

    while (connectingNodes.length) {
      nextNode = connectingNodes.pop();

      if (!visitedNodes.has(nextNode.destination)) {
        visitedNodes.add(nextNode.destination);
        this.dfs(nextNode, visitedNodes);
        console.log(nextNode, destination);
      }
    }

    if (!visitedNodes.has(destination)) {
      visitedNodes.add(destination);
      console.log(startingNode);
    }
  }

  dijkstraLesson(start, end) {
    const [distances, previous, nodes] = this._initObjects(start);
    let smallest, connectedNodes;

    // console.log({distances, previous, nodes})
    // As long as there is something to visit
    while (nodes.notEmpty()) {
      // Get next vertex to go through
      // PQ makes assumption smallest curr distance will help get to solution faster
      smallest = nodes.dequeue().val;

      // Check if done
      if (smallest === end) {
        const path = this._buildPath(previous, smallest);
        console.log({ path, distance: distances[smallest] });
        // Build path as a string
        return [path, distances[smallest]];
      }

      // Check all nodes connected to smallest
      connectedNodes = this.getConnectingNodes(smallest);

      for (let neighbor of connectedNodes) {
        // Calculate new distance to neighboring node
        let { destination, weight } = neighbor;
        let candidateWeight = distances[smallest] + weight;

        // Check for updates
        if (candidateWeight < distances[destination]) {
          // Update new shortest distance to neighbor
          distances[destination] = candidateWeight;
          // Update the previous node (how to get to neighbor)
          previous[destination] = smallest;
          // Enqueue this neighbor in PQ with new priority distance
          nodes.enqueue(destination, candidateWeight);
        }
      }
    }
  }

  _initObjects(start) {
    const distances = {};
    const fromPrevious = {};
    const pq = new PriorityQueue();

    for (let node of this.uniqueNodes) {
      if (node === start) pq.enqueue(node, 0);
      else pq.enqueue(node, Infinity);

      distances[node] = Infinity;
      fromPrevious[node] = null;
    }

    // Start distance should be 0
    distances[start] = 0;

    return [distances, fromPrevious, pq];
  }

  _buildPath(previousObj, endNode) {
    const results = [endNode];
    let previous = previousObj[endNode];

    while (previous) {
      results.push(previous);
      previous = previousObj[previous];
    }

    return results.reverse().join(" --> ");
  }
}

const g = new GraphAL();

g.addEdge("JFK", "ATL", 10);
g.addEdge("JFK", "LGA", 1);
g.addEdge("JFK", "MIA", 13);
g.addEdge("JFK", "CHI", 8);
g.addEdge("JFK", "DEN", 9);
g.addEdge("CHI", "ATL", 6);
g.addEdge("CHI", "DEN", 5);
g.addEdge("DEN", "LAX", 6);
g.addEdge("ATL", "MIA", 2);
g.addEdge("MIA", "LAX", 25);
g.addEdge("MIA", "CHI", 14);
g.addEdge("LAX", "SEA", 7);
g.addEdge("LAX", "ROK", 30);
g.addEdge("LAX", "CUN", 12);
g.addEdge("ATL", "CUN", 10);
g.addEdge("MIA", "CUN", 9);

console.log("numNodes:", g.numNodes());
console.log("------------------------------------------------");
console.log("BREADTH FIRST");
g.bfs("JFK");
g.bfs("asdas");
console.log("------------------------------------------------");
console.log("DEPTH FIRST");
g.dfs("JFK");
console.log("------------------------------------------------");
console.log("------------------------------------------------");
g.dijkstraLesson("JFK", "JFK");
console.log("------------------------------------------------");
g.dijkstraLesson("MIA", "ROK");
console.log("------------------------------------------------");
g.dijkstraLesson("ATL", "CUN");
console.log("------------------------------------------------");
g.dijkstraLesson("SEA", "LGA");
console.log("------------------------------------------------");
g.dijkstraLesson("DEN", "ATL");
