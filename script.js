(function() {
    // ── PASSWORD ──────────────────────────
    const CORRECT_PASSWORD = 'askim123';
    const passwordOverlay = document.getElementById('passwordOverlay');
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmit = document.getElementById('passwordSubmit');
    const passwordError = document.getElementById('passwordError');
    const mainContent = document.getElementById('mainContent');

    function checkAuth() {
        if (sessionStorage.getItem('ask_rotasi_auth') === 'true') {
            passwordOverlay.style.display = 'none';
            mainContent.style.display = 'block';
            return true;
        }
        return false;
    }
    if (!checkAuth()) {
        passwordOverlay.style.display = 'flex';
        mainContent.style.display = 'none';
    }
    passwordSubmit.addEventListener('click', () => {
        if (passwordInput.value.trim() === CORRECT_PASSWORD) {
            sessionStorage.setItem('ask_rotasi_auth', 'true');
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                mainContent.style.display = 'block';
                initAll();
            }, 400);
        } else {
            passwordError.textContent = '❌ Şifre yanlış, tekrar dene!';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
    passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') passwordSubmit.click(); });
    if (checkAuth()) initAll();

    function initAll() {
        // Aşk sayacı - başlangıç tarihini buraya yaz (yıl, ay-1, gün)
const askBaslangic = new Date(2026, 5, 1); // Örnek: 1 Haziran 2026 (aylar 0'dan başlar, 5 = Haziran)

function gunSayisi() {
    const bugun = new Date();
    const fark = Math.floor((bugun - askBaslangic) / (1000 * 60 * 60 * 24));
    document.querySelector('.love-counter span').textContent = fark;
}
gunSayisi(); // hemen çalıştır

        // Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active-dot'));
    slides[index].classList.add('active');
    dots[index].classList.add('active-dot');
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Otomatik geçiş (5 saniyede bir)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
        
        // ── ACTIVITIES (100 each) ──────────
        const romantic = [
            "Mum ışığında evde akşam yemeği", "Birlikte gün batımı izleyin", "El ele yıldızları seyredin",
            "Birbirinize aşk mektupları yazın", "Ortak çalma listesi oluşturun",
            "Sıcak çikolata eşliğinde balkonda sohbet", "Köpüklü banyo (gül yapraklarıyla)",
            "Yatakta sürpriz kahvaltı", "Aşk temalı film maratonu", "Birbirinize masaj yapın",
            "Gül bahçesinde yürüyüş", "Birlikte şiir yazın", "Çatı katında piknik",
            "Boğaz kenarında balık ekmek + çay", "Aynı kitabı okuyup tartışın", "Birlikte meditasyon",
            "5 dakika sadece göz teması", "Birbirinizin en sevdiği yemekleri pişirin",
            "Çikolata fondü partisi", "Mum yapımı atölyesi", "Gece yarısı sahilde yürüyüş",
            "Zaman kapsülü gömün", "Sırt sırta hayal paylaşımı", "Birbirinize şarkı söyleyin",
            "Romantik çatı restoranı", "Birlikte yoga", "Gün doğumunu karşılayın",
            "Avuca not yazın", "Aynı parfümü sıkın", "Uçurtma uçurun", "Birlikte tuval boyama",
            "Pijama partisi + romantik komedi", "Hamur işi yapın", "Vapurda boğaz turu",
            "El ele fotoğraf turu", "Sürpriz küçük hediyeler", "Gönüllü çalışması",
            "Dans dersi (vals/tango)", "Çiçekçiden çiçek seçin", "Gece lambası altında fısıldaşma",
            "Ortak günlük tutun", "Kuş yuvası yapın", "Kamp ateşi marshmallow",
            "Çocukluk fotoğraflarına bakın", "Özel kokteyl icat edin", "Enstrüman öğrenmeye başlayın",
            "Aynı filmi farklı yerden izleyin", "Seramik boyama", "Parmak izi kolyesi yapın",
            "Gece dondurma yemeye gidin", "Online kursa katılın", "Neden seni seviyorum listesi",
            "Birlikte ağaç dikin", "Romantik otel kaçamağı", "Takımyıldızlarını öğrenin",
            "Gizli not bırakma oyunu", "Eski şehir keşfi", "Birbirinize atkı örün",
            "Vizyon panosu hazırlayın", "Sabah koşusu", "Kumsalda çıplak ayak yürüyün",
            "Puzzle tamamlayın", "Sürpriz çiçek buketi", "Fotoğraf albümü yapın",
            "Aşk şiiri gecesi", "Tatil planı hayal edin", "Şarkı ithaf edin", "Lego seti tamamlayın",
            "Taş toplayıp boyayın", "Bağış kampanyası başlatın", "Teşekkür kartı yazın",
            "Eşyaları birlikte düzenleyin", "Eski film sinema keyfi", "Evde sürpriz notlar saklayın",
            "Balon şişirip patlatmaca", "Geri sayım takvimi yapın", "Not koyup denize bırakın",
            "En sevdiği tatlıyı yapın", "Kar altında yürüyüş", "El yapımı sabun hediye",
            "Teraryum yapın", "Rolleri değişin (1 günlüğüne)", "Video günlüğü çekin",
            "Evde spa günü", "Hayır kurumuna bağış", "Hayallerinizi anlatan mektup",
            "Güneşlenme seansı", "En sevdiğiniz şarkıyı çalın", "Çiçek bahçesi tasarlayın",
            "İlk tanışma anını anlatın", "Tatlı tarifi icat edin", "Sürpriz kutuları hazırlayın",
            "Dilek feneri uçurun", "Tüm gün güzel sözler fısıldayın", "Aşk hikayesi yazın",
            "Seni seviyorum challenge", "Yıldız haritası satın alın", "Özel yüzük tasarlayın",
            "Anı duvarı oluşturun", "100 sebep listesi hazırlayın"
        ];
        const fun = [
            "Karaoke gecesi", "Bowling oynayın", "Escape room", "Lunaparka gidin",
            "Paintball oynayın", "Su parkına gidin", "Masa tenisi turnuvası", "Bilardo oynayın",
            "Lazer tag", "Go-kart yarışı", "Langırt oynayın", "Trambolin parkı", "Mini golf",
            "Okçuluk deneyin", "Buz pateni", "Kaykay/paten sürün", "Tırmanış duvarı",
            "VR oyun merkezi", "Su savaşı (su tabancası)", "Dart oynayın", "Kutu oyunları gecesi",
            "Nintendo/Switch oynayın", "Paint & wine etkinliği", "Komedi kulübüne gidin",
            "Tematik parti düzenleyin", "Flash mob'a katılın", "Sokak lezzetleri turu",
            "Ukulele çalmayı deneyin", "Gece kulübünde dans", "Stand-up gösterisi",
            "Farklı mutfak yemek yarışı", "Festival/panayıra gidin", "Bilgi yarışması (Kahoot)",
            "TikTok videosu çekin", "Bisiklet turu", "Su balonu savaşı", "Açık hava sineması",
            "Konsere gidin", "Komik fotoğraf çekimleri", "Piknik + frizbi",
            "Kokteyl yapma yarışması", "Sahne oyunu izleyin", "Uçurtma uçurun (sahilde)",
            "Sokak sanatçısını izleyin", "Kahve tadım turu", "Cover şarkı kaydedin",
            "Holi festival tarzı partisi", "Şehir turu oyunu (scavenger hunt)", "Komedi filmi maratonu",
            "Su kayağı/wakeboard", "Dans challenge öğrenin", "Balkonda kamp yapın",
            "Yemek yarışması izleyip aynısını yapın", "Kart oyunları gecesi", "Müzik festivaline gidin",
            "Sahilde voleybol", "Fotoğraf yarışması yapın", "Çizgi film maratonu",
            "Evde saklambaç oynayın", "Korku filmi izleyip korkun", "Masa oyunu kafeye gidin",
            "Yoga challenge", "Sokak basketbolu", "Yemek kursuna katılın",
            "Çadır kurup içinde film izleyin", "Müzik aleti yapın (marakas)", "Gece yarısı yüzme",
            "Şişme botla denize açılın", "Bilim deneyleri yapın", "Rap şarkısı yazın",
            "Sokak hayvanlarını besleme turu", "Grafiti duvarı boyayın", "Evde moda defilesi",
            "Radyo programı kaydedin", "Çıplak ayak çimlerde koşun", "Şişe çevirmece",
            "Evde balık tutma oyunu", "Şaka planlayıp uygulayın", "Sokak röportajları yapın",
            "Mini golf sahası inşa edin", "Komik surat ifadeleri yapın", "Challenge videosu çekin",
            "Langırt turnuvası", "Komik şiir yarışması", "Sokakta ip atlama",
            "Çember çevirme yarışı", "Balon patlatmaca (görevli)", "El gölgesi tiyatrosu",
            "Komik aksanlarla sohbet", "Yemek eleştirmeni gibi değerlendirin", "Mini olimpiyatlar",
            "Kukla gösterisi yapın", "Kumdan kale yapın", "Çizgi roman yaratın",
            "Evde lazertag (el feneriyle)", "Kahve falı baktırın", "Sokak müzisyenlerine eşlik",
            "Hayatta yapılacaklar listesi yazın"
        ];
        const memory = [
            "Profesyonel fotoğraf çekimi", "Scrapbook hazırlayın", "Polaroid ile günü belgeleyin",
            "Zaman kapsülü hazırlayın", "Video günlük serisi başlatın", "El izi çerçevesi yapın",
            "Şarkı besteleyip kaydedin", "Fotoğraf albümü oluşturun", "El işi projesi tamamlayın",
            "Anıları haritada işaretleyin", "Anı kutusu süsleyin", "Her ay aynı pozda fotoğraf",
            "Fotoğraflı takvim tasarlayın", "İlk tanıştığınız yeri ziyaret edin", "Aile ağacı araştırması",
            "Geleceğe mektup yazın (5 yıl sonra aç)", "İlişki belgeseli çekin", "Anıları karikatürleştirin",
            "Podcast bölümü kaydedin", "Parmak boyasıyla tablo", "Dijital fotoğraf kitabı",
            "İlk mesajların ekran görüntüsünü çerçeveletin", "İlişki zaman çizelgesi oluşturun",
            "Her yıl aynı ağacın önünde fotoğraf", "Şarkı listesi CD'si hazırlayın",
            "Anıları kavanozda biriktirin", "Mozaik tablo yapın", "İlk randevu kıyafetleriyle fotoğraf",
            "Mini müze köşesi (biletler, objeler)", "Sesli mesaj kaydedip saklayın",
            "Çizgi roman karakteri yaratın (siz ikiniz)", "İlişki haritası çizin",
            "Şiir kitabı oluşturun", "365 gün fotoğraf challenge", "Tişört boyayın (el izleriyle)",
            "Anı şarkı listesi yapın", "Kısa film senaryosu yazın", "İlk yıl dönümü pastası",
            "Çift logosu tasarlayın", "Anı mektuplarını postayla gönderin", "Müzik kutusu yapın",
            "Anı defterine çiçek kurutup yapıştırın", "Puzzle'ı çerçeveletin",
            "En iyi anlar slayt gösterisi", "Magnet koleksiyonu başlatın", "Her seyahatten obje biriktirin",
            "Her ay mum yakıp dilek tutun", "Anıları QR kodlara yükleyin", "Kendi videolarınızla mini sinema",
            "İlk dans şarkısını plağa bastırın", "Soy ağacı posterine fotoğraf ekleyin",
            "Her yıl aynı restoranda aynı masa", "Hayat haritası çizin", "Anı duvar takvimi yapın",
            "Balon içine not koyup patlatın", "İlişki istatistikleri çıkarın", "Damga/logo tasarlayın",
            "Her ayın en güzel anını özetleyin", "Rüya panosu hazırlayın",
            "İlk tanışma anını yeniden canlandırın", "Sır kutusu yapın", "Anı defterine resim çizin",
            "Müzik videosu çekin (lip-sync)", "Aynı deftere not yazın (doğum günü)",
            "Geçici dövme tasarlayın", "Başlangıç noktasına işaret koyun",
            "Aşk sözlüğü oluşturun (özel kelimeler)", "Tuval baskı yaptırın", "Yılın özeti videosu",
            "İlk hediyeleştiğiniz objeyi sergileyin", "Mini kütüphane oluşturun", "Her buluşmadan obje biriktirin",
            "Rüya günlüğü tutun", "Anıları suluboya ile resmedin", "LED ışıklı fotoğraf duvarı",
            "Soundtrack albüm kapağı tasarlayın", "Yıldız isimlendirme sertifikası alın",
            "Aynı pozda yaşlanma serisi", "Mini bahçe ekin", "Anıları origami ile simgeleyin",
            "Anı takvimi yapın", "İlk buluşma mekanına her yıl gidin", "Sonsuzluk bilekliği yapın",
            "Parmak izlerini anı defterine basın", "Mini heykel yapın", "En komik anı resmedin",
            "Yıldönümü takvimi hazırlayın", "Akrostiş şiir yazın", "Aşk ağacı çizin",
            "Her yıl en güzel fotoğrafı seçin", "QR kodlu anahtarlık yapın",
            "Anı defterine kurumuş çiçek yapıştırın", "Mini sinema afişi tasarlayın",
            "İlk seni seviyorum anını çerçeveletin", "Dilek kavanozu yapın", "Gölge kutusunda anı sergisi",
            "Aşk haritası oluşturun", "Yıl dönümünde video mesaj kaydedin", "Mini galeri açın",
            "İlişki başlangıç saatini saate kazıtın"
        ];

        // ── DAILY COLOR ─────────────────────
        const dailyColors = [
            { name: 'Aşk Pembesi', hex: '#FFB6C1', emoji: '💗' }, { name: 'Tutku Kırmızısı', hex: '#E63946', emoji: '❤️' },
            { name: 'Lavanta', hex: '#C9A7D4', emoji: '💜' }, { name: 'Mercan', hex: '#FF7F7F', emoji: '🧡' },
            { name: 'Şeftali', hex: '#FFDAB9', emoji: '🍑' }, { name: 'Gül Kurusu', hex: '#C08081', emoji: '🥀' },
            { name: 'Bordo', hex: '#800020', emoji: '🍷' }, { name: 'Fuşya', hex: '#FF00FF', emoji: '💖' },
            { name: 'Kiraz Çiçeği', hex: '#FFB7C5', emoji: '🌸' }, { name: 'Yakut', hex: '#E0115F', emoji: '💎' },
            { name: 'Orkide', hex: '#DA70D6', emoji: '🦋' }, { name: 'Nar Çiçeği', hex: '#FF6B6B', emoji: '🌺' },
            { name: 'Lila', hex: '#B695C0', emoji: '🪻' }, { name: 'Çilek', hex: '#FC5A8D', emoji: '🍓' },
            { name: 'Vişne', hex: '#9B1B30', emoji: '🍒' }, { name: 'Şarap Kırmızısı', hex: '#722F37', emoji: '🍷' },
            { name: 'Pudra Pembesi', hex: '#F4C2C2', emoji: '🎀' }, { name: 'Karanfil', hex: '#FF6B8A', emoji: '💐' },
            { name: 'Eflatun', hex: '#8B7DAF', emoji: '☂️' }, { name: 'Somom', hex: '#FA8072', emoji: '🐠' },
            { name: 'Kızılcık', hex: '#DC143C', emoji: '❤️‍🔥' }, { name: 'Gül Pembesi', hex: '#FF66B2', emoji: '🌷' },
            { name: 'Şampanya', hex: '#F7E7CE', emoji: '🥂' }, { name: 'Mürdüm', hex: '#701C1C', emoji: '🫐' },
            { name: 'Sakız Pembesi', hex: '#FFD1DC', emoji: '🩷' }, { name: 'Alev Kırmızısı', hex: '#FF4500', emoji: '🔥' },
            { name: 'İnci', hex: '#FDEEF4', emoji: '🦪' }, { name: 'Kadife Kırmızı', hex: '#B31B1B', emoji: '🎭' },
            { name: 'Bal Köpüğü', hex: '#FFF0F5', emoji: '🍯' }, { name: 'Pasifik Pembesi', hex: '#F778A1', emoji: '🏝️' },
            { name: 'Noel Kırmızısı', hex: '#C41E3A', emoji: '🎄' }
        ];

        // ── DAILY SONGS ─────────────────────
        const dailySongs = [
            { title: 'Perfect', artist: 'Ed Sheeran', ytId: '2Vv-BfVoq4g', emoji: '💒' },
            { title: 'All of Me', artist: 'John Legend', ytId: '450p7goxZqg', emoji: '💝' },
            { title: 'Öp', artist: 'Tarkan', ytId: 'P9mwELXPGbA', emoji: '💋' },
            { title: 'Ben De Yoluma Giderim', artist: 'Sezen Aksu', ytId: 'NHEj2N3PE0I', emoji: '🚶‍♀️' },
            { title: 'Aşk Laftan Anlamaz', artist: 'Buray', ytId: 'kQKbFJ3Dxfg', emoji: '💬' },
            { title: 'Love Me Like You Do', artist: 'Ellie Goulding', ytId: 'AJtDXIazrMo', emoji: '✨' },
            { title: 'Seni Seviyorum', artist: 'Gülşen', ytId: 'kXYiU_JCYtU', emoji: '💌' },
            { title: 'A Thousand Years', artist: 'Christina Perri', ytId: 'rtOvBOTyX00', emoji: '⏳' },
            { title: 'Yalnızlar Treni', artist: 'Manga', ytId: 'e-ORhEE9VVg', emoji: '🚂' },
            { title: 'Thinking Out Loud', artist: 'Ed Sheeran', ytId: 'lp-EO5I60KA', emoji: '🕺' },
            { title: 'Sarı Çizmeli Mehmet Ağa', artist: 'Barış Manço', ytId: 'Nq1TnM8KXoM', emoji: '👢' },
            { title: 'Just the Way You Are', artist: 'Bruno Mars', ytId: 'LjhCEhWiKXk', emoji: '🌟' },
            { title: 'Unutulmaz', artist: 'MFÖ', ytId: 'V0PqJXQ2ZUg', emoji: '🎸' },
            { title: 'Shallow', artist: 'Lady Gaga & Bradley Cooper', ytId: 'bo_efYhYU2A', emoji: '🎬' },
            { title: 'Canım', artist: 'Mustafa Sandal', ytId: 'B4xO4QxhXLI', emoji: '💖' },
            { title: 'Yellow', artist: 'Coldplay', ytId: 'yKNxeF4KMsY', emoji: '💛' },
            { title: 'Kara Toprak', artist: 'Aşık Veysel', ytId: '8qLl145FqQg', emoji: '🌍' },
            { title: 'At Last', artist: 'Etta James', ytId: '_1uunRdQ61M', emoji: '🎺' },
            { title: 'Gitme', artist: 'Yıldız Tilbe', ytId: 'u9sUzFdXb9I', emoji: '😢' },
            { title: 'Can\'t Help Falling in Love', artist: 'Elvis Presley', ytId: 'vGJTaP6anOU', emoji: '💘' },
            { title: 'Senden Daha Güzel', artist: 'Duman', ytId: 'Mq2KbVxHxR0', emoji: '😍' },
            { title: 'Make You Feel My Love', artist: 'Adele', ytId: '0put0_a--Ng', emoji: '🎹' },
            { title: 'Affet', artist: 'Müslüm Gürses', ytId: 'LwBmGQKJqT0', emoji: '🕊️' },
            { title: 'I Will Always Love You', artist: 'Whitney Houston', ytId: '3JWTaaS7LdU', emoji: '🎤' },
            { title: 'Mavi Mavi', artist: 'İbrahim Tatlıses', ytId: 'dF6xZ2CkP9A', emoji: '💙' },
            { title: 'Lover', artist: 'Taylor Swift', ytId: '-BjZmE2gtdo', emoji: '🤍' },
            { title: 'Haydi Gel İçelim', artist: 'Yüksek Sadakat', ytId: 'OB9kGvQwNCE', emoji: '🍻' },
            { title: 'Right Here Waiting', artist: 'Richard Marx', ytId: 'S_E2EHVxNAE', emoji: '⏰' },
            { title: 'Ya Sonra', artist: 'Ajda Pekkan', ytId: 'vN7HQrgakZU', emoji: '👑' },
            { title: 'Best Part', artist: 'Daniel Caesar & H.E.R.', ytId: 'vBy7FaapGRY', emoji: '🌅' },
            { title: 'İmkansız Aşk', artist: 'Zeki Müren', ytId: 'XVbKfOZzE5M', emoji: '🎭' }
        ];

        // ── ROUTES ──────────────────────────
        const routesToShow = [
            { name: '🌅 Sultanahmet Rotası', stops: [
                { name: 'Ayasofya', query: 'Ayasofya+i+Kebir+Camii+İstanbul' },
                { name: 'Sultanahmet Camii', query: 'Sultanahmet+Camii+İstanbul' },
                { name: 'Gülhane Parkı', query: 'Gülhane+Parkı+İstanbul' }
            ]},
            { name: '🎭 Beyoğlu & Galata', stops: [
                { name: 'Galata Kulesi', query: 'Galata+Kulesi+İstanbul' },
                { name: 'İstiklal Caddesi', query: 'İstiklal+Caddesi+İstanbul' },
                { name: 'Çiçek Pasajı', query: 'Çiçek+Pasajı+Beyoğlu+İstanbul' }
            ]},
            { name: '🌊 Kadıköy & Moda', stops: [
                { name: 'Moda Sahili', query: 'Moda+Sahili+Kadıköy+İstanbul' },
                { name: 'Boğa Heykeli', query: 'Kadıköy+Boğa+Heykeli+İstanbul' },
                { name: 'Süreyya Operası', query: 'Süreyya+Operası+Kadıköy+İstanbul' }
            ]}
        ];

        // ── DOM REFS ────────────────────────
        const datePicker = document.getElementById('datePicker');
        const surpriseBtn = document.getElementById('surpriseBtn');
        const cardEls = [document.getElementById('card0'), document.getElementById('card1'), document.getElementById('card2')];
        const colorSwatch = document.getElementById('colorSwatch');
        const colorName = document.getElementById('colorName');
        const colorHex = document.getElementById('colorHex');
        const songTitle = document.getElementById('songTitle');
        const songArtist = document.getElementById('songArtist');
        const songDisplayDiv = document.getElementById('songDisplay');
        const btnPlay = document.getElementById('btnPlay');
        const btnPause = document.getElementById('btnPause');
        const btnUnmute = document.getElementById('btnUnmute');
        const volumeSlider = document.getElementById('volumeSlider');
        const btnNextSong = document.getElementById('btnNextSong');
        const routesContainer = document.getElementById('routesContainer');
        const historyContainer = document.getElementById('historyContainer');
        const clearHistoryBtn = document.getElementById('clearHistory');
        const toast = document.getElementById('toast');
        const burstContainer = document.getElementById('burstContainer');
        const floatingHeartsContainer = document.getElementById('floatingHearts');

        // ── STATE ───────────────────────────
        let currentSongIndex = 0;
        let ytPlayer = null;
        let ytPlayerReady = false;
        let isMuted = true;
        let currentVolume = 30;
        let activityHistory = [];
        const lastGen = { romantic: [], fun: [], memory: [] };

        // ── DATE PICKER ────────────────────
        const today = new Date();
        datePicker.value = today.toISOString().split('T')[0];
        datePicker.setAttribute('min', '2020-01-01');
        datePicker.setAttribute('max', '2035-12-31');

        // ── DAILY COLOR ────────────────────
        (function() {
            const c = dailyColors[(today.getDate() - 1) % dailyColors.length];
            colorSwatch.style.backgroundColor = c.hex;
            colorSwatch.style.color = c.hex;
            colorSwatch.style.boxShadow = `0 0 35px ${c.hex}`;
            colorName.textContent = `${c.emoji} ${c.name}`;
            colorHex.textContent = c.hex;
        })();

        // ── DAILY SONG DISPLAY ─────────────
        function getDailySong() {
            const doy = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
            return dailySongs[doy % dailySongs.length];
        }
        function updateSongDisplay() {
            const s = getDailySong();
            currentSongIndex = dailySongs.indexOf(s);
            songTitle.textContent = s.title;
            songArtist.textContent = s.artist;
            const cov = songDisplayDiv.querySelector('.song-cover');
            if (cov) cov.textContent = s.emoji || '🎶';
        }
        updateSongDisplay();

        // ── YOUTUBE PLAYER ─────────────────
        function loadYT() {
            if (window.YT && window.YT.Player) { createPlayer(); return; }
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.head.appendChild(tag);
            window.onYouTubeIframeAPIReady = createPlayer;
        }
        function createPlayer() {
            if (ytPlayer) return;
            const container = document.getElementById('ytPlayerContainer');
            container.innerHTML = '<div id="ytPlayerActual"></div>';
            const s = getDailySong();
            ytPlayer = new YT.Player('ytPlayerActual', {
                videoId: s.ytId,
                width: 1, height: 1,
                playerVars: { autoplay: 1, mute: 1, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, playsinline: 1, rel: 0 },
                events: {
                    onReady: () => {
                        ytPlayerReady = true;
                        ytPlayer.setVolume(currentVolume);
                        ytPlayer.playVideo();
                        isMuted = true;
                        updateUnmuteBtn();
                    },
                    onError: () => playNextSong(),
                    onStateChange: (e) => { if (e.data === 0) playNextSong(); }
                }
            });
        }
        function playNextSong() {
            currentSongIndex = (currentSongIndex + 1) % dailySongs.length;
            const s = dailySongs[currentSongIndex];
            if (ytPlayer && ytPlayerReady) {
                ytPlayer.loadVideoById(s.ytId);
                ytPlayer.setVolume(currentVolume);
                if (isMuted) ytPlayer.mute(); else ytPlayer.unMute();
            }
            updateSongDisplayFromIndex(currentSongIndex);
            showToast('⏭️ ' + s.title);
        }
        function updateSongDisplayFromIndex(i) {
            const s = dailySongs[i];
            songTitle.textContent = s.title;
            songArtist.textContent = s.artist;
            const cov = songDisplayDiv.querySelector('.song-cover');
            if (cov) cov.textContent = s.emoji || '🎶';
        }
        function updateUnmuteBtn() {
            btnUnmute.textContent = isMuted ? '🔇 Sesi Aç' : '🔊 Sesi Kıs';
            if (!isMuted) btnUnmute.classList.add('active-btn');
            else btnUnmute.classList.remove('active-btn');
        }

        btnPlay.addEventListener('click', () => { if (ytPlayer && ytPlayerReady) { ytPlayer.playVideo(); showToast('▶️ Çalıyor...'); } });
        btnPause.addEventListener('click', () => { if (ytPlayer && ytPlayerReady) { ytPlayer.pauseVideo(); showToast('⏸️ Durduruldu'); } });
        btnUnmute.addEventListener('click', () => {
            if (ytPlayer && ytPlayerReady) {
                if (isMuted) { ytPlayer.unMute(); isMuted = false; showToast('🔊 Ses açıldı!'); }
                else { ytPlayer.mute(); isMuted = true; showToast('🔇 Ses kapatıldı'); }
                updateUnmuteBtn();
            }
        });
        volumeSlider.addEventListener('input', () => {
            currentVolume = parseInt(volumeSlider.value);
            if (ytPlayer && ytPlayerReady) ytPlayer.setVolume(currentVolume);
            if (currentVolume > 0 && isMuted && ytPlayer && ytPlayerReady) { ytPlayer.unMute(); isMuted = false; updateUnmuteBtn(); }
        });
        btnNextSong.addEventListener('click', playNextSong);
        loadYT();
        setTimeout(() => { if (!ytPlayerReady && !ytPlayer) loadYT(); }, 4000);

        // ── ROUTES RENDER ──────────────────
        routesContainer.innerHTML = '';
        routesToShow.forEach(r => {
            const div = document.createElement('div');
            div.className = 'route-set';
            div.innerHTML = `<div class="route-title">${r.name}</div><div class="route-stops">` +
                r.stops.map((s, i) => `${i>0?'<span class="route-arrow">→</span>':''}<a class="route-stop" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query)}" target="_blank" rel="noopener">${s.name}</a>`).join('') + '</div>';
            routesContainer.appendChild(div);
        });

        // ── HISTORY ─────────────────────────
        function loadHistory() {
            const s = localStorage.getItem('activityHistory');
            if (s) try { activityHistory = JSON.parse(s); } catch (e) { activityHistory = []; }
            renderHistory();
        }
        function saveHistory() {
            if (activityHistory.length > 30) activityHistory = activityHistory.slice(-30);
            localStorage.setItem('activityHistory', JSON.stringify(activityHistory));
            renderHistory();
        }
        function renderHistory() {
            if (activityHistory.length === 0) historyContainer.innerHTML = '<span style="opacity:0.5;font-size:0.8rem;">Henüz aktivite üretilmedi</span>';
            else historyContainer.innerHTML = activityHistory.slice().reverse().slice(0, 15).map(a => `<span class="history-badge" title="${a.category}">${a.emoji||''} ${a.text}</span>`).join('');
        }
        clearHistoryBtn.addEventListener('click', () => { activityHistory = []; saveHistory(); showToast('🗑️ Geçmiş temizlendi'); });
        loadHistory();

        // ── TOAST ───────────────────────────
        let toastT;
        function showToast(m) {
            clearTimeout(toastT);
            toast.textContent = m;
            toast.classList.add('show');
            toastT = setTimeout(() => toast.classList.remove('show'), 2500);
        }

        // ── BURST & CONFETTI ────────────────
        function burst(x, y, n = 28) {
            const e = ['❤️','💖','💗','💝','💘','💕','💞','🩷','❤️‍🔥','💓','🫶','💟'];
            for (let i=0; i<n; i++) {
                const h = document.createElement('span');
                h.className = 'burst-heart';
                h.textContent = e[Math.floor(Math.random()*e.length)];
                h.style.left = x + 'px';
                h.style.top = y + 'px';
                h.style.fontSize = (18 + Math.random()*35) + 'px';
                const a = Math.random()*Math.PI*2, d = 60 + Math.random()*180;
                h.style.setProperty('--bx', Math.cos(a)*d*0.5 + 'px');
                h.style.setProperty('--by', Math.sin(a)*d*0.5 - Math.random()*60 + 'px');
                h.style.setProperty('--ex', Math.cos(a)*d + 'px');
                h.style.setProperty('--ey', Math.sin(a)*d - Math.random()*100 + 'px');
                h.style.setProperty('--br', (Math.random()-0.5)*180 + 'deg');
                h.style.setProperty('--er', (Math.random()-0.5)*360 + 'deg');
                h.style.animationDuration = (0.9 + Math.random()*1.6) + 's';
                burstContainer.appendChild(h);
                setTimeout(() => { if (h.parentNode) h.parentNode.removeChild(h); }, 1800);
            }
        }
        function confetti(x, y, n = 40) {
            const e = ['🎉','✨','💖','🌟','💫','🎊','💝','🥳','💗','🎀','💘','🌸'];
            for (let i=0; i<n; i++) {
                const p = document.createElement('span');
                p.className = 'confetti-piece';
                p.textContent = e[Math.floor(Math.random()*e.length)];
                p.style.left = (x + (Math.random()-0.5)*300) + 'px';
                p.style.top = (y - Math.random()*80) + 'px';
                p.style.fontSize = (14 + Math.random()*22) + 'px';
                p.style.animationDuration = (1.5 + Math.random()*3) + 's';
                p.style.animationDelay = Math.random()*0.4 + 's';
                document.body.appendChild(p);
                setTimeout(() => { if (p.parentNode) p.parentNode.removeChild(p); }, 3500);
            }
        }

        // ── SURPRISE ────────────────────────
        function getUnique(cat) {
            const pool = cat === 'romantic' ? romantic : cat === 'fun' ? fun : memory;
            const lastArr = cat === 'romantic' ? lastGen.romantic : cat === 'fun' ? lastGen.fun : lastGen.memory;
            if (lastArr.length >= pool.length * 0.7) lastArr.length = 0;
            const avail = [];
            for (let i=0; i<pool.length; i++) { if (!lastArr.includes(i)) avail.push(i); }
            if (avail.length === 0) { lastArr.length = 0; avail.push(...Array.from({length: pool.length}, (_,i)=> i)); }
            const pick = avail.splice(Math.floor(Math.random()*avail.length), 1)[0];
            lastArr.push(pick);
            return { index: pick, text: pool[pick] };
        }
        surpriseBtn.addEventListener('click', () => {
            if (!datePicker.value) { showToast('📅 Lütfen tarih seç!'); return; }
            const r = surpriseBtn.getBoundingClientRect();
            const bx = r.left + r.width/2, by = r.top + r.height/2;
            burst(bx, by, 35);
            confetti(bx, by, 50);
            const picks = [
                { ...getUnique('romantic'), category: '💖 Romantik', emoji: '💖', delay: 0 },
                { ...getUnique('fun'), category: '🎉 Eğlenceli', emoji: '🎉', delay: 150 },
                { ...getUnique('memory'), category: '📸 Anı Biriktirme', emoji: '📸', delay: 300 }
            ].sort(() => Math.random() - 0.5);
            cardEls.forEach((card, i) => {
                card.classList.remove('revealed');
                card.innerHTML = '<span class="mystery-text">❓</span><span class="mystery-label">Sürpriz için tıkla</span><div class="card-shimmer"></div>';
                setTimeout(() => {
                    card.classList.add('revealed');
                    card.innerHTML = `<div class="card-icon">${picks[i].emoji}</div><div class="card-category">${picks[i].category}</div><div class="card-activity">${picks[i].text}</div>`;
                }, picks[i].delay + 200);
            });
            picks.forEach(p => activityHistory.push({ text: p.text, category: p.category, emoji: p.emoji, date: datePicker.value }));
            saveHistory();
            showToast(`✨ ${new Date(datePicker.value).toLocaleDateString('tr-TR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})} için 3 aktivite!`);
        });

        // ── FLOATING HEARTS ─────────────────
        function spawnFloat() {
            if (floatingHeartsContainer.children.length > 20) return;
            const h = document.createElement('span');
            h.className = 'float-heart';
            h.textContent = ['💖','💗','💝','💘','💕','🩷','💞','🌸','✨','💫'][Math.floor(Math.random()*10)];
            h.style.left = Math.random()*95 + '%';
            h.style.fontSize = (14 + Math.random()*28) + 'px';
            h.style.animationDuration = (6 + Math.random()*12) + 's';
            floatingHeartsContainer.appendChild(h);
            setTimeout(() => { if (h.parentNode) h.parentNode.removeChild(h); }, parseFloat(h.style.animationDuration)*1000 + 500);
        }
        setInterval(spawnFloat, 1500);
        for (let i=0; i<10; i++) setTimeout(spawnFloat, i*400);

        // ── MOUSE TRAIL ────────────────────
        let mt;
        document.addEventListener('mousemove', (e) => {
            if (mt) return;
            mt = setTimeout(() => { mt = null; }, 120);
            if (Math.random() > 0.65) {
                const h = document.createElement('span');
                h.className = 'mouse-heart';
                h.textContent = ['💖','💗','🩷','💕','✨'][Math.floor(Math.random()*5)];
                h.style.left = e.clientX + 'px';
                h.style.top = e.clientY + 'px';
                h.style.fontSize = (10 + Math.random()*14) + 'px';
                document.body.appendChild(h);
                setTimeout(() => { if (h.parentNode) h.parentNode.removeChild(h); }, 850);
            }
        });

        // ── KEYBOARD ────────────────────────
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' && e.target === document.body) { e.preventDefault(); surpriseBtn.click(); }
            if (e.key === 'm' && e.ctrlKey) { e.preventDefault(); btnUnmute.click(); }
        });

        // ── FOTOĞRAF BÜYÜTME (TIKLAYINCA) ──
        document.querySelectorAll('.love-photo').forEach(img => {
            img.addEventListener('click', function() {
                const overlay = document.createElement('div');
                overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;cursor:pointer;';
                const bigImg = document.createElement('img');
                bigImg.src = this.src;
                bigImg.style.cssText = 'max-width:90%;max-height:90%;border-radius:20px;border:3px solid #ff6b8a;';
                overlay.appendChild(bigImg);
                overlay.addEventListener('click', () => overlay.remove());
                document.body.appendChild(overlay);
            });
        });

        console.log('💖 Aşk Rotası hazır! Mertcan ❤️ Mercan');
        console.log('✨ Boşluk tuşu ile sürpriz yapabilirsin!');
    }
})();

document.getElementById('secretMessageBtn').addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.className = 'secret-popup';
    popup.textContent = '💖 Seni her gün daha çok seviyorum Mercan! 💖';
    popup.addEventListener('click', () => popup.remove());
    document.body.appendChild(popup);
    setTimeout(() => { if (popup.parentNode) popup.remove(); }, 4000);
});
