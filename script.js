// Create a polyphonic synthesizer
const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "sawtooth" },
    envelope: { attack: 0.1, decay: 0.2, sustain: 0.4, release: 1 }
}).toDestination();

// Add a reverb effect
const reverb = new Tone.Reverb({ decay: 3, wet: 0.5 }).toDestination();
synth.connect(reverb);

// Map keys to notes
const keyMap = {
    "a": "C4",
    "s": "D4",
    "d": "E4",
    "f": "F4",
    "g": "G4",
    "h": "A4",
    "j": "B4",
    "k": "C5"
};

// Function to play a note
function playNote(note) {
    synth.triggerAttackRelease(note, "8n");
}

// Keyboard event listeners
document.addEventListener("keydown", (event) => {
    const note = keyMap[event.key];
    if (note) playNote(note);
});

// Button event listeners for clicking keys
document.querySelectorAll(".key").forEach(button => {
    button.addEventListener("mousedown", () => {
        playNote(button.dataset.note);
    });
});

// Reverb slider control
document.getElementById("effect").addEventListener("input", (event) => {
    reverb.wet.value = event.target.value;
});
