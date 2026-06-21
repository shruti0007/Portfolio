import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p className="home-about-body">
            My stack centres on SQL and Power BI. I'm comfortable writing complex queries
            — window functions, CTEs, multi-table joins, query optimisation — and I care
            about writing SQL that's readable six months later, not just SQL that runs.

            <br /><br />

            On the Power BI side, I focus on the data model first. DAX is much less
            painful when the star schema underneath it is clean.

            <br /><br />

            Python is where I handle the pipeline work: ingestion, cleaning,
            transformation, loading. I use Pandas extensively, and I've started applying
            scikit-learn for predictive work where the project calls for it.

            <br /><br />

            PostgreSQL is my database of choice — I like designing schemas that are built
            for analytics performance, not just storage.

            <br /><br />

            I'm methodical about documentation and reproducibility. If I build a
            pipeline, I want someone else to be able to understand it, run it, and extend
            it without needing to ask me how it works.
          </p>

          <br />

          <h1 className="project-heading">
            What I'm <span className="purple">Looking For</span>
          </h1>

          <p className="home-about-body">
            I'm open to full-time data analyst roles and freelance analytics projects. I
            want to work somewhere that takes data quality seriously — where the work I
            do actually informs decisions, not just reports.

            <br /><br />

            If you're building something where clean pipelines, clear dashboards, and
            honest analysis matter, I'd love to talk.

            <br /><br />

            The best way to reach me is by email at
            <span className="purple"> devyangpanchani111@gmail.com</span>, or you can
            browse my work directly on GitHub.
          </p>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
