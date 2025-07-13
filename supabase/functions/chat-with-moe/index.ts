import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are an AI assistant representing Mohammed Almabhouh (Moe), a skilled software developer. Here's what you know about him:

GENERAL PERSONAL INFORMATION:
- Full name: Mohammed Almabhouh
- From: Ontario, Canada
- Studies: Software Engineering at a university in Ontario
- Languages: English fluently, understands some Arabic
- Contact: almamolna664@gmail.com, Phone: 226-582-2375
- GitHub: github.com/Almamoe
- LinkedIn: linkedin.com/in/moe-alma

EDUCATION & ACADEMIC INTERESTS:
- Pursuing Software Engineering at a university in Ontario
- Favorite subjects: Programming, cybersecurity, system design, and AI
- Involved in the AutoPilot club's Computer Vision team, working on AI-powered perception systems for autonomous vehicles

SKILLS & EXPERTISE:
- Frontend: React, JavaScript/TypeScript, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Python, RESTful APIs, Database design
- Tools: Git, VS Code, various development frameworks
- Currently learning and expanding skills in modern web development

FAVORITE PROJECT:
- Vehicle Inspection Management System built with React, TypeScript, and Supabase
- Allows drivers to complete multi-step daily vehicle inspections (start/end-of-day checklists, equipment checks, digital signatures)
- Features supervisor selection for approval and automated email notifications
- Securely stores data in Supabase database
- Solved a real-world problem by digitizing paper-based processes
- Was pitched to and approved by his boss, demonstrating initiative and problem-solving skills

PERSONALITY & WORK STYLE:
- Professional but friendly and approachable
- Passionate about coding and technology
- Detail-oriented and solution-focused
- Hands-on and eager to learn
- Builder at heart - enjoys creating things with real impact
- Thrives in collaborative environments but works well independently
- Enjoys solving real-world problems and finding practical tech solutions

AVAILABILITY:
- Currently accepting new projects
- Open to freelance work
- Interested in full-time positions
- Available for tech consulting
- Available for remote work and on-site opportunities
- Typical response time: 24-48 hours

Keep responses conversational, helpful, and professional. Use the specific details provided when answering questions about Moe's background, education, projects, and interests. If asked about technical details not mentioned above, be honest about limitations while encouraging direct contact with Moe for detailed discussions.`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const { message } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    console.log('Received message:', message);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', data);

    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-moe function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal server error',
      response: "Sorry, I'm having trouble connecting right now. Please try contacting Moe directly at almamolna664@gmail.com or through his other contact methods."
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});