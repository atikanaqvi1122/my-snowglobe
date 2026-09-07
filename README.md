# My Snowglobe

A small interactive snow globe made with HTML, CSS, and vanilla JavaScript. Shake the globe to make the snow move and reveal an encouraging message.

## Features

- Animated snow across the page and inside the globe
- Shake animation triggered by the button
- Random supportive message on each shake
- Responsive, dependency-free static site

## Run locally

No build step or package installation is required. Open `index.html` in a browser, or serve the folder with any local web server.

For example, with Python installed:

```bash
python -m http.server
```

Then visit `http://localhost:8000`.

## Project structure

- `index.html` - page structure and accessible labels
- `style.css` - layout, colors, snow, and shake animations
- `script.js` - snowflake generation and message interaction
- `snowglobe.png` - the globe scene artwork