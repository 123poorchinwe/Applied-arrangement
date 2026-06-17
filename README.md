# Client-Side Computations

**Course:** IP: Application Development  
**Assignment:** Client-Side Computations  
**Student:** 12543947 Qinwei Zhu

---

## Task 1: Measure Distance Between Two Points

### Step 1 - Open the HTML

Original map with zoom and pan buttons:

![Step 1 - Original Map](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-step1.png?raw=true)

### Step 2 - Add Measurement Button

Added "Measure Distance" button to HTML:

![Step 2 - Add Button](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-step2.png?raw=true)

### Step 3 - Implement Measurement

**3.1 State Variables**

Created `isMeasuring` and `firstPoint` variables to track measurement state:

![Step 3.1 - State Variables](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-step3-1.png?raw=true)

**3.2 Create Vector Layer**

OpenLayers requires a Vector Layer to draw points and lines. `ol.source.Vector` stores the graphic data, and `ol.layer.Vector` displays it:

![Step 3.2 - Vector Layer](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-step3-2.png?raw=true)

**3.3 Button Click Event**

Clicking the button toggles the state. `isMeasuring` changes from `false` to `true`:

![Step 3.3 - Button Click](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-step3-3.png?raw=true)

**3.4 Measurement Mode**

Each click draws a red point. First click stores coordinates, waits for second point. Second click draws red line, calculates distance, shows result, then resets:

![Step 3.4 - Measurement](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-step3-4.png?raw=true)

**Result - Distance Display**

![Task 1 Result](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task1-result.png?raw=true)

---

## Task 2: Geolocation - Find My Location

### Step 1 - Add Locate Button

Added a button with Font Awesome crosshairs icon:

![Step 1 - Locate Button](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task2-step1.png?raw=true)

### Step 2 - Center Map on User's Location

**2.1 Check Browser Support**

First check if the browser supports geolocation API:

![Step 2.1 - Check Support](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task2-step2-1.png?raw=true)

**2.2 Get Current Position**

Use `navigator.geolocation.getCurrentPosition()` to get GPS coordinates:

![Step 2.2 - Get Position](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task2-step2-2.png?raw=true)

**2.3 Draw Blue Marker**

Convert WGS84 coordinates to EPSG:3857 and draw a blue circle marker:

![Step 2.3 - Draw Marker](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task2-step2-3.png?raw=true)

**2.4 Show Result**

Display the coordinates in an alert popup:

![Step 2.4 - Alert Result](https://github.com/123poorchinwe/Applied-arrangement/blob/main/Client-Side-Computations/screenshots/task2-result.png?raw=true)

---

## Files

| File | Description |
|------|-------------|
| `index.html` | Main HTML file with map and buttons |
| `mainmap.js` | JavaScript with map controls and tasks |
| `rules.css` | CSS styles |

---

## How to Run

1. Open `index.html` in a web browser
2. For geolocation (Task 2), use HTTPS or localhost

---

## Technologies

- OpenLayers v4.6.5
- HTML5 Geolocation API
- Font Awesome 6.4.0
