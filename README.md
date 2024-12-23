# Next.js Runtime Error: Cannot read properties of undefined (reading 'someProperty')

This repository demonstrates a common runtime error in Next.js applications where attempting to access a property of an undefined variable results in a crash.

## The Bug

The `pages/about.js` file contains a variable `nonExistentVariable` which is assigned `undefined`.  Later, the code attempts to access `nonExistentVariable.someProperty`, which causes a runtime error because you cannot read properties of `undefined`.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/about` in your browser.  The application will crash, and you'll see a runtime error in your browser's console.

## Solution

The solution involves checking if the variable is defined before attempting to access its properties.  This is typically done using optional chaining (`?.`) or a simple `if` statement.

See `bugSolution.js` for a corrected version of the code.