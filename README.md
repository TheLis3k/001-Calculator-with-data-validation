# 001 - Calculator with Data Validation

A fully functional, web-based calculator built with vanilla HTML, CSS, and JavaScript. This project features robust data validation, memory functions, and a dynamic UI that switches between standard and scientific modes. It was developed as a first project and is ready for use.

## ✨ Features

- **Advanced Error Handling**: Comprehensive validation prevents common mathematical errors (division by zero, factorial of negative numbers, etc.) with descriptive error messages.
- **Dual Interface Modes**: Toggle between a standard calculator and an expanded scientific calculator with one click.
- **Memory Functions**: Full memory operations (MRC, MR, MR+, MR-) for complex calculations.
- **Data Validation**: Ensures all inputs are valid numbers and operations are mathematically sound.
- **Keyboard & Mouse Support**: Use either clicking or keyboard shortcuts for all operations.
- **Clipboard Integration**: Copy and paste values using Ctrl+C and Ctrl+V.

## 🚀 Getting Started

### Prerequisites
- A modern web browser (tested on Firefox)
- Git (for cloning the repository)

### Installation
1. Clone the repository:
```bash
git clone <your-repository-url>
```
2. Navigate to the project directory
3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles/
│   └── style.css       # All styling and responsive design
└── scripts/
    ├── main.js         # Application entry point
    ├── display.js      # Manages calculator display and UI state
    ├── calculator.js   # Core mathematical operations and logic
    ├── eventListeners.js # Handles user interactions (click & keyboard)
    ├── memory.js       # Memory function implementations
    ├── utils/
    │   ├── validation.js # Input validation and error handling
    │   ├── math.js      # Mathematical utilities (factorial)
    │   ├── clipBoard.js # Copy/paste functionality
    │   └── localMemory.js # Local storage persistence
```

### Key Modules Explained
- **`calculator.js`**: Handles all mathematical operations and operator logic
- **`display.js`**: Manages the visual interface and mode switching
- **`validation.js`**: Comprehensive input validation and user-friendly error messages
- **`memory.js`**: Implements memory storage and recall functions
- **`eventListeners.js`**: Unified event handling for both mouse and keyboard input

## 🎯 Usage

### Basic Operations
- **Numbers & Operators**: Click buttons or use keyboard keys
- **Clear**: Press 'C' or click the clear button
- **Backspace**: Use backspace key or the ⌫ button
- **Equals**: Press 'Enter', '=', or click the = button

### Interface Modes
- Click **"Expand"** to access scientific functions (trigonometry, exponents, roots, etc.)
- Click **"Minimize"** to return to standard calculator view

### Memory Functions
- **MRC**: Memory Recall Clear - clears stored memory value
- **MR**: Memory Recall - recalls stored value to display
- **MR+**: Add current value to memory
- **MR-**: Subtract current value from memory

### Keyboard Shortcuts
- **Ctrl+C**: Copy current display value
- **Ctrl+V**: Paste value to display (validates input)
- **Numbers (0-9)**: Input numbers
- **Operators (+, -, *, /, %)**: Basic operations
- **Special**: '^' for power, '!' for factorial

## 🤝 Contributing

This is primarily a portfolio project, but contributions and suggestions are welcome! Please feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Provide general feedback

## 📞 Contact

For questions or feedback about this project, please contact me through my GitHub profile.

---

**Note**: This project uses modern JavaScript (ES6+ modules) and requires a web server environment or browser with proper CORS settings for local file access.
