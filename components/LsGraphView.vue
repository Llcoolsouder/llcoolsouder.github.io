<script>
import cytoscape from "cytoscape";

export default {
    methods: {
        parseSkillsData(skills_data) {
            let skills = new Set();
            let links = new Set();
            for (var entry of skills_data) {
                skills.add({ data: { id: entry.skill } });
                for (var relative of entry.related) {
                    skills.add({ data: { id: relative } })
                    links.add({
                        data: {
                            id: entry.skill + relative,
                            source: entry.skill,
                            target: relative
                        }
                    })
                }
            }
            return [...skills, ...links]
        }
    },
    computed: {
        nodeColor() {
            return 
        }
    },
    mounted() {
        // Draw graph
        fetch("skills-data.json")
            .then((resp) => {
                return resp.json()
            })
            .then((skills_data) => {
                let cy = cytoscape({
                    container: this.$refs.graph,
                    elements: this.parseSkillsData(skills_data),
                    style: [
                        {
                            selector: 'node',
                            style: {
                                'color': 'black',
                                'background-color': 'white',
                                'label': 'data(id)',
                                'text-halign': 'center',
                                'text-valign': 'center',
                                'text-wrap': 'wrap',
                                'font-size': '0.72em',
                                'text-max-width': 15
                            }
                        },

                        {
                            selector: 'edge',
                            style: {
                                'width': 3,
                                'line-color': '#0CCE6B',
                                'target-arrow-color': '#0CCE6B',
                                'target-arrow-shape': 'triangle',
                                'curve-style': 'bezier'
                            }
                        }
                    ],
                    layout: {
                        name: 'cose',
                        idealEdgeLength: edge => 64,
                        edgeElasticity: edge => 64,
                        nodeRepulsion: node => {
                            return 2 ** (13 + node.connectedEdges().length);
                        },
                        gravity: 2
                    },
                    ready: function () {
                        let maxConnections = Math.max(...(this.nodes().map(node => node.connectedEdges().length)))
                        this.nodes().forEach(node => {
                            let edges = node.connectedEdges().length;
                            let size = 11 * (edges + 6);
                            node.css("height", size);
                            node.css("width", size);
                            node.css("font-size",
                                Math.max(0, (10 - node.data().id.length) * (1/10))
                                + (edges / maxConnections + 0.59) + 'em')
                        });
                    }
                });

                // Event Handlers
                window.addEventListener("resize", () => { cy.resize(); cy.fit() });
            });
    }
}
</script>


<template>
    <div ref="graph"></div>
</template>

<style scoped lang="scss">

div {
    border-radius: 1em;
    max-height: 100vw;
    height: 36em;
    width: 100%;
    background-color: lsStyle.$color-primary;
    pointer-events: none;
}
</style>
