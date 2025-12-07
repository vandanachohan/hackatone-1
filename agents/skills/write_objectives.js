/**
 * Write Objectives Skill
 * 
 * Generates learning objectives for a given topic and difficulty level.
 * This skill is used by the Chapter Architect and other components.
 */

/**
 * Generates learning objectives for a given topic
 * @param {string} topic - The topic for which to generate objectives
 * @param {string} level - The difficulty level ('beginner', 'intermediate', 'advanced')
 * @param {object} options - Additional options for customization
 * @returns {Array<string>} - Array of learning objectives
 */
function writeObjectives(topic, level = 'intermediate', options = {}) {
  // Default options
  const opts = {
    count: options.count || 4,  // Number of objectives to generate
    bloomLevel: options.bloomLevel || getBloomLevelByDifficulty(level),
    includeTaxonomy: options.includeTaxonomy || false,
    domain: options.domain || 'cognitive',  // cognitive, psychomotor, affective
    ...options
  };

  // Bloom's taxonomy action verbs by level
  const bloomVerbs = {
    remember: ['Define', 'Recall', 'List', 'Identify', 'Recognize', 'Describe'],
    understand: ['Explain', 'Summarize', 'Interpret', 'Classify', 'Compare', 'Discuss'],
    apply: ['Apply', 'Execute', 'Implement', 'Demonstrate', 'Calculate', 'Use'],
    analyze: ['Analyze', 'Differentiate', 'Compare', 'Contrast', 'Categorize', 'Debate'],
    evaluate: ['Evaluate', 'Justify', 'Critique', 'Assess', 'Support', 'Validate'],
    create: ['Design', 'Construct', 'Develop', 'Formulate', 'Compose', 'Generate']
  };

  // Select appropriate verbs based on difficulty level
  const selectedVerbs = [];
  switch(level.toLowerCase()) {
    case 'beginner':
      selectedVerbs.push(...bloomVerbs.remember, ...bloomVerbs.understand);
      break;
    case 'intermediate':
      selectedVerbs.push(...bloomVerbs.apply, ...bloomVerbs.analyze);
      break;
    case 'advanced':
      selectedVerbs.push(...bloomVerbs.evaluate, ...bloomVerbs.create);
      break;
    default:
      selectedVerbs.push(...bloomVerbs.understand, ...bloomVerbs.apply);
  }

  // Topic-specific objective templates
  const objectiveTemplates = {
    'introduction to physical ai': [
      'Define Physical AI and distinguish it from traditional AI systems',
      'Explain the concept of embodied cognition in robotic systems',
      'Describe the perception-action loop fundamental to Physical AI',
      'Identify key applications of Physical AI in robotics',
      'Analyze the role of physical interaction in intelligent behavior',
      'Evaluate the advantages of embodied systems over disembodied AI'
    ],
    'humanoid body architecture': [
      'Identify the primary components of a humanoid robot',
      'Describe different types of actuators used in humanoid systems',
      'Analyze joint configurations for various degrees of freedom',
      'Compare materials used in humanoid construction',
      'Evaluate structural design considerations for humanoid robots',
      'Design a basic structural framework for a humanoid system'
    ],
    'locomotion systems': [
      'Explain the principles of bipedal walking in humanoid robots',
      'Describe control strategies for maintaining balance',
      'Analyze different walking gaits and their stability characteristics',
      'Compare ZMP-based and Capture Point-based control methods',
      'Evaluate factors affecting locomotion efficiency',
      'Design a basic walking controller for a humanoid robot'
    ],
    'machine learning for embodied systems': [
      'Apply reinforcement learning techniques to motor control problems',
      'Analyze the challenges of learning in physical environments',
      'Compare sim-to-real transfer approaches',
      'Evaluate the effectiveness of different ML approaches for robotics',
      'Design a learning algorithm for an embodied task',
      'Implement imitation learning for robotic manipulation'
    ],
    default: [
      `Define the fundamental concepts of ${topic}`,
      `Explain the key principles underlying ${topic}`,
      `Analyze the applications of ${topic} in practical scenarios`,
      `Compare different approaches to implementing ${topic}`,
      `Evaluate the strengths and weaknesses of ${topic}`,
      `Apply ${topic} to solve a practical problem`,
      `Design a solution based on ${topic}`,
      `Implement the core concepts of ${topic}`
    ]
  };

  // Get appropriate templates for the topic
  const templates = objectiveTemplates[topic.toLowerCase()] || objectiveTemplates.default;
  
  // Shuffle templates to get diverse objectives
  const shuffledTemplates = [...templates].sort(() => Math.random() - 0.5);
  
  // Take the required number of objectives
  let objectives = shuffledTemplates.slice(0, opts.count);
  
  // If we don't have enough objectives from the template, generate generic ones
  if (objectives.length < opts.count) {
    const genericObjectives = [];
    for (let i = 0; i < opts.count - objectives.length; i++) {
      const randomVerb = selectedVerbs[Math.floor(Math.random() * selectedVerbs.length)];
      genericObjectives.push(`${randomVerb} key aspects of ${topic}`);
    }
    objectives = [...objectives, ...genericObjectives];
  }
  
  // Format objectives based on options
  if (opts.includeTaxonomy) {
    objectives = objectives.map((obj, index) => {
      const verb = obj.split(' ')[0]; // Extract the first word (action verb)
      // Determine the taxonomy level based on the verb
      let taxonomyLevel = 'application';
      for (const [levelName, verbs] of Object.entries(bloomVerbs)) {
        if (verbs.includes(verb)) {
          taxonomyLevel = levelName;
          break;
        }
      }
      return {
        objective: obj,
        bloomLevel: taxonomyLevel,
        id: `${topic.replace(/\s+/g, '_')}_obj_${index + 1}`
      };
    });
  }
  
  return objectives;
}

/**
 * Helper function to map difficulty levels to Bloom's taxonomy levels
 * @param {string} level - The difficulty level
 * @returns {string} - The corresponding Bloom's taxonomy level
 */
function getBloomLevelByDifficulty(level) {
  switch(level.toLowerCase()) {
    case 'beginner':
      return 'understand';
    case 'intermediate':
      return 'apply';
    case 'advanced':
      return 'evaluate';
    default:
      return 'understand';
  }
}

/**
 * Formats learning objectives in different ways based on requirements
 * @param {Array} objectives - Array of objectives
 * @param {string} format - The format to use ('list', 'numbered', 'table', 'json')
 * @returns {string|object} - Formatted objectives
 */
function formatObjectives(objectives, format = 'list') {
  switch(format) {
    case 'numbered':
      return objectives.map((obj, idx) => `${idx + 1}. ${typeof obj === 'string' ? obj : obj.objective}`).join('\n');
    
    case 'table':
      let table = '| # | Objective |\n';
      table += '|---|-----------|\n';
      objectives.forEach((obj, idx) => {
        table += `| ${idx + 1} | ${typeof obj === 'string' ? obj : obj.objective} |\n`;
      });
      return table;
    
    case 'json':
      return JSON.stringify(objectives, null, 2);
    
    case 'list':
    default:
      return typeof objectives[0] === 'string' 
        ? objectives.join('\n- ')
        : objectives.map(obj => obj.objective).join('\n- ');
  }
}

// Export functions
module.exports = {
  writeObjectives,
  formatObjectives
};

// If this file is run directly, demonstrate its use
if (require.main === module) {
  console.log('Write Objectives Skill Demo');
  console.log('============================');

  // Example: Generate objectives for "Introduction to Physical AI" at different levels
  const beginnerObjectives = writeObjectives('Introduction to Physical AI', 'beginner', { count: 4 });
  console.log('\\nBeginner Level Objectives:');
  console.log('- ' + beginnerObjectives.join('\\n- '));

  const intermediateObjectives = writeObjectives('Introduction to Physical AI', 'intermediate', { count: 4 });
  console.log('\\nIntermediate Level Objectives:');
  console.log('- ' + intermediateObjectives.join('\\n- '));

  const advancedObjectives = writeObjectives('Introduction to Physical AI', 'advanced', { count: 4 });
  console.log('\\nAdvanced Level Objectives:');
  console.log('- ' + advancedObjectives.join('\\n- '));

  // Example with taxonomy info
  const objectivesWithTax = writeObjectives('Locomotion Systems', 'intermediate', { 
    count: 3, 
    includeTaxonomy: true 
  });
  console.log('\\nObjectives with Taxonomy Info:');
  console.log(JSON.stringify(objectivesWithTax, null, 2));
  
  // Example formatted as table
  console.log('\\nFormatted as Table:');
  console.log(formatObjectives(beginnerObjectives, 'table'));
}