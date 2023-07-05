// script.js

// Function to generate a quote
const generateQuote = async () => {
    const keywordInput = document.getElementById('keyword');
    const quoteContainer = document.getElementById('quoteContainer');
  
    // Clear previous quote
    quoteContainer.innerHTML = '';
  
    // Get the keyword value
    const keyword = keywordInput.value;
  
    if (keyword.trim() === '') {
      // If keyword is empty, display an error message
      quoteContainer.textContent = 'Please enter a keyword.';
    } else {
      try {
        // Make a GET request to the backend API
        const response = await fetch(`http://localhost:3000/generate-quote?keyword=${encodeURIComponent(keyword)}`);
        const data = await response.json();
  
        if (response.ok) {
          // Display the generated quote
          const quoteText = document.createElement('p');
          quoteText.textContent = data.quote;
          quoteContainer.appendChild(quoteText);
        } else {
          // Display an error message if the API request fails
          quoteContainer.textContent = 'Failed to generate quote. Please try again.';
        }
      } catch (error) {
        console.error('Error:', error);
        quoteContainer.textContent = 'An error occurred. Please try again later.';
      }
    }
  };
  
  // Event listener for the "Generate Quote" button click
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', generateQuote);
  



  