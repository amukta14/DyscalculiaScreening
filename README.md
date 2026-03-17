# Dyscalculia Screening Platform

A comprehensive web-based assessment platform designed to identify and evaluate mathematical learning difficulties in children and adolescents.

## Overview

This platform provides a series of interactive cognitive assessments specifically designed to screen for dyscalculia, a learning disability that affects mathematical abilities. The application offers age-appropriate testing modules with immediate feedback and detailed reporting capabilities.

## Features

### Assessment Modules

- **Dot Counting Game**: Evaluates subitizing ability and number sense
- **Number Comparison**: Tests magnitude processing and quantity judgment
- **Pattern Completion**: Assesses logical reasoning and sequence recognition
- **Symbol Confusion**: Identifies mathematical symbol recognition issues
- **Place Value Puzzle**: Evaluates understanding of number structure
- **Word Problem Solving**: Tests mathematical reasoning in context
- **Conversational Math**: Simulates real-world mathematical scenarios
- **Clock Reading**: Assesses spatial and temporal mathematical skills

### Technical Features

- Responsive web interface optimized for various devices
- Real-time scoring and progress tracking
- Comprehensive result analysis and reporting
- Age-appropriate difficulty scaling (6-18 years)
- Secure data handling and privacy compliance

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Context, Zustand
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Build Tool**: Webpack with Next.js optimizations


<img width="995" height="901" alt="Screenshot 2026-03-18 at 12 35 17 AM" src="https://github.com/user-attachments/assets/544ad6fb-e9f6-4f31-9386-cb32b73a14d9" />
<img width="936" height="816" alt="Screenshot 2026-03-18 at 12 36 36 AM" src="https://github.com/user-attachments/assets/fe7fe983-3cfe-4b3d-825f-f1457de8fe71" />
<img width="981" height="708" alt="Screenshot 2026-03-18 at 12 34 57 AM" src="https://github.com/user-attachments/assets/77301852-4a19-4617-ba2f-675ec30d059f" />
<img width="1049" height="733" alt="Screenshot 2026-03-18 at 12 33 50 AM" src="https://github.com/user-attachments/assets/65a2e827-063f-4d02-95db-1d6fd7804c64" />
<img width="149" height="28" alt="Screenshot 2026-03-18 at 12 33 46 AM" src="https://github.com/user-attachments/assets/8c195bab-2dff-418d-89af-8b319095dbff" />
<img width="1662" height="950" alt="Screenshot 2026-03-18 at 12 32 59 AM" src="https://github.com/user-attachments/assets/85fb6fd1-26b4-48cf-820c-4f4886ceebc4" />



## Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/amukta14/DyscalculiaScreening.git
   cd DyscalculiaScreening
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### For Educators and Clinicians

1. Navigate to the assessment section
2. Enter student information and age
3. Select appropriate assessment modules
4. Administer tests according to guidelines
5. Review comprehensive results and reports

### For Parents and Guardians

1. Complete the initial age verification
2. Follow assessment instructions carefully
3. Review results with educational professionals
4. Use findings to inform educational planning

## Assessment Process

1. **Initial Screening**: Age verification and basic information collection
2. **Module Selection**: Age-appropriate test selection
3. **Test Administration**: Interactive assessment completion
4. **Result Analysis**: Comprehensive scoring and analysis
5. **Report Generation**: Detailed findings and recommendations

## Technical Architecture

The application follows modern web development practices with:

- Server-side rendering for optimal performance
- Client-side state management for real-time interactions
- Responsive design principles for cross-device compatibility
- Accessibility compliance for inclusive use
- Modular component architecture for maintainability

## Development

### Project Structure

```
app/
├── assessment/          # Assessment flow components
├── games/              # Individual game modules
├── reports/            # Results and reporting
├── layout.tsx          # Application layout
└── page.tsx            # Home page

components/              # Reusable UI components
hooks/                   # Custom React hooks
lib/                     # Utility functions
public/                  # Static assets
styles/                  # Global styling
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run code linting

## Contributing

This project welcomes contributions from educational professionals, developers, and researchers. Please ensure all contributions maintain the professional standards required for clinical and educational use.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Support

For technical support or questions about assessment methodology, please refer to the documentation or contact the development team.

## Disclaimer

This platform is designed as a screening tool and should not replace professional clinical evaluation. Results should be interpreted by qualified educational or clinical professionals in conjunction with other assessment methods. 
