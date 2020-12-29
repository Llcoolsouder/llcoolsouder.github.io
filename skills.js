
    fetch("skills-data.json")
    .then((resp) => {
        return resp.json()
    })
    .then((skills_data) => {
        let cy = cytoscape({
            container: document.getElementById("cy"),
            elements: skills_data,
            style
        });
    });
