import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "مرحبا! (Hello!) I'm your AI tutor for the Physical AI & Humanoid Robotics textbook. How can I help you understand the concepts better today?",
      sender: 'tutor',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to get AI tutor response based on textbook content
  const getAIResponse = async (userMessage) => {
    setIsLoading(true);

    try {
      // Check if message is too vague and needs clarification
      const vagueIndicators = [
        'what', 'tell me', 'explain', 'how', 'why', 'when', 'where', 'who', 'which'
      ];

      const isVague = vagueIndicators.some(indicator =>
        userMessage.toLowerCase().includes(indicator) &&
        userMessage.split(' ').length < 5
      );

      if (isVague) {
        setIsLoading(false);
        return "Could you please clarify your question? For example:\n- How do humanoid robots balance on two legs?\n- Explain the types of actuators used in robotics?\n- What is motion planning in robotics?\n\nThis will help me provide you with a more precise and helpful answer based on the textbook content.";
      }

      // Search the textbook content using the API
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to search textbook content');
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        // Format the response with the textbook content
        let formattedResponse = "";

        data.results.forEach((result, index) => {
          formattedResponse += `**${result.title}**\n\n`;
          formattedResponse += `${result.content}\n\n`;
          formattedResponse += `Reference (حوالہ): ${result.sectionId} - ${result.title}\n\n`;

          // Add example, exercise, or thought experiment for more interactive learning
          if (result.sectionId.includes('4.1')) { // Actuator section
            formattedResponse += `Thought Experiment (سوچ کا تجربہ): Consider how a robot arm picks up a delicate object (غور کریں کہ روبوٹ بازو ایک نازک چیز کو کیسے اٹھاتا ہے). What type of actuators would allow fine control of grip strength (پکڑ کی طاقت کو باریکی سے کنٹرول کرنے والی ایکچوایٹرز کی قسم کون سی ہوگی)?\n\n`;
          } else if (result.sectionId.includes('3.1')) { // Sensor section
            formattedResponse += `Exercise (ورک شیٹ): Design a simple sensing system for a robot navigating a room (room میں سفر کرنے والے روبوٹ کے لیے ایک سادہ سینسنگ سسٹم تشکیل دیں). What combination of sensors would you use and why (آپ کون سے سینسرز کے مجموعہ کا استعمال کریں گے اور کیوں)?\n\n`;
          } else if (result.sectionId.includes('9.1')) { // Motion planning section
            formattedResponse += `Exercise (ورک شیٹ): Think about planning a path for a robot arm to move from point A to point B without hitting any obstacles in a cluttered workspace (نقطہ A سے نقطہ B تک جانے والے روبوٹ بازو کے راستے کی منصوبہ بندی کے بارے میں سوچیں بغیر کسی رکاوٹ کو ٹکرانے کے).\n\n`;
          }
        });

        setIsLoading(false);
        return formattedResponse;
      } else {
        // If no specific content found, provide a general response
        setIsLoading(false);
        return `I couldn't find specific information about "${userMessage}" in the textbook. Could you try rephrasing your question or specify which chapter you're referring to? The textbook covers topics like sensors, actuators, motion planning, control systems, and AI safety. I'm here to help explain any of these concepts in detail with step-by-step explanations and examples.`;
      }
    } catch (error) {
      console.error('Error getting AI response:', error);

      // Provide a fallback response
      const lowerCaseMessage = userMessage.toLowerCase();
      let fallbackResponse = "I can help explain concepts from the Physical AI & Humanoid Robotics textbook. Could you specify which chapter or topic you'd like to explore?\n\nPlease ask about specific topics like balance, actuators, sensors, motion planning, or any particular chapter.";

      if (lowerCaseMessage.includes('balance') || lowerCaseMessage.includes('two legs') || lowerCaseMessage.includes('walking') || lowerCaseMessage.includes('stability')) {
        fallbackResponse = `**Humanoid Robot Balance Mechanisms** (ہیومینوئڈ روبوٹ کا توازن)

Step-by-step understanding (.Step-by-step سمجھ):
1. **Sensors** (سینسرز) like gyroscopes (گیروسکوپ) and accelerometers (ایکسیلرومیٹر) detect tilt and orientation (ُکاؤ اور سمت).
2. **Control algorithms** (کنٹرول الگورتھم) calculate corrective movements (اصلاحی حرکات).
3. **Actuators** (ایکچوایٹرز) adjust joints to keep the robot upright (روبوٹ کو سیدھا رکھنے کے لیے مشینیں).

Example (مثال): A bipedal robot adjusts its ankle motors in real-time while walking on uneven terrain (دو پیروں والا روبوٹ غیر مساوی زمین پر چلتے وقت اپنی اینکل موتورز کو حقیقی وقت میں ایڈجسٹ کرتا ہے).

Exercise (ورک شیٹ): Imagine a robot on a slope (تصور کریں کہ ایک روبوٹ ڈھلوان پر ہے). Which sensors and motors would you use to keep it upright (کون سے سینسرز اور موتورز اسے سیدھا رکھنے کے لیے استعمال کریں گے)?

Reference (حوالہ): Chapter 4 – Actuators in Robotics and Chapter 5 – Control Systems for Robotics`;
      } else if (lowerCaseMessage.includes('actuator') || lowerCaseMessage.includes('actuators')) {
        fallbackResponse = `**Actuators in Robotics** (روبوٹکس میں ایکچوایٹرز)

Actuators (ایکچوایٹرز) are components that enable robots to move and interact with their environment (جزوامات جو روبوٹس کو حرکت کرنے اور ماحول کے ساتھ تعامل کرنے کے قابل بناتی ہیں). They are essentially the "muscles" of a robot (وہ دراصل روبوٹ کی "پٹھوں" ہیں), converting energy (usually electrical) into mechanical motion (عمدہ برقی توانائی کو میکینیکل حرکت میں تبدیل کرتے ہیں).

Step-by-step understanding (Step-by-step سمجھ):
1. **Electric motors** (برقی موتورز) are most common in humanoid robots due to their precision and controllability (ہیومینوئڈ روبوٹس میں ان کی درستگی اور قابل کنٹرول ہونے کی وجہ سے سب سے زیادہ عام ہیں).
2. **Servo motors** (سرو موتورز) provide precise angular control for joint movements (مشترکہ حرکات کے لیے درست زاویہ وار کنٹرول فراہم کرتے ہیں).
3. **Linear actuators** (لکیری ایکچوایٹرز) create straight-line motion for specific applications (مخصوص اطلاقات کے لیے سیدھی لکیر کی حرکت پیدا کرتے ہیں).

Thought Experiment (سوچ کا تجربہ): Consider how a robot arm picks up a delicate object (غور کریں کہ روبوٹ بازو ایک نازک چیز کو کیسے اٹھاتا ہے). What type of actuators would allow fine control of grip strength (پکڑ کی طاقت کو باریکی سے کنٹرول کرنے والی ایکچوایٹرز کی قسم کون سی ہوگی)?

Reference (حوالہ): Chapter 4 – Actuators in Robotics`;
      } else if (lowerCaseMessage.includes('sensor') || lowerCaseMessage.includes('sensors')) {
        fallbackResponse = `**Sensors in Robotics** (روبوٹکس میں سینسرز)

Sensors (سینسرز) in robotics function similarly to human senses (روبوٹکس میں سینسرز انسانی حواس کی طرح کام کرتے ہیں), providing the robot with information about its environment and internal state (ماحول اور اندرونی حالت کے بارے میں روبوٹ کو معلومات فراہم کرتے ہیں). Common sensors include cameras (کیمرے), microphones (مائیکروفونز), accelerometers (ایکسیلرومیٹرز), gyroscopes (گیروسکوپس), force sensors (قوت کے سینسرز), and tactile sensors (لمسی سینسرز).

Step-by-step understanding (Step-by-step سمجھ):
1. **Proprioceptive sensors** (ادراکی سینسرز) measure internal states like joint angles and motor position (مشترکہ زاویوں اور موٹر کی پوزیشن جیسے اندرونی حالتیں ماپتے ہیں).
2. **Exteroceptive sensors** (بیرونی سینسرز) perceive external environment (بیرونی ماحول کا ادراک کرتے ہیں), such as cameras for vision (دیکھنے کے لیے کیمرے) and microphones for sound (آواز کے لیے مائیکروفونز).
3. **Force/torque sensors** (قوت/ٹورک سینسرز) measure interaction forces with objects and environment (اشیاء اور ماحول کے ساتھ تعامل کی قوتوں کو ماپتے ہیں).

Example (مثال): A humanoid robot uses its camera (vision sensor) to recognize objects and its tactile sensors in fingertips to grasp objects with appropriate force (ہیومینوئڈ روبوٹ اشیاء کو پہچاننے کے لیے اس کے کیمرے (وژن سینسر) کا اور مناسب قوت کے ساتھ اشیاء کو تھامنے کے لیے اس کے انگلیوں کے پیروں میں لمسی سینسرز کا استعمال کرتا ہے).

Exercise (ورک شیٹ): Design a simple sensing system for a robot navigating a room (-room میں سفر کرنے والے روبوٹ کے لیے ایک سادہ سینسنگ سسٹم تشکیل دیں). What combination of sensors would you use and why (آپ کون سے سینسرز کے مجموعہ کا استعمال کریں گے اور کیوں)?

Reference (حوالہ): Chapter 3 – Sensors in Robotics`;
      } else if (lowerCaseMessage.includes('motion') || lowerCaseMessage.includes('planning') || lowerCaseMessage.includes('movement')) {
        fallbackResponse = `**Motion Planning in Robotics** (روبوٹکس میں موشن پلاننگ)

Motion planning (موشن پلاننگ) in robotics involves determining a sequence of movements to achieve a goal while avoiding obstacles (روبوٹکس میں موشن پلاننگ مقصد کے حصول کے لیے حرکات کی ترتیب کا تعین کرتا ہے جبکہ رکاوٹوں سے بچتے ہیں).

Step-by-step understanding (Step-by-step سمجھ):
1. **Path planning** (راہ کی منصوبہ بندی) - Calculate a geometric route from start to goal (شروع سے مقصد تک جیومیٹرک راستہ کا حساب لگائیں).
2. **Trajectory planning** (محل حرکت کی منصوبہ بندی) - Add timing and kinematic constraints to the path (راہ میں وقت اور کنیمیٹک رکاوٹیں شامل کریں).
3. **Control execution** (کنٹرول انجام دہی) - Send commands to actuators to follow the planned trajectory (منصوبہ بند محل حرکت کو فالو کرنے کے لیے ایکچوایٹرز کو حکم دیں).

Example (مثال): A humanoid robot planning to step over an obstacle calculates the required leg movement trajectory to avoid collision while maintaining balance (ایک ہیومینوئڈ روبوٹ کو رکاوٹ کے اوپر قدم رکھنے کے منصوبے کے تحت توازن برقرار رکھتے ہوئے ٹکراؤ سے بچنے کے لیے ضروری لیگ موشن ٹریجکٹری کا حساب لگاتا ہے).

Exercise (ورک شیٹ): Think about planning a path for a robot arm to move from point A to point B without hitting any obstacles in a cluttered workspace (نقطہ A سے نقطہ B تک جانے والے روبوٹ بازو کے راستے کی منصوبہ بندی کے بارے میں سوچیں بغیر کسی رکاوٹ کو ٹکرانے کے).

Reference (حوالہ): Chapter 9 – Motion Planning`;
      } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('start')) {
        fallbackResponse = "Hello! (ہیلو!) I'm your AI tutor for the Physical AI & Humanoid Robotics textbook. How can I help you understand the concepts better today?\n\nTry asking specific questions like:\n- How do humanoid robots balance?\n- Explain the types of actuators used in robotics?\n- What are the different types of sensors?";
      } else if (lowerCaseMessage.includes('chapter') || lowerCaseMessage.includes('content') || lowerCaseMessage.includes('topics')) {
        fallbackResponse = `The textbook "Physical AI & Humanoid Robotics" covers several important topics:

1. **Chapter 1**: Overview and History of Physical AI (فزیکل ای آئی کا جائزہ اور تاریخ)
2. **Chapter 2**: Foundations of Physical AI (فزیکل ای آئی کی بنیادیں)
3. **Chapter 3**: Sensors in Robotics (روبوٹکس میں سینسرز)
4. **Chapter 4**: Actuators in Robotics (روبوٹکس میں ایکچوایٹرز)
5. **Chapter 5**: Control Systems for Robotics (روبوٹکس کے لیے کنٹرول سسٹمز)
6. **Chapter 6**: Machine Learning for Robotics (روبوٹکس کے لیے مشین لرننگ)
7. **Chapter 9**: Motion Planning (موشن پلاننگ)
8. **Chapter 18**: AI Safety and Ethics (ای آئ سیفٹی اور اخلاق)

Which topic would you like to explore in detail? (کون سے موضوع کو تفصیل سے جانا چاہیں گے)`;
      } else if (lowerCaseMessage.includes('introduction') || lowerCaseMessage.includes('intro')) {
        fallbackResponse = `**Introduction to Physical AI** (فزیکل ای آئی کا تعارف)

Physical AI (فزیکل ای آئی) is an interdisciplinary field that combines artificial intelligence with physical systems (جراثیمی علاقہ جو مصنوعی ذہانت کو جسمانی نظام کے ساتھ جوڑتا ہے). It focuses on creating intelligent machines that can understand, interact with, and adapt to the physical world (وہ انٹلیجنٹ مشینوں کو تخلیق کرنے پر توجہ مرکز کرتا ہے جو جسمانی دنیا کو سمجھ سکیں، اس کے ساتھ تعامل کر سکیں اور اس کے مطابق ایڈجسٹ ہو سکیں).

Step-by-step understanding (Step-by-step سمجھ):
1. **Perception** (ادراک) - Gathering information about the environment (ماحول کے بارے میں معلومات اکٹھا کرنا).
2. **Cognition** (سوچنا) - Processing information to understand and reason (سمجھنے اور سوچنے کے لیے معلومات کی پروسیسنگ).
3. **Action** (عمل) - Executing movements or tasks in the physical world (جسمانی دنیا میں حرکات یا کام انجام دینا).

Reference (حوالہ): Chapter 1 – Overview and History of Physical AI`;
      } else if (lowerCaseMessage.includes('translate') || lowerCaseMessage.includes('urdu')) {
        fallbackResponse = `I can provide translations to Urdu in parentheses ( ). For example:

English: Sensors in robotics function similarly to human senses
Urdu: روبوٹکس میں سینسرز انسانی حواس کی طرح کام کرتے ہیں

If you'd like any concept explained in Urdu, just ask!`;
      }

      setIsLoading(false);
      return fallbackResponse;
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    
    // Add user message to chat
    const newUserMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    
    // Get and add AI response
    const aiResponse = await getAIResponse(inputText);
    const newAiMessage = {
      id: messages.length + 2,
      text: aiResponse,
      sender: 'tutor',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newAiMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-indigo-700 text-white p-4">
        <h2 className="text-xl font-bold">Physical AI & Humanoid Robotics Tutor</h2>
        <p className="text-indigo-200 text-sm">AI-powered assistance for your textbook</p>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50" style={{ maxHeight: '500px' }}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`mb-4 flex ${message.sender === 'tutor' ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-4 ${
                message.sender === 'tutor' 
                  ? 'bg-white border border-gray-200 text-gray-800' 
                  : 'bg-indigo-100 text-gray-800'
              }`}
            >
              <div className="font-medium text-xs mb-1" style={{ color: message.sender === 'tutor' ? '#4f46e5' : '#4f46e5' }}>
                {message.sender === 'tutor' ? 'AI Tutor (رُوبوٹ ٹیوٹر)' : 'You (آپ)'}
              </div>
              <div className="whitespace-pre-wrap">{message.text}</div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 flex justify-start">
            <div className="max-w-[80%] rounded-lg p-4 bg-white border border-gray-200 text-gray-800">
              <div className="font-medium text-xs mb-1" style={{ color: '#4f46e5' }}>
                AI Tutor (رُوبوٹ ٹیوٹر)
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question about Physical AI & Humanoid Robotics..."
            className="flex-1 border border-gray-300 rounded-l-lg p-3 resize-none h-16 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || inputText.trim() === ''}
            className={`bg-indigo-600 text-white px-6 rounded-r-lg font-medium ${
              isLoading || inputText.trim() === '' 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-indigo-700'
            }`}
          >
            Send
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Example: "How do humanoid robots balance on two legs?" or "Explain actuators and their types"
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;