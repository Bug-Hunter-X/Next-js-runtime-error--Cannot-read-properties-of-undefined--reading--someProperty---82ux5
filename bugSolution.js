```javascript
// pages/about.js
function About() {
  const nonExistentVariable = undefined;

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {/* Solution: Using optional chaining */}
      <p>Value: {nonExistentVariable?.someProperty}</p>
      {/* Alternative Solution: Using an if statement */}
      {nonExistentVariable && <p>Value: {nonExistentVariable.someProperty}</p>}
    </div>
  );
}

export default About;
```