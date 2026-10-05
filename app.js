const LS_KEY = "rpd-state-v1";
const CATS = ["Operasional Inti", "Pertumbuhan", "Cadangan & Investasi"];
const FREQS = [
  { v: "weekly", t: "Mingguan (4×)" },
  { v: "biweekly", t: "2× Sebulan" },
  { v: "monthly", t: "Bulanan (1×)" },
  { v: "quarterly", t: "Triwulan" },
];
const PRIORITIES = ["Wajib", "Wajib (rencana)", "Fleksibel"];
const WD = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const PRESETS = {
  kopi: {
    label: "Kedai Kopi / F&B",
    omzetHarian: 2067000,
    budget: 50000000,
    minCash: 10000000,
    emergencyNow: 38000000,
    items: [
      { name: "Bahan Baku & Kemasan", amount: 21000000, freq: "weekly", weekday: 1, priority: "Wajib", locked: false, note: "PO supplier 2× per minggu", cat: "Operasional Inti" },
      { name: "Gaji 4 Staf + BPJS", amount: 12000000, freq: "monthly", day: 25, priority: "Wajib", locked: true, note: "Crew 3 orang + kasir 1 orang", cat: "Operasional Inti" },
      { name: "Sewa Tempat", amount: 6000000, freq: "monthly", day: 1, priority: "Wajib", locked: true, note: "Kontrak 12 bulan", cat: "Operasional Inti" },
      { name: "Listrik, Air, Internet", amount: 2000000, freq: "monthly", day: 10, priority: "Wajib", locked: true, note: "Auto-debit tanggal 10", cat: "Operasional Inti" },
      { name: "Commission Platform & MDR QRIS", amount: 2500000, freq: "weekly", weekday: 1, priority: "Wajib", locked: false, note: "Rekonsiliasi setiap Senin", cat: "Operasional Inti" },
      { name: "Iklan Digital & Kreasi Konten", amount: 2500000, freq: "weekly", weekday: 1, priority: "Fleksibel", locked: false, note: "Iklan ROAS di bawah 2× dimatikan", cat: "Pertumbuhan" },
      { name: "Logistik, Gas, Servis Alat", amount: 1500000, freq: "weekly", weekday: 3, priority: "Fleksibel", locked: false, note: "Servis AC dan grinder", cat: "Pertumbuhan" },
      { name: "Dana Darurat", amount: 1500000, freq: "monthly", day: 28, priority: "Wajib", locked: false, note: "Top-up rutin 3%", cat: "Cadangan & Investasi" },
      { name: "Belanja Modal Terjadwal", amount: 1000000, freq: "quarterly", day: 20, priority: "Wajib (rencana)", locked: false, note: "Upgrade grinder", cat: "Cadangan & Investasi" },
    ],
  },
  pakaian: {
    label: "Toko Pakaian Online",
    omzetHarian: 2500000,
    budget: 50000000,
    minCash: 12000000,
    emergencyNow: 25000000,
    items: [
      { name: "Pengadaan Stok & Supplier", amount: 16000000, freq: "monthly", day: 10, priority: "Wajib", locked: false, note: "Sesuai jadwal restock", cat: "Operasional Inti" },
      { name: "Gaji 3 Staf + BPJS", amount: 12000000, freq: "monthly", day: 25, priority: "Wajib", locked: true, note: "Packing, CS, admin", cat: "Operasional Inti" },
      { name: "Sewa Kios / Gudang", amount: 3500000, freq: "monthly", day: 1, priority: "Wajib", locked: true, note: "", cat: "Operasional Inti" },
      { name: "Fee Marketplace & Iklan Terpush", amount: 6000000, freq: "weekly", weekday: 1, priority: "Wajib", locked: false, note: "Shopee, Tokopedia, TikTok Shop", cat: "Operasional Inti" },
      { name: "Ongkir & Logistik", amount: 5000000, freq: "weekly", weekday: 2, priority: "Wajib", locked: false, note: "", cat: "Operasional Inti" },
      { name: "Retur & Penukaran", amount: 2000000, freq: "weekly", weekday: 4, priority: "Wajib", locked: false, note: "Estimasi 3% dari GMV", cat: "Operasional Inti" },
      { name: "Iklan & Influencer", amount: 3000000, freq: "weekly", weekday: 1, priority: "Fleksibel", locked: false, note: "Kolaborasi 3 creator per bulan", cat: "Pertumbuhan" },
      { name: "Tools & Langganan", amount: 500000, freq: "monthly", day: 15, priority: "Fleksibel", locked: false, note: "Shopee, Canva, admin", cat: "Pertumbuhan" },
      { name: "Dana Darurat", amount: 1500000, freq: "monthly", day: 28, priority: "Wajib", locked: false, note: "Top-up rutin 3%", cat: "Cadangan & Investasi" },
      { name: "Belanja Modal (Kamera / Display)", amount: 500000, freq: "quarterly", day: 20, priority: "Wajib (rencana)", locked: false, note: "", cat: "Cadangan & Investasi" },
    ],
  },
  agensi: {
    label: "Agensi Digital",
    omzetHarian: 2333000,
    budget: 50000000,
    minCash: 15000000,
    emergencyNow: 30000000,
    items: [
      { name: "Gaji 4 Tim + BPJS", amount: 20000000, freq: "monthly", day: 25, priority: "Wajib", locked: true, note: "AC, creative, editor, CS", cat: "Operasional Inti" },
      { name: "Sewa Kantor", amount: 4000000, freq: "monthly", day: 1, priority: "Wajib", locked: true, note: "", cat: "Operasional Inti" },
      { name: "Lisensi Tools (Adobe, Figma, AI)", amount: 2000000, freq: "monthly", day: 5, priority: "Wajib", locked: false, note: "", cat: "Operasional Inti" },
      { name: "Server, Hosting, API", amount: 3000000, freq: "monthly", day: 10, priority: "Wajib", locked: false, note: "Termasuk token AI", cat: "Operasional Inti" },
      { name: "Legal, Accounting, Admin", amount: 1000000, freq: "monthly", day: 15, priority: "Wajib", locked: false, note: "", cat: "Operasional Inti" },
      { name: "Iklan Klien & Demand Gen", amount: 5000000, freq: "weekly", weekday: 1, priority: "Fleksibel", locked: false, note: "Reels dan performance ads", cat: "Pertumbuhan" },
      { name: "Freelancer & Kontributor", amount: 9000000, freq: "weekly", weekday: 3, priority: "Fleksibel", locked: false, note: "Editor, voice over, fotografer", cat: "Pertumbuhan" },
      { name: "Transport & Entertain Klien", amount: 2000000, freq: "weekly", weekday: 5, priority: "Fleksibel", locked: false, note: "", cat: "Pertumbuhan" },
      { name: "Dana Darurat", amount: 3000000, freq: "monthly", day: 28, priority: "Wajib", locked: false, note: "Top-up rutin 6%", cat: "Cadangan & Investasi" },
      { name: "Belanja Modal (Kamera, Audio)", amount: 1000000, freq: "quarterly", day: 20, priority: "Wajib (rencana)", locked: false, note: "", cat: "Cadangan & Investasi" },
    ],
  },
};

const LEVELS = [
  { lvl: 0, min: 100, core: 0, growth: 0, modal: 0, emerg: 0, status: "Normal", tone: "ok", text: "Jalankan RPD penuh. Tidak ada pemotongan anggaran." },
  { lvl: 1, min: 85, core: 0, growth: 0.5, modal: 1, emerg: 0, status: "Waspada", tone: "low", text: "Tunda belanja modal 100%, potong iklan 50%, alihkan promosi ke produk terlaris." },
  { lvl: 2, min: 70, core: 0.1, growth: 1, modal: 1, emerg: 0, status: "Krisis", tone: "low", text: "Pause iklan 100%, pembelian bahan 10% lebih hemat, negosiasi ulang diskon supplier." },
  { lvl: 3, min: 50, core: 0.25, growth: 1, modal: 1, emerg: 0.5, status: "Darurat", tone: "bad", text: "Kurangi jam operasional 2 jam per hari, gunakan cuti resmi, renegosiasi sewa jadi cicilan." },
  { lvl: 4, min: 0, core: 0.4, growth: 1, modal: 1, emerg: 1, status: "Survival", tone: "bad", text: "Fokus 3 produk terlaris, tambah jam operasional, aktifkan dana darurat, ajukan pendanaan atau mitra." },
];

const $ = (id) => document.getElementById(id);
const num = (v) => (isFinite(Number(v)) ? Number(v) : 0);
const clone = (o) => JSON.parse(JSON.stringify(o));
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const rp = (v) => "Rp " + Math.round(num(v)).toLocaleString("id-ID");
const rpShort = (v) => {
  const n = Math.abs(num(v));
  const s = num(v) < 0 ? "-" : "";
  if (n >= 1e9) return s + "Rp " + (n / 1e9).toFixed(1).replace(".", ",") + " M";
  if (n >= 1e6) return s + "Rp " + (n / 1e6).toFixed(1).replace(".", ",") + " jt";
  if (n >= 1e3) return s + "Rp " + Math.round(n / 1e3) + " rb";
  return rp(v);
};
const pct = (v, d = 1) => (isFinite(num(v)) ? num(v).toFixed(d).replace(".", ",") + "%" : "0%");
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const signed = (v) => (v >= 0 ? "+" : "-") + rp(Math.abs(v));

let cashInTouched = false;
let state = load() || null;

function defaultState() {
  const p = PRESETS.kopi;
  return {
    bizName: "Kedai Kopi Nusantara",
    bizType: "kopi",
    period: "Juli 2026",
    omzetHarian: p.omzetHarian,
    budget: p.budget,
    minCash: p.minCash,
    cashInWeek: Math.round((p.omzetHarian * 30) / 4),
    emergencyTarget: 0,
    emergencyNow: p.emergencyNow,
    omzetActual: p.omzetHarian,
    items: clone(p.items),
  };
}

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(LS_KEY) || "null");
    if (!s || !Array.isArray(s.items) || !s.items.length) return null;
    s.items.forEach((i) => {
      i.amount = num(i.amount);
      if (typeof i.locked !== "boolean") i.locked = false;
      if (!CATS.includes(i.cat)) i.cat = "Operasional Inti";
      if (!FREQS.some((f) => f.v === i.freq)) i.freq = "monthly";
    });
    return s;
  } catch (e) {
    return null;
  }
}
function save() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
    $("saveStatus").textContent = "Tersimpan lokal " + new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch (e) {
    $("saveStatus").textContent = "Penyimpanan lokal tidak tersedia";
  }
}

const totalAlloc = () => state.items.reduce((s, i) => s + num(i.amount), 0);
const omzetMonthly = () => num(state.omzetHarian) * 30;
const catTotal = (c) => state.items.filter((i) => i.cat === c).reduce((s, i) => s + num(i.amount), 0);
const lockedTotal = () => state.items.filter((i) => i.locked).reduce((s, i) => s + num(i.amount), 0);

function minRunRate() {
  const flexCore = state.items
    .filter((i) => !i.locked && i.priority === "Wajib" && i.cat === "Operasional Inti")
    .reduce((s, i) => s + num(i.amount), 0);
  return lockedTotal() + flexCore * 0.5;
}
const recommendedEmergency = () => Math.round(minRunRate() * 3);

function weekOfDay(d) {
  return d <= 7 ? 1 : d <= 14 ? 2 : d <= 21 ? 3 : 4;
}

function entries() {
  const out = [];
  state.items.forEach((c) => {
    const amt = num(c.amount);
    if (amt <= 0) return;
    const w = clamp(num(c.weekday) || 1, 1, 7);
    const d = clamp(num(c.day) || 1, 1, 28);
    if (c.freq === "weekly") {
      for (let wk = 1; wk <= 4; wk++) out.push({ week: wk, day: (wk - 1) * 7 + w, amt: amt / 4, name: c.name, item: c });
    } else if (c.freq === "biweekly") {
      [1, 3].forEach((wk) => out.push({ week: wk, day: (wk - 1) * 7 + w, amt: amt / 2, name: c.name, item: c }));
    } else if (c.freq === "quarterly") {
      out.push({ week: 3, day: d, amt, name: c.name, item: c, plan: true });
    } else {
      out.push({ week: weekOfDay(d), day: d, amt, name: c.name, item: c });
    }
  });
  return out.sort((a, b) => a.week - b.week || a.day - b.day);
}

function weeklyOut() {
  const ins = entries();
  const weeks = [1, 2, 3, 4].map((w) => ({ week: w, out: 0, in: num(state.cashInWeek), list: ins.filter((e) => e.week === w) }));
  weeks.forEach((w) => (w.out = w.list.reduce((s, e) => s + e.amt, 0)));
  let cum = 0;
  weeks.forEach((w) => {
    w.cum = cum + w.in - w.out;
    cum = w.cum;
  });
  return weeks;
}

function cutShare(item, lv) {
  if (item.locked) return 0;
  if (item.cat === "Pertumbuhan") return lv.growth;
  if (item.cat === "Cadangan & Investasi") return /modal|kamera|alat|display|upgrade/i.test(item.name) ? lv.modal : lv.emerg;
  return lv.core;
}
const savingsAt = (lv) => state.items.reduce((s, i) => s + num(i.amount) * cutShare(i, lv), 0);

function levelFor(actual) {
  const p = (num(actual) / (num(state.omzetHarian) || 1)) * 100;
  return { pct: p, lv: LEVELS.find((l) => p >= l.min) || LEVELS[0] };
}

function renderProfile() {
  $("fBizName").value = state.bizName;
  $("fBizType").value = state.bizType;
  $("fPeriod").value = state.period;
  $("fOmzetHarian").value = state.omzetHarian;
  $("fBudget").value = state.budget;
  $("fMinCash").value = state.minCash;
  $("fCashInWeek").value = state.cashInWeek;
  $("fEmergency").value = state.emergencyTarget;
  $("fEmergencyNow").value = state.emergencyNow;
  $("fOmzetActual").value = state.omzetActual;
  const typeLabel = $("fBizType").selectedOptions.length ? $("fBizType").selectedOptions[0].text : state.bizType;
  $("periodLabel").textContent = typeLabel + " · Periode " + (state.period || "—");
  $("emergencyCalc").textContent =
    "Rekomendasi sistem: biaya minimum operasi " + rp(minRunRate()) + "/bulan x 3 = " + rp(recommendedEmergency()) +
    ". Total " + state.items.length + " komponen.";
}

function renderKpi() {
  const alloc = totalAlloc();
  const budget = num(state.budget);
  const diff = budget - alloc;
  const ratio = alloc ? omzetMonthly() / alloc : 0;
  const growthShare = budget ? (catTotal("Pertumbuhan") / budget) * 100 : 0;
  const lockShare = budget ? (lockedTotal() / budget) * 100 : 0;
  const emergPct = num(state.emergencyTarget) ? clamp((num(state.emergencyNow) / num(state.emergencyTarget)) * 100, 0, 100) : 0;
  const negWeeks = weeklyOut().filter((w) => w.cum < 0).length;
  const margin = omzetMonthly() - alloc;

  const k = [
    { l: "Total Alokasi", v: rpShort(alloc), s: budget ? pct((alloc / budget) * 100) + " dari anggaran" : "anggaran kosong", t: alloc <= budget ? "ok" : "bad" },
    { l: "Selisih vs Anggaran", v: rpShort(diff), s: diff >= 0 ? "masih dalam batas" : "MELEBIHI anggaran", t: diff >= 0 ? "ok" : "bad" },
    { l: "Sisa Kontenjan", v: rpShort(margin), s: "margin " + pct(omzetMonthly() ? (margin / omzetMonthly()) * 100 : 0), t: margin > 0 ? "ok" : "bad" },
    { l: "Rasio Kas", v: ratio.toFixed(2) + "x", s: "alarm di bawah 0,70x", t: ratio >= 1 ? "ok" : ratio >= 0.7 ? "warn" : "bad" },
    { l: "Belanja Fleksibel", v: pct(growthShare), s: "target maksimal 8%", t: growthShare <= 8 ? "ok" : growthShare <= 12 ? "warn" : "bad" },
    { l: "Komponen Terlindungi", v: pct(lockShare), s: "gaji, sewa, utilitas", t: lockShare >= 40 ? "ok" : "warn" },
    { l: "Progres Dana Darurat", v: pct(emergPct, 0), s: rpShort(state.emergencyNow) + " dari " + rpShort(state.emergencyTarget), t: emergPct >= 100 ? "ok" : emergPct >= 50 ? "warn" : "bad" },
    { l: "Minggu Defisit", v: negWeeks + " / 4", s: negWeeks ? "perlu buffer " + rpShort(state.minCash) : "arus kas aman", t: negWeeks ? "bad" : "ok" },
  ];
  $("kpiGrid").innerHTML = k.map((x) => '<div class="kpi ' + x.t + '"><span>' + x.l + "</span><b>" + x.v + "</b><small>" + x.s + "</small></div>").join("");
}

function freqText(it) {
  const f = FREQS.find((x) => x.v === it.freq);
  if (!f) return it.freq;
  if (it.freq === "weekly") return f.t + " (" + WD[clamp(num(it.weekday) || 1, 1, 7) - 1] + ")";
  if (it.freq === "biweekly") return f.t + " (" + WD[clamp(num(it.weekday) || 1, 1, 7) - 1] + ")";
  if (it.freq === "quarterly") return f.t + " (tgl " + num(it.day) + ")";
  return "Bulanan (tgl " + num(it.day) + ")";
}

function renderBreakdown() {
  const base = num(state.budget) || totalAlloc() || 1;
  let html = "";
  CATS.forEach((cat) => {
    const items = state.items.filter((i) => i.cat === cat);
    if (!items.length) return;
    const cls = cat === "Operasional Inti" ? "core" : cat === "Pertumbuhan" ? "growth" : "reserve";
    items.forEach((it) => {
      const i = state.items.indexOf(it);
      const showDay = it.freq === "monthly" || it.freq === "quarterly";
      html +=
        '<tr data-i="' + i + '">' +
        '<td><span class="cat-tag ' + cls + '">' + esc(cat) + "</span></td>" +
        '<td><input type="text" class="name-input" data-k="name" value="' + esc(it.name) + '">' +
        '<input type="text" class="note-input" data-k="note" placeholder="catatan" value="' + esc(it.note || "") + '">' +
        "</td>" +
        '<td class="num-col"><input type="number" class="money-input" data-k="amount" value="' + num(it.amount) + '"></td>' +
        '<td class="num-col pct-cell" data-pct="' + i + '">' + pct((num(it.amount) / base) * 100) + "</td>" +
        '<td><select class="prio-select" data-k="freq">' +
        FREQS.map((f) => '<option value="' + f.v + '"' + (f.v === it.freq ? " selected" : "") + ">" + f.t + "</option>").join("") +
        '</select> <input type="number" class="day-input" data-k="day" min="1" max="28" title="Hari pencairan" value="' +
        (it.freq === "weekly" || it.freq === "biweekly" ? num(it.weekday) || 1 : num(it.day) || 1) + '"' +
        (showDay ? "" : ' style="display:none"') + "></td>" +
        '<td><select class="prio-select" data-k="priority">' +
        PRIORITIES.map((p) => '<option' + (p === it.priority ? " selected" : "") + ">" + p + "</option>").join("") +
        '</select><span class="note-inline">' + (it.locked ? '<span class="pill prot">TERLINDUNGI</span>' : '<span class="pill ' + (it.priority === "Fleksibel" ? "fleksibel" : "wajib") + '">' + esc(it.priority) + "</span>") + "</span></td>" +
        '<td class="no-print cell-actions">' +
        '<button class="lock-btn' + (it.locked ? " on" : "") + '" data-act="lock" title="Cegah pemotongan otomatis">' + (it.locked ? "&#128274;" : "&#128275;") + "</button>" +
        '<button class="row-del" data-act="del" title="Hapus komponen">&times;</button>' +
        "</td></tr>";
    });
    html +=
      '<tr class="subtotal"><td colspan="2">' + esc(cat) + ' <span class="muted">subtotal</span></td>' +
      '<td class="num-col" data-sub="' + esc(cat) + '">' + rp(catTotal(cat)) + "</td>" +
      '<td class="num-col" data-subpct="' + esc(cat) + '">' + pct((catTotal(cat) / base) * 100) + "</td>" +
      '<td colspan="3"></td></tr>';
  });
  $("tbodyBreakdown").innerHTML = html;
  refreshNumbers();
}

function refreshNumbers() {
  const alloc = totalAlloc();
  const base = num(state.budget) || alloc || 1;
  document.querySelectorAll("[data-pct]").forEach((el) => {
    const it = state.items[Number(el.dataset.pct)];
    if (it) el.textContent = pct((num(it.amount) / base) * 100);
  });
  CATS.forEach((c) => {
    const a = document.querySelector('[data-sub="' + CSS.escape(c) + '"]');
    const p = document.querySelector('[data-subpct="' + CSS.escape(c) + '"]');
    if (a) a.textContent = rp(catTotal(c));
    if (p) p.textContent = pct((catTotal(c) / base) * 100);
  });
  $("totalAlloc").textContent = rp(alloc);
  $("totalPct").textContent = pct((alloc / base) * 100);
}

function renderSchedule() {
  const weeks = weeklyOut();
  const max = Math.max(1, ...weeks.flatMap((w) => [w.out, w.in]));
  $("weekChart").innerHTML =
    weeks
      .map(
        (w) =>
          '<div class="ch"><h4>Minggu ' + w.week + "</h4>" +
          '<div class="bars">' +
          '<div class="bar-wrap"><div class="bar out" style="height:' + (w.out / max) * 100 + '%"></div><span class="bar-lbl">Keluar</span></div>' +
          '<div class="bar-wrap"><div class="bar in" style="height:' + (w.in / max) * 100 + '%"></div><span class="bar-lbl">Masuk</span></div>' +
          "</div>" +
          '<div class="ch-legend"><span><i class="o"></i>' + rpShort(w.out) + "</span><span><i class=" + "i" + "></i>" + rpShort(w.in) + "</span></div></div>"
      )
      .join("");

  let html = "";
  weeks.forEach((w) => {
    const delta = w.in - w.out;
    const badge = w.cum < 0 ? '<span class="badge bad">Kurang kas</span>' : delta >= 0 ? '<span class="badge ok">Aman</span>' : '<span class="badge low">Tipis</span>';
    html += '<tr class="week-head"><td colspan="8">Minggu ' + w.week + " &mdash; saldo kumulatif " + signed(w.cum) + "</td></tr>";
    if (!w.list.length) {
      html += '<tr><td class="muted">Tidak ada pencairan</td><td class="num-col muted">-</td><td class="num-col">Rp 0</td><td class="num-col muted">-</td><td class="num-col muted">-</td><td class="num-col muted">-</td><td class="num-col muted">-</td><td>' + badge + "</td></tr>";
    }
    w.list.forEach((e) => {
      html +=
        "<tr><td>" + esc(e.name) + (e.plan ? ' <span class="pill wajib">RENCANA</span>' : "") + "</td>" +
        '<td class="num-col">tgl ' + e.day + "</td>" +
        '<td class="num-col">' + rp(e.amt) + "</td>" +
        '<td class="num-col muted">-</td><td class="num-col muted">-</td><td class="num-col muted">-</td><td class="num-col muted">-</td>' +
        "<td>" + (e.item.locked ? '<span class="pill prot">TERLINDUNGI</span>' : "") + "</td></tr>";
    });
    html +=
      '<tr class="subtotal"><td colspan="3">Subtotal Minggu ' + w.week + "</td>" +
      '<td class="num-col">' + rp(w.out) + "</td>" +
      '<td class="num-col">' + rp(w.in) + "</td>" +
      '<td class="num-col ' + (delta >= 0 ? "pos" : "neg") + '">' + signed(delta) + "</td>" +
      "<td>" + badge + "</td></tr>";
  });
  $("tbodySchedule").innerHTML = html;

  const out = weeks.reduce((s, w) => s + w.out, 0);
  const inc = weeks.reduce((s, w) => s + w.in, 0);
  $("schedOut").textContent = rp(out);
  $("schedIn").textContent = rp(inc);
  $("schedDelta").textContent = signed(inc - out);

  const minCum = Math.min(...weeks.map((w) => w.cum));
  const buffer = num(state.minCash);
  const a = $("schedAlert");
  if (minCum < 0 && buffer < Math.abs(minCum)) {
    a.className = "alert show bad";
    a.innerHTML = "Saldo kas kumulatif berakhir negatif " + rp(Math.abs(minCum)) + ", sedangkan buffer minimum Anda " + rp(buffer) +
      ". <b>Tindakan:</b> geser pencairan gaji ke tanggal 28, tarik kas masuk lebih awal, atau naikkan target cash buffer.";
  } else if (minCum < 0) {
    a.className = "alert show warn";
    a.innerHTML = "Ada minggu defisit (terendah " + rp(Math.abs(minCum)) + ") tetapi masih tertutup buffer " + rp(buffer) +
      ". Jangan biarkan hari payroll menembus kas: pindahkan pencairan fleksibel ke minggu defisit.";
  } else {
    a.className = "alert show ok";
    a.innerHTML = "Arus kas aman sepanjang 4 minggu. Surplus terendah " + rp(minCum) + " &mdash; pertahankan buffer minimum " + rp(buffer) + " di tangan.";
  }
}

function renderSim() {
  const { pct: p, lv } = levelFor(state.omzetActual);
  const badge = $("levelBadge");
  badge.textContent = "L" + lv.lvl + " - " + lv.status + " (" + pct(p, 0) + ")";
  badge.style.color = lv.tone === "ok" ? "var(--accent)" : lv.tone === "low" ? "var(--warn)" : "var(--danger)";
  badge.style.borderColor = lv.tone === "ok" ? "rgba(61,220,151,.4)" : lv.tone === "low" ? "rgba(251,191,36,.4)" : "rgba(251,113,133,.4)";
  $("levelNote").textContent = lv.text;

  const sv = savingsAt(lv);
  const after = totalAlloc() - sv;
  const wkAfter = after / 4;
  const runway = (totalAlloc() / 4) > 0 ? num(state.emergencyNow) / (totalAlloc() / 4) : 0;
  const runwayNow = wkAfter > 0 ? num(state.emergencyNow) / wkAfter : 0;
  const shownRunway = lv.lvl === 0 ? runway : runwayNow;
  const margin = omzetMonthly() - after;

  const cards = [
    { l: "Alokasi Normal", v: rpShort(totalAlloc()), c: "" },
    { l: "Setelah Pemotongan", v: rpShort(after), c: lv.lvl === 0 ? "ok" : "warn" },
    { l: "Penghematan", v: rpShort(sv), c: lv.lvl === 0 ? "" : "ok" },
    { l: "Kas Masuk Bulanan", v: rpShort(omzetMonthly()), c: omzetMonthly() >= after ? "ok" : "bad" },
    { l: "Sisa Kontenjan", v: rpShort(margin), c: margin >= 0 ? "ok" : "bad" },
    { l: "Runway Dana Darurat", v: shownRunway.toFixed(1) + " minggu", c: shownRunway >= 3 ? "ok" : "warn" },
  ];
  $("simResult").innerHTML =
    cards.map((x) => '<div class="sim-card ' + x.c + '"><span>' + x.l + "</span><b>" + x.v + "</b></div>").join("") +
    '<div class="cut-list">' +
    state.items
      .map((i) => {
        const sh = cutShare(i, lv);
        return (
          '<div class="cut-item' + (sh === 0 ? " keep" : "") + '"><span>' + esc(i.name) +
          (i.locked ? ' <span class="pill prot">TERLINDUNGI</span>' : "") + "</span><b>" +
          (sh === 0 ? "tetap" : "-" + rp(num(i.amount) * sh) + " (" + pct(sh * 100, 0) + ")") + "</b></div>"
        );
      })
      .join("") +
    "</div>";

  $("tbodyMatrix").innerHTML = LEVELS.map(
    (l) =>
      '<tr data-lvl="' + l.lvl + '" class="' + (l.lvl === lv.lvl ? "subtotal" : "") + '" title="Klik untuk menyimulasikan level ini">' +
      "<td><b>L" + l.lvl + "</b></td><td>" + (l.min === 100 ? "minimal target" : "minimal " + l.min + "% target") + "</td>" +
      '<td><span class="badge ' + l.tone + '">' + l.status + "</span></td>" +
      "<td>" + l.text + "</td>" +
      '<td class="num-col">' + (l.lvl === 0 ? "-" : rp(savingsAt(l))) + "</td></tr>"
  ).join("");
}

function renderEmergency() {
  const target = num(state.emergencyTarget) || recommendedEmergency();
  const now = num(state.emergencyNow);
  const p = target ? clamp((now / target) * 100, 0, 100) : 0;
  const weekly = totalAlloc() / 4;
  $("erTarget").textContent = rp(target);
  $("erNow").textContent = rp(now);
  $("erPct").textContent = pct(p, 0);
  $("erGapText").textContent = now >= target ? "Target tercapai" : "Kurang " + rp(target - now);
  $("erBar").style.width = p + "%";
  $("erRunway").textContent = weekly > 0 ? (now / weekly).toFixed(1) + " minggu" : "-";
}

function renderKpi2() {
  const alloc = totalAlloc();
  const budget = num(state.budget);
  const weeks = weeklyOut();
  const rows = [
    { k: "Total alokasi tidak melebihi anggaran", t: rpShort(budget), v: rpShort(alloc), st: alloc <= budget ? "ok" : "bad" },
    { k: "Rasio kas (omzet dibagi kas keluar)", t: "minimal 1,00x", v: (alloc ? omzetMonthly() / alloc : 0).toFixed(2) + "x", st: alloc > 0 && omzetMonthly() / alloc >= 1 ? "ok" : alloc > 0 && omzetMonthly() / alloc >= 0.7 ? "low" : "bad" },
    { k: "Porsi belanja fleksibel", t: "maksimal 8%", v: pct(budget ? (catTotal("Pertumbuhan") / budget) * 100 : 0), st: budget > 0 && (catTotal("Pertumbuhan") / budget) * 100 <= 8 ? "ok" : "low" },
    { k: "Dana darurat terkumpul", t: "100%", v: pct(num(state.emergencyTarget) ? (num(state.emergencyNow) / num(state.emergencyTarget)) * 100 : 0, 0), st: num(state.emergencyTarget) > 0 && num(state.emergencyNow) >= num(state.emergencyTarget) ? "ok" : "low" },
    { k: "Saldo kas akhir bulan minimal buffer", t: "minimal " + rpShort(state.minCash), v: rpShort(weeks[3].cum), st: weeks[3].cum >= num(state.minCash) ? "ok" : weeks[3].cum >= 0 ? "low" : "bad" },
    { k: "Porsi komponen terlindungi", t: "minimal 40%", v: pct(budget ? (lockedTotal() / budget) * 100 : 0), st: budget > 0 && (lockedTotal() / budget) * 100 >= 40 ? "ok" : "low" },
  ];
  $("tbodyKpi").innerHTML = rows
    .map((r) => {
      const b = r.st === "ok" ? '<span class="badge ok">Aman</span>' : r.st === "bad" ? '<span class="badge bad">Alarm</span>' : '<span class="badge low">Perhatian</span>';
      return "<tr><td>" + r.k + '</td><td class="num-col">' + r.t + '</td><td class="num-col">' + r.v + "</td><td>" + b + "</td></tr>";
    })
    .join("");
}

function renderDerived() {
  renderKpi();
  renderSchedule();
  renderSim();
  renderEmergency();
  renderKpi2();
}
function renderAll() {
  renderProfile();
  renderBreakdown();
  renderDerived();
  save();
}

function bindField(id, key, isNum) {
  $(id).addEventListener("input", (e) => {
    state[key] = isNum ? num(e.target.value) : e.target.value;
    if (key === "omzetHarian" && !cashInTouched) {
      state.cashInWeek = Math.round((num(state.omzetHarian) * 30) / 4);
      $("fCashInWeek").value = state.cashInWeek;
    }
    renderDerived();
    save();
  });
}

function init() {
  bindField("fBizName", "bizName", false);
  bindField("fPeriod", "period", false);
  bindField("fOmzetHarian", "omzetHarian", true);
  bindField("fBudget", "budget", true);
  bindField("fMinCash", "minCash", true);
  bindField("fEmergency", "emergencyTarget", true);
  bindField("fEmergencyNow", "emergencyNow", true);
  bindField("fOmzetActual", "omzetActual", true);
  $("fCashInWeek").addEventListener("input", (e) => {
    cashInTouched = true;
    state.cashInWeek = num(e.target.value);
    renderDerived();
    save();
  });

  const body = $("tbodyBreakdown");

  body.addEventListener("input", (e) => {
    const t = e.target;
    const k = t.dataset.k;
    if (!k) return;
    const item = state.items[Number(t.closest("tr").dataset.i)];
    if (!item) return;
    if (k === "amount") item.amount = num(t.value);
    else item[k] = t.value;
    refreshNumbers();
    renderDerived();
    save();
  });

  body.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.k !== "freq") return;
    const item = state.items[Number(t.closest("tr").dataset.i)];
    if (!item) return;
    item.freq = t.value;
    const day = t.closest("tr").querySelector('[data-k="day"]');
    if (day) day.style.display = item.freq === "monthly" || item.freq === "quarterly" ? "" : "none";
    renderDerived();
    save();
  });

  body.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-act]");
    if (!b) return;
    const i = Number(b.closest("tr").dataset.i);
    if (b.dataset.act === "lock") state.items[i].locked = !state.items[i].locked;
    if (b.dataset.act === "del") {
      if (!confirm("Hapus komponen " + state.items[i].name + "?")) return;
      state.items.splice(i, 1);
    }
    renderAll();
  });

  $("btnAddRow").addEventListener("click", () => {
    state.items.push({ name: "Komponen Baru", amount: 1000000, freq: "monthly", day: 1, priority: "Fleksibel", locked: false, note: "", cat: "Operasional Inti" });
    renderAll();
  });

  $("tbodyMatrix").addEventListener("click", (e) => {
    const row = e.target.closest("tr[data-lvl]");
    if (!row) return;
    const l = LEVELS[Number(row.dataset.lvl)];
    state.omzetActual = Math.round((num(state.omzetHarian) * l.min) / 100);
    $("fOmzetActual").value = state.omzetActual;
    renderSim();
    save();
  });

  $("fBizType").addEventListener("change", (e) => {
    const key = e.target.value;
    state.bizType = key;
    const p = PRESETS[key];
    if (confirm("Ganti komponen dan asumsi ke template " + p.label + "?")) {
      state.items = clone(p.items);
      state.omzetHarian = p.omzetHarian;
      state.budget = p.budget;
      state.minCash = p.minCash;
      state.emergencyNow = p.emergencyNow;
      state.cashInWeek = Math.round((p.omzetHarian * 30) / 4);
      state.omzetActual = p.omzetHarian;
      cashInTouched = false;
    }
    renderAll();
  });

  $("btnRecalcEmergency").addEventListener("click", () => {
    state.emergencyTarget = recommendedEmergency();
    renderAll();
  });

  $("btnPrint").addEventListener("click", () => window.print());
  $("btnCsv").addEventListener("click", exportCsv);
  $("btnReset").addEventListener("click", () => {
    if (!confirm("Hapus semua data tersimpan dan kembali ke template awal?")) return;
    localStorage.removeItem(LS_KEY);
    cashInTouched = false;
    state = defaultState();
    state.emergencyTarget = recommendedEmergency();
    renderAll();
  });

  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(renderSchedule, 150);
  });
}

function exportCsv() {
  const q = (v) => '"' + String(v ?? "").replace(/"/g, '""') + '"';
  const L = [];
  L.push(q("RENCANA PENGGUNAAN DANA - " + (state.bizName || "")));
  L.push([q("Periode"), q(state.period)].join(","));
  L.push([q("Omzet harian"), q(rp(state.omzetHarian)), q("Omzet bulanan"), q(rp(omzetMonthly()))].join(","));
  L.push([q("Anggaran kas keluar"), q(rp(state.budget)), q("Buffer minimum"), q(rp(state.minCash))].join(","));
  L.push([q("Dana darurat"), q(rp(state.emergencyNow) + " / " + rp(state.emergencyTarget))].join(","));
  L.push("");
  L.push([q("1. BREAKDOWN RPD")].join(","));
  L.push([q("Kategori"), q("Rincian Komponen"), q("Alokasi Nominal (Rp)"), q("Persentase (%)"), q("Frekuensi"), q("Prioritas"), q("Terlindungi"), q("Catatan")].join(","));
  const base = num(state.budget) || totalAlloc() || 1;
  CATS.forEach((cat) => {
    state.items.filter((i) => i.cat === cat).forEach((i) => {
      L.push([q(cat), q(i.name), q(num(i.amount)), q(((num(i.amount) / base) * 100).toFixed(2)), q(freqText(i)), q(i.priority), q(i.locked ? "Ya" : "Tidak"), q(i.note)].join(","));
    });
    L.push([q(""), q("Subtotal " + cat), q(catTotal(cat)), q(((catTotal(cat) / base) * 100).toFixed(2)), q(""), q(""), q(""), q("")].join(","));
  });
  L.push([q(""), q("TOTAL"), q(totalAlloc()), q(((totalAlloc() / base) * 100).toFixed(2)), q(""), q(""), q(""), q("")].join(","));
  L.push("");
  L.push([q("2. JADWAL PENCAIRAN KAS")].join(","));
  L.push([q("Minggu"), q("Rincian"), q("Tanggal"), q("Nominal (Rp)"), q("Total Keluar"), q("Kas Masuk"), q("Selisih"), q("Saldo Kumulatif")].join(","));
  weeklyOut().forEach((w) => {
    w.list.forEach((e) => L.push([q("Minggu " + w.week), q(e.name), q("tgl " + e.day), q(Math.round(e.amt)), q(""), q(""), q(""), q("")].join(",")));
    L.push([q(""), q("Subtotal Minggu " + w.week), q(""), q(Math.round(w.out)), q(Math.round(w.out)), q(Math.round(w.in)), q(Math.round(w.in - w.out)), q(Math.round(w.cum))].join(","));
  });
  L.push("");
  L.push([q("3. MATRIKS MITIGASI DARURAT")].join(","));
  L.push([q("Level"), q("Omzet Harian"), q("Status"), q("Penghematan (Rp)"), q("Sisa Kontenjan"), q("Tindakan")].join(","));
  LEVELS.forEach((l) => {
    const after = totalAlloc() - savingsAt(l);
    L.push([q("L" + l.lvl), q(l.min === 100 ? "minimal target" : "minimal " + l.min + "% target"), q(l.status), q(Math.round(savingsAt(l))), q(Math.round(omzetMonthly() - after)), q(l.text)].join(","));
  });
  L.push("");
  L.push([q("4. DANA DARURAT")].join(","));
  L.push([q("Target 3 bulan"), q(rp(state.emergencyTarget)), q("Terkumpul"), q(rp(state.emergencyNow)), q("Progres"), q(pct((num(state.emergencyNow) / (num(state.emergencyTarget) || 1)) * 100, 0))].join(","));

  const blob = new Blob(["\ufeff" + L.join("\r\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "RPD-" + (state.bizType || "bisnis") + "-" + String(state.period || "periode").replace(/\s+/g, "-") + ".csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

if (!state) state = defaultState();
if (!num(state.emergencyTarget)) state.emergencyTarget = recommendedEmergency();
init();
renderAll();