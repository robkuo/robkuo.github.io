// Japanese Word Learning Application

// Word data - 100 most common Japanese words
const wordData = [
    {
        japanese: "食べます",
        hiragana: "たべます",
        chinese: "吃",
        conjugations: {
            "辞典形": { form: "食べる", hiragana: "たべる" },
            "ます形": { form: "食べます", hiragana: "たべます" },
            "て形": { form: "食べて", hiragana: "たべて" },
            "た形": { form: "食べた", hiragana: "たべた" },
            "ない形": { form: "食べない", hiragana: "たべない" },
            "た形否定": { form: "食べなかった", hiragana: "たべなかった" }
        }
    },
    {
        japanese: "行きます",
        hiragana: "いきます",
        chinese: "去",
        conjugations: {
            "辞典形": { form: "行く", hiragana: "いく" },
            "ます形": { form: "行きます", hiragana: "いきます" },
            "て形": { form: "行って", hiragana: "いって" },
            "た形": { form: "行った", hiragana: "いった" },
            "ない形": { form: "行かない", hiragana: "いかない" },
            "た形否定": { form: "行かなかった", hiragana: "いかなかった" }
        }
    },
    {
        japanese: "見ます",
        hiragana: "みます",
        chinese: "看",
        conjugations: {
            "辞典形": { form: "見る", hiragana: "みる" },
            "ます形": { form: "見ます", hiragana: "みます" },
            "て形": { form: "見て", hiragana: "みて" },
            "た形": { form: "見た", hiragana: "みた" },
            "ない形": { form: "見ない", hiragana: "みない" },
            "た形否定": { form: "見なかった", hiragana: "みなかった" }
        }
    },
    {
        japanese: "来ます",
        hiragana: "きます",
        chinese: "来",
        conjugations: {
            "辞典形": { form: "来る", hiragana: "くる" },
            "ます形": { form: "来ます", hiragana: "きます" },
            "て形": { form: "来て", hiragana: "きて" },
            "た形": { form: "来た", hiragana: "きた" },
            "ない形": { form: "来ない", hiragana: "こない" },
            "た形否定": { form: "来なかった", hiragana: "こなかった" }
        }
    },
    {
        japanese: "します",
        hiragana: "します",
        chinese: "做",
        conjugations: {
            "辞典形": { form: "する", hiragana: "する" },
            "ます形": { form: "します", hiragana: "します" },
            "て形": { form: "して", hiragana: "して" },
            "た形": { form: "した", hiragana: "した" },
            "ない形": { form: "しない", hiragana: "しない" },
            "た形否定": { form: "しなかった", hiragana: "しなかった" }
        }
    },
    {
        japanese: "言います",
        hiragana: "いいます",
        chinese: "说",
        conjugations: {
            "辞典形": { form: "言う", hiragana: "いう" },
            "ます形": { form: "言います", hiragana: "いいます" },
            "て形": { form: "言って", hiragana: "いって" },
            "た形": { form: "言った", hiragana: "いった" },
            "ない形": { form: "言わない", hiragana: "いわない" },
            "た形否定": { form: "言わなかった", hiragana: "いわなかった" }
        }
    },
    {
        japanese: "思います",
        hiragana: "おもいます",
        chinese: "想",
        conjugations: {
            "辞典形": { form: "思う", hiragana: "おもう" },
            "ます形": { form: "思います", hiragana: "おもいます" },
            "て形": { form: "思って", hiragana: "おもって" },
            "た形": { form: "思った", hiragana: "おもった" },
            "ない形": { form: "思わない", hiragana: "おもわない" },
            "た形否定": { form: "思わなかった", hiragana: "おもわなかった" }
        }
    },
    {
        japanese: "知ります",
        hiragana: "しります",
        chinese: "知道",
        conjugations: {
            "辞典形": { form: "知る", hiragana: "しる" },
            "ます形": { form: "知ります", hiragana: "しります" },
            "て形": { form: "知って", hiragana: "しって" },
            "た形": { form: "知った", hiragana: "しった" },
            "ない形": { form: "知らない", hiragana: "しらない" },
            "た形否定": { form: "知らなかった", hiragana: "しらなかった" }
        }
    },
    {
        japanese: "出ます",
        hiragana: "でます",
        chinese: "出来",
        conjugations: {
            "辞典形": { form: "出る", hiragana: "でる" },
            "ます形": { form: "出ます", hiragana: "でます" },
            "て形": { form: "出て", hiragana: "でて" },
            "た形": { form: "出た", hiragana: "でた" },
            "ない形": { form: "出ない", hiragana: "でない" },
            "た形否定": { form: "出なかった", hiragana: "でなかった" }
        }
    },
    {
        japanese: "聞きます",
        hiragana: "ききます",
        chinese: "听",
        conjugations: {
            "辞典形": { form: "聞く", hiragana: "きく" },
            "ます形": { form: "聞きます", hiragana: "ききます" },
            "て形": { form: "聞いて", hiragana: "きいて" },
            "た形": { form: "聞いた", hiragana: "きいた" },
            "ない形": { form: "聞かない", hiragana: "きかない" },
            "た形否定": { form: "聞かなかった", hiragana: "きかなかった" }
        }
    }
];

// Application state
let currentWordIndex = 0;
let displayMode = 'sequential'; // 'sequential' or 'random'
let fontSize = 24;
let revealedForms = new Set();

// DOM elements
const japaneseWordEl = document.getElementById('japaneseWord');
const chineseMeaningEl = document.getElementById('chineseMeaning');
const conjugationSectionEl = document.getElementById('conjugationSection');
const prevBtnEl = document.getElementById('prevBtn');
const nextBtnEl = document.getElementById('nextBtn');
const settingsBtnEl = document.getElementById('settingsBtn');
const settingsModalEl = document.getElementById('settingsModal');
const closeBtnEl = document.getElementById('closeBtn');
const displayModeEl = document.getElementById('displayMode');
const fontSizeEl = document.getElementById('fontSize');
const fontSizeValueEl = document.getElementById('fontSizeValue');

// Utility functions
function hasKanji(text) {
    return /[\u4e00-\u9faf]/.test(text);
}

function generateRubyText(text, hiraganaReading) {
    if (!hasKanji(text)) {
        return text;
    }
    return `<ruby class="with-reading">${text}<rt>${hiraganaReading}</rt></ruby>`;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display functions
function displayCurrentWord() {
    const word = wordData[currentWordIndex];
    
    // Display Japanese word with hiragana reading
    japaneseWordEl.innerHTML = generateRubyText(word.japanese, word.hiragana);
    japaneseWordEl.style.fontSize = fontSize + 'px';
    
    // Display Chinese meaning
    chineseMeaningEl.textContent = word.chinese;
    
    // Create conjugation form tags
    conjugationSectionEl.innerHTML = '';
    revealedForms.clear();
    
    Object.entries(word.conjugations).forEach(([formName, formData]) => {
        const formTag = document.createElement('div');
        formTag.className = 'form-tag';
        formTag.innerHTML = `
            <span class="form-name">${formName}</span>
            <span class="answer">${generateRubyText(formData.form, formData.hiragana)}</span>
        `;
        
        formTag.addEventListener('click', () => {
            if (!revealedForms.has(formName)) {
                formTag.classList.add('revealed');
                revealedForms.add(formName);
            }
        });
        
        conjugationSectionEl.appendChild(formTag);
    });
}

function updateWordIndex(direction) {
    if (displayMode === 'sequential') {
        if (direction === 'next') {
            currentWordIndex = (currentWordIndex + 1) % wordData.length;
        } else {
            currentWordIndex = (currentWordIndex - 1 + wordData.length) % wordData.length;
        }
    } else {
        // Random mode
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * wordData.length);
        } while (newIndex === currentWordIndex && wordData.length > 1);
        currentWordIndex = newIndex;
    }
    displayCurrentWord();
}

// Settings functions
function openSettings() {
    settingsModalEl.style.display = 'flex';
    displayModeEl.value = displayMode;
    fontSizeEl.value = fontSize;
    fontSizeValueEl.textContent = fontSize + 'px';
}

function closeSettings() {
    settingsModalEl.style.display = 'none';
}

function updateDisplayMode() {
    displayMode = displayModeEl.value;
}

function updateFontSize() {
    fontSize = parseInt(fontSizeEl.value);
    fontSizeValueEl.textContent = fontSize + 'px';
    japaneseWordEl.style.fontSize = fontSize + 'px';
}

// Event listeners
prevBtnEl.addEventListener('click', () => updateWordIndex('prev'));
nextBtnEl.addEventListener('click', () => updateWordIndex('next'));
settingsBtnEl.addEventListener('click', openSettings);
closeBtnEl.addEventListener('click', closeSettings);
displayModeEl.addEventListener('change', updateDisplayMode);
fontSizeEl.addEventListener('input', updateFontSize);

// Close modal when clicking outside
settingsModalEl.addEventListener('click', (e) => {
    if (e.target === settingsModalEl) {
        closeSettings();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (settingsModalEl.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeSettings();
        }
        return;
    }
    
    switch (e.key) {
        case 'ArrowLeft':
            updateWordIndex('prev');
            break;
        case 'ArrowRight':
            updateWordIndex('next');
            break;
        case 'Escape':
            // Reset all revealed forms
            revealedForms.clear();
            document.querySelectorAll('.form-tag').forEach(tag => {
                tag.classList.remove('revealed');
            });
            break;
    }
});

// Initialize application
function init() {
    displayCurrentWord();
}

// Start the application
init();