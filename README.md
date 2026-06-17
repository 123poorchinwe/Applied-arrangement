# Client-Side Computations

**Course:** IP: Application Development  
**Assignment:** Client-Side Computations  
**Student:** 12543947 Qinwei Zhu

---

## Task 1: Measure Distance Between Two Points

### Step 1 - Open the HTML

Original map with zoom and pan buttons:

![Step 1 - Original Map](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image1.png)

### Step 2 - Add Measurement Button

Added "Measure Distance" button to HTML:

![Step 2 - Add Button](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image12.png)

![Step 2 - Button HTML](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image13.png)

### Step 3 - Implement Measurement

**3.1 State Variables**

Created `isMeasuring` and `firstPoint` variables to track measurement state:

![Step 3.1 - State Variables](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image14.png)

**3.2 Create Vector Layer**

OpenLayers requires a Vector Layer to draw points and lines. `ol.source.Vector` stores the graphic data, and `ol.layer.Vector` displays it:

![Step 3.2 - Vector Layer](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image15.png)

**3.3 Button Click Event**

Clicking the button toggles the state. `isMeasuring` changes from `false` to `true`:

![Step 3.3 - Button Click](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image16.png)

**3.4 Measurement Mode**

Each click draws a red point. First click stores coordinates, waits for second point. Second click draws red line, calculates distance, shows result, then resets:

![Step 3.4 - Measurement](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image17.png)

![Step 3.4 - Measurement 2](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image18.png)

**Result - Distance Display**

![Task 1 Result](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image19.png)

---

## Task 2: Geolocation - Find My Location

### Step 1 - Add Locate Button

Added a button with Font Awesome crosshairs icon:

![Step 1 - Locate Button](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image4.png)

![Step 1 - Button Style](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image5.png)

### Step 2 - Center Map on User's Location

**2.1 Check Browser Support**

First check if the browser supports geolocation API:

![Step 2.1 - Check Support](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image6.png)

![Step 2.1 - Browser Check](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image7.png)

**2.2 Get Current Position**

Use `navigator.geolocation.getCurrentPosition()` to get GPS coordinates:

![Step 2.2 - Get Position](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image8.png)

**2.3 Draw Blue Marker**

Convert WGS84 coordinates to EPSG:3857 and draw a blue circle marker:

![Step 2.3 - Draw Marker](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image9.png)

![Step 2.3 - Draw Marker 2](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image10.png)

**2.4 Show Result**

Display the coordinates in an alert popup:

![Step 2.4 - Alert Result](https://raw.githubusercontent.com/123poorchinwe/Applied-arrangement/main/Client-Side-Computations/screenshots/image11.png)

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
