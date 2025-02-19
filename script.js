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
    synth.triggerAttackRelease(note, "8n"); // Play note for an eighth note duration
}

// Handle keydown events
document.addEventListener('keydown', (event) => {
    const note = keyMap[event.key.toUpperCase()];
    if (note) {
        playNote(note);
    }
});

// Control filter frequency
const filterFreqInput = document.getElementById('filterFreq');
filterFreqInput.addEventListener('input', () => {
    filter.frequency.value = filterFreqInput.value;
});

// Prevent automatic playback restrictions
Tone.start();
