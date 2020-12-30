function parse_skills_data(skills_data) {
    let skills = new Set();
    let links = new Set();
    for (entry of skills_data) {
        skills.add({data: {id: entry.skill}});
        for (relative of entry.related) {
            skills.add({data: {id: relative}})
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

fetch("skills-data.json")
.then((resp) => {
    return resp.json()
})
.then((skills_data) => {
    let cy = cytoscape({
        container: document.getElementById("cy"),
        elements: parse_skills_data(skills_data),
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    'label': 'data(id)'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                }
            }
        ],
        layout: {
            name: 'fcose',
            // nodeSeparation: 75,
            // nodeRepulsion: 5000,
            // idealEdgeLength: 150,
        }
    });
});
