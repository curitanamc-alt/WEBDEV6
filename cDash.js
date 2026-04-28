// ── Date Greeting ──
const d = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
document.getElementById('greetDate').textContent =
  `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · LabCenter Dashboard`;

// ── Shared Data Variables ──
const completedData  = [142, 168, 155];
const processingData = [38, 45, 41];
const pendingData    = [24, 19, 28];
const urgentCount    = 3;

// ── Stat Cards ──
document.getElementById('totalReq').textContent       = completedData[2] + processingData[2] + pendingData[2];
document.getElementById('pendingQ').textContent       = pendingData[2];
document.getElementById('completedToday').textContent = completedData[2];
document.getElementById('urgentCount').textContent    = urgentCount;

// ── Modal helpers ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
});

// ── Nav active state ──
function setActive(el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
}

// ── Toast notifications ──
function showToast(msg, type = 'info') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}

// ── Mark all notifications read ──
function markAllRead() {
  document.getElementById('notifBadge').style.display = 'none';
  closeModal('notif-modal');
  showToast('All notifications cleared.', 'success');
}

// ── Catalog filter (stub) ──
function filterCatalog(val) {}

// ── Charts ──
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['CBC', 'Urinalysis', 'Lipid Panel', 'Blood Glucose', 'Thyroid (TSH)'],
    datasets: [{
      data: [38, 22, 17, 14, 9],
      backgroundColor: ['#4a6fa5', '#7aa3e5', '#a8c2e0', '#c9d9f0', '#5d77a6'],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          font: { size: 11, family: "'DM Sans',sans-serif" },
          color: '#4a5e7a',
          boxWidth: 12,
          padding: 10
        }
      }
    }
  }
});

const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Completed',  data: completedData,  backgroundColor: '#4a6fa5', borderRadius: 5, barPercentage: 0.4 },
      { label: 'Processing', data: processingData, backgroundColor: '#a8c2e0', borderRadius: 5, barPercentage: 0.4 },
      { label: 'Pending',    data: pendingData,    backgroundColor: '#e0c97a', borderRadius: 5, barPercentage: 0.4 }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 11, family: "'DM Sans',sans-serif" },
          color: '#4a5e7a',
          boxWidth: 10,
          padding: 12
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family: "'DM Sans'" }, color: '#8a9ab8' } },
      y: { grid: { color: '#eef0f5' }, ticks: { font: { family: "'DM Sans'" }, color: '#8a9ab8' }, beginAtZero: true }
    }
  }
});