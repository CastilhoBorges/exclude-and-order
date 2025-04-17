# Script for sorting and removing duplicates in locale objects (i18n)

## Description

I was working on a task at work where **internationalization (i18n) locale files** needed to be sorted. It was an old feature that had been dormant for a long time, and when I tried to work on it and merge with the current `main` branch, there were **more than 1000 lines of conflicts** — considering the file already had about **1600 lines normally**.

To avoid the chaos of resolving everything manually, I created this script where I could **copy the locale object and paste it directly into the code**. The script removes duplicate values (keeping the first occurrence) and sorts all keys alphabetically.

In the end, it generates a `.js` file with the processed object.

---

## How to use

### 1. Clone or copy the script

Save the file as `sort-locales.js`, for example.

### 2. Paste the i18n object into the script

In the section below in the script, replace `object` with your translation object:

```js
const object = {
  welcome: 'Welcome',
  goodbye: 'Goodbye',
  other: 'Welcome', // Duplicate value
  ...
};
```

### 3. Run the script with Node.js

In the terminal, run:

```bash
node sort-locales.js
```

### 4. See the result

A folder called `result/` will be created with an `output.js` file containing:

- Alphabetically sorted keys.
- Duplicate values removed (keeping the first one).
- Standard Node export format (`module.exports = { ... }`).
- Keys without quotes, values with single quotes.

Example output:

```js
module.exports = {
  goodbye: 'Goodbye',
  welcome: 'Welcome',
};
```

## What the script does

- Removes duplicate values from the object (keeping the first key found).
- Sorts all keys alphabetically.
- Generates a JavaScript file in a readable format.
- Creates the result folder automatically if it doesn't exist.

## Why this was useful

- Avoided hours of manually resolving conflicts in huge locale files.
- Ensures the file is clean and consistent.
- Helps keep translations organized and easy to maintain.

## Requirements

- Node.js installed on the machine.
