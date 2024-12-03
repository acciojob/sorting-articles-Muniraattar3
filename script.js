//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to strip articles from the start of a string
function stripArticles(str) {
    return str.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands while ignoring articles
const sortedBands = bands.sort((a, b) => {
    return stripArticles(a).localeCompare(stripArticles(b));
});

// Populate the sorted list into the HTML
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
