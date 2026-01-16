let topics = [];

function addTopic() {
    const name = document.getElementById("topicName").value;
    const diff = document.getElementById("difficulty").value;
    const hrs = document.getElementById("hours").value;

    if (!name || !hrs) {
        alert("Please fill all fields");
        return;
    }

    topics.push({ name, diff, hrs });
    renderTopics();
}

function renderTopics() {
    const table = document.getElementById("topicTable");

    table.innerHTML = `
        <tr>
            <th>Topic</th>
            <th>Confidence</th>
            <th>Hours</th>
            <th>Status</th>
        </tr>
    `;

    topics.forEach(t => {
        table.innerHTML += `
            <tr>
                <td>${t.name}</td>
                <td>${t.diff}</td>
                <td>${t.hrs}</td>
                <td>Pending</td>
            </tr>
        `;
    });
}

function generateSchedule() {
    const weekly = document.getElementById("weeklyHours").value;
    if (!weekly) {
        alert("Enter weekly hours");
        return;
    }

    let html = "<h3>Your Study Plan</h3><ul>";
    topics.forEach(t => {
        html += `<li>${t.name} → ${t.hrs} hours</li>`;
    });
    html += "</ul>";

    document.getElementById("scheduleOutput").innerHTML = html;
}
