import React from 'react';

export default function Skills() {
  return (
    <article>
        <h2 className="psj-section-title">Skills</h2>
        <div className="psj-skills-wrapper">
            <div className="psj-skills-column">
                <h3>HTML & CSS</h3>
                <small>expert</small>
                <p>
                    I can write semantic and well‐organised code, that results in well performing websites.
                    I am able to create modern layouts and animations following RWD principles.
                    I am confident in using modern CSS concepts and preprocessors.
                </p>
            </div>
            <div className="psj-skills-column">
                <h3>JavaScript</h3>
                <small>confident</small>
                <p>
                    I have practical knowledge of JS fundamentals and DOM manipulation.
                    I can use ES6 and TypeScript for my advantage.
                    I have experience with jQuery and Angular.
                </p>
            </div>
            <div className="psj-skills-column">
                <h3>PHP & WordPress</h3>
                <small>confident</small>
                <p>
                    I can build a website using WordPress, create and adjust themes and plugins for clients’ needs.
                    I have experience with writing PHP components and modules for highly customisable websites.
                    I can create complex editing experience with Gutenberg editor and Advanced Custom Fields.
                </p>
            </div>
            <div className="psj-skills-column">
                <h3>Working with designs</h3>
                <small>confident</small>
                <p>
                    I have skills necessary to recreate a designed layout by code.
                    I have working experience with using Avocode, Figma, Zeplin and Adobe Photoshop.
                    I am able to prepare mockups and basic designs.
                </p>
            </div>
        </div>
    </article>
  );
}
