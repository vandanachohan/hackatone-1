const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

// API endpoint to get textbook content
router.get('/textbook-content', async (req, res) => {
  try {
    // In a real implementation, this would fetch from the actual textbook files
    // For now, we'll return a structure that matches the textbook content
    const textbookStructure = {
      chapters: [
        {
          id: 1,
          title: 'Chapter 1: Overview and History of Physical AI',
          sections: [
            {
              id: '1.1',
              title: 'Overview',
              content: `Physical AI ( fizikal ai ) is an interdisciplinary field that combines artificial intelligence with physical systems. It focuses on creating intelligent machines that can understand, interact with, and adapt to the physical world.

Step-by-step understanding:
1. Perception - Gathering information about the environment
2. Cognition - Processing information to understand and reason
3. Action - Executing movements or tasks in the physical world

Physical AI systems typically integrate sensors, actuators, and intelligent control algorithms to achieve their goals.`
            },
            {
              id: '1.2',
              title: 'History',
              content: `The field of Physical AI has evolved significantly since the early days of robotics. Key developments include:

- 1950s: First programmable robots
- 1960s: Introduction of sensor feedback systems
- 1980s: Development of autonomous robots
- 2000s: Integration of machine learning in robotics
- 2010s: Advancement in humanoid robots and AI integration`
            }
          ]
        },
        {
          id: 2,
          title: 'Chapter 2: Foundations of Physical AI',
          sections: [
            {
              id: '2.1',
              title: 'Introduction',
              content: `The foundations of Physical AI include several core concepts:

1. Embodiment: The idea that intelligence is deeply connected to the physical form and interaction with the environment.
2. Morphological Computation: How the physical properties of the body contribute to intelligent behavior.
3. Active Perception: The process of sensing by doing, where actions are used to gather better information.
4. Control Theory: Mathematical frameworks for controlling dynamic systems.

These foundations provide the theoretical basis for developing intelligent physical systems.`
            }
          ]
        },
        {
          id: 3,
          title: 'Chapter 3: Sensors in Robotics',
          sections: [
            {
              id: '3.1',
              title: 'Sensor Types',
              content: `Sensors in robotics function similarly to human senses ( انسانی حواس ), providing the robot with information about its environment and internal state. Common sensors include:

1. Proprioceptive sensors: Measure internal states like joint angles and motor position
2. Exteroceptive sensors: Perceive external environment, such as cameras for vision and microphones for sound
3. Force/torque sensors: Measure interaction forces with objects and environment

Types of sensors:
- Vision sensors (cameras)
- Auditory sensors (microphones)
- Tactile sensors
- Range sensors (lidar, ultrasonic)
- Inertial sensors (gyroscopes, accelerometers)`
            }
          ]
        },
        {
          id: 4,
          title: 'Chapter 4: Actuators in Robotics',
          sections: [
            {
              id: '4.1',
              title: 'Actuator Types',
              content: `Actuators ( ایکچوایٹرز ) are components that enable robots to move and interact with their environment. They are essentially the "muscles" of a robot, converting energy (usually electrical) into mechanical motion.

Types of actuators:
1. Electric motors: Most common in humanoid robots due to precision and controllability
2. Servo motors: Provide precise angular control for joint movements
3. Linear actuators: Create straight-line motion for specific applications
4. Hydraulic actuators: Provide high force but require complex fluid systems
5. Pneumatic actuators: Use compressed air for movement

In humanoid robotics, actuators must be carefully selected to mimic human-like motion while providing sufficient power and precision.`
            }
          ]
        },
        {
          id: 5,
          title: 'Chapter 5: Control Systems for Robotics',
          sections: [
            {
              id: '5.1',
              title: 'Control Theory',
              content: `Control systems in robotics manage the behavior of robots by processing sensor data and commanding actuators. Key concepts include:

1. Feedback control: Using sensor data to adjust system behavior
2. Feedforward control: Anticipating system responses
3. PID controllers: Proportional-Integral-Derivative controllers for precise control
4. Adaptive control: Systems that adjust parameters based on changing conditions

For humanoid robots, control systems must maintain balance, coordinate multiple joints, and respond to environmental changes in real-time.`
            }
          ]
        },
        {
          id: 9,
          title: 'Chapter 9: Motion Planning',
          sections: [
            {
              id: '9.1',
              title: 'Motion Planning Algorithms',
              content: `Motion planning in robotics involves determining a sequence of movements to achieve a goal while avoiding obstacles.

Step-by-step approach:
1. Path planning - Calculate a geometric route from start to goal
2. Trajectory planning - Add timing and kinematic constraints to the path
3. Control execution - Send commands to actuators to follow the planned trajectory

Common algorithms:
- A* (A-star) for pathfinding
- RRT (Rapidly-exploring Random Trees)
- Potential Fields
- Sampling-based methods

For humanoid robots, motion planning must consider balance, joint limits, and dynamic constraints.`
            }
          ]
        },
        {
          id: 18,
          title: 'Chapter 18: AI Safety and Ethics',
          sections: [
            {
              id: '18.1',
              title: 'AI Safety Considerations',
              content: `As physical AI systems become more capable, safety and ethical considerations become paramount. Key areas include:

1. Physical Safety: Ensuring robots do not harm humans or themselves
2. Behavioral Control: Maintaining appropriate robot behavior
3. Privacy: Protecting human privacy when robots sense their environment
4. Transparency: Understanding robot decision-making processes
5. Accountability: Determining responsibility for robot actions

For humanoid robots, special considerations include human-robot interaction and the potential for deception.`
            }
          ]
        }
      ]
    };

    res.json(textbookStructure);
  } catch (error) {
    console.error('Error fetching textbook content:', error);
    res.status(500).json({ error: 'Failed to fetch textbook content' });
  }
});

// API endpoint to search textbook content
router.post('/search', async (req, res) => {
  try {
    const { query } = req.body;
    
    // In a real implementation, this would search the actual textbook content
    // For now, we'll return relevant sections based on keywords
    const searchResults = [];
    
    // This is a simplified search that would be replaced with actual document search
    if (query.toLowerCase().includes('balance') || query.toLowerCase().includes('walking')) {
      searchResults.push({
        chapterId: 4,
        sectionId: '4.1',
        title: 'Actuator Types - Balance and Walking',
        content: `Humanoid robots maintain balance using sensors and control algorithms. Step-by-step: 
1. Sensors (گیروسکوپ اور ایکسیلرومیٹر) detect tilt and orientation. 
2. Control algorithms calculate corrective movements. 
3. Actuators adjust joints to keep the robot upright. 
Example: A bipedal robot adjusts its ankle motors in real-time while walking on uneven terrain.`
      });
    }
    
    if (query.toLowerCase().includes('sensor') || query.toLowerCase().includes('sensing')) {
      searchResults.push({
        chapterId: 3,
        sectionId: '3.1',
        title: 'Sensor Types',
        content: `Sensors in robotics function similarly to human senses ( انسانی حواس ), providing the robot with information about its environment and internal state. Common sensors include cameras, microphones, accelerometers, gyroscopes, force sensors, and tactile sensors.

1. Proprioceptive sensors measure internal states like joint angles and motor position.
2. Exteroceptive sensors perceive external environment, such as cameras for vision and microphones for sound.
3. Force/torque sensors measure interaction forces with objects and environment.`
      });
    }
    
    if (query.toLowerCase().includes('actuator') || query.toLowerCase().includes('movement')) {
      searchResults.push({
        chapterId: 4,
        sectionId: '4.1',
        title: 'Actuator Types',
        content: `Actuators ( ایکچوایٹرز ) are components that enable robots to move and interact with their environment. They are essentially the "muscles" of a robot, converting energy (usually electrical) into mechanical motion.

Types of actuators:
1. Electric motors: Most common in humanoid robots due to precision and controllability
2. Servo motors: Provide precise angular control for joint movements
3. Linear actuators: Create straight-line motion for specific applications`
      });
    }
    
    res.json({ results: searchResults });
  } catch (error) {
    console.error('Error searching textbook content:', error);
    res.status(500).json({ error: 'Failed to search textbook content' });
  }
});

module.exports = router;