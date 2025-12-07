/**
 * Explain Algorithm Skill
 * 
 * Generates clear explanations of algorithms relevant to Physical AI and Humanoid Robotics.
 * Provides step-by-step breakdowns, pseudocode, and practical applications.
 */

/**
 * Explains an algorithm in detail with appropriate complexity for the level
 * @param {string} algorithmName - Name of the algorithm to explain
 * @param {string} topic - The broader topic context
 * @param {string} level - Difficulty level ('beginner', 'intermediate', 'advanced')
 * @param {object} options - Additional options for customization
 * @returns {object} - Detailed algorithm explanation
 */
async function explainAlgorithm(algorithmName, topic, level = 'intermediate', options = {}) {
  // Default options
  const opts = {
    includePseudocode: options.includePseudocode !== false,
    includeCodeImplementation: options.includeCodeImplementation || false,
    includeVisualSteps: options.includeVisualSteps || false,
    includeComplexityAnalysis: options.includeComplexityAnalysis || (level !== 'beginner'),
    includeApplications: options.includeApplications !== false,
    language: options.language || 'javascript',  // Implementation language
    maxExplanationLength: options.maxExplanationLength || 1000,
    ...options
  };

  // Get algorithm details based on name and topic
  const algorithmDetails = getAlgorithmDetails(algorithmName, topic, level);
  
  // Generate explanation components
  const overview = await generateOverview(algorithmDetails, level);
  const purpose = await generatePurpose(algorithmDetails, topic);
  const steps = await generateSteps(algorithmDetails, level);
  const pseudocode = opts.includePseudocode ? generatePseudocode(algorithmDetails) : null;
  const codeImpl = opts.includeCodeImplementation ? await generateCodeImplementation(algorithmDetails, opts.language) : null;
  const complexity = opts.includeComplexityAnalysis ? generateComplexityAnalysis(algorithmDetails) : null;
  const applications = opts.includeApplications ? await generateApplications(algorithmDetails, topic) : null;
  
  return {
    algorithmName: algorithmName,
    topic: topic,
    level: level,
    overview: overview,
    purpose: purpose,
    steps: steps,
    pseudocode: pseudocode,
    codeImplementation: codeImpl,
    complexityAnalysis: complexity,
    applications: applications,
    metadata: {
      estimatedReadingTime: estimateReadingTime(overview, steps, pseudocode, codeImpl),
      difficulty: level,
      prerequisites: algorithmDetails.prerequisites || []
    }
  };
}

/**
 * Retrieves algorithm details based on name and topic
 */
function getAlgorithmDetails(algorithmName, topic, level) {
  // Predefined algorithm details for robotics and AI contexts
  const algorithmDatabase = {
    // Robot Control Algorithms
    'pid controller': {
      name: 'PID Controller',
      category: 'Control Systems',
      description: 'Proportional-Integral-Derivative controller used to minimize error between desired and actual values',
      useCases: ['Motor control', 'Position control', 'Trajectory following'],
      prerequisites: ['Basic calculus', 'Control theory fundamentals'],
      parameters: ['Proportional gain (Kp)', 'Integral gain (Ki)', 'Derivative gain (Kd)'],
      formula: 'u(t) = K_p e(t) + K_i ∫e(t)dt + K_d de(t)/dt'
    },
    
    'inverse kinematics': {
      name: 'Inverse Kinematics',
      category: 'Motion Planning',
      description: 'Mathematical process to determine joint angles needed to achieve a desired end-effector position',
      useCases: ['Arm reaching', 'Leg positioning', 'End-effector control'],
      prerequisites: ['Linear algebra', 'Trigonometry', 'Matrix transformations'],
      parameters: ['Target position', 'Joint limits', 'Constraints'],
      formula: 'θ = f⁻¹(x, y, z)'
    },
    
    'path planning': {
      name: 'A* Path Planning',
      category: 'Navigation',
      description: 'Graph traversal algorithm that finds optimal path from start to goal considering costs',
      useCases: ['Robot navigation', 'Obstacle avoidance', 'Route optimization'],
      prerequisites: ['Graph theory', 'Basic algorithms', 'Heuristic functions'],
      parameters: ['Start node', 'Goal node', 'Heuristic function', 'Cost function'],
      formula: 'f(n) = g(n) + h(n)'
    },
    
    'kalman filter': {
      name: 'Kalman Filter',
      category: 'State Estimation',
      description: 'Optimal recursive estimator that estimates system state from noisy measurements',
      useCases: ['Sensor fusion', 'State prediction', 'Noise reduction'],
      prerequisites: ['Probability theory', 'Linear algebra', 'Statistics'],
      parameters: ['Process noise covariance', 'Measurement noise covariance', 'Initial state'],
      formula: 'x̂ₖ = Fₖx̂ₖ₋₁ + Bₖuₖ + Kₖ(zₖ - Hₖx̂ₖ)'
    },
    
    // Machine Learning Algorithms for Robotics
    'reinforcement learning': {
      name: 'Deep Q-Network (DQN)',
      category: 'Machine Learning',
      description: 'Combines deep learning with Q-learning to handle high-dimensional state spaces',
      useCases: ['Robotic control', 'Manipulation tasks', 'Locomotion'],
      prerequisites: ['Neural networks', 'Q-learning basics', 'Function approximation'],
      parameters: ['Learning rate', 'Discount factor', 'Exploration rate'],
      formula: 'Q(s,a) = Q(s,a) + α[r + γ max Q(s\',a\') - Q(s,a)]'
    },
    
    'particle filter': {
      name: 'Particle Filter',
      category: 'State Estimation',
      description: 'Monte Carlo method for representing and estimating probability distributions',
      useCases: ['Robot localization', 'Tracking', 'Mapping'],
      prerequisites: ['Probability theory', 'Bayesian inference', 'Sampling methods'],
      parameters: ['Number of particles', 'Motion model', 'Observation model'],
      formula: 'p(x|z) ∝ p(z|x)p(x)'
    }
  };

  // Normalize the algorithm name for lookup
  const normalizedAlgorithmName = algorithmName.toLowerCase().replace(/\s+/g, ' ');
  const normalizedKeys = Object.keys(algorithmDatabase);
  
  // Find the algorithm in the database
  for (const key of normalizedKeys) {
    if (normalizedAlgorithmName.includes(key) || key.includes(normalizedAlgorithmName)) {
      return algorithmDatabase[key];
    }
  }
  
  // Return a generic algorithm template if not found
  return {
    name: algorithmName,
    category: 'General',
    description: `An algorithm commonly used in ${topic}`,
    useCases: [`Application in ${topic}`, 'General use'],
    prerequisites: ['Basic understanding of algorithms and data structures'],
    parameters: ['Algorithm-specific parameters'],
    formula: 'Algorithm-specific formula'
  };
}

/**
 * Generates an overview of the algorithm
 */
async function generateOverview(details, level) {
  const levelDescriptors = {
    'beginner': 'in simple terms without complex mathematics',
    'intermediate': 'with mathematical notation and practical considerations',
    'advanced': 'with comprehensive mathematical analysis and theoretical background'
  };
  
  const descriptor = levelDescriptors[level] || levelDescriptors.intermediate;
  
  return `The ${details.name} is a ${details.category.toLowerCase()} algorithm ${descriptor}. ${details.description}. It is commonly used in robotics and AI systems for ${details.useCases.join(', ')}.`;
}

/**
 * Generates the purpose and motivation for the algorithm
 */
async function generatePurpose(details, topic) {
  return `The purpose of the ${details.name} in ${topic} is to address ${details.useCases[0]} challenges. Specifically, it helps robots overcome difficulties in achieving precise control, accurate estimation, or efficient planning. This algorithm is essential because ${details.name} enables robots to operate reliably in dynamic, uncertain environments.`;
}

/**
 * Generates step-by-step breakdown of the algorithm
 */
async function generateSteps(details, level) {
  // Define steps based on the algorithm
  const stepDefinitions = {
    'pid controller': [
      { step: 1, title: 'Error Calculation', description: 'Compute the difference between desired and actual values' },
      { step: 2, title: 'Proportional Term', description: 'Multiply the error by proportional gain (Kp)' },
      { step: 3, title: 'Integral Term', description: 'Accumulate past errors and multiply by integral gain (Ki)' },
      { step: 4, title: 'Derivative Term', description: 'Calculate rate of error change and multiply by derivative gain (Kd)' },
      { step: 5, title: 'Combine Terms', description: 'Sum all three terms to get the control output' }
    ],
    
    'inverse kinematics': [
      { step: 1, title: 'Define Target Pose', description: 'Specify desired position and orientation of end-effector' },
      { step: 2, title: 'Formulate Equations', description: 'Set up forward kinematics equations to solve for joint angles' },
      { step: 3, title: 'Choose Solution Method', description: 'Select analytical or numerical method (e.g., Jacobian inverse)' },
      { step: 4, title: 'Solve Equations', description: 'Iteratively solve for joint angle values' },
      { step: 5, title: 'Verify Solution', description: 'Check if solution satisfies constraints and reaches target' }
    ],
    
    'path planning': [
      { step: 1, title: 'Initialize', description: 'Set start node with cost 0, all others with infinity' },
      { step: 2, title: 'Explore Neighbors', description: 'For current node, calculate costs to unvisited neighbors' },
      { step: 3, title: 'Update Costs', description: 'If new path to neighbor is cheaper, update cost' },
      { step: 4, title: 'Select Next Node', description: 'Choose node with lowest f(n) = g(n) + h(n) for next iteration' },
      { step: 5, title: 'Repeat Until Goal', description: 'Continue until goal node is reached or no nodes remain' }
    ],
    
    'kalman filter': [
      { step: 1, title: 'Prediction Step', description: 'Predict next state based on previous state and system dynamics' },
      { step: 2, title: 'Estimate Uncertainty', description: 'Predict error covariance matrix' },
      { step: 3, title: 'Update Step', description: 'Incorporate new measurement using Kalman gain' },
      { step: 4, title: 'Calculate Kalman Gain', description: 'Optimal blending factor between prediction and measurement' },
      { step: 5, title: 'Refine State Estimate', description: 'Update state estimate and uncertainty with measurement' }
    ],
    
    'deep q-network': [
      { step: 1, title: 'Initialize Network', description: 'Set up neural network with random weights' },
      { step: 2, title: 'Experience Replay', description: 'Store experiences (state, action, reward, next_state) in replay buffer' },
      { step: 3, title: 'Sample Batch', description: 'Randomly sample experiences from replay buffer' },
      { step: 4, title: 'Update Network', description: 'Train network to minimize temporal difference error' },
      { step: 5, title: 'Target Network Update', description: 'Periodically update target network with main network weights' }
    ],
    
    'particle filter': [
      { step: 1, title: 'Initialize Particles', description: 'Distribute particles randomly according to prior belief' },
      { step: 2, title: 'Prediction Step', description: 'Move particles based on motion model' },
      { step: 3, title: 'Weight Update', description: 'Assign weights based on observation likelihood' },
      { step: 4, title: 'Resampling', description: 'Resample particles proportional to their weights' },
      { step: 5, title: 'Estimation', description: 'Compute state estimate from particle distribution' }
    ]
  };

  const algName = details.name.toLowerCase();
  let steps = stepDefinitions[algName] || [
    { step: 1, title: 'Initialization', description: 'Set up initial conditions and parameters' },
    { step: 2, title: 'Main Processing', description: 'Execute the primary algorithm logic' },
    { step: 3, title: 'Iteration', description: 'Repeat computation until convergence or termination condition' },
    { step: 4, title: 'Output Generation', description: 'Produce final results based on computations' }
  ];

  // Adjust steps based on level
  if (level === 'beginner') {
    // Simplify steps for beginners
    return [{
      step: 1,
      title: 'How it Works',
      description: `The ${details.name} works in a few basic steps: initialize the system, process inputs using the algorithm logic, and generate outputs.`
    }];
  } else if (level === 'advanced') {
    // Add more detail for advanced learners
    steps.forEach(step => {
      step.description += ` At the advanced level, this step involves ${step.advancedDescription || 'complex mathematical operations and considerations'}.`;
    });
  }

  return steps;
}

/**
 * Generates pseudocode for the algorithm
 */
function generatePseudocode(details) {
  const pseudocodeTemplates = {
    'pid controller': `
FUNCTION PID_Controller(setpoint, measured_value, Kp, Ki, Kd, dt)
    ERROR = setpoint - measured_value
    INTEGRAL = integral_prev + ERROR * dt
    DERIVATIVE = (ERROR - error_prev) / dt
    
    OUTPUT = Kp * ERROR + Ki * INTEGRAL + Kd * DERIVATIVE
    
    integral_prev = INTEGRAL
    error_prev = ERROR
    
    RETURN OUTPUT
END FUNCTION
    `,
    
    'inverse kinematics': `
FUNCTION InverseKinematics(target_position, robot_model)
    INITIALIZE joint_angles_randomly()
    
    REPEAT
        current_position = ForwardKinematics(joint_angles, robot_model)
        error = target_position - current_position
        
        IF error < threshold THEN
            BREAK
        END IF
        
        jacobian = ComputeJacobian(joint_angles, robot_model)
        delta_angles = jacobian_inverse * error
        joint_angles = joint_angles + delta_angles
    END REPEAT
    
    RETURN joint_angles
END FUNCTION
    `,
    
    'path planning': `
FUNCTION AStar(start_node, goal_node, heuristic_func)
    OPEN_SET = {start_node}
    CLOSED_SET = {}
    
    g_score[start_node] = 0
    f_score[start_node] = heuristic_func(start_node, goal_node)
    
    WHILE OPEN_SET is not empty
        current = node in OPEN_SET with lowest f_score[]
        
        IF current == goal_node THEN
            RETURN reconstruct_path(goal_node)
        END IF
        
        REMOVE current from OPEN_SET
        ADD current to CLOSED_SET
        
        FOR each neighbor of current
            IF neighbor in CLOSED_SET THEN
                CONTINUE
            END IF
            
            tentative_g = g_score[current] + distance(current, neighbor)
            
            IF neighbor not in OPEN_SET THEN
                ADD neighbor to OPEN_SET
            ELSE IF tentative_g >= g_score[neighbor] THEN
                CONTINUE
            END IF
            
            g_score[neighbor] = tentative_g
            f_score[neighbor] = g_score[neighbor] + heuristic_func(neighbor, goal_node)
            parent[neighbor] = current
        END FOR
    END WHILE
    
    RETURN failure
END FUNCTION
    `,
    
    'kalman filter': `
FUNCTION KalmanFilter(state, covariance, measurement, control)
    // Prediction
    predicted_state = TransitionMatrix * state + ControlMatrix * control
    predicted_covariance = TransitionMatrix * covariance * TRANSPOSE(TransitionMatrix) + ProcessNoise
    
    // Update
    innovation = measurement - ObservationMatrix * predicted_state
    innovation_covariance = ObservationMatrix * predicted_covariance * TRANSPOSE(ObservationMatrix) + MeasurementNoise
    
    kalman_gain = predicted_covariance * TRANSPOSE(ObservationMatrix) * INVERSE(innovation_covariance)
    
    state = predicted_state + kalman_gain * innovation
    covariance = (Identity - kalman_gain * ObservationMatrix) * predicted_covariance
    
    RETURN state, covariance
END FUNCTION
    `,
    
    'deep q-network': `
FUNCTION DeepQNetwork(env, num_episodes)
    INITIALIZE replay_buffer
    INITIALIZE main_network with random weights
    INITIALIZE target_network with main_network weights
    
    FOR episode = 1 to num_episodes
        state = env.reset()
        
        WHILE not done
            IF random() < epsilon THEN
                action = random_action()
            ELSE
                action = argmax(main_network.predict(state))
            END IF
            
            next_state, reward, done = env.step(action)
            
            ADD (state, action, reward, next_state, done) to replay_buffer
            state = next_state
            
            IF replay_buffer.size > batch_size THEN
                batch = sample(replay_buffer, batch_size)
                
                FOR (s, a, r, s_next, done) in batch
                    target = r
                    IF not done THEN
                        target = r + gamma * max(target_network.predict(s_next))
                    END IF
                    
                    target_vec = main_network.predict(s)
                    target_vec[a] = target
                    
                    main_network.train_on_batch(s, target_vec)
                END FOR
            END IF
        END WHILE
        
        IF episode % target_update_freq == 0 THEN
            target_network.set_weights(main_network.get_weights())
        END IF
    END FOR
END FUNCTION
    `
  };

  const algName = details.name.toLowerCase();
  return pseudocodeTemplates[algName] || `
    // Pseudocode for ${details.name}
    FUNCTION ${details.name.replace(/[^a-zA-Z0-9]/g, '_')}
        // Step 1: Initialization
        // Initialize variables and parameters
        
        // Step 2: Main Algorithm Loop
        // Execute main processing steps
        
        // Step 3: Output Generation
        // Return final results
    END FUNCTION
  `;
}

/**
 * Generates code implementation in the specified language
 */
async function generateCodeImplementation(details, language) {
  // Implementation varies significantly by language and algorithm
  // Just return a placeholder for now
  return `// Implementation of ${details.name} in ${language}\n// This would contain the actual code implementation\n// based on the algorithm's logic and the target programming language.`;
}

/**
 * Generates complexity analysis for the algorithm
 */
function generateComplexityAnalysis(details) {
  const complexityInfo = {
    'pid controller': {
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      notes: 'Constant time algorithm since it only involves basic arithmetic operations'
    },
    
    'inverse kinematics': {
      timeComplexity: 'O(n^2) to O(n^3)',
      spaceComplexity: 'O(n^2)',
      notes: 'Dependent on the number of joints (n) and the method used (analytical solutions vs iterative methods like Jacobian inverse)'
    },
    
    'path planning': {
      timeComplexity: 'O(|E| + |V|log|V|)',
      spaceComplexity: 'O(|V|)',
      notes: 'Where |V| is number of vertices and |E| is number of edges in the graph. Complexity depends on implementation of priority queue.'
    },
    
    'kalman filter': {
      timeComplexity: 'O(n^3)',
      spaceComplexity: 'O(n^2)',
      notes: 'Where n is the dimension of the state vector. Dominated by matrix multiplication operations.'
    },
    
    'deep q-network': {
      timeComplexity: 'Varies',
      spaceComplexity: 'O(|Parameters|)',
      notes: 'Depends on neural network architecture. Training complexity is much higher than inference.'
    }
  };
  
  const algName = details.name.toLowerCase();
  return complexityInfo[algName] || {
    timeComplexity: 'O(?)',
    spaceComplexity: 'O(?)',
    notes: 'Complexity analysis would depend on specific implementation details for this algorithm in the context of robotics.'
  };
}

/**
 * Generates applications of the algorithm in robotics
 */
async function generateApplications(details, topic) {
  return [
    {
      scenario: `Using ${details.name} for ${details.useCases[0]}`,
      description: `In this application, ${details.name} helps robots ${details.useCases[0].toLowerCase()} by ${describeApplicationApproach(details)}`,
      benefits: [`Improved precision in ${details.useCases[0].toLowerCase()}`, 'Enhanced adaptability to changing conditions'],
      challenges: ['Requires careful tuning of parameters', 'May need significant computational resources']
    }
  ];
}

/**
 * Describes how the algorithm approaches the application
 */
function describeApplicationApproach(details) {
  switch(details.name.toLowerCase()) {
    case 'pid controller':
      return 'continuously adjusting control signals to minimize error between desired and actual states.';
    case 'inverse kinematics':
      return 'calculating the joint angles required to position the end-effector at the desired location.';
    case 'path planning':
      return 'finding optimal routes from current position to goal while avoiding obstacles.';
    case 'kalman filter':
      return 'fusing data from multiple sensors to estimate the most likely state of the robot.';
    case 'deep q-network':
      return 'learning optimal control policies through trial and error interaction with the environment.';
    case 'particle filter':
      return 'maintaining a distribution of possible states and updating beliefs based on sensor observations.';
    default:
      return `applying the core principles of ${details.name} to solve ${details.useCases[0].toLowerCase()} challenges.`;
  }
}

/**
 * Estimates reading time based on content length
 */
function estimateReadingTime(overview, steps, pseudocode, codeImpl) {
  let totalWords = 0;
  
  if (overview) totalWords += overview.split(' ').length;
  if (steps) {
    steps.forEach(step => {
      if (step.description) totalWords += step.description.split(' ').length;
    });
  }
  if (pseudocode) totalWords += pseudocode.split(' ').length * 0.75;  // Count code lines as fewer words
  if (codeImpl) totalWords += codeImpl.split(' ').length * 0.75;
  
  // Assume 200 words per minute reading speed
  return Math.ceil(totalWords / 200);
}

// Export the function
module.exports = {
  explainAlgorithm
};

// If this file is run directly, demonstrate its use
if (require.main === module) {
  (async () => {
    console.log('Explain Algorithm Skill Demo');
    console.log('============================');
    
    // Example: Explain PID Controller algorithm
    const pidExplanation = await explainAlgorithm(
      'PID Controller',
      'Robot Control Systems',
      'intermediate',
      { includePseudocode: true, includeComplexityAnalysis: true }
    );
    
    console.log('\\nAlgorithm Explanation:');
    console.log(JSON.stringify(pidExplanation, null, 2));
    
    // Example: Explain Kalman Filter algorithm
    const kfExplanation = await explainAlgorithm(
      'Kalman Filter',
      'State Estimation',
      'advanced',
      { includePseudocode: true, includeApplications: true }
    );
    
    console.log('\\n\\nKalman Filter Explanation:');
    console.log(`Overview: ${kfExplanation.overview}`);
    console.log(`Complexity: ${kfExplanation.complexityAnalysis.timeComplexity} time, ${kfExplanation.complexityAnalysis.spaceComplexity} space`);
    console.log(`Applications: ${kfExplanation.applications[0].scenario}`);
  })();
}