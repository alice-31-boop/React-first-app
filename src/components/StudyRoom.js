import React, { useState } from 'react';
import './StudyRoom.css';

import PythonLogo from '../assets/logos/python.png';
import JavaScriptLogo from '../assets/logos/java-script.png';
import TypeScriptLogo from '../assets/logos/typescript.png';
import HtmlCssLogo from '../assets/logos/html-css.png';
import CppLogo from '../assets/logos/cpp.png';
import JavaLogo from '../assets/logos/java.png';
import GoLogo from '../assets/logos/go.png';
import PhpLogo from '../assets/logos/php.png';

// You can import your video here or use a URL
import backgroundVideo from '../assets/logos/coding-background.mp4';  // Adjust this path

function StudyRoom() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="study-room">
      {/* Video background */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="content-overlay">
        <h1>You wanna learn a cool language?</h1>

        {/* Added "Select a language to get started" text */}
        <p>Select a language to get started:</p>
        
        <div className="language-options">
          <button onClick={() => handleLanguageSelect('Python')}>
            <img src={PythonLogo} alt="Python Logo" />
            Python
          </button>
          <button onClick={() => handleLanguageSelect('JavaScript')}>
            <img src={JavaScriptLogo} alt="JavaScript Logo" />
            JavaScript
          </button>
          <button onClick={() => handleLanguageSelect('HTML/CSS')}>
            <img src={HtmlCssLogo} alt="HTML/CSS Logo" />
            HTML/CSS
          </button>
          <button onClick={() => handleLanguageSelect('TypeScript')}>
            <img src={TypeScriptLogo} alt="TypeScript Logo" />
            TypeScript
          </button>
          <button onClick={() => handleLanguageSelect('C++')}>
            <img src={CppLogo} alt="C++ Logo" />
            C++
          </button>
          <button onClick={() => handleLanguageSelect('Java')}>
            <img src={JavaLogo} alt="Java Logo" />
            Java
          </button>
          <button onClick={() => handleLanguageSelect('Go')}>
            <img src={GoLogo} alt="Go Logo" />
            Go
          </button>
          <button onClick={() => handleLanguageSelect('PHP')}>
            <img src={PhpLogo} alt="PHP Logo" />
            PHP
          </button>
        </div>
        
        {/* Display the documentation links once a language is selected */}
        {selectedLanguage && (
          <div className="links-section">
            <p>Documentation for <strong>{selectedLanguage}</strong>:</p>
            
            {selectedLanguage === 'Python' && (
              <ul>
                <li><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Official Python Documentation</a></li>
                <li><a href="https://www.learnpython.org/" target="_blank" rel="noopener noreferrer">Learn Python</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/python/" target="_blank" rel="noopener noreferrer">Python Cheat Sheet</a></li>
              </ul>
            )}
            {selectedLanguage === 'JavaScript' && (
              <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript MDN Docs</a></li>
                <li><a href="https://www.learn-js.org/" target="_blank" rel="noopener noreferrer">Learn JavaScript</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/javascript/" target="_blank" rel="noopener noreferrer">JavaScript Cheat Sheet</a></li>
              </ul>
            )}
            {selectedLanguage === 'HTML/CSS' && (
              <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML MDN Docs</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS MDN Docs</a></li>
                <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
              </ul>
            )}
            {selectedLanguage === 'TypeScript' && (
              <ul>
                <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">TypeScript Documentation</a></li>
                <li><a href="https://www.learn-typescript.org/" target="_blank" rel="noopener noreferrer">Learn TypeScript</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/typescript/" target="_blank" rel="noopener noreferrer">TypeScript Cheat Sheet</a></li>
              </ul>
            )}
            {selectedLanguage === 'C++' && (
              <ul>
                <li><a href="https://en.cppreference.com/w/" target="_blank" rel="noopener noreferrer">C++ Reference</a></li>
                <li><a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer">Learn C++</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/cpp/" target="_blank" rel="noopener noreferrer">C++ Cheat Sheet</a></li>
              </ul>
            )}
            {selectedLanguage === 'Java' && (
              <ul>
                <li><a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">Official Java Docs</a></li>
                <li><a href="https://www.learn-java.com/" target="_blank" rel="noopener noreferrer">Learn Java</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/java/" target="_blank" rel="noopener noreferrer">Java Cheat Sheet</a></li>
              </ul>
            )}
            {selectedLanguage === 'Go' && (
              <ul>
                <li><a href="https://golang.org/doc/" target="_blank" rel="noopener noreferrer">Go Documentation</a></li>
                <li><a href="https://tour.golang.org/" target="_blank" rel="noopener noreferrer">Go Tour</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/go/" target="_blank" rel="noopener noreferrer">Go Cheat Sheet</a></li>
              </ul>
            )}
            {selectedLanguage === 'PHP' && (
              <ul>
                <li><a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">Official PHP Documentation</a></li>
                <li><a href="https://www.learn-php.org/" target="_blank" rel="noopener noreferrer">Learn PHP</a></li>
                <li><a href="https://cheatography.com/davechild/cheat-sheets/php/" target="_blank" rel="noopener noreferrer">PHP Cheat Sheet</a></li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudyRoom;
