/* =========================================================
   FastTap Ultra - Main Engine
   ========================================================= */

/* ============ الترجمة الكاملة ============ */
const I18N = {
  en:{
    loading:"Loading...", ai:"Play vs AI", duo:"2 Players", online:"Online", friend:"With Friend",
    profile:"Profile", achievements:"Achievements", leaderboard:"Leaderboard", settings:"Settings",
    rankedPlay:"Ranked Match", friendsList:"Friends", dailyBox:"Daily Box",
    chooseDiff:"Choose Difficulty", easy:"Easy", medium:"Medium", hard:"Hard", impossible:"Impossible",
    easyDesc:"2 taps/s", mediumDesc:"5 taps/s", hardDesc:"9 taps/s", impossibleDesc:"18 taps/s",
    back:"↩ Back", enterName:"Enter your name", namePh:"Your name",
    friendCode:"Friend code (digits only, max 10):", confirm:"Confirm",
    player1:"Player 1", player2:"Player 2", tap:"TAP!", pause:"Paused",
    resume:"▶ Resume", restart:"🔄 Restart", home:"🏠 Main Menu",
    win:"VICTORY!", lose:"DEFEAT", draw:"DRAW", again:"🎮 Play Again", rematch:"🔁 Rematch",
    sound:"🔊 Sound Effects", music:"🎵 Music", calm:"Calm", normal:"Normal",
    intense:"Intense", epic:"Epic", off:"Off",
    quality:"🎨 Graphics", high:"High", medium:"Medium", low:"Low",
    theme:"🎨 Theme", language:"🌍 Language", vibrate:"📳 Vibration",
    duration:"⏱️ Duration (s)", goal:"🎯 Goal",
    particles:"✨ Particles", screenShake:"📳 Screen Shake", haptics:"💥 Haptic Feedback",
    resetProgress:"🗑️ Reset Progress",
    onlineTitle:"Online Play", createRoom:"Create Room", joinRoom:"Join Room",
    ranked:"Ranked Match", shareCode:"Share this code:", copy:"📋 Copy", startGame:"▶ Start Game",
    wins:"Wins", losses:"Losses", draws:"Draws", totalTaps:"Total Taps",
    bestTps:"Best TPS", winRate:"Win Rate", rankLadder:"Rank Ladder",
    local:"Local", global:"Global", friendsTab:"Friends",
    findingMatch:"Finding Match...", cancel:"Cancel", matchFound:"Match Found!",
    waiting:"Waiting for opponent...", connected:"Connected!",
    disconnected:"Connection lost", roomCreated:"Room created", roomJoined:"Joined room",
    copied:"Code copied!", opponentLeft:"Opponent left",
    add:"Add", friendNamePh:"Friend's name", noFriends:"No friends yet",
    boxReady:"Tap to open!", open:"Open", comeBackLater:"Come back tomorrow!",
    chat:"Chat", typeMsg:"Type a message...", send:"Send",
    rewards:"Rewards", yourScore:"Your Score", oppScore:"Opponent",
    taps:"taps", accuracy:"Accuracy", duration_lbl:"Duration",
    rankUp:"RANK UP!", rankDown:"RANK DOWN"
  },
  ar:{
    loading:"جاري التحميل...", ai:"لعب مع الذكاء الاصطناعي", duo:"لعب مزدوج", online:"لعب أونلاين",
    friend:"لعب مع صديق", profile:"الملف الشخصي", achievements:"الإنجازات",
    leaderboard:"المتصدرون", settings:"الإعدادات", rankedPlay:"مباراة تنافسية",
    friendsList:"الأصدقاء", dailyBox:"صندوق يومي",
    chooseDiff:"اختر المستوى", easy:"سهل", medium:"متوسط", hard:"صعب", impossible:"مستحيل",
    easyDesc:"2 ضغطات/ث", mediumDesc:"5 ضغطات/ث", hardDesc:"9 ضغطات/ث",
    impossibleDesc:"18 ضغطة/ث", back:"↩ رجوع", enterName:"أدخل اسمك", namePh:"اسمك هنا",
    friendCode:"كود الصديق (أرقام فقط، حتى 10):", confirm:"تأكيد",
    player1:"لاعب 1", player2:"لاعب 2", tap:"اضغط!", pause:"اللعبة متوقفة",
    resume:"▶ كمل", restart:"🔄 إعادة", home:"🏠 القائمة الرئيسية",
    win:"🏆 فوز!", lose:"💔 خسارة", draw:"🤝 تعادل", again:"🎮 العب مجدداً",
    rematch:"🔁 مباراة ثانية",
    sound:"🔊 المؤثرات الصوتية", music:"🎵 الموسيقى", calm:"هادئة", normal:"عادية",
    intense:"حماسية", epic:"ملحمية", off:"مغلقة",
    quality:"🎨 جودة الرسومات", high:"مرتفعة", medium:"متوسطة", low:"متدنية",
    theme:"🎨 الثيم", language:"🌍 اللغة", vibrate:"📳 الاهتزاز",
    duration:"⏱️ المدة (ثواني)", goal:"🎯 الهدف", particles:"✨ الجزيئات",
    screenShake:"📳 اهتزاز الشاشة", haptics:"💥 الاهتزاز اللمسي",
    resetProgress:"🗑️ إعادة تعيين التقدم",
    onlineTitle:"اللعب أونلاين", createRoom:"إنشاء غرفة", joinRoom:"انضم لغرفة",
    ranked:"مباراة تنافسية", shareCode:"شارك هذا الكود:", copy:"📋 نسخ",
    startGame:"▶ ابدأ اللعبة", wins:"فوز", losses:"خسارة", draws:"تعادل",
    totalTaps:"إجمالي الضغطات", bestTps:"أفضل معدل", winRate:"نسبة الفوز",
    rankLadder:"سلم الرتب",
    local:"محلي", global:"عالمي", friendsTab:"الأصدقاء",
    findingMatch:"جاري البحث عن خصم...", cancel:"إلغاء", matchFound:"تم إيجاد خصم!",
    waiting:"بانتظار الخصم...", connected:"تم الاتصال!", disconnected:"انقطع الاتصال",
    roomCreated:"تم إنشاء الغرفة", roomJoined:"انضممت للغرفة",
    copied:"تم نسخ الكود!", opponentLeft:"خرج الخصم",
    add:"إضافة", friendNamePh:"اسم الصديق", noFriends:"لا يوجد أصدقاء بعد",
    boxReady:"اضغط للفتح!", open:"افتح", comeBackLater:"عد غداً!",
    chat:"الدردشة", typeMsg:"اكتب رسالة...", send:"أرسل",
    rewards:"المكافآت", yourScore:"نقاطك", oppScore:"الخصم",
    taps:"ضغطة", accuracy:"الدقة", duration_lbl:"المدة",
    rankUp:"ارتقيت!", rankDown:"تراجعت"
  },
  fr:{
    loading:"Chargement...", ai:"Jouer vs IA", duo:"2 Joueurs", online:"En ligne",
    friend:"Avec un ami", profile:"Profil", achievements:"Succès",
    leaderboard:"Classement", settings:"Paramètres", rankedPlay:"Match Classé",
    friendsList:"Amis", dailyBox:"Coffre Quotidien",
    chooseDiff:"Choisir la difficulté", easy:"Facile", medium:"Moyen",
    hard:"Difficile", impossible:"Impossible",
    easyDesc:"2 taps/s", mediumDesc:"5 taps/s", hardDesc:"9 taps/s", impossibleDesc:"18 taps/s",
    back:"↩ Retour", enterName:"Entrez votre nom", namePh:"Votre nom",
    friendCode:"Code ami (chiffres, max 10):", confirm:"Confirmer",
    player1:"Joueur 1", player2:"Joueur 2", tap:"TAP!", pause:"En pause",
    resume:"▶ Reprendre", restart:"🔄 Recommencer", home:"🏠 Menu",
    win:"VICTOIRE!", lose:"DÉFAITE", draw:"ÉGALITÉ", again:"🎮 Rejouer",
    rematch:"🔁 Revanche",
    sound:"🔊 Effets", music:"🎵 Musique", calm:"Calme", normal:"Normale",
    intense:"Intense", epic:"Épique", off:"Désactivée",
    quality:"🎨 Qualité", high:"Élevée", medium:"Moyenne", low:"Basse",
    theme:"🎨 Thème", language:"🌍 Langue", vibrate:"📳 Vibration",
    duration:"⏱️ Durée (s)", goal:"🎯 Objectif",
    particles:"✨ Particules", screenShake:"📳 Secousse", haptics:"💥 Retour haptique",
    resetProgress:"🗑️ Réinitialiser",
    onlineTitle:"Jeu en ligne", createRoom:"Créer un salon", joinRoom:"Rejoindre",
    ranked:"Match classé", shareCode:"Partagez ce code:", copy:"📋 Copier",
    startGame:"▶ Démarrer", wins:"Victoires", losses:"Défaites", draws:"Égalités",
    totalTaps:"Total taps", bestTps:"Meilleur TPS", winRate:"Taux de victoire",
    rankLadder:"Échelle de rang",
    local:"Local", global:"Global", friendsTab:"Amis",
    findingMatch:"Recherche...", cancel:"Annuler", matchFound:"Adversaire trouvé!",
    waiting:"En attente...", connected:"Connecté!", disconnected:"Déconnecté",
    roomCreated:"Salon créé", roomJoined:"Salon rejoint", copied:"Code copié!",
    opponentLeft:"Adversaire parti",
    add:"Ajouter", friendNamePh:"Nom de l'ami", noFriends:"Aucun ami",
    boxReady:"Touchez pour ouvrir!", open:"Ouvrir", comeBackLater:"Revenez demain!",
    chat:"Chat", typeMsg:"Tapez un message...", send:"Envoyer",
    rewards:"Récompenses", yourScore:"Votre score", oppScore:"Adversaire",
    taps:"taps", accuracy:"Précision", duration_lbl:"Durée",
    rankUp:"RANG SUPÉRIEUR!", rankDown:"RANG INFÉRIEUR"
  },
  es:{loading:"Cargando...",ai:"Jugar vs IA",duo:"2 Jugadores",online:"En línea",friend:"Con amigo",
      profile:"Perfil",achievements:"Logros",leaderboard:"Clasificación",settings:"Ajustes",
      rankedPlay:"Partida Clasificatoria",friendsList:"Amigos",dailyBox:"Caja Diaria",
      chooseDiff:"Dificultad",easy:"Fácil",medium:"Medio",hard:"Difícil",impossible:"Imposible",
      easyDesc:"2 taps/s",mediumDesc:"5 taps/s",hardDesc:"9 taps/s",impossibleDesc:"18 taps/s",
      back:"↩ Volver",enterName:"Tu nombre",namePh:"Tu nombre",
      friendCode:"Código amigo (dígitos, máx 10):",confirm:"Confirmar",
      player1:"Jugador 1",player2:"Jugador 2",tap:"¡TAP!",pause:"Pausado",
      resume:"▶ Continuar",restart:"🔄 Reiniciar",home:"🏠 Menú",
      win:"¡VICTORIA!",lose:"DERROTA",draw:"EMPATE",again:"🎮 Jugar otra vez",rematch:"🔁 Revancha",
      sound:"🔊 Efectos",music:"🎵 Música",calm:"Tranquila",normal:"Normal",
      intense:"Intensa",epic:"Épica",off:"Apagada",
      quality:"🎨 Calidad",high:"Alta",medium:"Media",low:"Baja",
      theme:"🎨 Tema",language:"🌍 Idioma",vibrate:"📳 Vibración",
      duration:"⏱️ Duración (s)",goal:"🎯 Meta",particles:"✨ Partículas",
      screenShake:"📳 Sacudida",haptics:"💥 Feedback",resetProgress:"🗑️ Reiniciar",
      onlineTitle:"Juego en línea",createRoom:"Crear sala",joinRoom:"Unirse",
      ranked:"Partida clasificatoria",shareCode:"Comparte:",copy:"📋 Copiar",
      startGame:"▶ Empezar",wins:"Victorias",losses:"Derrotas",draws:"Empates",
      totalTaps:"Taps totales",bestTps:"Mejor TPS",winRate:"Tasa de victoria",
      rankLadder:"Escala de rango",
      local:"Local",global:"Global",friendsTab:"Amigos",
      findingMatch:"Buscando...",cancel:"Cancelar",matchFound:"¡Rival encontrado!",
      waiting:"Esperando...",connected:"¡Conectado!",disconnected:"Desconectado",
      roomCreated:"Sala creada",roomJoined:"Sala unida",copied:"¡Copiado!",
      opponentLeft:"Rival salió",
      add:"Añadir",friendNamePh:"Nombre del amigo",noFriends:"Sin amigos",
      boxReady:"¡Toca para abrir!",open:"Abrir",comeBackLater:"¡Vuelve mañana!",
      chat:"Chat",typeMsg:"Escribe...",send:"Enviar",
      rewards:"Recompensas",yourScore:"Tu puntaje",oppScore:"Rival",
      taps:"taps",accuracy:"Precisión",duration_lbl:"Duración",
      rankUp:"¡SUBISTE!",rankDown:"BAJASTE"},
  de:{loading:"Lädt...",ai:"Gegen KI",duo:"2 Spieler",online:"Online",friend:"Mit Freund",
      profile:"Profil",achievements:"Erfolge",leaderboard:"Rangliste",settings:"Einstellungen",
      rankedPlay:"Ranglistenspiel",friendsList:"Freunde",dailyBox:"Tägliche Box",
      chooseDiff:"Schwierigkeit",easy:"Leicht",medium:"Mittel",hard:"Schwer",impossible:"Unmöglich",
      easyDesc:"2 Klicks/s",mediumDesc:"5 Klicks/s",hardDesc:"9 Klicks/s",impossibleDesc:"18 Klicks/s",
      back:"↩ Zurück",enterName:"Name eingeben",namePh:"Dein Name",
      friendCode:"Freundescode (Ziffern, max 10):",confirm:"Bestätigen",
      player1:"Spieler 1",player2:"Spieler 2",tap:"TIPP!",pause:"Pause",
      resume:"▶ Weiter",restart:"🔄 Neustart",home:"🏠 Menü",
      win:"SIEG!",lose:"NIEDERLAGE",draw:"UNENTSCHIEDEN",again:"🎮 Nochmal",rematch:"🔁 Revanche",
      sound:"🔊 Soundeffekte",music:"🎵 Musik",calm:"Ruhig",normal:"Normal",
      intense:"Intensiv",epic:"Episch",off:"Aus",
      quality:"🎨 Qualität",high:"Hoch",medium:"Mittel",low:"Niedrig",
      theme:"🎨 Thema",language:"🌍 Sprache",vibrate:"📳 Vibration",
      duration:"⏱️ Dauer (s)",goal:"🎯 Ziel",particles:"✨ Partikel",
      screenShake:"📳 Wackeln",haptics:"💥 Haptik",resetProgress:"🗑️ Zurücksetzen",
      onlineTitle:"Online-Spiel",createRoom:"Raum erstellen",joinRoom:"Beitreten",
      ranked:"Ranglistenspiel",shareCode:"Teile diesen Code:",copy:"📋 Kopieren",
      startGame:"▶ Starten",wins:"Siege",losses:"Niederlagen",draws:"Unentschieden",
      totalTaps:"Klicks gesamt",bestTps:"Bestes TPS",winRate:"Siegquote",
      rankLadder:"Rangliste",
      local:"Lokal",global:"Global",friendsTab:"Freunde",
      findingMatch:"Suche...",cancel:"Abbrechen",matchFound:"Gegner gefunden!",
      waiting:"Warte...",connected:"Verbunden!",disconnected:"Getrennt",
      roomCreated:"Raum erstellt",roomJoined:"Beigetreten",copied:"Kopiert!",
      opponentLeft:"Gegner verließ",
      add:"Hinzufügen",friendNamePh:"Name des Freundes",noFriends:"Keine Freunde",
      boxReady:"Zum Öffnen tippen!",open:"Öffnen",comeBackLater:"Komm morgen wieder!",
      chat:"Chat",typeMsg:"Nachricht...",send:"Senden",
      rewards:"Belohnungen",yourScore:"Dein Score",oppScore:"Gegner",
      taps:"Klicks",accuracy:"Genauigkeit",duration_lbl:"Dauer",
      rankUp:"AUFGESTIEGEN!",rankDown:"ABGESTIEGEN"},
  tr:{loading:"Yükleniyor...",ai:"Yapay Zeka",duo:"2 Oyuncu",online:"Çevrimiçi",friend:"Arkadaşla",
      profile:"Profil",achievements:"Başarımlar",leaderboard:"Liderlik",settings:"Ayarlar",
      rankedPlay:"Dereceli Maç",friendsList:"Arkadaşlar",dailyBox:"Günlük Kutu",
      chooseDiff:"Zorluk seç",easy:"Kolay",medium:"Orta",hard:"Zor",impossible:"İmkansız",
      easyDesc:"2 tık/sn",mediumDesc:"5 tık/sn",hardDesc:"9 tık/sn",impossibleDesc:"18 tık/sn",
      back:"↩ Geri",enterName:"Adını gir",namePh:"Adın",
      friendCode:"Arkadaş kodu (rakam, max 10):",confirm:"Onayla",
      player1:"Oyuncu 1",player2:"Oyuncu 2",tap:"BAS!",pause:"Duraklatıldı",
      resume:"▶ Devam",restart:"🔄 Yeniden",home:"🏠 Menü",
      win:"ZAFER!",lose:"YENİLGİ",draw:"BERABERE",again:"🎮 Tekrar",rematch:"🔁 Rövanş",
      sound:"🔊 Ses",music:"🎵 Müzik",calm:"Sakin",normal:"Normal",
      intense:"Yoğun",epic:"Epik",off:"Kapalı",
      quality:"🎨 Kalite",high:"Yüksek",medium:"Orta",low:"Düşük",
      theme:"🎨 Tema",language:"🌍 Dil",vibrate:"📳 Titreşim",
      duration:"⏱️ Süre (sn)",goal:"🎯 Hedef",particles:"✨ Parçacıklar",
      screenShake:"📳 Sarsıntı",haptics:"💥 Dokunsal",resetProgress:"🗑️ Sıfırla",
      onlineTitle:"Çevrimiçi",createRoom:"Oda oluştur",joinRoom:"Katıl",
      ranked:"Dereceli",shareCode:"Paylaş:",copy:"📋 Kopyala",
      startGame:"▶ Başlat",wins:"Galibiyet",losses:"Yenilgi",draws:"Beraberlik",
      totalTaps:"Toplam tık",bestTps:"En iyi TPS",winRate:"Kazanma oranı",
      rankLadder:"Rütbe merdiveni",
      local:"Yerel",global:"Global",friendsTab:"Arkadaşlar",
      findingMatch:"Aranıyor...",cancel:"İptal",matchFound:"Rakip bulundu!",
      waiting:"Bekleniyor...",connected:"Bağlandı!",disconnected:"Bağlantı kesildi",
      roomCreated:"Oda oluşturuldu",roomJoined:"Odaya katıldın",copied:"Kopyalandı!",
      opponentLeft:"Rakip ayrıldı",
      add:"Ekle",friendNamePh:"Arkadaş adı",noFriends:"Arkadaş yok",
      boxReady:"Açmak için tıkla!",open:"Aç",comeBackLater:"Yarın gel!",
      chat:"Sohbet",typeMsg:"Mesaj...",send:"Gönder",
      rewards:"Ödüller",yourScore:"Skorun",oppScore:"Rakip",
      taps:"tık",accuracy:"Doğruluk",duration_lbl:"Süre",
      rankUp:"YÜKSELDİN!",rankDown:"DÜŞTÜN"},
  it:{loading:"Caricamento...",ai:"vs IA",duo:"2 Giocatori",online:"Online",friend:"Con amico",
      profile:"Profilo",achievements:"Obiettivi",leaderboard:"Classifica",settings:"Impostazioni",
      rankedPlay:"Partita Classificata",friendsList:"Amici",dailyBox:"Box Giornaliero",
      chooseDiff:"Difficoltà",easy:"Facile",medium:"Medio",hard:"Difficile",impossible:"Impossibile",
      easyDesc:"2 tap/s",mediumDesc:"5 tap/s",hardDesc:"9 tap/s",impossibleDesc:"18 tap/s",
      back:"↩ Indietro",enterName:"Il tuo nome",namePh:"Il tuo nome",
      friendCode:"Codice amico (cifre, max 10):",confirm:"Conferma",
      player1:"Giocatore 1",player2:"Giocatore 2",tap:"TAP!",pause:"In pausa",
      resume:"▶ Riprendi",restart:"🔄 Ricomincia",home:"🏠 Menu",
      win:"VITTORIA!",lose:"SCONFITTA",draw:"PAREGGIO",again:"🎮 Rigioca",rematch:"🔁 Rivincita",
      sound:"🔊 Effetti",music:"🎵 Musica",calm:"Calma",normal:"Normale",
      intense:"Intensa",epic:"Epica",off:"Spenta",
      quality:"🎨 Qualità",high:"Alta",medium:"Media",low:"Bassa",
      theme:"🎨 Tema",language:"🌍 Lingua",vibrate:"📳 Vibrazione",
      duration:"⏱️ Durata (s)",goal:"🎯 Obiettivo",particles:"✨ Particelle",
      screenShake:"📳 Scossa",haptics:"💥 Feedback",resetProgress:"🗑️ Reimposta",
      onlineTitle:"Gioco online",createRoom:"Crea stanza",joinRoom:"Unisciti",
      ranked:"Classificata",shareCode:"Condividi:",copy:"📋 Copia",
      startGame:"▶ Inizia",wins:"Vittorie",losses:"Sconfitte",draws:"Pareggi",
      totalTaps:"Tap totali",bestTps:"Miglior TPS",winRate:"Tasso vittoria",
      rankLadder:"Scala ranghi",
      local:"Locale",global:"Globale",friendsTab:"Amici",
      findingMatch:"Ricerca...",cancel:"Annulla",matchFound:"Avversario trovato!",
      waiting:"In attesa...",connected:"Connesso!",disconnected:"Disconnesso",
      roomCreated:"Stanza creata",roomJoined:"Stanza unita",copied:"Copiato!",
      opponentLeft:"Avversario uscito",
      add:"Aggiungi",friendNamePh:"Nome amico",noFriends:"Nessun amico",
      boxReady:"Tocca per aprire!",open:"Apri",comeBackLater:"Torna domani!",
      chat:"Chat",typeMsg:"Scrivi...",send:"Invia",
      rewards:"Ricompense",yourScore:"Il tuo punteggio",oppScore:"Avversario",
      taps:"tap",accuracy:"Precisione",duration_lbl:"Durata",
      rankUp:"PROMOSSO!",rankDown:"RETROCESSO"}
};

/* ============ الرتب ============ */
const RANKS = [
  { name:'Bronze',      nameAr:'برونزي',   min:0,    icon:'🥉' },
  { name:'Silver',      nameAr:'فضي',      min:800,  icon:'🥈' },
  { name:'Gold',        nameAr:'ذهبي',     min:1200, icon:'🥇' },
  { name:'Platinum',    nameAr:'بلاتيني',  min:1600, icon:'💠' },
  { name:'Diamond',     nameAr:'ألماسي',   min:2000, icon:'💎' },
  { name:'Master',      nameAr:'أستاذ',    min:2400, icon:'👑' },
  { name:'Grandmaster', nameAr:'أستاذ كبير',min:2800, icon:'🏆' }
];

function getRank(mmr){
  let r = RANKS[0];
  for(const rk of RANKS) if(mmr >= rk.min) r = rk;
  return r;
}
function getRankName(rank){
  return state.lang === 'ar' ? rank.nameAr : rank.name;
}

/* ============ الإنجازات ============ */
const ACHIEVEMENTS = [
  { id:'first_win', icon:'🥇', name:'First Blood', nameAr:'أول فوز', desc:'Win your first match', descAr:'افز بأول مباراة', check:s=>s.wins>=1 },
  { id:'win_10', icon:'🔥', name:'On Fire', nameAr:'مشتعل', desc:'Win 10 matches', descAr:'افز بـ10', check:s=>s.wins>=10 },
  { id:'win_50', icon:'💎', name:'Diamond', nameAr:'ألماس', desc:'Win 50 matches', descAr:'افز بـ50', check:s=>s.wins>=50 },
  { id:'win_100', icon:'👑', name:'King', nameAr:'ملك', desc:'Win 100 matches', descAr:'افز بـ100', check:s=>s.wins>=100 },
  { id:'tap_1000', icon:'⚡', name:'Fast Fingers', nameAr:'أصابع سريعة', desc:'Tap 1,000 times', descAr:'اضغط 1000', check:s=>s.totalTaps>=1000 },
  { id:'tap_10000', icon:'🚀', name:'Blazing', nameAr:'صاروخ', desc:'Tap 10,000 times', descAr:'اضغط 10000', check:s=>s.totalTaps>=10000 },
  { id:'tap_100000', icon:'🌪️', name:'Hurricane', nameAr:'إعصار', desc:'Tap 100,000 times', descAr:'اضغط 100000', check:s=>s.totalTaps>=100000 },
  { id:'tps_10', icon:'💨', name:'Ten Per Sec', nameAr:'10 في الثانية', desc:'Reach 10 taps/sec', descAr:'أحرز 10/ث', check:s=>s.bestTps>=10 },
  { id:'tps_15', icon:'⚡', name:'Super Speed', nameAr:'سرعة خارقة', desc:'Reach 15 taps/sec', descAr:'أحرز 15/ث', check:s=>s.bestTps>=15 },
  { id:'tps_20', icon:'🌀', name:'Untouchable', nameAr:'لا يُلمس', desc:'Reach 20 taps/sec', descAr:'أحرز 20/ث', check:s=>s.bestTps>=20 },
  { id:'beat_impossible', icon:'💀', name:'Godslayer', nameAr:'قاتل الإله', desc:'Beat Impossible AI', descAr:'اهزم المستحيل', check:s=>s.beatImpossible },
  { id:'beat_hard', icon:'🔥', name:'Warrior', nameAr:'محارب', desc:'Beat Hard AI', descAr:'اهزم الصعب', check:s=>s.beatHard },
  { id:'perfect_win', icon:'🎯', name:'Flawless', nameAr:'بلا أخطاء', desc:'Win 100-0 vs AI', descAr:'فز 100-0', check:s=>s.perfectWin },
  { id:'level_5', icon:'⭐', name:'Rising Star', nameAr:'نجم صاعد', desc:'Reach level 5', descAr:'صل لمستوى 5', check:s=>s.level>=5 },
  { id:'level_10', icon:'🌟', name:'Star', nameAr:'نجم', desc:'Reach level 10', descAr:'صل لمستوى 10', check:s=>s.level>=10 },
  { id:'level_25', icon:'✨', name:'Superstar', nameAr:'نجم خارق', desc:'Reach level 25', descAr:'صل لمستوى 25', check:s=>s.level>=25 },
  { id:'online_win', icon:'🌐', name:'Globetrotter', nameAr:'جوّال', desc:'Win an online match', descAr:'افز أونلاين', check:s=>s.onlineWins>=1 },
  { id:'rank_gold', icon:'🥇', name:'Golden Boy', nameAr:'الفتى الذهبي', desc:'Reach Gold rank', descAr:'صل لرتبة ذهبي', check:s=>s.mmr>=1200 },
  { id:'rank_diamond', icon:'💎', name:'Diamond Hands', nameAr:'أيدٍ ألماسية', desc:'Reach Diamond rank', descAr:'صل لألماسي', check:s=>s.mmr>=2000 },
  { id:'streak_5', icon:'🔥', name:'Win Streak 5', nameAr:'5 انتصارات', desc:'Win 5 in a row', descAr:'5 متتالية', check:s=>s.winStreak>=5 },
  { id:'comeback', icon:'💪', name:'Comeback', nameAr:'العودة', desc:'Win after losing 3 in a row', descAr:'افز بعد 3 خسائر', check:s=>s.comebackWin }
];

/* ============ الحالة الافتراضية ============ */
const DEFAULT_STATE = {
  mode:null, difficulty:'medium',
  playerName:'', avatar:'👤', friendCode:'',
  lang:'en', sfx:true, music:'calm', quality:'medium', theme:'neon',
  vibrate:true, particles:true, screenShake:true, haptics:true,
  duration:10, goal:100,
  p1Count:0, p2Count:0, totalCount:0,
  timeLeft:10, running:false, paused:false,
  p1Name:'Player 1', p2Name:'Player 2',
  xp:0, level:1, wins:0, losses:0, draws:0,
  totalTaps:0, bestTps:0, onlineWins:0, coins:0,
  mmr:1000, winStreak:0, lossStreak:0,
  beatImpossible:false, beatHard:false, perfectWin:false, comebackWin:false,
  unlockedAch:[], unlockedAvatars:['👤','🐱','🐶','🦊','🐼','🦁','🐉','⚡','🔥','💀','👑','🎯']
};
let state = { ...DEFAULT_STATE };

const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
const screens = $$('.screen');
const showScreen = id => {
  screens.forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
};
const t = key => (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;

/* ============ أدوات ============ */
function saveState(){
  localStorage.setItem('fasttap_ultra', JSON.stringify(state));
}
function loadState(){
  try{
    const s = JSON.parse(localStorage.getItem('fasttap_ultra') || '{}');
    state = { ...DEFAULT_STATE, ...s };
  }catch(e){}
}
function vibrate(ms=20){
  if(state.vibrate && navigator.vibrate) navigator.vibrate(ms);
}
function toast(msg, icon='✨'){
  const c = $('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
function screenShake(){
  if(!state.screenShake) return;
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 300);
}

/* ============ تطبيق اللغة والثيم والجودة ============ */
function applyLang(){
  document.body.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
}

function applyTheme(){
  document.body.className = document.body.className
    .split(' ').filter(c => !c.startsWith('theme-')).join(' ');
  document.body.classList.add('theme-' + state.theme);
}

function applyQuality(){
  document.body.classList.remove('quality-low','quality-medium','quality-high');
  document.body.classList.add('quality-' + state.quality);
}

/* ============ XP والمستوى ============ */
function xpForLevel(lvl){ return lvl * 100; }

function addXP(amount){
  state.xp += amount;
  let leveledUp = false;
  while(state.xp >= xpForLevel(state.level)){
    state.xp -= xpForLevel(state.level);
    state.level++;
    leveledUp = true;
  }
  if(leveledUp){
    Audio.sfx.levelUp();
    toast(`Level Up! Lv.${state.level}`, '🌟');
    ResultUI.show({
      type:'win',
      title:`⭐ LEVEL ${state.level}!`,
      sub:'New level unlocked',
      stats:[{label:'Level', value:state.level, cls:'win-row'}],
      rewards:[{icon:'⭐', text:'+Bonus'}]
    });
  }
  updateProfileUI();
  saveState();
}

/* ============ UI البروفايل ============ */
function updateProfileUI(){
  const rank = getRank(state.mmr);
  $('profileName').textContent = state.playerName || 'Player';
  $('avatarEl').textContent = state.avatar;
  $('profileAvatar').textContent = state.avatar;
  $('userRankChip').textContent = rank.icon + ' ' + getRankName(rank);
  $('coinCount').textContent = state.coins.toLocaleString();
  $('profileNameInput').value = state.playerName;

  $('profileRankBadge').textContent = rank.icon + ' ' + getRankName(rank);
  $('profileMmr').textContent = state.mmr + ' MMR';
  $('levelNum').textContent = state.level;
  $('xpNum').textContent = state.xp;
  $('xpMax').textContent = xpForLevel(state.level);
  $('levelFill').style.width = (state.xp / xpForLevel(state.level) * 100) + '%';

  const total = state.wins + state.losses + state.draws;
  const wr = total > 0 ? Math.round(state.wins / total * 100) : 0;
  $('statWins').textContent = state.wins;
  $('statLosses').textContent = state.losses;
  $('statDraws').textContent = state.draws;
  $('statTaps').textContent = state.totalTaps.toLocaleString();
  $('statBest').textContent = state.bestTps;
  $('statWinRate').textContent = wr + '%';

  $('rankedBadge').textContent = rank.icon + ' ' + state.mmr;

  // سلم الرتب
  const ladder = $('rankLadder');
  if(ladder){
    ladder.innerHTML = '';
    RANKS.forEach(r => {
      const d = document.createElement('div');
      d.className = 'ladder-item' + (r.name === rank.name ? ' current' : '');
      d.textContent = r.icon + ' ' + getRankName(r) + ' (' + r.min + ')';
      ladder.appendChild(d);
    });
  }
}

/* ============ الإنجازات ============ */
function checkAchievements(){
  let newOnes = [];
  ACHIEVEMENTS.forEach(a => {
    if(!state.unlockedAch.includes(a.id) && a.check(state)){
      state.unlockedAch.push(a.id);
      newOnes.push(a);
    }
  });
  if(newOnes.length){
    Audio.sfx.achievement();
    newOnes.forEach(a => {
      toast(`${state.lang==='ar' ? a.nameAr : a.name}`, a.icon);
    });
  }
  saveState();
}

function renderAchievements(){
  const list = $('achievementsList');
  list.innerHTML = '';
  const total = ACHIEVEMENTS.length;
  const unlocked = state.unlockedAch.length;
  $('achFill').style.width = (unlocked / total * 100) + '%';
  $('achCount').textContent = unlocked + '/' + total;

  ACHIEVEMENTS.forEach(a => {
    const isUnlocked = state.unlockedAch.includes(a.id);
    const div = document.createElement('div');
    div.className = 'achievement ' + (isUnlocked ? 'unlocked' : 'locked');
    div.innerHTML = `
      <div class="ach-icon">${isUnlocked ? a.icon : '🔒'}</div>
      <div class="ach-info">
        <div class="ach-name">${state.lang==='ar' ? a.nameAr : a.name}</div>
        <div class="ach-desc">${state.lang==='ar' ? a.descAr : a.desc}</div>
      </div>
    `;
    list.appendChild(div);
  });
}

/* ============ القائمة الرئيسية ============ */
$$('#mainMenu button').forEach(btn => {
  btn.addEventListener('click', () => {
    Audio.init();
    Audio.sfx.click();
    const act = btn.dataset.action;
    if(act === 'settings'){ showScreen('settingsScreen'); return; }
    if(act === 'profile'){ updateProfileUI(); showScreen('profileScreen'); return; }
    if(act === 'achievements'){ renderAchievements(); showScreen('achievementsScreen'); return; }
    if(act === 'leaderboard'){ renderLeaderboard('local'); showScreen('leaderboardScreen'); return; }
    if(act === 'friends'){ openFriendsScreen(); return; }
    if(act === 'dailyBox'){ openDailyBoxScreen(); return; }
    if(act === 'ranked'){ startMatchmaking(); return; }
    state.mode = act;
    if(act === 'ai'){ showScreen('difficultyScreen'); return; }
    if(act === 'online'){ showScreen('onlineScreen'); return; }
    openNameScreen();
  });
});

/* ============ الصعوبة ============ */
$$('[data-diff]').forEach(btn => {
  btn.addEventListener('click', () => {
    Audio.sfx.click();
    state.difficulty = btn.dataset.diff;
    openNameScreen();
  });
});

/* ============ الاسم ============ */
let pickedAvatar = state.avatar || '👤';

function renderAvatarPicker(){
  $$('.avatar-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.avatar === pickedAvatar);
  });
}
$$('.avatar-btn').forEach(b => {
  b.addEventListener('click', () => {
    pickedAvatar = b.dataset.avatar;
    renderAvatarPicker();
    Audio.sfx.click();
  });
});

function openNameScreen(){
  const isFriend = state.mode === 'friend';
  $('nameTitle').textContent = t('enterName');
  $('playerNameInput').value = state.playerName || '';
  $('friendCodeArea').style.display = isFriend ? 'block' : 'none';
  $('friendCodeInput').value = state.friendCode || '';
  pickedAvatar = state.avatar || '👤';
  renderAvatarPicker();
  if(state.playerName && !isFriend){ startGame(); return; }
  showScreen('nameScreen');
}

$('friendCodeInput').addEventListener('input', e => {
  e.target.value = e.target.value.replace(/\D/g,'').slice(0,10);
});

$('nameConfirm').addEventListener('click', () => {
  Audio.sfx.click();
  const name = $('playerNameInput').value.trim() || 'Player';
  state.playerName = name;
  state.avatar = pickedAvatar;
  if(state.mode === 'friend'){
    const code = $('friendCodeInput').value.trim();
    if(!/^\d{1,10}$/.test(code)){
      toast(state.lang==='ar'?'كود غير صحيح':'Invalid code','⚠️');
      return;
    }
    state.friendCode = code;
  }
  saveState();
  updateProfileUI();
  // سجّل في السيرفر
  Online.register(state.playerName, state.avatar).catch(()=>{});
  startGame();
});

$$('.back-btn').forEach(b => {
  b.addEventListener('click', () => {
    Audio.sfx.back();
    Audio.stopMusic();
    if(currentMatchmakingInterval) clearInterval(currentMatchmakingInterval);
    showScreen('mainMenu');
  });
});

/* ============ Matchmaking (Ranked) ============ */
let currentMatchmakingInterval = null;
let matchmakingStart = 0;

async function startMatchmaking(){
  if(!state.playerName){
    state.mode = 'ranked';
    openNameScreen();
    return;
  }
  $('mmMmr').textContent = 'MMR: ' + state.mmr;
  $('mmElapsed').textContent = '0s';
  showScreen('matchmakingScreen');
  matchmakingStart = Date.now();
  currentMatchmakingInterval = setInterval(() => {
    $('mmElapsed').textContent = Math.floor((Date.now() - matchmakingStart)/1000) + 's';
  }, 1000);

  try{
    await Online.register(state.playerName, state.avatar);
    await Online.findMatch(state.mmr, state.playerName, state.avatar);
  }catch(e){
    toast('Server offline', '⚠️');
    // fallback: العب مع AI كمحاكاة
    setTimeout(() => {
      clearInterval(currentMatchmakingInterval);
      state.mode = 'ai';
      state.difficulty = 'medium';
      startGame();
    }, 2000);
  }
}

$('cancelMatchBtn').addEventListener('click', () => {
  Audio.sfx.back();
  if(currentMatchmakingInterval) clearInterval(currentMatchmakingInterval);
  Online.cancelMatch();
  showScreen('mainMenu');
});

/* ============ Online Handlers ============ */
Online.on('on_matchFound', data => {
  Audio.sfx.matchFound();
  if(currentMatchmakingInterval) clearInterval(currentMatchmakingInterval);
  state.p2Name = data.opponent.name;
  $('vsMeAvatar').textContent = state.avatar;
  $('vsMeName').textContent = state.playerName;
  $('vsMeMmr').textContent = state.mmr;
  $('vsOppAvatar').textContent = data.opponent.avatar || '👤';
  $('vsOppName').textContent = data.opponent.name;
  $('vsOppMmr').textContent = data.opponent.mmr || 1000;
  showScreen('matchFoundScreen');

  // عد تنازلي
  let n = 5;
  $('matchCountdown').textContent = n;
  const cd = setInterval(() => {
    n--;
    if(n > 0){ $('matchCountdown').textContent = n; Audio.sfx.countdown(n); }
    else {
      clearInterval(cd);
      Audio.sfx.go();
    }
  }, 1000);

  // انتظر gameStart من السيرفر
});

Online.on('on_roomReady', data => {
  const onlinePlayers = $('onlinePlayers');
  onlinePlayers.innerHTML = '';
  data.players.forEach(p => {
    const row = document.createElement('div');
    row.className = `online-player p${p.slot}`;
    const avatar = document.createElement('div');
    avatar.className = 'avatar small';
    avatar.textContent = p.avatar || '👤';
    const name = document.createElement('span');
    name.textContent = p.name || 'Player';
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = `P${p.slot}`;
    row.append(avatar, name, tag);
    onlinePlayers.appendChild(row);
  });
  if(Online.getSlot() === 1) $('startOnlineBtn').classList.remove('hidden');
});

Online.on('on_gameStart', data => {
  const mySlot = Online.getSlot();
  state.mode = 'online';
  state.p1Name = mySlot === 1 ? state.playerName : (state.p2Name || 'Opponent');
  state.p2Name = mySlot === 2 ? state.playerName : (state.p2Name || 'Opponent');
  state.p1Count = 0; state.p2Count = 0; state.totalCount = 0;
  state.goal = data.config.goal;
  state.duration = data.config.duration;

  const delay = Math.max(0, data.startAt - Date.now());
  showScreen('gameScreen');
  $('p1Name').textContent = state.p1Name;
  $('p2Name').textContent = state.p2Name;
  $('p1Avatar').textContent = mySlot === 1 ? state.avatar : '👤';
  $('p2Avatar').textContent = mySlot === 2 ? state.avatar : '👤';
  $('p1Score').textContent = 0;
  $('p2Score').textContent = 0;
  $('mainCounter').textContent = 0;
  $('goalValue').textContent = state.goal;
  $('chatBtn').classList.remove('hidden');

  if(mySlot === 1) $('p2Area').style.pointerEvents = 'none';
  else $('p1Area').style.pointerEvents = 'none';

  $('countdownOverlay').classList.remove('hidden');
  let n = Math.ceil(delay/1000) || 5;
  $('countdownNum').textContent = n;
  Audio.sfx.countdown(n);
  const cd = setInterval(() => {
    n--;
    if(n > 0){ $('countdownNum').textContent = n; Audio.sfx.countdown(n); }
    else {
      $('countdownNum').textContent = 'GO!';
      Audio.sfx.go();
      clearInterval(cd);
      setTimeout(() => {
        $('countdownOverlay').classList.add('hidden');
        state.running = true;
        if(state.music !== 'off') Audio.startMusic(state.music);
        state.timeLeft = state.duration;
        $('timer').textContent = state.timeLeft;
        state.timer = setInterval(() => {
          state.timeLeft--;
          $('timer').textContent = Math.max(0, state.timeLeft);
          $('timerFill').style.width = (state.timeLeft / state.duration * 100) + '%';
          if(state.timeLeft <= 0) clearTimer();
        }, 1000);
      }, 500);
    }
  }, 1000);
});

Online.on('on_scoreUpdate', data => {
  state.p1Count = data.p1;
  state.p2Count = data.p2;
  state.totalCount = data.total;
  $('p1Score').textContent = data.p1;
  $('p2Score').textContent = data.p2;
  $('mainCounter').textContent = data.total;
  $('goalFill').style.height = Math.min(100, data.total / state.goal * 100) + '%';
});

Online.on('on_gameOver', data => {
  state.running = false;
  clearTimer();
  const mySlot = Online.getSlot();
  const iWon = (data.winner === mySlot);
  endGame(iWon ? 1 : (data.winner === 0 ? 0 : 2), data.scores);
});

Online.on('on_opponentLeft', () => {
  toast(t('opponentLeft'), '⚠️');
  if(state.running){
    state.running = false;
    clearTimer();
    endGame(1);
  }
});

Online.on('on_mmrUpdate', data => {
  const oldRank = getRank(state.mmr).name;
  state.mmr = data.newMmr;
  const newRank = data.rank;
  saveState();
  updateProfileUI();
  if(newRank.name !== oldRank){
    Audio.sfx.mmrUp();
    toast((state.lang==='ar'? 'رتبتك: ' : 'Rank: ') + newRank.icon + ' ' + getRankName(newRank), '🎖️');
  }
});

Online.on('on_chatMsg', msg => {
  appendChatMessage(msg, false);
  Audio.sfx.msg();
});

Online.on('on_friendAdded', data => {
  toast((state.lang==='ar'?'أضافك ':'Added you: ') + data.name, '👥');
});

Online.on('on_friendInvite', data => {
  toast((state.lang==='ar'?'دعوة غرفة: ':'Room invite: ') + data.code, '📨');
});

/* ============ Chat ============ */
$('chatBtn').addEventListener('click', () => {
  Audio.sfx.click();
  $('chatOverlay').classList.remove('hidden');
});
$('closeChatBtn').addEventListener('click', () => {
  Audio.sfx.back();
  $('chatOverlay').classList.add('hidden');
});
$('sendChatBtn').addEventListener('click', sendChat);
$('chatInput').addEventListener('keydown', e => {
  if(e.key === 'Enter') sendChat();
});

function sendChat(){
  const text = $('chatInput').value.trim();
  if(!text) return;
  Online.sendChat(text);
  appendChatMessage({ name: state.playerName, text, ts: Date.now() }, true);
  $('chatInput').value = '';
}

function appendChatMessage(msg, mine){
  const c = $('chatMessages');
  const d = document.createElement('div');
  d.className = 'chat-msg ' + (mine ? 'mine' : 'theirs');
  d.innerHTML = `<div class="sender">${msg.name}</div>${escapeHtml(msg.text)}`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}
function escapeHtml(s){
  return s.replace(/[<>&"]/g, ch => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[ch]));
}

/* ============ Friends ============ */
async function openFriendsScreen(){
  showScreen('friendsScreen');
  refreshFriends();
}
async function refreshFriends(){
  const list = $('friendsList');
  list.innerHTML = '';
  try{
    const res = await new Promise(r => Online.getFriends(r));
    if(res && res.ok){
      if(!res.friends.length){
        list.innerHTML = `<p class="hint">${t('noFriends')}</p>`;
        return;
      }
      res.friends.forEach(f => {
        const d = document.createElement('div');
        d.className = 'friend-item ' + (f.online ? 'online' : '');
        d.innerHTML = `
          <div class="avatar">${f.avatar || '👤'}</div>
          <div class="friend-info">
            <div class="friend-name">${f.name}</div>
            <div class="friend-mmr">${f.mmr} MMR</div>
          </div>
          <div class="friend-actions">
            <button class="small-btn invite-friend" data-id="${f.id}">🎮</button>
          </div>
        `;
        list.appendChild(d);
      });
      $$('.invite-friend').forEach(b => {
        b.addEventListener('click', () => {
          const code = Online.getRoom();
          if(!code){ toast('Create a room first', '⚠️'); return; }
          Online.inviteFriend(b.dataset.id, code);
          toast('Invite sent', '📨');
        });
      });
    }
  }catch(e){
    list.innerHTML = `<p class="hint">Server offline</p>`;
  }
}

$('addFriendBtn').addEventListener('click', () => {
  const name = $('friendNameInput').value.trim();
  if(!name) return;
  Online.addFriend(name, res => {
    if(res.ok){
      toast((state.lang==='ar'?'تمت الإضافة: ':'Added: ') + res.friend.name, '✅');
      $('friendNameInput').value = '';
      refreshFriends();
    } else {
      toast('Error: ' + (res.error || 'unknown'), '⚠️');
    }
  });
});

/* ============ Daily Box ============ */
function openDailyBoxScreen(){
  showScreen('dailyBoxScreen');
  $('boxVisual').textContent = '🎁';
  $('boxVisual').classList.remove('opened');
  $('rewardPopup').classList.remove('show');
  $('boxStatus').textContent = t('boxReady');
  $('openBoxBtn').disabled = false;
}

$('openBoxBtn').addEventListener('click', async () => {
  Audio.sfx.click();
  $('boxStatus').textContent = '...';
  try{
    const res = await new Promise(r => Online.openDailyBox(r));
    if(res.ok){
      Audio.sfx.boxOpen();
      $('boxVisual').classList.add('opened');
      state.coins += res.coins;
      saveState();
      updateProfileUI();
      setTimeout(() => {
        $('rewardAmount').textContent = `+${res.coins} 🪙`;
        $('rewardPopup').classList.add('show');
        Audio.sfx.coin();
      }, 500);
      $('boxStatus').textContent = `Total: ${res.total} 🪙`;
      $('openBoxBtn').disabled = true;
    } else if(res.error === 'COOLDOWN'){
      $('boxStatus').textContent = t('comeBackLater');
      $('openBoxBtn').disabled = true;
    }
  }catch(e){
    // محاكاة محلية عند عدم الاتصال
    const coins = 50 + Math.floor(Math.random()*250);
    state.coins += coins;
    saveState();
    updateProfileUI();
    $('boxVisual').classList.add('opened');
    Audio.sfx.boxOpen();
    setTimeout(() => {
      $('rewardAmount').textContent = `+${coins} 🪙`;
      $('rewardPopup').classList.add('show');
      Audio.sfx.coin();
    }, 500);
    $('openBoxBtn').disabled = true;
  }
});

/* ============ Tabs ============ */
$$('.online-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    Audio.sfx.click();
    $$('.online-tabs .tab').forEach(x => x.classList.remove('active'));
    tab.classList.add('active');
    $$('.tab-content').forEach(c => c.classList.remove('active'));
    $(tab.dataset.tab + 'Tab').classList.add('active');
  });
});
$$('.lb-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    Audio.sfx.click();
    $$('.lb-tabs .tab').forEach(x => x.classList.remove('active'));
    tab.classList.add('active');
    renderLeaderboard(tab.dataset.lb);
  });
});

/* ============ Online Rooms ============ */
$('createRoomBtn').addEventListener('click', async () => {
  Audio.sfx.click();
  if(!state.playerName){ state.mode = 'online'; openNameScreen(); return; }
  const ranked = $('rankedToggle').checked;
  $('onlineStatus').textContent = t('waiting');
  try{
    await Online.register(state.playerName, state.avatar);
    const res = await Online.createRoom(state.playerName, { duration: state.duration, goal: state.goal, ranked });
    if(res.ok){
      $('generatedCode').textContent = res.code;
      $('roomCodeDisplay').classList.remove('hidden');
      $('onlineStatus').textContent = t('roomCreated');
      $('startOnlineBtn').classList.remove('hidden');
    } else {
      $('onlineStatus').textContent = res.error || 'Error';
    }
  }catch(e){
    $('onlineStatus').textContent = t('disconnected');
  }
});

$('copyCodeBtn').addEventListener('click', () => {
  navigator.clipboard?.writeText($('generatedCode').textContent);
  toast(t('copied'), '📋');
});

$('joinCodeInput').addEventListener('input', e => {
  e.target.value = e.target.value.replace(/\D/g,'').slice(0,6);
});

$('joinRoomBtn').addEventListener('click', async () => {
  Audio.sfx.click();
  const code = $('joinCodeInput').value.trim();
  if(code.length !== 6){ toast('Invalid code', '⚠️'); return; }
  if(!state.playerName){ state.mode = 'online'; openNameScreen(); return; }
  try{
    await Online.register(state.playerName, state.avatar);
    const res = await Online.joinRoom(state.playerName, code);
    if(res.ok){ $('onlineStatus').textContent = t('roomJoined'); }
    else { $('onlineStatus').textContent = res.error || 'Error'; }
  }catch(e){
    $('onlineStatus').textContent = t('disconnected');
  }
});

$('startOnlineBtn').addEventListener('click', () => {
  Audio.sfx.click();
  Online.startGame();
});

/* ============ Gameplay ============ */
let tapTimestamps1 = [], tapTimestamps2 = [];

function startGame(){
  state.p1Count = 0; state.p2Count = 0; state.totalCount = 0;
  state.timeLeft = state.duration;
  state.running = false; state.paused = false;
  tapTimestamps1 = []; tapTimestamps2 = [];
  clearAI(); clearTimer();

  if(state.mode === 'ai'){
    state.p1Name = state.playerName || 'You';
    state.p2Name = '🤖 AI (' + t(state.difficulty) + ')';
  } else if(state.mode === 'duo'){
    state.p1Name = t('player1');
    state.p2Name = t('player2');
  } else if(state.mode === 'online' || state.mode === 'ranked'){
    state.p1Name = state.playerName || 'You';
    if(!state.p2Name) state.p2Name = 'Opponent';
  } else if(state.mode === 'friend'){
    state.p1Name = state.playerName || 'You';
    state.p2Name = 'Friend #' + state.friendCode;
  }

  $('p1Name').textContent = state.p1Name;
  $('p2Name').textContent = state.p2Name;
  $('p1Avatar').textContent = state.avatar;
  $('p2Avatar').textContent = state.mode === 'ai' ? '🤖' : '👤';
  $('p1Score').textContent = 0;
  $('p2Score').textContent = 0;
  $('mainCounter').textContent = 0;
  $('timer').textContent = state.timeLeft;
  $('goalValue').textContent = state.goal;
  $('timerFill').style.width = '100%';
  $('timerFill').classList.remove('warning');
  $('goalFill').style.height = '0%';
  $('chatBtn').classList.add('hidden');

  const p2Area = $('p2Area');
  p2Area.style.pointerEvents = (state.mode==='ai'||state.mode==='online'||state.mode==='ranked') ? 'none' : 'auto';
  $('p1Area').style.pointerEvents = 'auto';

  showScreen('gameScreen');
  startCountdown();
}

function startCountdown(){
  const overlay = $('countdownOverlay');
  const numEl = $('countdownNum');
  overlay.classList.remove('hidden');
  let n = 5;
  numEl.textContent = n;
  Audio.sfx.countdown(n);
  state.countdownInterval = setInterval(() => {
    n--;
    if(n > 0){
      numEl.textContent = n;
      numEl.style.animation = 'none'; void numEl.offsetWidth; numEl.style.animation = 'pop .8s ease';
      Audio.sfx.countdown(n);
    } else {
      numEl.textContent = 'GO!';
      Audio.sfx.go();
      setTimeout(() => {
        clearInterval(state.countdownInterval);
        overlay.classList.add('hidden');
        beginPlay();
      }, 500);
    }
  }, 1000);
}

function beginPlay(){
  state.running = true;
  state.paused = false;
  if(state.music !== 'off') Audio.startMusic(state.music);
  state.timer = setInterval(() => {
    if(state.paused) return;
    state.timeLeft--;
    $('timer').textContent = state.timeLeft;
    $('timerFill').style.width = (state.timeLeft / state.duration * 100) + '%';
    if(state.timeLeft <= 3 && state.timeLeft > 0){
      $('timerFill').classList.add('warning');
      Audio.sfx.warn();
    }
    if(state.timeLeft <= 0){ clearTimer(); endGame(); }
  }, 1000);
  if(state.mode === 'ai') startAI();
  if(state.mode === 'ranked' && !Online.isConnected()) startAI(); // fallback
}

function clearTimer(){ if(state.timer){ clearInterval(state.timer); state.timer = null; } }
function clearAI(){ if(state.aiInterval){ clearInterval(state.aiInterval); state.aiInterval = null; } }

function spawnRipple(side, e){
  if(!state.particles) return;
  const layer = side===1 ? $('rippleLayer1') : $('rippleLayer2');
  const rect = layer.getBoundingClientRect();
  let x, y;
  if(e && e.clientX){ x = e.clientX - rect.left; y = e.clientY - rect.top; }
  else { x = rect.width/2; y = rect.height/2; }
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.left = x + 'px'; r.style.top = y + 'px';
  layer.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

function showCombo(side, n){
  if(n < 5) return;
  const el = side===1 ? $('p1Combo') : $('p2Combo');
  el.textContent = `x${n}!`;
  el.classList.remove('show'); void el.offsetWidth;
  el.classList.add('show');
}

function handleTap(player, e){
  if(!state.running || state.paused) return;

  if(player === 1){
    state.p1Count++;
    $('p1Score').textContent = state.p1Count;
    $('p1Score').classList.add('bump');
    setTimeout(() => $('p1Score').classList.remove('bump'), 100);
    Audio.sfx.tapP1();
    spawnRipple(1, e);
    tapTimestamps1.push(Date.now());
    if(state.mode === 'online' || state.mode === 'ranked') Online.sendTap();
  } else {
    if(state.mode==='ai' || state.mode==='online' || state.mode==='ranked') return;
    state.p2Count++;
    $('p2Score').textContent = state.p2Count;
    $('p2Score').classList.add('bump');
    setTimeout(() => $('p2Score').classList.remove('bump'), 100);
    Audio.sfx.tapP2();
    spawnRipple(2, e);
    tapTimestamps2.push(Date.now());
  }

  state.totalCount++;
  state.totalTaps++;
  $('mainCounter').textContent = state.totalCount;
  $('mainCounter').classList.add('bump');
  setTimeout(() => $('mainCounter').classList.remove('bump'), 100);
  $('goalFill').style.height = Math.min(100, state.totalCount / state.goal * 100) + '%';
  vibrate(8);

  const arr = player===1 ? tapTimestamps1 : tapTimestamps2;
  const now = Date.now();
  while(arr.length && now - arr[0] > 1000) arr.shift();
  if(arr.length >= 5) showCombo(player, arr.length);
  if(arr.length === 10) Audio.sfx.combo(arr.length);
  if(arr.length > state.bestTps) state.bestTps = arr.length;

  if(state.p1Count >= state.goal){ endGame(1); return; }
  if(state.p2Count >= state.goal){ endGame(2); return; }
}

$('p1Area').addEventListener('pointerdown', e => { e.preventDefault(); handleTap(1, e); });
$('p2Area').addEventListener('pointerdown', e => { e.preventDefault(); handleTap(2, e); });
['p1Area','p2Area'].forEach(id => {
  const el = $(id);
  el.addEventListener('touchstart', e => {
    e.preventDefault();
    const which = id==='p1Area' ? 1 : 2;
    for(let i=0;i<e.changedTouches.length;i++) handleTap(which, e.changedTouches[i]);
  }, {passive:false});
});

function startAI(){
  const rates = { easy:2, medium:5, hard:9, impossible:18 };
  const rate = rates[state.difficulty] || 5;
  const interval = 1000 / rate;
  clearAI();
  state.aiInterval = setInterval(() => {
    if(!state.running || state.paused) return;
    if(Math.random() < 0.85){
      state.p2Count++;
      $('p2Score').textContent = state.p2Count;
      state.totalCount++;
      state.totalTaps++;
      $('mainCounter').textContent = state.totalCount;
      $('goalFill').style.height = Math.min(100, state.totalCount / state.goal * 100) + '%';
      tapTimestamps2.push(Date.now());
      if(state.p2Count >= state.goal) endGame(2);
    }
  }, interval);
}

/* ============ Pause ============ */
$('pauseBtn').addEventListener('click', () => {
  if(!state.running) return;
  Audio.sfx.click();
  state.paused = true;
  $('pauseOverlay').classList.remove('hidden');
  Audio.stopMusic();
  saveState();
});
$('homeBtn').addEventListener('click', () => {
  Audio.sfx.click();
  if(state.running){
    state.paused = true;
    $('pauseOverlay').classList.remove('hidden');
    Audio.stopMusic();
    saveState();
  } else { showScreen('mainMenu'); }
});
$('restartBtn').addEventListener('click', () => {
  Audio.sfx.click(); Audio.stopMusic(); startGame();
});
$$('#pauseOverlay [data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    Audio.sfx.click();
    const a = btn.dataset.action;
    $('pauseOverlay').classList.add('hidden');
    if(a === 'resume'){
      state.paused = false;
      if(state.music !== 'off') Audio.startMusic(state.music);
      if(!state.timer) beginPlay();
    } else if(a === 'restart'){ startGame(); }
    else if(a === 'home'){
      state.running = false; state.paused = false;
      clearTimer(); clearAI(); Audio.stopMusic(); Online.leave();
      showScreen('mainMenu');
    }
  });
});

/* ============ نهاية اللعبة (شاشة الفوز/الخسارة/التعادل) ============ */
function endGame(winner, serverScores){
  state.running = false; state.paused = false;
  clearTimer(); clearAI(); Audio.stopMusic();

  const p1Score = serverScores ? serverScores.p1 : state.p1Count;
  const p2Score = serverScores ? serverScores.p2 : state.p2Count;
  const totalScore = serverScores ? serverScores.total : state.totalCount;

  let type, title, sub, emoji;
  const rewards = [];

  if(winner === 1){
    type = 'win';
    title = t('win');
    emoji = '🏆';
    Audio.sfx.win();
    state.wins++;
    state.winStreak++;
    state.lossStreak = 0;
    if(state.mode === 'online' || state.mode === 'ranked') state.onlineWins++;
    if(state.difficulty === 'impossible' && state.mode === 'ai') state.beatImpossible = true;
    if(state.difficulty === 'hard' && state.mode === 'ai') state.beatHard = true;
    if(p2Score === 0 && state.mode === 'ai') state.perfectWin = true;

    let xp = state.mode === 'ai' ? {easy:20,medium:40,hard:70,impossible:120}[state.difficulty] : 50;
    if(state.winStreak >= 3) xp += 20;
    addXP(xp);
    rewards.push({ icon:'⭐', text:`+${xp} XP` });

    const coinsEarned = 20 + Math.floor(xp / 2);
    state.coins += coinsEarned;
    rewards.push({ icon:'🪙', text:`+${coinsEarned}` });

    sub = state.winStreak >= 3 ? `🔥 ${state.winStreak} Win Streak!` : '🎉 Well played!';
  } else if(winner === 2){
    if(state.mode === 'ai'){
      type = 'lose';
      title = t('lose');
      emoji = '😢';
      Audio.sfx.lose();
      state.losses++;
      state.lossStreak++;
      state.winStreak = 0;
      addXP(10);
      rewards.push({ icon:'⭐', text:'+10 XP' });
      sub = `💔 ${state.p2Name} won`;
    } else {
      type = 'win';
      title = t('win');
      emoji = '🏆';
      Audio.sfx.win();
      state.wins++;
      state.winStreak++;
      state.lossStreak = 0;
      addXP(50);
      rewards.push({ icon:'⭐', text:'+50 XP' });
      const coinsEarned = 25;
      state.coins += coinsEarned;
      rewards.push({ icon:'🪙', text:`+${coinsEarned}` });
      sub = `🎉 ${state.p1Name} won`;
    }
  } else {
    type = 'draw';
    title = t('draw');
    emoji = '🤝';
    Audio.sfx.draw();
    state.draws++;
    addXP(20);
    rewards.push({ icon:'⭐', text:'+20 XP' });
    sub = `⚖️ ${p1Score} - ${p2Score}`;
  }

  // إحصائيات
  const stats = [
    { label: state.p1Name, value: p1Score, cls: 'p1' + (winner===1?' win-row':'') },
    { label: state.p2Name, value: p2Score, cls: 'p2' + (winner===2?' win-row':'') },
    { label: t('bestTps'), value: state.bestTps },
    { label: t('totalTaps'), value: totalScore }
  ];

  // MMR (فقط للـ Ranked)
  let mmr = null;
  if(state.mode === 'ranked' && winner !== 0){
    // الخادم يرسل التحديث عبر mmrUpdate، لكن نعرض تقدير محلي
    const delta = winner === 1 ? 15 : -15;
    mmr = { delta, newMmr: state.mmr, rank: getRank(state.mmr) };
  }

  checkAchievements();
  saveState();

  ResultUI.show({
    type, title, sub, stats, mmr, rewards,
    onRematch: () => {
      if(state.mode === 'ranked'){ showScreen('mainMenu'); startMatchmaking(); }
      else startGame();
    },
    onAgain: () => startGame(),
    onHome: () => {
      state.running = false; state.paused = false;
      clearTimer(); clearAI(); Audio.stopMusic(); Online.leave();
      showScreen('mainMenu');
    }
  });
}

/* ============ Leaderboard ============ */
function renderLeaderboard(type){
  const list = $('leaderboardList');
  list.innerHTML = '';
  if(type === 'local'){
    const rows = [
      { rank:1, name: state.playerName || 'You', score: state.wins + ' W', me: true },
      { rank:2, name: 'Best TPS', score: state.bestTps },
      { rank:3, name: 'MMR', score: state.mmr },
      { rank:4, name: 'Level', score: state.level },
      { rank:5, name: 'Achievements', score: state.unlockedAch.length + '/' + ACHIEVEMENTS.length }
    ];
    rows.forEach(r => {
      const d = document.createElement('div');
      d.className = 'lb-row' + (r.me ? ' me' : '');
      d.innerHTML = `<span class="lb-rank">#${r.rank}</span><span class="lb-name">${r.name}</span><span class="lb-score">${r.score}</span>`;
      list.appendChild(d);
    });
  } else if(type === 'global'){
    const fake = [
      { name:'TapKing99', score: 45230 },
      { name:'SpeedDemon', score: 38901 },
      { name:'FlashFinger', score: 31200 },
      { name: state.playerName || 'You', score: state.totalTaps, me:true },
      { name:'NoobMaster', score: 12500 },
      { name:'ClickLord', score: 9800 },
      { name:'TurboFist', score: 7500 }
    ].sort((a,b) => b.score - a.score);
    fake.forEach((r, i) => {
      const d = document.createElement('div');
      d.className = 'lb-row' + (r.me ? ' me' : '');
      d.innerHTML = `<span class="lb-rank">#${i+1}</span><span class="lb-name">${r.name}</span><span class="lb-score">${r.score.toLocaleString()}</span>`;
      list.appendChild(d);
    });
  } else {
    list.innerHTML = `<p class="hint">Add friends to see their scores</p>`;
  }
}

/* ============ Settings ============ */
$('sfxToggle').addEventListener('change', e => {
  state.sfx = e.target.checked;
  Audio.setSettings({ sfx: state.sfx });
  saveState();
});
$('vibrateToggle').addEventListener('change', e => { state.vibrate = e.target.checked; saveState(); });
$('particlesToggle').addEventListener('change', e => { state.particles = e.target.checked; saveState(); });
$('shakeToggle').addEventListener('change', e => { state.screenShake = e.target.checked; saveState(); });
$('hapticsToggle').addEventListener('change', e => { state.haptics = e.target.checked; saveState(); });
$('musicSelect').addEventListener('change', e => {
  state.music = e.target.value;
  Audio.setSettings({ music: state.music });
  if(state.running && !state.paused && state.music !== 'off') Audio.startMusic(state.music);
  saveState();
});
$('qualitySelect').addEventListener('change', e => {
  state.quality = e.target.value; applyQuality(); saveState();
});
$('themeSelect').addEventListener('change', e => {
  state.theme = e.target.value; applyTheme(); saveState();
});
$('langSelect').addEventListener('change', e => {
  state.lang = e.target.value; applyLang(); saveState();
});
$('durationInput').addEventListener('change', e => {
  state.duration = Math.max(5, Math.min(120, parseInt(e.target.value)||10));
  e.target.value = state.duration; saveState();
});
$('goalInput').addEventListener('change', e => {
  state.goal = Math.max(10, Math.min(1000, parseInt(e.target.value)||100));
  e.target.value = state.goal; saveState();
});
$('resetProgressBtn').addEventListener('click', () => {
  if(!confirm(state.lang==='ar'?'هل أنت متأكد؟':'Are you sure?')) return;
  const lang = state.lang, theme = state.theme, quality = state.quality;
  state = { ...DEFAULT_STATE, lang, theme, quality };
  saveState();
  updateProfileUI(); applyLang(); applyTheme(); applyQuality();
  Audio.setSettings({ sfx: state.sfx, music: state.music });
  toast(state.lang==='ar'?'تم إعادة التعيين':'Progress reset','🗑️');
});

$('profileNameInput').addEventListener('change', e => {
  state.playerName = e.target.value.trim() || 'Player';
  saveState();
  updateProfileUI();
  Online.register(state.playerName, state.avatar).catch(()=>{});
});

/* ============ Boot ============ */
function boot(){
  loadState();
  applyLang();
  applyTheme();
  applyQuality();
  updateProfileUI();

  // تطبيق الإعدادات المحفوظة
  $('sfxToggle').checked = state.sfx;
  $('vibrateToggle').checked = state.vibrate;
  $('particlesToggle').checked = state.particles;
  $('shakeToggle').checked = state.screenShake;
  $('hapticsToggle').checked = state.haptics;
  $('musicSelect').value = state.music;
  $('qualitySelect').value = state.quality;
  $('themeSelect').value = state.theme;
  $('langSelect').value = state.lang;
  $('durationInput').value = state.duration;
  $('goalInput').value = state.goal;

  Audio.setSettings({ sfx: state.sfx, music: state.music });

  $('loadingText').textContent = t('loading');

  setTimeout(() => {
    showScreen('mainMenu');
    checkAchievements();
    // حاول الاتصال بالسيرفر في الخلفية
    Online.connect().then(() => {
      return Online.register(state.playerName || 'Player', state.avatar);
    }).catch(()=>{});
  }, 1400);

  window.addEventListener('beforeunload', () => {
    if(state.running || state.paused) saveState();
  });
  document.addEventListener('visibilitychange', () => {
    if(document.hidden && state.running){
      state.paused = true;
      $('pauseOverlay').classList.remove('hidden');
      Audio.stopMusic();
      saveState();
    }
  });
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault(), {passive:false});
}

window.addEventListener('load', boot);