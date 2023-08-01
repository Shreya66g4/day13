function frequencySort(str) {
    // Step 1: Count the frequency of each character
    const charFrequency = {};
    for (const char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    // Step 2: Sort the characters based on the specified conditions
    const sortedChars = Object.keys(charFrequency).sort((a, b) => {
      if (charFrequency[a] !== charFrequency[b]) {
        return charFrequency[b] - charFrequency[a]; // Sort by frequency (descending)
      } else {
        // Sort uppercase characters before lowercase characters and arrange alphabetically
        if (a.toLowerCase() !== b.toLowerCase()) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        return a.localeCompare(b); // Alphabetical order (case-insensitive)
      }
    });
  
    // Step 3: Construct the new string
    let result = '';
    for (const char of sortedChars) {
      result += char.repeat(charFrequency[char]);
    }
  
    return result;
  }
  
  // Test cases
  console.log(frequencySort("tree")); 
  console.log(frequencySort("cccaaa")); 
  console.log(frequencySort("Aabb")); 