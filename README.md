# Glide Experimental Code - Simple String Processor

A minimal implementation of a Glide experimental code column that processes string values.

## Files

This project contains only the essential files needed for a Glide experimental code column:

- **glide.json** - Defines the column configuration, parameters, and return type
- **function.js** - Contains the actual code that processes the input
- **driver.js** - Handles communication between Glide and your code
- **index.html** - Loads the necessary JavaScript files

## How It Works

1. Glide loads your code from this URL
2. The `glide.json` file tells Glide what parameters your code accepts
3. When a user inputs values in Glide, they're passed to your `function.js` code
4. Your code processes the values and returns a result
5. The result is displayed in the Glide app

## Usage in Glide

1. Create an Experimental Code column in your Glide app
2. Enter the URL to this repository
3. Input the required parameters
4. The result will be calculated for each row

## Simplified Structure

This implementation follows the minimalist approach demonstrated by the working example at:
https://replit.com/@Ahmedabied/Zip-maker
