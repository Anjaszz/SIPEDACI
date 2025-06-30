const symptoms = [
    { id: 'S01', name: 'Daun memiliki bercak coklat atau hitam' },
    { id: 'S02', name: 'Bercak pada daun membesar dan menyatu' },
    { id: 'S03', name: 'Daun menguning dan gugur prematur' },
    { id: 'S04', name: 'Daun mengkerut dan melengkung ke atas' },
    { id: 'S05', name: 'Pertumbuhan tanaman terhambat' },
    { id: 'S06', name: 'Daun muda berwarna kekuningan' },
    { id: 'S07', name: 'Produksi buah berkurang drastis' },
    { id: 'S08', name: 'Daun menguning dan layu' },
    { id: 'S09', name: 'Ada embun madu (honeydew) pada daun' },
    { id: 'S10', name: 'Pertumbuhan jamur hitam (sooty mold)' },
    { id: 'S11', name: 'Kutu putih kecil di bagian bawah daun' },
    { id: 'S12', name: 'Tanaman tampak sehat secara keseluruhan' },
    { id: 'S13', name: 'Tidak ada gejala penyakit yang terlihat' },
    { id: 'S14', name: 'Daun hijau dan segar' },
    { id: 'S15', name: 'Pertumbuhan normal dan produktif' },
    // Gejala tambahan untuk Yellowish
    { id: 'S16', name: 'Daun menguning secara merata dari ujung' },
    { id: 'S17', name: 'Tulang daun masih berwarna hijau' },
    { id: 'S18', name: 'Daun tua menguning lebih dulu' },
    { id: 'S19', name: 'Pertumbuhan tanaman melambat' },
    { id: 'S20', name: 'Daun mudah rontok saat disentuh' }
];

const diseases = {
    'D01': {
        name: 'Leaf Spot (Bercak Daun)',
        icon: '🔴',
        description: 'Penyakit jamur yang menyebabkan bercak coklat atau hitam pada daun tanaman cabai.',
        confidence: 0,
        treatments: [
            'Semprot dengan fungisida berbahan aktif mankozeb atau klorotalonil',
            'Buang dan musnahkan daun yang terinfeksi secara berkala',
            'Perbaiki sistem drainase untuk mengurangi kelembaban berlebih',
            'Berikan jarak tanam yang cukup untuk sirkulasi udara yang baik',
            'Aplikasi fungisida setiap 7-10 hari saat cuaca lembab'
        ],
        prevention: [
            'Lakukan rotasi tanaman dengan keluarga non-solanaceae',
            'Hindari penyiraman dari atas daun, siram di pangkal batang',
            'Jaga kebersihan lahan dari gulma dan sisa tanaman',
            'Gunakan mulsa untuk mencegah percikan air tanah ke daun',
            'Pilih varietas yang tahan terhadap penyakit bercak daun'
        ]
    },
    'D02': {
        name: 'Leaf Curl (Keriting Daun)',
        icon: '🌀',
        description: 'Penyakit virus yang menyebabkan daun mengkerut dan melengkung, sering ditularkan oleh kutu daun.',
        confidence: 0,
        treatments: [
            'Semprot insektisida untuk mengendalikan kutu daun vektor',
            'Gunakan minyak neem sebagai insektisida alami yang aman',
            'Pasang perangkap kuning untuk menangkap kutu daun dewasa',
            'Buang dan musnahkan tanaman yang terinfeksi berat',
            'Berikan pupuk kalium untuk meningkatkan daya tahan tanaman'
        ],
        prevention: [
            'Gunakan benih atau bibit yang bebas virus bersertifikat',
            'Kendalikan populasi kutu daun secara rutin dengan monitoring',
            'Pasang mulsa reflektif perak untuk mengusir kutu daun',
            'Tanam tanaman perangkap seperti jagung di sekitar lahan',
            'Buat barier fisik dengan kain kasa halus pada bibit muda'
        ]
    },
    'D03': {
        name: 'Whitefly (Kutu Putih)',
        icon: '🪰',
        description: 'Serangan hama kutu putih yang menghisap cairan tanaman dan dapat menularkan virus berbahaya.',
        confidence: 0,
        treatments: [
            'Semprot dengan insektisida sistemik imidakloprid sesuai dosis',
            'Gunakan sabun insektisida (1-2%) untuk semprot halus',
            'Pasang perangkap kuning lengket di sekitar tanaman',
            'Semprot minyak neem setiap 5-7 hari secara rutin',
            'Lepaskan predator alami seperti Encarsia formosa'
        ],
        prevention: [
            'Periksa tanaman secara rutin setiap 2-3 hari',
            'Jaga kebersihan gulma di sekitar area pertanaman',
            'Gunakan mulsa reflektif perak untuk mengusir kutu putih',
            'Tanam tanaman refugia untuk menarik predator alami',
            'Isolasi tanaman baru selama 2 minggu sebelum ditanam'
        ]
    },
    'D04': {
        name: 'Tanaman Sehat',
        icon: '💚',
        description: 'Tanaman cabai dalam kondisi sehat dan tidak menunjukkan gejala penyakit apapun.',
        confidence: 0,
        treatments: [
            'Lanjutkan perawatan rutin yang sudah berjalan dengan baik',
            'Berikan pupuk seimbang sesuai jadwal yang telah ditentukan',
            'Pantau kondisi tanaman secara berkala untuk deteksi dini',
            'Jaga kebersihan lingkungan sekitar tanaman',
            'Pertahankan pola penyiraman yang sudah optimal'
        ],
        prevention: [
            'Siram secara teratur sesuai kebutuhan tanaman',
            'Berikan pupuk NPK seimbang setiap 2 minggu sekali',
            'Lakukan pemeriksaan rutin setiap 2-3 hari',
            'Jaga kebersihan area sekitar tanaman dari gulma',
            'Monitor cuaca dan sesuaikan perawatan dengan kondisi iklim'
        ]
    },
    'D05': {
        name: 'Yellowish (Klorosis)',
        icon: '🟡',
        description: 'Penyakit defisiensi nutrisi yang menyebabkan daun menguning karena kekurangan klorofil, biasanya akibat defisiensi nitrogen, besi, atau magnesium.',
        confidence: 0,
        treatments: [
            'Berikan pupuk nitrogen tinggi (NPK 20-10-10) sesuai dosis anjuran',
            'Aplikasi pupuk daun yang mengandung besi (Fe) dan magnesium (Mg)',
            'Tambahkan pupuk kompos atau pupuk kandang untuk memperbaiki struktur tanah',
            'Semprot dengan larutan besi sulfat (1-2 gram per liter air)',
            'Berikan pupuk NPK lengkap dengan mikronutrient secara berkala'
        ],
        prevention: [
            'Lakukan analisis pH tanah dan sesuaikan ke rentang 6.0-6.8',
            'Berikan pupuk dasar yang cukup sebelum tanam',
            'Jaga kelembaban tanah yang optimal dengan mulsa organik',
            'Lakukan pemupukan rutin setiap 2-3 minggu sekali',
            'Monitor kondisi drainase untuk mencegah genangan air'
        ]
    }
};

// Rules - Aturan IF-THEN untuk Forward Chaining
const rules = [
    // Rules untuk Leaf Spot (Bercak Daun)
    {
        id: 'R01',
        conditions: ['S01', 'S02'],
        conclusion: 'D01',
        confidence: 0.7,
        description: 'JIKA ada bercak coklat/hitam DAN bercak membesar → Leaf Spot (70%)'
    },
    {
        id: 'R02', 
        conditions: ['S01', 'S02', 'S03'],
        conclusion: 'D01',
        confidence: 0.9,
        description: 'JIKA ada bercak coklat/hitam DAN membesar DAN daun gugur → Leaf Spot (90%)'
    },
    {
        id: 'R03',
        conditions: ['S01', 'S03'],
        conclusion: 'D01', 
        confidence: 0.6,
        description: 'JIKA ada bercak coklat/hitam DAN daun gugur prematur → Leaf Spot (60%)'
    },

    // Rules untuk Leaf Curl (Keriting Daun)
    {
        id: 'R04',
        conditions: ['S04', 'S05'],
        conclusion: 'D02',
        confidence: 0.8,
        description: 'JIKA daun mengkerut DAN pertumbuhan terhambat → Leaf Curl (80%)'
    },
    {
        id: 'R05',
        conditions: ['S04', 'S06', 'S07'],
        conclusion: 'D02',
        confidence: 0.95,
        description: 'JIKA daun mengkerut DAN daun muda kuning DAN produksi turun → Leaf Curl (95%)'
    },
    {
        id: 'R06',
        conditions: ['S04', 'S06'],
        conclusion: 'D02',
        confidence: 0.7,
        description: 'JIKA daun mengkerut DAN daun muda kuning → Leaf Curl (70%)'
    },

    // Rules untuk Whitefly (Kutu Putih)
    {
        id: 'R07',
        conditions: ['S08', 'S09', 'S11'],
        conclusion: 'D03',
        confidence: 0.9,
        description: 'JIKA daun kuning+layu DAN ada embun madu DAN ada kutu putih → Whitefly (90%)'
    },
    {
        id: 'R08',
        conditions: ['S09', 'S10', 'S11'],
        conclusion: 'D03',
        confidence: 0.85,
        description: 'JIKA ada embun madu DAN jamur hitam DAN kutu putih → Whitefly (85%)'
    },
    {
        id: 'R09',
        conditions: ['S08', 'S11'],
        conclusion: 'D03',
        confidence: 0.6,
        description: 'JIKA daun kuning+layu DAN ada kutu putih → Whitefly (60%)'
    },
    {
        id: 'R10',
        conditions: ['S11', 'S09'],
        conclusion: 'D03',
        confidence: 0.7,
        description: 'JIKA ada kutu putih DAN embun madu → Whitefly (70%)'
    },

    // Rules untuk Tanaman Sehat
    {
        id: 'R11',
        conditions: ['S12', 'S13', 'S14'],
        conclusion: 'D04',
        confidence: 0.95,
        description: 'JIKA tanaman sehat DAN tidak ada gejala DAN daun hijau → Sehat (95%)'
    },
    {
        id: 'R12',
        conditions: ['S13', 'S14', 'S15'],
        conclusion: 'D04',
        confidence: 0.9,
        description: 'JIKA tidak ada gejala DAN daun hijau DAN pertumbuhan normal → Sehat (90%)'
    },
    {
        id: 'R13',
        conditions: ['S12', 'S15'],
        conclusion: 'D04',
        confidence: 0.8,
        description: 'JIKA tanaman sehat DAN pertumbuhan normal → Sehat (80%)'
    },

    // Rules untuk Yellowish (Klorosis) - BARU
    {
        id: 'R14',
        conditions: ['S16', 'S17'],
        conclusion: 'D05',
        confidence: 0.8,
        description: 'JIKA daun menguning merata DAN tulang daun masih hijau → Yellowish (80%)'
    },
    {
        id: 'R15',
        conditions: ['S16', 'S18', 'S19'],
        conclusion: 'D05',
        confidence: 0.9,
        description: 'JIKA daun menguning merata DAN daun tua kuning dulu DAN pertumbuhan lambat → Yellowish (90%)'
    },
    {
        id: 'R16',
        conditions: ['S18', 'S20'],
        conclusion: 'D05',
        confidence: 0.7,
        description: 'JIKA daun tua kuning dulu DAN daun mudah rontok → Yellowish (70%)'
    },
    {
        id: 'R17',
        conditions: ['S06', 'S16', 'S19'],
        conclusion: 'D05',
        confidence: 0.85,
        description: 'JIKA daun muda kuning DAN menguning merata DAN pertumbuhan lambat → Yellowish (85%)'
    },
    {
        id: 'R18',
        conditions: ['S08', 'S17', 'S19'],
        conclusion: 'D05',
        confidence: 0.75,
        description: 'JIKA daun kuning+layu DAN tulang daun hijau DAN pertumbuhan lambat → Yellowish (75%)'
    }
];


// State Management Variables
let currentQuestionIndex = 0;
let selectedSymptoms = [];
let consultationStarted = false;
let inferenceTrace = [];
let inferenceTraceExpanded = false;
let isDarkMode = false;

// Initialize dark mode on page load
function initDarkMode() {
    // Check for saved preference
    const savedTheme = localStorage.getItem('chillidoctor-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Toggle dark mode function
function toggleDarkMode() {
    if (isDarkMode) {
        disableDarkMode();
        showSnackbar('Mode terang diaktifkan');
        trackUserAction('Dark Mode Disabled');
    } else {
        enableDarkMode();
        showSnackbar('Mode gelap diaktifkan');
        trackUserAction('Dark Mode Enabled');
    }
}

// Enable dark mode
function enableDarkMode() {
    isDarkMode = true;
    document.body.classList.add('dark-theme');
    document.getElementById('dark-mode-icon').textContent = 'light_mode';
    localStorage.setItem('chillidoctor-theme', 'dark');
    
    // Update meta theme-color for mobile browsers
    updateThemeColor('#1E1E1E');
}

// Disable dark mode
function disableDarkMode() {
    isDarkMode = false;
    document.body.classList.remove('dark-theme');
    document.getElementById('dark-mode-icon').textContent = 'dark_mode';
    localStorage.setItem('chillidoctor-theme', 'light');
    
    // Update meta theme-color for mobile browsers
    updateThemeColor('#FFFFFF');
}

// Update theme color for mobile browsers
function updateThemeColor(color) {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.content = color;
}

// Enhanced dark mode change handler
function handleDarkModeChange(e) {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('chillidoctor-theme')) {
        if (e.matches) {
            enableDarkMode();
            showSnackbar('Mode gelap terdeteksi otomatis');
        } else {
            disableDarkMode();
            showSnackbar('Mode terang terdeteksi otomatis');
        }
    }
}

// Initialize aplikasi saat DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('total-rules').textContent = rules.length;
    
    // Initialize dark mode
    initDarkMode();
    
    // Setup system preference listener
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addListener(handleDarkModeChange);
    
    // Load previous session if exists
    loadConsultationState();
    
    // Show welcome message
    setTimeout(() => {
        showSnackbar('Selamat datang di ChiliDoctor AI!');
    }, 1000);
    
    console.log('Sistem Pakar ChiliDoctor berhasil dimuat');
    console.log(`Loaded ${symptoms.length} symptoms, ${Object.keys(diseases).length} diseases, ${rules.length} rules`);
    console.log(`Dark mode: ${isDarkMode ? 'enabled' : 'disabled'}`);
});

// Enhanced keyboard shortcuts - tambahkan shortcut untuk dark mode
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        resetConsultation();
    }
    
    if (e.key === 'd' && e.ctrlKey) {
        e.preventDefault();
        runDemo();
    }
    
    // New: Toggle dark mode with Ctrl+Shift+D
    if (e.key === 'D' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        toggleDarkMode();
    }
    
    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
    
    // Shortcuts untuk menjawab pertanyaan
    if (consultationStarted && currentQuestionIndex < symptoms.length) {
        if (e.key === 'y' || e.key === 'Y') {
            answerQuestion(true);
        } else if (e.key === 'n' || e.key === 'N') {
            answerQuestion(false);
        } else if (e.key === 'u' || e.key === 'U') {
            answerQuestion(null);
        }
    }
});
// Fungsi untuk memulai konsultasi
function startConsultation() {
    console.log('Memulai konsultasi diagnosis...');
    consultationStarted = true;
    currentQuestionIndex = 0;
    selectedSymptoms = [];
    inferenceTrace = [];
    
    // Reset tampilan
    document.getElementById('diagnosis-result').classList.add('hidden');
    document.getElementById('inference-trace').classList.add('hidden');
    
    // Reset confidence untuk semua penyakit
    Object.keys(diseases).forEach(key => {
        diseases[key].confidence = 0;
    });
    
    updateSelectedSymptoms();
    addInferenceTrace('🚀 Konsultasi dimulai - Sistem Pakar ChiliDoctor siap');
    showNextQuestion();
}

// Fungsi untuk menampilkan pertanyaan berikutnya
function showNextQuestion() {
    if (currentQuestionIndex >= symptoms.length) {
        addInferenceTrace('📝 Semua gejala telah ditanyakan, memulai proses diagnosis...');
        showCompletionScreen();
        setTimeout(() => {
            performDiagnosis();
        }, 2000);
        return;
    }

    const symptom = symptoms[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / symptoms.length) * 100;
    
    // Update progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1}/${symptoms.length} gejala`;
    
    // Update pertanyaan
    document.getElementById('current-question').innerHTML = `
        <span style="color: var(--md-primary);">Gejala ${currentQuestionIndex + 1}:</span> ${symptom.name}
    `;
    
    document.getElementById('question-help').textContent = 
        'Apakah tanaman cabai Anda mengalami gejala tersebut?';

    // Update pilihan jawaban
    document.getElementById('answer-options').innerHTML = `
        <div class="answer-button yes-answer" onclick="answerQuestion(true)">
            <div class="answer-icon">✓</div>
            <div>
                <div class="md-subtitle-1" style="font-weight: 500;">Ya, ada gejala ini</div>
                <div class="md-body-2" style="color: #757575;">Tanaman saya mengalami gejala tersebut</div>
            </div>
        </div>
        <div class="answer-button no-answer" onclick="answerQuestion(false)">
            <div class="answer-icon">✗</div>
            <div>
                <div class="md-subtitle-1" style="font-weight: 500;">Tidak ada gejala ini</div>
                <div class="md-body-2" style="color: #757575;">Tanaman saya tidak mengalami gejala tersebut</div>
            </div>
        </div>
        <div class="answer-button maybe-answer" onclick="answerQuestion(null)">
            <div class="answer-icon">?</div>
            <div>
                <div class="md-subtitle-1" style="font-weight: 500;">Tidak yakin</div>
                <div class="md-body-2" style="color: #757575;">Saya tidak yakin atau tidak bisa memastikan</div>
            </div>
        </div>
    `;
}

// Fungsi untuk menampilkan layar penyelesaian
function showCompletionScreen() {
    // Update progress ke 100%
    document.getElementById('progress-bar').style.width = '100%';
    document.getElementById('progress-text').textContent = '15/15 Gejala Selesai';
    
    // Update question section ke completion screen
    document.getElementById('current-question').innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; color: var(--md-primary);">
            <span class="material-icons" style="font-size: 32px;">check_circle</span>
            <span>Konsultasi Selesai!</span>
        </div>
    `;
    
    document.getElementById('question-help').textContent = 
        'Semua gejala telah dikumpulkan. Sistem sedang memproses diagnosis...';

    // Show completion screen dengan animasi
    document.getElementById('answer-options').innerHTML = `
        <div style="text-align: center; padding: 32px 16px;">
            <div style="margin-bottom: 24px;">
                <div class="completion-icon" style="font-size: 64px; margin-bottom: 16px; animation: bounce 2s infinite;">
                    ✅
                </div>
                <h3 class="md-headline-6" style="color: var(--md-primary); margin-bottom: 8px;">
                    Pengumpulan Data Selesai
                </h3>
                <p class="md-body-2" style="color: #757575; margin-bottom: 24px;">
                    ${selectedSymptoms.length} gejala telah berhasil dikumpulkan dan dianalisis
                </p>
            </div>
            
    
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-bottom: 24px;">
                <div style="background: #E8F5E8; border-radius: 8px; padding: 12px; text-align: center;">
                    <div style="font-size: 20px; font-weight: 700; color: var(--md-primary);">${selectedSymptoms.length}</div>
                    <div style="font-size: 11px; color: #757575;">Gejala Positif</div>
                </div>
                <div style="background: #E3F2FD; border-radius: 8px; padding: 12px; text-align: center;">
                    <div style="font-size: 20px; font-weight: 700; color: #1976D2;">${rules.length}</div>
                    <div style="font-size: 11px; color: #757575;">Rules Dievaluasi</div>
                </div>
                <div style="background: #FFF3E0; border-radius: 8px; padding: 12px; text-align: center;">
                    <div style="font-size: 20px; font-weight: 700; color: #F57C00;">AI</div>
                    <div style="font-size: 11px; color: #757575;">Diagnosis Mode</div>
                </div>
            </div>
            
           
        </div>
    `;

    // Add CSS animations if not already present
    if (!document.getElementById('completion-animations')) {
        const style = document.createElement('style');
        style.id = 'completion-animations';
        style.textContent = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .completion-icon {
                display: inline-block;
            }
            
            .analysis-spinner {
                display: inline-block;
            }
        `;
        document.head.appendChild(style);
    }
}

// Fungsi untuk menjawab pertanyaan
function answerQuestion(answer) {
    const symptom = symptoms[currentQuestionIndex];
    
    if (answer === true) {
        selectedSymptoms.push(symptom.id);
        addInferenceTrace(`✅ Gejala "${symptom.name}" dikonfirmasi POSITIF`);
        console.log(`Symptom confirmed: ${symptom.id} - ${symptom.name}`);
    } else if (answer === false) {
        addInferenceTrace(`❌ Gejala "${symptom.name}" dikonfirmasi NEGATIF`);
        console.log(`Symptom denied: ${symptom.id} - ${symptom.name}`);
    } else {
        addInferenceTrace(`❓ Gejala "${symptom.name}" tidak dapat dipastikan (diabaikan)`);
        console.log(`Symptom uncertain: ${symptom.id} - ${symptom.name}`);
    }
    
    updateSelectedSymptoms();
    currentQuestionIndex++;
    
    // Delay sedikit untuk efek visual
    setTimeout(showNextQuestion, 300);
}

// Fungsi untuk update tampilan gejala yang dipilih
function updateSelectedSymptoms() {
    const container = document.getElementById('selected-symptoms');
    
    if (selectedSymptoms.length === 0) {
        container.innerHTML = '<p class="md-body-2" style="color: #757575; font-style: italic;">Belum ada gejala yang dipilih</p>';
        return;
    }

    container.innerHTML = selectedSymptoms.map(symptomId => {
        const symptom = symptoms.find(s => s.id === symptomId);
        return `
            <div class="symptom-item">
                <span class="symptom-code">${symptom.id}:</span> ${symptom.name}
            </div>
        `;
    }).join('');
}

// Fungsi untuk menambahkan jejak inference
function addInferenceTrace(message) {
    inferenceTrace.push({
        step: inferenceTrace.length + 1,
        message: message,
        timestamp: new Date().toLocaleTimeString()
    });
    console.log(`Inference Step ${inferenceTrace.length}: ${message}`);
}

// Forward Chaining Inference Engine - Inti dari Sistem Pakar
function performDiagnosis() {
    console.log('=== MEMULAI FORWARD CHAINING INFERENCE ===');
    addInferenceTrace('🧠 Memulai proses inference dengan Forward Chaining...');
    addInferenceTrace(`📊 Total gejala yang dikonfirmasi: ${selectedSymptoms.length}`);
    addInferenceTrace(`🔍 Gejala yang akan dianalisis: ${selectedSymptoms.join(', ')}`);
    
    // Reset confidence untuk semua penyakit
    Object.keys(diseases).forEach(key => {
        diseases[key].confidence = 0;
    });

    let firedRules = [];
    let maxConfidence = 0;
    let diagnosedDisease = null;

    // Forward Chaining: evaluasi setiap rule dalam knowledge base
    addInferenceTrace('🔄 Mulai evaluasi rules dalam knowledge base...');
    
    rules.forEach((rule, index) => {
        addInferenceTrace(`📋 Evaluating Rule ${rule.id}: ${rule.description}`);
        
        // Cek apakah semua kondisi rule terpenuhi
        const conditionsMet = rule.conditions.every(condition => {
            const isMet = selectedSymptoms.includes(condition);
            console.log(`  Checking condition ${condition}: ${isMet ? 'MET' : 'NOT MET'}`);
            return isMet;
        });

        if (conditionsMet) {
            firedRules.push(rule);
            
            // Update confidence penyakit
            const currentConfidence = diseases[rule.conclusion].confidence;
            const newConfidence = Math.max(currentConfidence, rule.confidence);
            diseases[rule.conclusion].confidence = newConfidence;

            addInferenceTrace(`🔥 Rule ${rule.id} TERPICU! Confidence: ${(rule.confidence * 100).toFixed(1)}%`);
            addInferenceTrace(`  └─ Kondisi terpenuhi: ${rule.conditions.join(', ')}`);
            addInferenceTrace(`  └─ Kesimpulan: ${diseases[rule.conclusion].name}`);
            
            console.log(`Rule ${rule.id} fired! Conclusion: ${rule.conclusion}, Confidence: ${rule.confidence}`);
            
            if (newConfidence > maxConfidence) {
                maxConfidence = newConfidence;
                diagnosedDisease = rule.conclusion;
                addInferenceTrace(`🎯 Diagnosis baru dengan confidence tertinggi: ${diseases[rule.conclusion].name} (${(maxConfidence * 100).toFixed(1)}%)`);
            }
        } else {
            addInferenceTrace(`⭕ Rule ${rule.id} tidak terpicu (kondisi tidak lengkap)`);
            addInferenceTrace(`  └─ Kondisi yang diperlukan: ${rule.conditions.join(', ')}`);
            console.log(`Rule ${rule.id} not fired - conditions not met`);
        }
    });

    addInferenceTrace(`📈 Total rules yang terpicu: ${firedRules.length} dari ${rules.length} rules`);
    addInferenceTrace(`🏆 Diagnosis akhir: ${diagnosedDisease ? diseases[diagnosedDisease].name : 'Tidak dapat ditentukan'}`);
    addInferenceTrace(`📊 Confidence level: ${(maxConfidence * 100).toFixed(1)}%`);

    console.log('=== HASIL FORWARD CHAINING ===');
    console.log(`Fired rules: ${firedRules.length}`);
    console.log(`Final diagnosis: ${diagnosedDisease}`);
    console.log(`Max confidence: ${maxConfidence}`);

    // Tampilkan hasil diagnosis
    showDiagnosisResult(diagnosedDisease, maxConfidence, firedRules);
    showInferenceTrace();
    
    // Auto scroll ke hasil
    setTimeout(scrollToResult, 500);
}

// Fungsi untuk menampilkan hasil diagnosis
function showDiagnosisResult(diagnosedDisease, confidence, firedRules) {
    const resultContainer = document.getElementById('diagnosis-result');
    const contentContainer = document.getElementById('diagnosis-content');
    
    if (!diagnosedDisease || confidence < 0.5) {
        // Diagnosis tidak dapat ditentukan
        contentContainer.innerHTML = `
            <div class="result-icon">❓</div>
            <h4 class="md-headline-5" style="margin-bottom: 16px;">Diagnosis Tidak Dapat Ditentukan</h4>
            <p class="md-body-1" style="margin-bottom: 24px; opacity: 0.9;">
                Berdasarkan gejala yang diberikan, sistem tidak dapat menentukan diagnosis yang akurat.
                Confidence level terlalu rendah (${(confidence * 100).toFixed(1)}%).
            </p>
            <div style="background: rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 16px; text-align: left;">
                <h5 style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                    <span class="material-icons">lightbulb</span>
                    Saran:
                </h5>
                <ul style="list-style: none; padding: 0;">
                    <li style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                        <span>•</span>
                        <span>Konsultasikan dengan ahli pertanian terdekat</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                        <span>•</span>
                        <span>Periksa kembali gejala yang lebih spesifik</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                        <span>•</span>
                        <span>Lakukan observasi lebih lanjut selama 2-3 hari</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 8px;">
                        <span>•</span>
                        <span>Ambil foto gejala untuk konsultasi lebih lanjut</span>
                    </li>
                </ul>
            </div>
        `;
    } else {
        // Diagnosis berhasil ditentukan
        const disease = diseases[diagnosedDisease];
        contentContainer.innerHTML = `
            <div class="result-icon">${disease.icon}</div>
            <h4 class="md-headline-5" style="margin-bottom: 8px;">${disease.name}</h4>
            <p class="md-body-1" style="margin-bottom: 24px; opacity: 0.9;">${disease.description}</p>
            
            <div class="confidence-section">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span class="md-body-2">Tingkat Kepercayaan:</span>
                    <span class="md-body-2" style="font-weight: 700;">${(confidence * 100).toFixed(1)}%</span>
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${confidence * 100}%"></div>
                </div>
                <div class="md-caption" style="text-align: center; margin-top: 8px; opacity: 0.8;">
                    ${confidence >= 0.9 ? 'Sangat Yakin' : 
                      confidence >= 0.7 ? 'Cukup Yakin' : 'Kemungkinan'}
                </div>
            </div>

            <div class="treatment-grid">
                <div class="treatment-section">
                    <h5>
                        <span class="material-icons">medical_services</span>
                        Rekomendasi Pengobatan
                    </h5>
                    <ul class="treatment-list">
                        ${disease.treatments.map(treatment => 
                            `<li>
                                <span class="material-icons" style="color: #4CAF50; font-size: 16px;">check_circle</span>
                                <span>${treatment}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div class="treatment-section">
                    <h5>
                        <span class="material-icons">shield</span>
                        Tips Pencegahan
                    </h5>
                    <ul class="treatment-list">
                        ${disease.prevention.map(prevention => 
                            `<li>
                                <span class="material-icons" style="color: #2196F3; font-size: 16px;">security</span>
                                <span>${prevention}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 16px; margin-top: 24px; text-align: left;">
                <h5 style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                    <span class="material-icons">timeline</span>
                    Rules yang Terpicu dalam Inference:
                </h5>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    ${firedRules.map(rule => 
                        `<div style="background: rgba(255, 255, 255, 0.1); border-radius: 4px; padding: 8px;">
                            <strong>${rule.id}:</strong> ${rule.description}
                        </div>`
                    ).join('')}
                </div>
                ${firedRules.length === 0 ? 
                    '<p style="font-style: italic; opacity: 0.8; margin: 0;">Tidak ada rules yang terpicu untuk diagnosis ini.</p>' : ''
                }
            </div>

            <div style="background: rgba(255, 193, 7, 0.2); border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 8px; padding: 16px; margin-top: 24px;">
                <h5 style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: #FFF8E1;">
                    <span class="material-icons">warning</span>
                    Penting:
                </h5>
                <p style="margin: 0; font-size: 14px; color: #FFF8E1;">
                    Hasil diagnosis ini bersifat referensi. Untuk penanganan yang tepat, 
                    konsultasikan dengan ahli pertanian atau penyuluh lapangan.
                </p>
            </div>
        `;
    }
    
    resultContainer.classList.remove('hidden');
}

// Fungsi untuk menampilkan jejak inference
function showInferenceTrace() {
    const traceContainer = document.getElementById('inference-trace');
    const contentContainer = document.getElementById('trace-content');
    
    contentContainer.innerHTML = inferenceTrace.map(trace => `
        <div class="trace-item">
            <div class="trace-step">Step ${trace.step}</div>
            <div class="trace-message">${trace.message}</div>
            <div class="trace-time">${trace.timestamp}</div>
        </div>
    `).join('');
    
    traceContainer.classList.remove('hidden');
    
    // Initialize collapsed state
    initInferenceTrace();
    
    // Show indicator if collapsed
    if (!inferenceTraceExpanded) {
        showInferenceIndicator();
    }
    
    // Add subtle animation
    setTimeout(() => {
        traceContainer.style.opacity = '1';
        traceContainer.style.transform = 'translateY(0)';
    }, 100);
}

// Fungsi untuk reset konsultasi
function resetConsultation() {
    console.log('Reset konsultasi...');
    consultationStarted = false;
    currentQuestionIndex = 0;
    selectedSymptoms = [];
    inferenceTrace = [];
    
    // Reset progress bar
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-text').textContent = '0/15 gejala';
    
    // Sembunyikan hasil
    document.getElementById('diagnosis-result').classList.add('hidden');
    document.getElementById('inference-trace').classList.add('hidden');
    
    // Reset pertanyaan
    document.getElementById('current-question').textContent = 
        'Selamat datang! Silakan mulai konsultasi dengan menjawab pertanyaan berikut.';
    document.getElementById('question-help').textContent = 
        'Jawab dengan jujur berdasarkan kondisi tanaman cabai Anda saat ini.';
    
    // Reset tombol
    document.getElementById('answer-options').innerHTML = `
        <button onclick="startConsultation()" class="md-button md-button-primary" style="padding: 16px 32px; width: 100%;">
            <span class="material-icons" style="margin-right: 8px;">rocket_launch</span>
            <div style="text-align: left;">
                <div style="font-size: 16px; font-weight: 500;">Mulai Diagnosis</div>
                <div style="font-size: 12px; opacity: 0.8; text-transform: none; letter-spacing: normal;">Klik untuk memulai proses konsultasi</div>
            </div>
        </button>
    `;
    
    updateSelectedSymptoms();
}

// Fungsi untuk scroll ke hasil
function scrollToResult() {
    const resultElement = document.getElementById('diagnosis-result');
    if (resultElement && !resultElement.classList.contains('hidden')) {
        resultElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Demo function untuk testing - simulasi Leaf Spot
function runDemo() {
    console.log('Menjalankan demo untuk Leaf Spot...');
    resetConsultation();
    
    // Simulasi jawaban untuk Leaf Spot
    selectedSymptoms = ['S01', 'S02', 'S03']; // Bercak coklat, membesar, daun gugur
    
    addInferenceTrace('🎮 Mode DEMO: Simulasi diagnosis Leaf Spot');
    addInferenceTrace('📝 Gejala demo: Bercak coklat, Bercak membesar, Daun gugur');
    
    updateSelectedSymptoms();
    
    // Update progress untuk demo
    document.getElementById('progress-bar').style.width = '100%';
    document.getElementById('progress-text').textContent = '15/15 Gejala (Demo)';
    
    // Jalankan diagnosis
    setTimeout(() => {
        performDiagnosis();
    }, 1000);
}

// Keyboard shortcuts untuk kemudahan penggunaan
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        resetConsultation();
    }
    
    if (e.key === 'd' && e.ctrlKey) {
        e.preventDefault();
        runDemo();
    }
    
    // Shortcuts untuk menjawab pertanyaan
    if (consultationStarted && currentQuestionIndex < symptoms.length) {
        if (e.key === 'y' || e.key === 'Y') {
            answerQuestion(true);
        } else if (e.key === 'n' || e.key === 'N') {
            answerQuestion(false);
        } else if (e.key === 'u' || e.key === 'U') {
            answerQuestion(null);
        }
    }
});

// Fungsi untuk menambahkan ripple effect pada tombol (Material Design)
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Menambahkan event listener untuk ripple effect
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('md-button') || e.target.classList.contains('answer-button')) {
        addRippleEffect(e.target, e);
    }
});

// Fungsi untuk menampilkan snackbar (Material Design notification)
function showSnackbar(message, duration = 3000) {
    const snackbar = document.createElement('div');
    snackbar.className = 'md-snackbar';
    snackbar.textContent = message;
    snackbar.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: #323232;
        color: white;
        padding: 14px 24px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12);
    `;
    
    document.body.appendChild(snackbar);
    
    // Animate in
    setTimeout(() => {
        snackbar.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        snackbar.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => {
            document.body.removeChild(snackbar);
        }, 300);
    }, duration);
}

// Enhanced animations untuk Material Design
function animateElement(element, animation) {
    element.style.animation = animation;
    element.addEventListener('animationend', function() {
        element.style.animation = '';
    }, { once: true });
}

// Fungsi untuk mengecek apakah device mendukung hover
function supportsHover() {
    return window.matchMedia('(hover: hover)').matches;
}

// Adaptive interactions berdasarkan device capability
if (!supportsHover()) {
    // Untuk touch devices, gunakan active states yang lebih jelas
    document.documentElement.style.setProperty('--md-touch-target-size', '48px');
}

// Intersection Observer untuk animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards untuk scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.md-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Progressive Web App features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Dark mode detection dan handling
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleDarkModeChange(e) {
    if (e.matches) {
        document.body.classList.add('dark-theme');
        showSnackbar('Mode gelap terdeteksi');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

darkModeMediaQuery.addListener(handleDarkModeChange);
handleDarkModeChange(darkModeMediaQuery);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Error handling dan logging
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    showSnackbar('Terjadi kesalahan. Silakan refresh halaman.', 5000);
});

// Preload important resources
function preloadResources() {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.as = 'style';
    document.head.appendChild(link);
}

// Analytics tracking (placeholder)
function trackUserAction(action, category = 'Expert System') {
    // Placeholder untuk analytics tracking
    console.log(`Analytics: ${category} - ${action}`);
}

// Enhanced consultation tracking
function trackConsultationProgress() {
    if (consultationStarted) {
        const progress = (currentQuestionIndex / symptoms.length) * 100;
        trackUserAction(`Consultation Progress: ${progress.toFixed(0)}%`);
    }
}

// Auto-save consultation state
function saveConsultationState() {
    const state = {
        currentQuestionIndex,
        selectedSymptoms,
        consultationStarted,
        timestamp: new Date().toISOString()
    };
    sessionStorage.setItem('chillidoctor-state', JSON.stringify(state));
}

function loadConsultationState() {
    try {
        const saved = sessionStorage.getItem('chillidoctor-state');
        if (saved) {
            const state = JSON.parse(saved);
            // Check if state is recent (within 1 hour)
            const savedTime = new Date(state.timestamp);
            const now = new Date();
            const hoursDiff = (now - savedTime) / (1000 * 60 * 60);
            
            if (hoursDiff < 1 && state.consultationStarted) {
                if (confirm('Ditemukan sesi konsultasi sebelumnya. Lanjutkan?')) {
                    currentQuestionIndex = state.currentQuestionIndex;
                    selectedSymptoms = state.selectedSymptoms;
                    consultationStarted = state.consultationStarted;
                    updateSelectedSymptoms();
                    if (currentQuestionIndex < symptoms.length) {
                        showNextQuestion();
                    }
                    showSnackbar('Sesi konsultasi dipulihkan');
                }
            }
        }
    } catch (e) {
        console.warn('Failed to load consultation state:', e);
    }
}

// Log informasi sistem saat startup
console.log('=== SISTEM PAKAR CHILLIDOCTOR - MATERIAL DESIGN ===');
console.log('Knowledge Base:');
console.log(`- Symptoms: ${symptoms.length}`);
console.log(`- Diseases: ${Object.keys(diseases).length}`);
console.log(`- Rules: ${rules.length}`);
console.log('Inference Method: Forward Chaining');
console.log('UI Framework: Material Design');
console.log('Shortcuts: Ctrl+R (Reset), Ctrl+D (Demo), Y/N/U (Answer)');
console.log('=== FEATURES ===');
console.log('✓ Responsive Material Design');
console.log('✓ Progressive Web App Ready');
console.log('✓ Accessibility Support');
console.log('✓ Dark Mode Detection');
console.log('✓ Session Persistence');
console.log('✓ Performance Monitoring');
console.log('=====================================');

// Initialize pada load
document.addEventListener('DOMContentLoaded', function() {
    // Load previous session if exists
    loadConsultationState();
    
    // Show welcome message
    setTimeout(() => {
        showSnackbar('Selamat datang di ChiliDoctor AI!');
    }, 1000);
});

// Auto-save pada setiap perubahan state
function autoSave() {
    if (consultationStarted) {
        saveConsultationState();
        trackConsultationProgress();
    }
}

// Hook auto-save ke fungsi-fungsi utama
const originalAnswerQuestion = answerQuestion;
answerQuestion = function(answer) {
    originalAnswerQuestion(answer);
    autoSave();
};

const originalStartConsultation = startConsultation;
startConsultation = function() {
    originalStartConsultation();
    autoSave();
    trackUserAction('Start Consultation');
};

const originalResetConsultation = resetConsultation;
resetConsultation = function() {
    originalResetConsultation();
    sessionStorage.removeItem('chillidoctor-state');
    trackUserAction('Reset Consultation');
    showSnackbar('Konsultasi direset');
};

const originalRunDemo = runDemo;
runDemo = function() {
    originalRunDemo();
    trackUserAction('Run Demo');
    showSnackbar('Demo dimulai - simulasi Leaf Spot');
};

// interface trace
function toggleInferenceTrace() {
    const content = document.getElementById('inference-content');
    const toggle = document.getElementById('inference-toggle');
    const indicator = document.getElementById('inference-indicator');
    
    if (inferenceTraceExpanded) {
        // Collapse
        content.classList.remove('expanded');
        content.classList.add('collapsed');
        toggle.classList.remove('expanded');
        inferenceTraceExpanded = false;
        
        // Show indicator when collapsed
        showInferenceIndicator();
        
        trackUserAction('Inference Trace Collapsed');
        console.log('Inference trace collapsed');
    } else {
        // Expand
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        toggle.classList.add('expanded');
        inferenceTraceExpanded = true;
        
        // Hide indicator when expanded
        hideInferenceIndicator();
        
        trackUserAction('Inference Trace Expanded');
        console.log('Inference trace expanded');
        
        // Auto scroll to trace after expansion
        setTimeout(() => {
            document.getElementById('inference-trace').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 400);
    }
    
    // Save preference
    localStorage.setItem('inference-trace-expanded', inferenceTraceExpanded);
}

// Show inference indicator when collapsed
function showInferenceIndicator() {
    let indicator = document.getElementById('inference-indicator');
    if (!indicator && inferenceTrace.length > 0) {
        const traceContainer = document.getElementById('inference-trace');
        indicator = document.createElement('div');
        indicator.id = 'inference-indicator';
        indicator.className = 'inference-trace-indicator';
        indicator.innerHTML = `
            <span class="material-icons">info</span>
            <span>${inferenceTrace.length} step proses reasoning tersedia</span>
            <span style="margin-left: auto; font-size: 12px; opacity: 0.7;">Klik untuk melihat detail</span>
        `;
        traceContainer.appendChild(indicator);
    }
}

// Hide inference indicator
function hideInferenceIndicator() {
    const indicator = document.getElementById('inference-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Initialize inference trace state
function initInferenceTrace() {
    const savedState = localStorage.getItem('inference-trace-expanded');
    if (savedState === 'true') {
        inferenceTraceExpanded = true;
        const content = document.getElementById('inference-content');
        const toggle = document.getElementById('inference-toggle');
        if (content && toggle) {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
        }
    } else {
        // Default collapsed
        const content = document.getElementById('inference-content');
        if (content) {
            content.classList.add('collapsed');
        }
    }
}