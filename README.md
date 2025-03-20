# AkashChat

![Akash Chat Agent](/public/images/homepage.png)

A modern AI-powered behavioral analysis chat application built on Next.js.

## Overview

AkashChat provides an intuitive platform for users to analyze behavioral patterns, develop healthier habits, and receive evidence-based recommendations through an AI assistant. The application features both a public-facing interface and a secure dashboard with advanced analytics capabilities.

![Chat Interface](/public/images/chat.png)

## Features

![Key Features](/public/images/features.png)

- **AI-Powered Chat Interface**: Engage in meaningful conversations with our behavioral analysis AI assistant
- **Multi-Model Support**: Choose from a variety of AI models including DeepSeek-R1, Meta-Llama-3, and more
- **Behavioral Analysis**: Submit detailed information about behaviors to receive comprehensive analysis reports
- **Habit Formation**: Track habits, establish routines, and get personalized recommendations
- **Progress Tracking**: Monitor your development through detailed statistics and visualizations
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing in any environment
- **User Authentication**: Secure login system for accessing personalized dashboard features
- **Interactive UI**: Modern, accessible interface with clean animations and transitions
- **Client-Side Rendering**: Optimized for performance with proper hydration handling
- **Error Handling**: Graceful recovery from API errors and model unavailability

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Hooks and Context API
- **API Integration**: Akash ChatAI
- **Authentication**: Next.js middleware and server components
- **Animations**: CSS transitions and Tailwind animations
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Akash API key (for AI chat functionality)

### Installation

1. Clone the repository

```bash
git clone https://github.com/harystyleseze/AkashChatAgent
cd AkashChatAgent
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Set up your environment variables

Create a `.env.local` file in the root directory and add your Akash API key:

```
NEXT_PUBLIC_AKASH_API_KEY=your_api_key_here
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AI Models and API Integration

AkashChat leverages the Akash AI API for behavioral analysis with these key features:

![Supported Models](/public/images/models.png)

- **Multiple AI Models**: Support for various models, with Meta-Llama-3-2-3B-Instruct as the default
- **Smart Model Fallback**: Automatic switching to available models if selected model is unavailable
- **Client-Side API Calls**: Hydration-safe API integration to prevent React hydration mismatches
- **Error Handling**: Comprehensive error detection and recovery with user-friendly error messages
- **Response Cleaning**: Automatic formatting of responses for better readability
- **Behavioral Analysis**: In-depth functional analysis based on behavioral science principles

Available models include:

- DeepSeek-R1 (optimized for reasoning tasks)
- DeepSeek-R1-Distill-Llama-70B
- Meta-Llama-3-1-8B-Instruct-FP8
- Meta-Llama-3-2-3B-Instruct (default)
- Meta-Llama-3-1-70B-Instruct
- And more depending on API availability

## Dashboard Features

The secure dashboard area includes:

- **Enhanced Chat**: Advanced chat interface with model selection and conversation history

![Enhanced Chat Interface](/public/images/dashboardChat.png)

- **New Analysis**: Submit detailed information about behaviors for comprehensive analysis

![New Analyses Dashboard Page](/public/images/newAnalyses.png)

- **Analyses**: View and manage previous behavioral analyses

![Analyses Dashboard Page](/public/images/analyses.png)

- **Habits**: Track personal habits and view recommended habits from analyses

![Habit Tracker Dashboard Page](/public/images/habits.png)

![Habit Calendar Dashboard Page](/public/images/habitCalendar.png)

![Habit Completion Rate Dashboard Page](/public/images/habitCompletionRate.png)

- **Statistics**: Visual representations of progress and behavioral patterns

![Statistics Dashboard Page](/public/images/statistics.png)

- **Profile**: Manage account details and preferences

![Profile Dashboard Page](/public/images/profile.png)

- **Settings**: Control application behavior and appearance

![Settings Dashboard Page](/public/images/settings.png)

## Benefits

![Benefits](/public/images/benefits.png)

![Testimonials](/public/images/testimonial.png)

![Log in Page](/public/images/login.png)

![Registration Page](/public/images/register.png)

## Project Structure

```
akash-chat-agent/
├── components/         # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── landing/        # Landing page components
│   └── ui/             # Core UI components based on shadcn/ui
├── app/                # App router pages
│   ├── dashboard/      # Protected dashboard routes
│   │   ├── analyses/   # Behavioral analysis management
│   │   ├── chat/       # Enhanced dashboard chat
│   │   ├── habits/     # Habit tracking features
│   │   ├── new-analysis/ # Create new behavioral analysis
│   │   ├── profile/    # User profile management
│   │   ├── settings/   # Application settings
│   │   └── statistics/ # Progress visualizations
│   ├── chat/           # Public chat interface
│   └── login/          # Authentication pages
├── lib/                # Utility functions and shared code
│   └── akash-api.ts    # API client for Akash AI services
├── hooks/              # Custom React hooks
├── public/             # Static assets
└── styles/             # Global styles
```

## Client-Side Rendering and Hydration

To prevent React hydration errors, AkashChat implements:

- **Isomorphic Detection**: Server vs client-side rendering detection
- **Safe State Initialization**: Client-side only state initialization for dates and random values
- **Stable IDs**: Sequential ID generation for chat messages
- **Minimal Server Rendering**: Server renders a minimal UI placeholder
- **Window Detection**: Uses `typeof window` check to prevent API calls during server rendering

## Behavioral Analysis Features

Submit detailed information about behaviors for advanced analysis:

- **Current Behavior**: Describe the behavior you want to analyze
- **Context/Environment**: When and where the behavior occurs
- **Immediate Consequences**: What happens right after the behavior
- **Previous Attempts**: What you've tried before to change this behavior
- **Emotional Context**: Feelings and thoughts associated with the behavior

The analysis provides:

- Functional behavioral assessment
- Root cause identification
- Practical habit recommendations
- Implementation strategies
- Scientific evidence for recommendations
- Progress tracking guidance

## Development

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

```bash
npm start
# or
yarn start
```

## Troubleshooting

### Hydration Errors

If you encounter hydration errors:

- Ensure dates and random values are only generated client-side
- Use isomorphic detection with `typeof window` checks
- Initialize state in useEffect with empty default values

### API Key Issues

- If you're getting 401 errors, ensure your API key is correctly set in the `.env.local` file
- Not all models are available with every API key - the app will automatically switch to available models

### Model Selection

- If a particular model isn't working, try a different one from the dropdown
- Meta-Llama-3-2-3B-Instruct is set as the default model
- The application will automatically suggest a working model if the selected one is unavailable

## Design Principles

AkashChat follows modern design principles:

- **Responsive layout**: Adapts to any device size from mobile to desktop
- **Accessibility**: WCAG guidelines for inclusive user experience
- **Consistent theming**: Primary color scheme with light/dark mode support
- **Visual hierarchy**: Clear organization of information for intuitive navigation
- **Minimal loading states**: Smooth transitions between application states
- **Error feedback**: Clear communication when things go wrong

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the incredible framework
- shadcn/ui for the beautiful component library foundation
- Akash Network for their AI API services
- Lucide for the elegant icon set
