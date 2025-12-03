import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-sky-50 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-4"
        >
          Pragati Priyadarshini
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg max-w-2xl mx-auto text-gray-600"
        >
          Systems Engineer • Middleware Specialist (WebLogic, Apache) • Linux & Bash Automation •
          ITIL-driven Production Support • Performance Optimization • DevOps Enthusiast
        </motion.p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="mailto:pragatipriyadarshini0312@gmail.com"
            className="px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/pragati-priyadarshini"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto p-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          About Me
        </motion.h2>

        <p className="text-gray-700 leading-relaxed">
          I am a Systems Engineer with strong expertise in WebLogic Server Administration, Apache/OHS,
          Linux server operations, automation using Shell Scripting, and L1–L2 technical production support.
          I have hands-on experience in deployment operations, environment monitoring, thread dump analysis,
          health checks, and resolving high-priority incidents under strict SLAs.
          <br /><br />
          Currently expanding my skillset in DevOps (CI/CD, Docker, AWS), and Prompt Engineering while focusing
          on building scalable, automated, resilient support systems.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto p-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
          {[
            "WebLogic Administration",
            "Apache / OHS",
            "Linux (RHEL, Ubuntu)",
            "Shell Scripting & Automation",
            "Monitoring & Troubleshooting",
            "Log & Thread Dump Analysis",
            "Deployment Management",
            "ITIL Processes",
            "Python (Pandas, Plotly, Seaborn)",
            "Nginx & SSL",
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-3 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto p-6">
        <motion.h2 className="text-3xl font-bold mb-6">Experience</motion.h2>

        <div className="space-y-6">
          {/* Cognizant - Systems Engineer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-5 border rounded-xl bg-white shadow-sm"
          >
            <h3 className="text-xl font-semibold">Cognizant — Systems Engineer</h3>
            <p className="text-gray-600">Dec 2024 – Present</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Managed WebLogic domains, clusters, deployments and environment stability.</li>
              <li>Performed log analysis, thread dumps, performance checks, and RCA creation.</li>
              <li>Automated repetitive tasks using Linux Bash to reduce manual operational overhead.</li>
              <li>Led L1/L2 support handling incidents, change requests, maintenance activities.</li>
            </ul>
          </motion.div>

          {/* Programmer Analyst Trainee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-5 border rounded-xl bg-white shadow-sm"
          >
            <h3 className="text-xl font-semibold">Cognizant — Programmer Analyst Trainee</h3>
            <p className="text-gray-600">Dec 2023 – Dec 2024</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Supported middleware environments and assisted in deployments & patching cycles.</li>
              <li>Gained hands-on experience in Oracle Fusion Middleware ecosystem.</li>
              <li>Strengthened troubleshooting and debugging skills during live issues.</li>
            </ul>
          </motion.div>

          {/* Intern */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-5 border rounded-xl bg-white shadow-sm"
          >
            <h3 className="text-xl font-semibold">Cognizant — Middleware Intern</h3>
            <p className="text-gray-600">Oct 2023 – Dec 2023</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Trained in Java, WebLogic, OHS, basic AWS/Azure, Unix fundamentals.</li>
              <li>Enhanced debugging and environment setup skills.</li>
            </ul>
          </motion.div>

          {/* Content Writer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-5 border rounded-xl bg-white shadow-sm"
          >
            <h3 className="text-xl font-semibold">Magnigeeks Technologies — Freelance Content Writer</h3>
            <p className="text-gray-600">Mar 2023 – Jan 2024</p>
            <p className="text-gray-700 mt-2">
              Produced SEO-optimized, user-oriented content that resulted in:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>20% improvement in website traffic</li>
              <li>30% increase in user engagement</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Oracle WebLogic Server 12c Essentials</li>
          <li>Python for Data Analysis & Visualization</li>
          <li>Nginx, Apache, SSL Encryption</li>
          <li>Vibe Code Hackathon — Gemini Code Assist</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} Pragati Priyadarshini — All rights reserved.
      </footer>
    </div>
  );
}