import React from 'react';

const TextbookSidebar = () => {
  const chapters = [
    {
      id: 1,
      title: 'Chapter 1: Overview and History',
      sections: [
        { id: '1.1', title: 'Overview' },
        { id: '1.2', title: 'History' }
      ]
    },
    {
      id: 2,
      title: 'Chapter 2: Foundations of Physical AI',
      sections: [
        { id: '2.1', title: 'Introduction' }
      ]
    },
    {
      id: 3,
      title: 'Chapter 3: Sensors in Robotics',
      sections: [
        { id: '3.1', title: 'Sensor Types' }
      ]
    },
    {
      id: 4,
      title: 'Chapter 4: Actuators in Robotics',
      sections: [
        { id: '4.1', title: 'Actuator Types' }
      ]
    },
    {
      id: 5,
      title: 'Chapter 5: Control Systems for Robotics',
      sections: [
        { id: '5.1', title: 'Control Theory' }
      ]
    },
    {
      id: 6,
      title: 'Chapter 6: Machine Learning for Robotics',
      sections: [
        { id: '6.1', title: 'ML for Robotics' }
      ]
    },
    {
      id: 7,
      title: 'Chapter 7: Computer Vision in Robotics',
      sections: [
        { id: '7.1', title: 'Vision Systems' }
      ]
    },
    {
      id: 8,
      title: 'Chapter 8: Natural Language Processing in Robotics',
      sections: [
        { id: '8.1', title: 'NLP in Robotics' }
      ]
    },
    {
      id: 9,
      title: 'Chapter 9: Motion Planning',
      sections: [
        { id: '9.1', title: 'Motion Planning Algorithms' }
      ]
    },
    {
      id: 10,
      title: 'Chapter 10: Path Planning',
      sections: [
        { id: '10.1', title: 'Path Planning Algorithms' }
      ]
    },
    {
      id: 11,
      title: 'Chapter 11: Human-Robot Interaction',
      sections: [
        { id: '11.1', title: 'HRI Principles' }
      ]
    },
    {
      id: 12,
      title: 'Chapter 12: Robotics Software Frameworks',
      sections: [
        { id: '12.1', title: 'Robotics Frameworks' }
      ]
    },
    {
      id: 13,
      title: 'Chapter 13: Robotics Hardware Components',
      sections: [
        { id: '13.1', title: 'Robotics Hardware Components' }
      ]
    },
    {
      id: 14,
      title: 'Chapter 14: Manufacturing and Industrial Robotics',
      sections: [
        { id: '14.1', title: 'Industrial Robotics' }
      ]
    },
    {
      id: 15,
      title: 'Chapter 15: Healthcare and Medical Robotics',
      sections: [
        { id: '15.1', title: 'Medical Robotics' }
      ]
    },
    {
      id: 16,
      title: 'Chapter 16: Agricultural Robotics',
      sections: [
        { id: '16.1', title: 'Agricultural Robotics' }
      ]
    },
    {
      id: 17,
      title: 'Chapter 17: Autonomous Vehicles',
      sections: [
        { id: '17.1', title: 'Autonomous Vehicles' }
      ]
    },
    {
      id: 18,
      title: 'Chapter 18: AI Safety and Ethics',
      sections: [
        { id: '18.1', title: 'AI Safety Considerations' }
      ]
    },
    {
      id: 19,
      title: 'Chapter 19: Future of Robotics',
      sections: [
        { id: '19.1', title: 'Future Trends' }
      ]
    },
    {
      id: 20,
      title: 'Chapter 20: Conclusion',
      sections: [
        { id: '20.1', title: 'Conclusion' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 h-full overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Physical AI & Humanoid Robotics</h3>
      <h4 className="font-semibold text-md text-indigo-700 mb-3">Table of Contents</h4>
      <div className="space-y-2">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border-l-2 border-indigo-200 pl-3">
            <div className="font-medium text-gray-800">{chapter.title}</div>
            <div className="ml-2 mt-1 space-y-1">
              {chapter.sections.map((section) => (
                <div 
                  key={section.id} 
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer pl-2 hover:bg-indigo-50 p-1 rounded"
                >
                  {section.id} {section.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <h4 className="font-semibold text-md text-indigo-700 mb-2">Quick Resources</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-1 rounded">
            📘 Introduction to Physical AI
          </li>
          <li className="hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-1 rounded">
            🔧 Actuators and Sensors Guide
          </li>
          <li className="hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-1 rounded">
            🤖 Motion Planning Tutorial
          </li>
          <li className="hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-1 rounded">
            ⚖️ AI Safety Considerations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextbookSidebar;