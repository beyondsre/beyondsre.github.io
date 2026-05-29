const themeToggleBtn = document.getElementById("theme-toggle");
const icon = themeToggleBtn.querySelector("i");
const currentTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-theme", currentTheme);
updateIcon(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateIcon(theme);
});

function updateIcon(theme) {
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

const blogPosts = [
  {
    id: "sre-post-1",
    title: "Understanding 9 Pillars of SRE",
    date: "May 30, 2026",
    readTime: "15 min read",
    excerpt:
      "Want to understand 9 pillars of SRE in easy language? Follow along then",
    content: `
       <p>As Site Reliability Engineers (SREs), a frequent discussion topic is the nine pillars of Site Reliability Engineering.<br> While the concepts are widely understood, explaining them simply can be challenging.<br> Here is a clear, professional overview of the nine pillars of SRE using straightforward concepts.</p> <br><hr><br> <h3>1. Culture | Collaborative Environment</h3> <p>Consider a scenario where a team member makes a mistake that affects a system.<br> Instead of assigning blame, the team works together to understand the root cause.<br> The focus is on learning and improving the system architecture to prevent future occurrences.<br> This represents the SRE culture: a blameless, improvement-driven approach.</p> <br> <h3>2. Work Sharing | Shared Responsibility</h3> <p>In a traditional setup, one team might build software while another maintains it.<br> In SRE, both development and operations teams share the workload.<br> Everyone contributes to building new features and maintaining system stability.<br> This ensures alignment and shared accountability for the health of the service.</p> <br> <h3>3. Toil Reduction | Strategic Automation</h3> <p>Performing repetitive, manual tasks every day drains valuable engineering time.<br> By writing scripts or building tools to handle these tasks automatically, engineers are freed up.<br> This allows the team to focus on high-value, creative engineering work.<br> In SRE, eliminating operational toil through automation is a core priority.</p> <br> <h3>4. SLOs & Error Budgets | Managing Risk</h3> <p>Teams agree on an acceptable level of failure, known as an error budget.<br> If a system is performing well and the budget is intact, the team can release new features quickly.<br> If the budget is depleted due to instability, feature releases are paused to focus on reliability.<br> This mechanism effectively balances the need for rapid innovation with system stability.</p> <br> <h3>5. Measurement | Data-Driven Decisions</h3> <p>To understand system performance, you must track the right metrics.<br> Without accurate data, it is impossible to identify bottlenecks or measure improvements.<br> SRE relies heavily on robust monitoring and observability tools.<br> The guiding principle is simple: if you cannot measure it, you cannot improve it.</p> <br> <h3>6. Anti-Fragility | Building Resilient Systems</h3> <p>Rather than building rigid systems that fail under pressure, engineers design for adaptability.<br> Systems are architected to gracefully handle unexpected traffic spikes or component failures.<br> Teams may even inject controlled failures to test and strengthen system defenses.<br> This practice ensures systems grow stronger and more reliable through stress.</p> <br> <h3>7. Deployments | Progressive Rollouts</h3> <p>Deploying a massive update all at once introduces significant risk.<br> Instead, updates are released to a small subset of users first.<br> If the system remains stable, the rollout continues; if issues arise, it is quickly rolled back.<br> This strategy of small, incremental deployments minimizes potential user impact.</p> <br> <h3>8. Performance Management | Capacity Planning</h3> <p>If user demand suddenly spikes and resources are insufficient, the service degrades.<br> Users experience latency, frustration, and potential downtime.<br> Effective capacity planning ensures the system always has adequate resources to meet demand.<br> This guarantees a consistently smooth and responsive user experience.</p> <br> <h3>9. Incident Management | Systematic Resolution</h3> <p>When an outage occurs, the immediate priority is to restore normal service.<br> Once the system is stable, the team conducts a thorough review to identify the underlying issue.<br> The final step is implementing safeguards to prevent the same issue from recurring.<br> SRE focuses on rapid mitigation followed by permanent root cause resolution.</p> <br> <p>Ultimately, SRE extends beyond managing servers, alerts, and uptime. It is a comprehensive approach to building systems and engineering cultures that continuously learn, adapt, and scale reliably.</p>
        `,
  },
  {
    id: "about-me",
    title: "Who am I?",
    date: "May 28, 2026",
    readTime: "5 min read",
    excerpt: "Follow this article to know about me",
    content: `
            <p>Welcome to my channel! I'm Shayan, a passionate software engineer with over five years of experience in Python, Site Reliability Engineering (SRE), DevOps, and Observability. Throughout my career, I've encountered numerous scenarios that required me to develop Proofs of Concept (POCs) to explore various functionalities and possibilities in software implementation.
            This channel is dedicated to sharing that knowledge with you. If you're eager to deepen your understanding and elevate your skills as a software engineer, you're in the right place. Join me on this journey of learning and discovery, where we'll dive into real-world applications and insights that can help you thrive in the IT field. Subscribe for a transformative learning experience — let's grow together!</p>
        `,
  },
];

const blogGrid = document.querySelector(".blog-grid");
if (blogGrid) {
  blogGrid.innerHTML = "";

  blogPosts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "blog-card";
    article.innerHTML = `
            <div class="blog-meta">${post.date} • ${post.readTime}</div>
            <h3><a href="blog.html?id=${post.id}">${post.title}</a></h3>
            <p>${post.excerpt}</p>
            <a href="blog.html?id=${post.id}" class="read-more">Read Article →</a>
        `;
    blogGrid.appendChild(article);
  });
}
