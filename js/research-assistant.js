// research-assistant.js - Interactive AI Research Assistant
// This provides the "AGI gimmick" chat functionality for the portfolio

document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    // Only initialize if the chat elements exist on the page
    if (chatContainer && userInput && sendButton) {
        // Knowledge base for the research assistant
        const researchKnowledge = {
            'llm': {
                'title': 'LLM Capability Analysis',
                'description': 'Framework for quantifying emergent capability thresholds across LLM architectures (7B-72B), achieving 87% prediction accuracy using novel E-manifold metrics.',
                'methods': 'Transformer architecture analysis, E-manifold metric development, Cross-scale performance measurement',
                'results': 'Uncovered previously unobserved scaling laws for reasoning tasks, outperforming standard evaluation approaches by 35% with 42% reduced computation cost.'
            },
            'multimodal': {
                'title': 'Multimodal Learning',
                'description': 'Cross-modal fusion system integrating ViT image encodings with BERT text embeddings.',
                'methods': 'Vision Transformer implementation, CLIP-based representation learning, Custom attention mechanism for contextual alignment',
                'results': 'Achieved 85% accuracy on zero-shot multimodal reasoning tasks with minimal supervision.'
            },
            'medical': {
                'title': 'Medical Image Analysis',
                'description': 'U-Net architecture with transformer enhancements for medical image segmentation.',
                'methods': 'Transfer learning approach, Adaptive augmentation pipeline, Anatomical consistency enforcement',
                'results': 'Top 15% ranking in ISBI Challenge with 92% segmentation accuracy and 60% reduction in false positives.'
            },
            'rag': {
                'title': 'Retrieval-Augmented Generation',
                'description': 'Comprehensive RAG system combining vector databases with fine-tuned LLMs.',
                'methods': 'Advanced prompt engineering, Context window optimization, Vector database integration',
                'results': '78% improvement in answer accuracy and 65% reduction in hallucinations for academic information retrieval.'
            },
            'startup': {
                'title': 'Emitrix.io',
                'description': 'Founded and led a sustainable tech startup focused on AI-driven environmental monitoring.',
                'methods': 'Built Sustain AI using OpenAI\'s GPT-3.5 API, trained Random Forest and XGBoost models, developed spaCy NER model',
                'results': 'Secured $100K seed funding, reduced report generation time by 40%, achieved successful exit'
            }
        };
        
        const publicationInfo = {
            'transformer': {
                'title': 'Transformer-Based Architecture for Enhanced Response Coherence',
                'venue': 'International Conference on Information Engineering and Management (ICIEM)',
                'year': '2021',
                'doi': '10.1109/ICIEM51511.2021.9445354',
                'citations': '28',
                'description': 'This paper introduces a modified transformer architecture that significantly improves response coherence in conversational AI systems. We propose a novel attention mechanism that maintains contextual relevance across multiple turns of conversation.'
            },
            'carbon': {
                'title': 'Carbon Automated AI Emission Monitoring System',
                'venue': 'International Conference on Big Data and Smart Systems (ICBDS)',
                'year': '2022',
                'doi': '10.1109/ICBDS53701.2022.9935979',
                'citations': '15',
                'description': 'This research presents an IoT-based system for automated carbon emission monitoring using AI techniques. We demonstrate how machine learning models can be deployed on edge devices to monitor emissions in real-time, with data verification through blockchain technology.'
            },
            'emergent': {
                'title': 'Predicting Emergent Capabilities in Large Language Models',
                'venue': 'International Conference on Machine Learning (ICML)',
                'year': '2025 (Under Review)',
                'description': 'This paper introduces a novel framework for quantifying and predicting emergent capabilities in large language models across different parameter scales. Using our proposed E-manifold metrics, we can predict capability emergence with 87% accuracy.'
            }
        };
        
        const experienceInfo = {
            'asu': {
                'title': 'AI Research Assistant at Arizona State University',
                'period': 'Jan 2025 - May 2025',
                'description': 'Led advanced research in LLMs and Retrieval-Augmented Generation (RAG) systems, built comprehensive RAG system, and conducted extensive prompt engineering experiments across cutting-edge foundation models.'
            },
            'nexus': {
                'title': 'Machine Learning Engineer Intern at Nexus Info',
                'period': 'Apr 2024 - Jun 2024',
                'description': 'Developed scalable BERT-based NLU system, optimized end-to-end ML pipeline on AWS, and implemented advanced data augmentation techniques.'
            },
            'varcons': {
                'title': 'Full Stack Developer Intern at Varcons Technologies',
                'period': 'Feb 2023 - Apr 2023',
                'description': 'Enhanced ML data preprocessing pipeline, achieved 90% code coverage with robust test automation, and designed interactive real-time analytics dashboard.'
            },
            'emitrix': {
                'title': 'Founder & CEO at Emitrix.io',
                'period': 'May 2022 - Jan 2023',
                'description': 'Founded and led a sustainable tech startup, built Sustain AI using OpenAI\'s GPT-3.5 API, and implemented MLOps using Docker containers on AWS ECS.'
            }
        };
        
        // Function to add message to chat
        function addMessage(role, content) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'mb-4';
            
            const roleDiv = document.createElement('div');
            roleDiv.className = 'text-xs text-gray-400 mb-1';
            roleDiv.textContent = role === 'user' ? 'You' : 'AI Assistant';
            
            const contentDiv = document.createElement('div');
            contentDiv.className = role === 'user' 
                ? 'bg-blue-600 p-3 rounded-lg inline-block max-w-md ml-auto' 
                : 'bg-gray-700 p-3 rounded-lg inline-block max-w-md';
            contentDiv.innerHTML = content;
            
            messageDiv.appendChild(roleDiv);
            messageDiv.appendChild(contentDiv);
            
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
        
        // Add thinking animation
        function showThinking() {
            const thinkingDiv = document.createElement('div');
            thinkingDiv.className = 'mb-4 thinking-indicator';
            
            const roleDiv = document.createElement('div');
            roleDiv.className = 'text-xs text-gray-400 mb-1';
            roleDiv.textContent = 'AI Assistant';
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'bg-gray-700 p-3 rounded-lg inline-block';
            contentDiv.innerHTML = '<div class="flex space-x-2"><div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div><div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div><div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div></div>';
            
            thinkingDiv.appendChild(roleDiv);
            thinkingDiv.appendChild(contentDiv);
            
            chatContainer.appendChild(thinkingDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            return thinkingDiv;
        }
        
        // Remove thinking animation
        function removeThinking() {
            const thinkingIndicator = document.querySelector('.thinking-indicator');
            if (thinkingIndicator) {
                thinkingIndicator.remove();
            }
        }
        
        // Function to generate response based on user input
        function generateResponse(query) {
            const queryLower = query.toLowerCase();
            
            // Check for research area questions
            if (queryLower.includes('llm') || queryLower.includes('capability') || queryLower.includes('e-manifold')) {
                return createResearchResponse('llm');
            } 
            else if (queryLower.includes('multimodal') || queryLower.includes('vision') || queryLower.includes('image') && queryLower.includes('text')) {
                return createResearchResponse('multimodal');
            }
            else if (queryLower.includes('medical image') || queryLower.includes('segmentation') || queryLower.includes('u-net')) {
                return createResearchResponse('medical');
            }
            else if (queryLower.includes('rag') || queryLower.includes('retrieval') || queryLower.includes('generation')) {
                return createResearchResponse('rag');
            }
            // Check for publication questions
            else if (queryLower.includes('publication') || queryLower.includes('paper') || queryLower.includes('research paper')) {
                return createPublicationsResponse();
            }
            // Check for startup questions
            else if (queryLower.includes('startup') || queryLower.includes('emitrix') || queryLower.includes('company')) {
                return createResearchResponse('startup');
            }
            // Check for experience questions
            else if (queryLower.includes('experience') || queryLower.includes('work') || queryLower.includes('job')) {
                return createExperienceResponse();
            }
            // Check for education questions
            else if (queryLower.includes('education') || queryLower.includes('university') || queryLower.includes('degree')) {
                return `<strong>Education</strong><br><br>
                <strong>Arizona State University</strong> (2023-2025)<br>
                Master of Science in Information Technology<br>
                GPA: 3.90/4.00<br><br>
                <strong>BMS Institute of Technology</strong> (2019-2023)<br>
                Bachelor of Engineering in Electronics & Telecommunication<br>
                GPA: 3.80/4.00`;
            }
            // Check for skills questions
            else if (queryLower.includes('skill') || queryLower.includes('technology') || queryLower.includes('tech stack')) {
                return `<strong>Technical Skills</strong><br><br>
                <strong>AI/ML:</strong> PyTorch, TensorFlow, Transformers, HuggingFace, BERT, GPT, LLaMA, CUDA, RAG, Fine-tuning<br><br>
                <strong>NLP/CV:</strong> Large Language Models, Embeddings, Text Classification, Computer Vision, Prompt Engineering, Information Retrieval<br><br>
                <strong>Data/Cloud:</strong> AWS (Bedrock, S3), Docker, PySpark, Pandas, MLflow, SQL, Git, FastAPI`;
            }
            // Generic response for other queries
            else {
                return `I'm programmed with knowledge about Shubham's research in LLM capabilities, multimodal systems, medical imaging, and RAG systems. I can also tell you about his publications, experience, education, and technical skills. What would you like to know more about?`;
            }
        }
        
        // Helper function to create research area responses
        function createResearchResponse(area) {
            const data = researchKnowledge[area];
            return `<strong>${data.title}</strong><br><br>
            ${data.description}<br><br>
            <strong>Methods:</strong> ${data.methods}<br><br>
            <strong>Results:</strong> ${data.results}`;
        }
        
        // Helper function to create publications response
        function createPublicationsResponse() {
            return `<strong>Publications</strong><br><br>
            Shubham has published the following research papers:<br><br>
            1. <strong>${publicationInfo.transformer.title}</strong> (${publicationInfo.transformer.year})<br>
            ${publicationInfo.transformer.venue}<br>
            DOI: ${publicationInfo.transformer.doi}<br>
            Citations: ${publicationInfo.transformer.citations}<br><br>
            
            2. <strong>${publicationInfo.carbon.title}</strong> (${publicationInfo.carbon.year})<br>
            ${publicationInfo.carbon.venue}<br>
            DOI: ${publicationInfo.carbon.doi}<br>
            Citations: ${publicationInfo.carbon.citations}<br><br>
            
            3. <strong>${publicationInfo.emergent.title}</strong> (${publicationInfo.emergent.year})<br>
            ${publicationInfo.emergent.venue}`;
        }
        
        // Helper function to create experience response
        function createExperienceResponse() {
            return `<strong>Professional Experience</strong><br><br>
            <strong>${experienceInfo.asu.title}</strong><br>
            ${experienceInfo.asu.period}<br>
            ${experienceInfo.asu.description}<br><br>
            
            <strong>${experienceInfo.nexus.title}</strong><br>
            ${experienceInfo.nexus.period}<br>
            ${experienceInfo.nexus.description}<br><br>
            
            <strong>${experienceInfo.varcons.title}</strong><br>
            ${experienceInfo.varcons.period}<br>
            ${experienceInfo.varcons.description}<br><br>
            
            <strong>${experienceInfo.emitrix.title}</strong><br>
            ${experienceInfo.emitrix.period}<br>
            ${experienceInfo.emitrix.description}`;
        }
        
        // Handle send button click
        sendButton.addEventListener('click', function() {
            const query = userInput.value.trim();
            if (query) {
                // Add user message
                addMessage('user', query);
                
                // Clear input
                userInput.value = '';
                
                // Show thinking animation
                const thinking = showThinking();
                
                // Simulate AI thinking delay (500-1500ms)
                setTimeout(() => {
                    // Remove thinking animation
                    removeThinking();
                    
                    // Generate and add AI response
                    const response = generateResponse(query);
                    addMessage('assistant', response);
                }, Math.random() * 1000 + 500);
            }
        });
        
        // Handle Enter key press
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
    }
});