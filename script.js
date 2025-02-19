// Initialize Tone.js synth
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const filter = new Tone.Filter(1000, "lowpass").toDestination();
const reverb = new Tone.Reverb(1).toDestination();
synth.connect(filter);
filter.connect(reverb);

// Map keys to notes
const keyMap = {
    'A': 'C4',
    'S': 'D4',
    'D': 'E4',
    'F': 'F4',
    'G': 'G4',
    'H': 'A4',
    'J': 'B4',
    'K': 'C5',
    'L': 'D5'
};

// Play note function
function playNote(note) {
    synth.triggerAttack(note);
}

// Stop note function
function stopNote(note) {
    synth.triggerRelease(note);
}

// Handle keydown events
document.addEventListener('keydown', (event) => {
    const note = keyMap[event.key.toUpperCase()];
    if (note) {
        playNote(note);
    }
});

// Handle keyup events
document.addEventListener('keyup', (event) => {
    const note = keyMap[event.key.toUpperCase()];
    if (note) {
        stopNote(note);
    }
});

// Control filter frequency
const filterFreqInput = document.getElementById('filterFreq');
filterFreqInput.addEventListener('input', () => {
    filter.frequency.value = filterFreqInput.value;
});
