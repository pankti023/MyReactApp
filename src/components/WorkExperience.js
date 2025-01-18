import React from 'react';
/*import './WorkExperience.css';*/



function WorkExp() {
    const WorkExperience = [
        {
            title: 'Assistant Service Manager',
            company: 'Farmboy Inc.',
            duration: 'January 2023 – Present',
            description: [
                'Manage day-to-day operations of the service department.',
                'Lead and coordinate a team of customer service associates.',
                'Ensure customer satisfaction and resolve escalated issues.',
                'Assist in training and onboarding new employees.',
                'Collaborate with cross-functional teams to improve processes.'
            ]
        },
        {
            title: 'System Administrator',
            company: 'Vedang Enterprise',
            duration: 'July 2021 – January 2022',
            description: [
                'Managed and maintained company’s IT infrastructure.',
                'Ensured network security and performed system backups.',
                'Provided technical support and troubleshooting for staff.',
                'Performed routine software and hardware updates.'
            ]
        },
        {
            title: 'Research Associate',
            company: 'AI Hub',
            duration: 'June 2022 – September 2022',
            description: [
                'Worked on AI/ML projects to develop innovative solutions.',
                'Conducted research and experiments on AI models.',
                'Collaborated with teams to analyze and process data.',
                'Assisted in the development of algorithms and models.'
            ]
        }
    ];

    return (
        <section id="workexperience" className="section">
        <div className='container'>
        <h2>Work Experience</h2>
            <div className="experience-list">
                {WorkExperience.map((job, index) => (
                    <div key={index} className="experience-item">
                        <h3>{job.title}</h3>
                        <p className="company">{job.company}</p>
                        <p className="duration">{job.duration}</p>
                        <ul className="job-description">
                            {job.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                 ))}
            </div>
        </div>
        </section>
    );
}

export default WorkExp;